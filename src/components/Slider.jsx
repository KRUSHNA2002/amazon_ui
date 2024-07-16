import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import  images from '../images';

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