import Slider from '../Slider'
import img1 from '../../../src/assets/Bgslider/amg-1.jpg';
import img2 from '../../../src/assets/Bgslider/amg-3.jpg';

const SliderDivide = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-9 md:col-9 sm:col-span-12 col-span-12 ">
                        <div className='mt-20'>
                            <Slider />
                        </div>
                    </div>
                    <div className="lg:col-span-3 md:col-span-3 sm:col-span-12 col-span-12 mt-9">
                        <div className=' bg-white'>
                            <h1 className='p-3 text-2xl font-bold text-center'>Name of the offer</h1>
                            <div className="container " >
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <img src={img1} alt="" className='h-28 w-100' />
                                        <h1 className='text-gray-400 mt-2'>Lcd</h1>
                                    </div>
                                    <div>
                                        <img src={img2} alt="" className='h-28 w-100' />
                                        <h1 className='text-gray-400 mt-2'>refrigarator</h1>
                                    </div>
                                    <div>
                                        <img src={img1} alt="" className='h-28 w-100' />
                                        <h1 className='text-gray-400 mt-2'>Air Cooler</h1>
                                    </div>
                                    <div>
                                        <img src={img2} alt="" className='h-28 w-100' />
                                        <h1 className='text-gray-400 mt-2'>furniture</h1>
                                    </div>

                                </div>
                            </div>
                            <div className=''>
                                <button className='text-center text-blue-400 p-3'>See more</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default SliderDivide
