import img1 from '../../assets/ads/ad-1.webp';
import img2 from '../../assets/ads/ad-2.webp';
import img3 from '../../assets/ads/ad-3.webp';
import img4 from '../../assets/ads/ad-4.webp';
const Homead1 = () => {
    return (
        <>

            <div className="container-fluid mx-">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 ">

                    <div>
                        <img className=' h-60 w-full' src={img1} alt="ad1" />
                    </div>
                    <div>
                        <img className=' h-60 w-full' src={img2} alt="ad2" />
                    </div>
                    <div>
                        <img className=' h-60 w-full' src={img3} alt="ad3" />
                    </div>

                </div>
            </div>

            <div className="container-fluid mx-auto pt-3">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 ">

                    <div>
                        <img  style={{objectFit:'cover'}} src={img4} alt="ad1" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Homead1
