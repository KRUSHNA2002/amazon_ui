import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

const PlaceOrder2 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { order, total } = location.state;
    const [customerName, setCustomerName] = useState('');
    const [customerMobile, setCustomerMobile] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    useEffect(() => {
        const customerNameInput = document.querySelector('input[name="customerName"]');
        if (customerNameInput) {
            setCustomerName(customerNameInput.value);
        }

        const customerMobileInput = document.querySelector('input[name="customerMobile"]');
        if (customerMobileInput) {
            setCustomerMobile(customerMobileInput.value);
        }

        const customerEmailInput = document.querySelector('input[name="customeremail"]');
        if (customerEmailInput) {
            setCustomerEmail(customerEmailInput.value);
        }

        const customerAddressInput = document.querySelector('input[name="address"]');
        if (customerAddressInput) {
            setCustomerAddress(customerAddressInput.value);
        }

        const paymentMethodInput = document.querySelector('input[name="paymentMethod"]:checked');
        if (paymentMethodInput) {
            setPaymentMethod(paymentMethodInput.value);
        }
    }, []);

    const handleDownloadPdf = () => {
        const doc = new jsPDF();

        // Set font and font size
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");

        // Add company logo and title
        doc.text("KAP-CD Company", 70, 20);
        doc.setFontSize(14);
        doc.text("Billing Invoice", 80, 30);

        // Add order details
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text(`Order Date: ${new Date().toLocaleDateString()}`, 160, 50);
        doc.text(`Order Number: #${Math.floor(Math.random() * 100000)}`, 160, 60);
        doc.text(`Customer Name: ${customerName}`, 15, 75);
        doc.text(`Customer Mobile: ${customerMobile}`, 15, 85);
        doc.text(`Customer Email: ${customerEmail}`, 15, 95);
        doc.text(`Customer Address: ${customerAddress}`, 15, 105);

        // Add product details
        doc.text("Product Details:", 15, 120);
        doc.text(`--------------------------------------------`, 15, 125);
        order.forEach((item, index) => {
            const yPosition = 145 + index * 20;
            doc.text(`Product Name: ${item.name}`, 15, yPosition);
            doc.text(`Price: ${item.price.toFixed(2)}`, 15, yPosition + 10);
            doc.text(`Quantity: ${item.quantity}`, 15, yPosition + 20);
        });
        doc.text(`--------------------------------------------`, 15, 135 + order.length * 20);
        doc.text(`Total: ${total.toFixed(2)}`, 15, 145 + order.length * 20);

        // Add payment method
        doc.text("Payment Method:", 15, 165 + order.length * 20);
        doc.text(`---------------------------------------------`, 15, 170 + order.length * 20);
        doc.text(` ${paymentMethod}`, 15, 177 + order.length * 20);

        // Add footer
        doc.setFontSize(11);
        doc.text("Thank you for your Shopping!", 85, 230 + order.length * 20);
        doc.text("KAP-CD CEO", 170, 240 + order.length * 20);
        doc.text("Krushna Waghumbare", 164, 250 + order.length * 20);

        // Output PDF
        const pdfBlob = doc.output('blob');
        const url = URL.createObjectURL(pdfBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'order_invoice.pdf';
        a.click();
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        // Call API or perform action to place order
        alert('Order placed successfully!');
        // handleDownloadPdf();
        navigate('/');
    };

    const goback = () => {
        navigate('/cart');
    };

    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <h1 className="text-3xl font-bold mb-4">Place Order</h1>
            <div className="flex flex-wrap -mx-4">
                {/* Order Summary */}
                <div className="w-full p-4">
                    <h2 className="text-2xl font-bold mb-2">Order Summary</h2>
                    {order.map((item, index) => (
                        <div key={index} className="flex flex-wrap mb-4 border border-gray-200 rounded-lg p-4">
                            <div className="w-full md:w-5/12 lg:w-5/12 p-2">
                                <img src={item.url} alt={item.name} className="w-full h-72 object-contain mb-4" />
                            </div>
                            <div className="w-full md:w-7/12 lg:w-7/12 p-3">
                                <h1 className='text-center text-2xl' >Details</h1>
                                <h2 className="text-xl font-bold mb-2 mt-2">{item.name}</h2>
                                <p className="text-gray-600 mb-2 mt-2">{item.desc}</p>
                                <p className="text-lg font-bold mb-2 mt-2">Price: ₹ {item.price.toFixed(2)}</p>
                                <p className="text-lg font-bold mb-2 mt-2">Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                    <p className="text-xl text-end font-bold mt-4 p-3 ">Total: ₹ {total.toFixed(0)}</p>
                </div>
                {/* Customer Details Form */}
                <div className="w-full p-4">
                    <h1 className='text-2xl font-bold mb-4'>Customer Details:</h1>
                    <form onSubmit={handlePlaceOrder}>
                        <div className='grid grid-cols-12 gap-3'>
                            <div className='col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12'>
                                <input
                                    type="text"
                                    placeholder='Enter Your Name'
                                    className='form-control'
                                    name="customerName"
                                    onChange={(e) => setCustomerName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12'>
                                <input
                                    type="text"
                                    placeholder='Enter Your Mobile'
                                    name='customerMobile'
                                    className='form-control'
                                    onChange={(e) => setCustomerMobile(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12'>
                                <input
                                    type="text"
                                    placeholder='Enter Your Email'
                                    name='customeremail'
                                    className='form-control'
                                    onChange={(e) => setCustomerEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12'>
                                <input
                                    type="text"
                                    placeholder='Enter Your Alternate Mobile Number'
                                    className='form-control'
                                    required
                                />
                            </div>
                            <div className='col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12'>
                                <input
                                    type="text"
                                    placeholder='Enter Your Address'
                                    name='address'
                                    className='form-control'
                                    onChange={(e) => setCustomerAddress(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12'>
                                <input
                                    type="text"
                                    placeholder='Enter Your State'
                                    className='form-control'
                                    required
                                />
                            </div>
                            <div className='col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12'>
                                <input
                                    type="text"
                                    placeholder='Enter Your Country'
                                    className='form-control'
                                    required
                                />
                            </div>
                            <div className='col-span-12'>
                                <h1 className='font-bold text-2xl mt-2'>Payment Method:</h1>
                                <div className='form-check'>
                                    <input
                                        type="radio"
                                        id='cod'
                                        name="paymentMethod"
                                        value='Cash On Delivery'
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label htmlFor='cod' className='ml-2'>Cash On Delivery</label>
                                </div>
                                <div className='form-check'>
                                    <input
                                        type="radio"
                                        id='upi'
                                        name="paymentMethod"
                                        value='UPI'
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label htmlFor='upi' className='ml-2'>UPI</label>
                                </div>
                                <div className='form-check'>
                                    <input
                                        type="radio"
                                        id='card'
                                        name="paymentMethod"
                                        value='Card Payment'
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label htmlFor='card' className='ml-2'>Card Payment</label>
                                </div>
                                <div className='form-check'>
                                    <input
                                        type="radio"
                                        id='netbanking'
                                        name="paymentMethod"
                                        value='Net Banking'
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label htmlFor='netbanking' className='ml-2'>Net Banking</label>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end mt-4'>
                            <button type="submit" className='btn btn-primary'>Place Order</button>
                            <button type="button" onClick={goback} className='btn btn-secondary ml-2'>Go Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder2;
