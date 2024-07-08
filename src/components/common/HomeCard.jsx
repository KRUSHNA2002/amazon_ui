import { useNavigate } from 'react-router-dom';
import img1 from '../../../src/assets/Bgslider/amg-1.jpg';
import img2 from '../../../src/assets/Bgslider/amg-3.jpg';
import img3 from '../../../src/assets/slider/watch.webp';
import img4 from '../../../src/assets/slider/fan.webp';
import img5 from '../../../src/assets/slider/sand-maker.webp';
import img6 from '../../../src/assets/slider/headphone.webp';
import img7 from '../../../src/assets/slider/air-bud.webp';

function HomeCard() {
    const navigate = useNavigate();

    const products = [
        {
            title: "Up to 50% off | International brands",
            items: [
                { img: img1, name: "LCD" },
                { img: img6, name: "Headphone" },
                { img: img2, name: "Air Cooler" },
                { img: img3, name: "Watch" }
            ]
        },
        {
            title: "Customers’ Most-Loved Fashion for you",
            items: [
                { img: img1, name: "LCD" },
                { img: img5, name: "Sand Maker" },
                { img: img2, name: "Air Cooler" },
                { img: img3, name: "Watch" }
            ]
        },
        {
            title: "Appliances for your home | Up to 55% off",
            items: [
                { img: img1, name: "LCD" },
                { img: img7, name: "Air Bud" },
                { img: img6, name: "Headphone" },
                { img: img2, name: "Air Cooler" }
            ]
        },
        {
            title: "Automotive essentials | Up to 60% off",
            items: [
                { img: img4, name: "Fan" },
                { img: img1, name: "LCD" },
                { img: img2, name: "Air Cooler" },
                { img: img6, name: "Headphone" }
            ]
        }
    ];

    return (
        <div className="container-fluid" style={{ position: 'relative', top: '-60px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 sm:grid-cols-1 gap-4">
                {products.map((product, index) => (
                    <div key={index} className='bg-white shadow-md'>
                        <h1 className='p-3 text-2xl font-bold'>{product.title}</h1>
                        <div className="container">
                            <div className="grid grid-cols-2 gap-3">
                                {product.items.map((item, idx) => (
                                    <div key={idx}>
                                        <img src={item.img} alt={item.name} className='h-28 w-full' />
                                        <h1 className='text-gray-800 mt-2'>{item.name}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='text-center'>
                            <button
                                className='text-blue-800 p-4'
                                onClick={() => { navigate('/multidetails'); window.scrollTo(0, 0); }}
                            >
                                See more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeCard;
