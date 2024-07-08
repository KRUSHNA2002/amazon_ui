import { useNavigate } from 'react-router-dom';

const products = [

    {
        id: 13,
        name: 'Basic Tee',
        url: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        paragraph: 'Extra 15% Off Now',
        desc: "jAWHDIRDMNwuqi    nmwfrbjhrknd w wejk krwerkh  qhrk   k e jw kwe  hkl     bekl  ewf b",
        brand: 'Sport',
        rating: '4.5',
        discount: '10',
        price: '350',
        color: 'Black',
    },
    {
        url: 'https://m.media-amazon.com/images/I/418lXvhdnrL.jpg',
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
        url: 'https://www.venushomeappliances.com/storage/app/product/6e4473c0-1c84-11ee-9e7e-c778ba8f1c14/20230707060124adorna-image-0.png',
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
        price: '21999',
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
]

export default function MultiDetails() {
    const navigate = useNavigate();

    const navigateToNextPage = (image) => {

        navigate('/addtocart', {
            state: {
                imageData: image,
            },
        });
        window.scrollTo(0, 0);
    };
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 pt-16 pb-0 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Customers also purchased</h2>
                <hr />
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((image) => (
                        <div key={image.id} className="group relative" onClick={() => navigateToNextPage(image)} >
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={image.url}
                                    alt={image.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-space-between gap-8 p-2">
                                <div>
                                    <h3 className="text-xl text-gray-900">
                                        {image.name}
                                    </h3>

                                </div>
                                <p className="text-xl font-medium text-gray-900">&#8377; {image.price}</p>

                            </div>
                        </div>
                    ))}
                </div>
                <div className='p-2 text-center' >
                    <button className='hover:text-blue-500 mt-2 p-4   text-xl ' onClick={() => navigate('/')} >Back To Home</button>
                </div>
            </div>
        </div>
    )
}