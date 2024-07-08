import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
    {
        url:'https://m.media-amazon.com/images/I/418lXvhdnrL.jpg',
        name: 'MRF Bat',
        paragraph: 'Extra 15% Off Now',
        brand: 'Sport',
        desc: "jAWHDIRDMNwuqi    nmwfrbjhrknd w wejk krwerkh  qhrk   k e jw kwe  hkl     bekl  ewf b",
        price: '5000',
        discount: '90',
        rating: '4.5',
        id: 1,


    },
    
    {
        url: 'https://www.gonoise.com/cdn/shop/files/5_e4fa5b99-a083-498f-809a-977a94826ad2.png?v=1694430241',
        name: 'Noise Buds',
        paragraph: 'Extra 12% Off Now',
        brand: 'Electronics',
        desc: "jAWHDIRDMNwuqi    nmwfrbjhrknd w wejk krwerkh  qhrk   k e jw kwe  hkl     bekl  ewf b",
        price: '1199',
        discount: '90',
        rating: '4.5',
        id: 2,

    },
    {
        url: 'https://www.jiomart.com/images/product/original/rv6hfjzyhw/wistec-750w-electric-sandwich-maker-toaster-for-open-and-close-grilling-black-product-images-orv6hfjzyhw-p599510248-0-202303171502.jpg?im=Resize=(1000,1000)',
        name: 'Sandwhich maker',
        paragraph: 'Extra 18% Off Now',
        brand: 'Electronics',
        desc: "jAWHDIRDMNwuqi    nmwfrbjhrknd w wejk krwerkh  qhrk   k e jw kwe  hkl     bekl  ewf b",
        price: '2999',
        discount: '90',
        rating: '4.5',
        id: 3,

    },
    {
        url:'https://www.venushomeappliances.com/storage/app/product/6e4473c0-1c84-11ee-9e7e-c778ba8f1c14/20230707060124adorna-image-0.png',
        name: 'Fan',
        paragraph: 'Extra 14% Off Now',
        brand: 'Electronics',
        desc: "jAWHDIRDMNwuqi    nmwfrbjhrknd w wejk krwerkh  qhrk   k e jw kwe  hkl     bekl  ewf b",
        price: '1590',
        discount: '90',
        rating: '4.5',
        id: 4,

    },
    {
        url: 'https://img0.junaroad.com/uiproducts/18689620/zoom_0-1669009918.jpg',
        name: 'Watch',
        paragraph: 'Extra 15% Off Now',
        brand: 'Electronics',
        desc: "jAWHDIRDMNwuqi    nmwfrbjhrknd w wejk krwerkh  qhrk   k e jw kwe  hkl     bekl  ewf b",
        price: '9999',
        discount: '90',
        rating: '4.5',
        id: 5,

    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbA_kjwXkMCFvGjbskZ3q4_AHoetKi_sMFZATuAGsxFy8NCRT0pHvolDtepZmvic9_wq0&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbA_kjwXkMCFvGjbskZ3q4_AHoetKi_sMFZATuAGsxFy8NCRT0pHvolDtepZmvic9_wq0&usqp=CAU',
        name: 'Infinix Smarrtphone',
        paragraph: 'Extra 35% Off Now',
        brand: 'Electronics',
        desc: "jAWHDIRDMNwuqi    nmwfrbjhrknd w wejk krwerkh  qhrk   k e jw kwe  hkl     bekl  ewf b",
        price: '24999',
        discount: '90',
        rating: '4.5',
        id: 6,

    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedpixA2l6pm3tQdsqUWQqz2591V0ABWJPVQ&s',
        name: 'Iron',
        paragraph: 'Extra 17% Off Now',
        brand: 'Electronics',
        desc: "jAWHDIRDMNwuqi    nmwfrbjhrknd w wejk krwerkh  qhrk   k e jw kwe  hkl     bekl  ewf b",
        price: '999',
        discount: '90',
        rating: '4.5',
        id: 7,

    },
    {
        url: 'https://5.imimg.com/data5/SELLER/Default/2023/8/337686978/TA/CN/WK/14357089/mdr-ex150ap-sony-microphone-earbuds-500x500.jpg',
        name: 'boat air-bud',
        paragraph: 'Extra 28% Off Now',
        brand: 'Electronics',
        desc: "jAWHDIRDMNwuqi    nmwfrbjhrknd w wejk krwerkh  qhrk   k e jw kwe  hkl     bekl  ewf b",
        price: '1299',
        discount: '90',
        rating: '4.5',
        id: 8,

    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8I8ELIo3v5ansGhpR-DRTQwePZ2ej_Mi_SebGpIeVtN8Z7M7bXe1BYpcwm_XZN5DeiE&usqp=CAU',
        name: 'earrings',
        paragraph: 'Extra 56% Off Now',
        brand: 'wearing',
        desc: "jAWHDIRDMNwuqi    nmwfrbjhrknd w wejk krwerkh  qhrk   k e jw kwe  hkl     bekl  ewf b",
        price: '599',
        discount: '90',
        rating: '4.5',
        id: 9,

    },
    {
        url: 'https://global.caremebd.com/cdn/shop/products/24_c3e99a3f-e238-4af8-8efc-e07237ed0565.png?v=1671512807',
        name: 'jeans',
        paragraph: 'Extra 20% Off Now',
        brand: 'denight light',
        desc: "jAWHDIRDMNwuqi    nmwfrbjhrknd w wejk krwerkh  qhrk   k e jw kwe  hkl     bekl  ewf b",
        price: '1299',
        discount: '90',
        rating: '4.5',
        id: 10,

    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfHK5b80w5H8fx_RpY4IXyp8c198AQNYibeeyP_ficyn1yafokdPe1l5g9prC-kRgpg8&usqp=CAU',
        name: 'hand bag',
        paragraph: 'Extra 21% Off Now',
        brand: 'golden swag',
        desc: "jAWHDIRDMNwuqi    nmwfrbjhrknd w wejk krwerkh  qhrk   k e jw kwe  hkl     bekl  ewf b",
        price: '3999',
        discount: '90',
        rating: '4.5',
        id: 11,

    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDk4qCtM4AoSgbUju1yEwLw7CvcvlUsfXe8w&s',
        name: 'Shooes',
        paragraph: 'Extra 22% Off Now',
        brand: 'Addidas',
        desc: "jAWHDIRDMNwuqi    nmwfrbjhrknd w wejk krwerkh  qhrk   k e jw kwe  hkl     bekl  ewf b",
        price: '11999',
        discount: '90',
        rating: '4.5',
        id: 12,

    },
    // Add more images to the array
];

