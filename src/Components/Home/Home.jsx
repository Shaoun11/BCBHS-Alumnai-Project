
import Slider from '../Slider/Slider';
import Navber from '../Navber/Navber';
import Purpose from '../Purpose/Purpose';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
      <div>
        <Navber></Navber>
        <Slider></Slider>
        <h1  className='text-[27px] font-semibold text-center pt-14 pb-14'>বগুড়া ক্যান্টনমেন্ট বোর্ড হাই স্কুল এলামনাই এসোসিয়েশন এর লক্ষ্য ও উদ্দেশ্য সমূহ</h1>
         <Purpose></Purpose>
         <Gallery></Gallery>
      </div>
    );
};

export default Home;