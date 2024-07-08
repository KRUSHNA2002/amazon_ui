// Home.jsx
import Header from './common/Header'
import Footer from './common/Footer'
import MiniHeader from './common/MiniHeader'
import BgSlider from "./BgSlider";
import Slider from "./Slider";
import HomeCard from "./common/HomeCard";
import Homead1 from "./common/Homead1";
import SliderDivide from "./common/SliderDivide";
import SliderDivide2 from "./common/SliderDivide2";

const Home = () => {
    return (
        <>
            <div className=' bg-gray-100'>
                <Header />
                <MiniHeader />
                <BgSlider />
                <HomeCard />
                <Slider />
                <Homead1 />
                <SliderDivide />
                <HomeCard />
                <SliderDivide2 />
                <Footer />
            </div>
        </>
    );
};

export default Home;