const Slider = () => {
    const [visibleImages, setVisibleImages] = useState(images);
    const [transition, setTransition] = useState(true);
    const [time,settime]=useState('');
    const intervalRef = useRef(null);
    const navigate = useNavigate();

    const navigateToNextPage = (image) => {

        navigate('/addtocart', {
            state: {
                imageData: image,
            },
        });
        window.scrollTo(0,0) ;
    };

    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 3000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startAutoSlide();
        timechange();
        return () => stopAutoSlide();
    }, []);

    const nextSlide = () => {
        setTransition(true);
        setVisibleImages((prevImages) => {
            const [firstImage, ...restImages] = prevImages;
            return [...restImages, firstImage];
        });
    };

    const prevSlide = () => {
        setTransition(true);
        setVisibleImages((prevImages) => {
            const lastImage = prevImages[prevImages.length - 1];
            return [lastImage, ...prevImages.slice(0, -1)];
        });
    };

    const handleTransitionEnd = () => {
        setTransition(false);
    };

    const timechange=()=>{
        setInterval(()=>{
            var time=new Date();
            settime(time.toLocaleTimeString());
        },1000)
    }

    const viewall=()=>{

        navigate('/multidetails');
        window.scroll(0,0);
    }

    return (
        <div className="container-fluid p-2" style={{ position:'relative', top:'-50px'}}  >
            <div className="bg-white p-4 rounded shadow-sm">
                <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 p-2  ">
                    <div className='text-2xl font-bold offer-heading'>
                        Offers for todays up to <span className='text-green-500'>60%</span> Off 
                    </div>
                    <div className='text-end'>
                        <button className='bg-blue-400 text-white ps-4 pe-4 p-2 rounded viewall hover:bg-blue-500 ' onClick={viewall} >VIEW ALL</button>
                    </div>
                </div>
                <div className="relative w-full h-auto overflow-hidden p-4">
                    <div
                        className={`flex ${transition ? 'transition-transform duration-500' : ''}`}
                        style={{ transform: `translateX(-10%)` }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {visibleImages.map((image, index) => (
                            <div key={index} className="flex-shrink-0 slider w-1/10" onClick={() => navigateToNextPage(image)}>
                                <img src={image.url} alt={image.name} className="w-full h-52" />
                                <div className="card-content">
                                    <h1 className="p-2 font-bold text-center name">{image.name}</h1>
                                    <span className=" text-green-600 para">{image.paragraph}</span>
                                    <h2 className="p-2 text-gay-600 brand">{image.brand}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-slate-500 border ms-1 shadow-lg hover:bg-gray-400 rounded  text-white px-2 py-4"
                        onClick={prevSlide}
                        
                    >
                        <i className="fa fa-arrow-left text-white pt-2 pb-2"></i>
                    </button>
                    <button
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-slate-500 border me-1 shadow-lg hover:bg-gray-400 rounded  text-white px-2 py-4"
                        onClick={nextSlide}
                        
                    >
                        <i className="fa fa-arrow-right text-white pt-2 pb-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;