import img1 from '../../src/assets/Bgslider/amg-1.jpg';
import img2 from '../../src/assets/Bgslider/amg-2.jpg';
import img3 from '../../src/assets/Bgslider/amd-4.jpg';

const BgSlider = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item ">
                    <img src={img1} className="d-block w-100 h-96 object-cover object-top" alt="Slide 1" />
                </div>
                <div className="carousel-item active">
                    <img src={img2} className="d-block w-100 h-96 object-cover object-top" alt="Slide 2" />
                </div>
                <div className="carousel-item ">
                    <img src={img3} className="d-block w-100 h-96 object-cover object-top" alt="Slide 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default BgSlider;
