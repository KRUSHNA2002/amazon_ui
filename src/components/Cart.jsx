import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [prices, setPrices] = useState({});
    const [discount, setDiscount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/products/${id}`);
            const newData = products.filter(item => item.id !== id);
            setProducts(newData);
            localStorage.setItem('alldata', JSON.stringify(newData));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleBuyNow = (id) => {
        const selectedItem = products.find((item) => item.id === id);
        if (selectedItem) {
            const updatedPrice = prices[selectedItem.id] || selectedItem.price;
            const quantity = prices[selectedItem.id] ? updatedPrice / selectedItem.price : 1;
            navigate('/placeorder', { state: { ...selectedItem, price: updatedPrice, quantity } });
        } else {
            console.log('No item found with id:', id);
        }
    };

    const handleBuyAll = () => {
        const totalOrder = products.map(item => {
            const updatedPrice = prices[item.id] || item.price;
            const quantity = prices[item.id] ? updatedPrice / item.price : 1;
            return { ...item, price: updatedPrice, quantity };
        });
        const totalPrice = getTotalPrice();
        navigate('/placeorders', { state: { order: totalOrder, total: totalPrice } });
    };


    const handleQuantityUpdate = (item, quantity) => {
        const updatedPrice = item.price * quantity;
        setPrices({ ...prices, [item.id]: updatedPrice });
    };

    const getTotalPrice = () => {
        const total = products.reduce((total, item) => {
            const itemPrice = prices[item.id] || item.price;
            return total + itemPrice;
        }, 0);
        return total - (total * (discount / 100));
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className='container mx-auto mt-8'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 lg:col-span-8'>
                    <h1 className='text-3xl font-bold mb-4 mt-4'>Shopping Cart</h1>
                    <hr />
                    <div className="overflow-y-auto max-h-screen">
                        <ul>
                            {paginatedProducts.map((item, index) => (
                                <div className="bg-white shadow-md p-4 mb-4" key={index}>
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12">
                                            <img src={item.url} alt="" className='h-72 w-full rounded' />
                                        </div>
                                        <div className="col-span-12 lg:col-span-8 md:col-span-8 sm:col-span-12">
                                            <h2 className='font-bold text-2xl mt-2'>{item.name}</h2>
                                            <p className='text-xl mt-2'>{item.desc}</p>
                                            <p className='text-xl font-bold mt-2'>Price: &#8377; {prices[item.id] || item.price}</p>
                                            <div>
                                                <label>Qty : { }</label>
                                                <QuantityDropdown item={item} updatePrice={(quantity) => handleQuantityUpdate(item, quantity)} />
                                            </div>
                                            <p className='text-xl mt-2 text-green-400'>Offer now &#8377; {item.discount}% off</p>
                                            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-2 mt-2'>
                                                <div className='p-2'>
                                                    <button className='bg-orange-500 p-2 rounded w-full text-xl' onClick={() => handleDelete(item.id)}>Remove</button>
                                                </div>
                                                <div className='p-2'>
                                                    <button className='bg-green-500 p-2 rounded w-full text-xl' onClick={() => handleBuyNow(item.id)}>Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ul>
                        <div className="flex justify-center mt-4 mb-3 ">
                            <button
                                className="px-4 py-2 mx-2 bg-gray-200 rounded"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <button
                                className="px-4 py-2 mx-2 bg-gray-200 rounded"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-4 mt-5'>
                    <h2 className='text-2xl text-center font-bold mb-4 mt-10'>Order Summary</h2>
                    <div className='bg-white shadow-md h-96 p-4'>
                        <p className='text-xl text-center font-bold'>Total Price: &#8377; {getTotalPrice()}</p>
                        <div className='mt-4'>
                            <label className='text-xl'>Discount (%): </label>
                            <input
                                type="number"
                                value={discount}
                                onChange={(e) => setDiscount(Number(e.target.value))}
                                min="0"
                                max="100"
                                className='border border-gray-300 p-2 rounded w-full'
                                placeholder="Enter discount percentage"
                            />
                        </div>
                        <div className='mt-4'>
                            <button className='bg-blue-500 p-2 rounded w-full text-xl text-white' onClick={handleBuyAll}>Buy All</button>
                        </div>
                        <div className='text-center mb-5 mt-4'>
                            <button className='btn btn-outline-primary hover:text-white mt-2 p-2 text-xl' onClick={() => navigate('/')}>Back To Home</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

const QuantityDropdown = ({ item, updatePrice }) => {
    const [quantity, setQuantity] = useState(1);
    const [isCustomQuantity, setIsCustomQuantity] = useState(false);

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        if (value === 'custom') {
            setIsCustomQuantity(true);
        } else {
            setQuantity(value);
            updatePrice(value);
        }
    };

    const handleCustomQuantityChange = (e) => {
        setQuantity(e.target.value);
        updatePrice(e.target.value);
    };

    return (
        <>
            {isCustomQuantity ? (
                <input
                    type="number"
                    value={quantity}
                    onChange={handleCustomQuantityChange}
                    min="1"
                    placeholder="Enter quantity"
                    className='mx-2 ps-3'
                    style={{
                        width: '70px',
                        marginRight: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '5px',
                    }}
                />
            ) : (
                <select value={quantity} className='mx-4 p-2 w-14' onChange={handleQuantityChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="custom">Enter Your Qty</option>
                </select>
            )}
        </>
    );
};

export default Cart;
