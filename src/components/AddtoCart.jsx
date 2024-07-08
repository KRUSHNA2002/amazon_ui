import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Slider from './Slider';

const AddtoCart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const imageData = location.state.imageData;

  const handleAddToCart = () => {

      const newdata=JSON.parse(localStorage.getItem("alldata"))|| [];
      const newCart = [...newdata, imageData];
      localStorage.setItem("alldata",JSON.stringify(newCart));

      navigate('/cart');
   
  };
  return (
    <>

      <div className="container-fluid">
        <div className="grid grid-cols-12 p-6 ">
          <div className=' p-4 col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12'>
            <img src={imageData.url} alt="" className='col-span-4' style={{ height: '400px', width: '100%' }} />
          </div>
          <div className='p-6 col-span-12 lg:col-span-8 md:col-span-8 sm:col-span-12 '>
            <h1 className='font-bold text-3xl mt-8'>{imageData.name}</h1>
            <h1 className='text-xl mt-2'>{imageData.desc}</h1>
            <p className='text-xl font-bold mt-2'>Price: &#8377; {imageData.price}</p>
            <p className='text-green-500 mt-2'>{imageData.paragraph}</p>
            <p className='mt-2 text-lg '>Rating: {imageData.rating}</p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-4 '>
              <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 mt-4 rounded' onClick={handleAddToCart}>Add Cart</button>
              <button
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 mt-4 rounded'
                onClick={() => {
                  navigate('/');
                }}
              >
                Back
              </button>

            </div>
          </div>
        </div>
        <div>
          <Slider />
        </div>
      </div>



    </>
  )
}

export default AddtoCart
