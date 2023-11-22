
import Slider from '../Slider/Slider';
import Navber from '../Navber/Navber';
import Purpose from '../Purpose/Purpose';
import Gallery from '../Gallery/Gallery';
<<<<<<< HEAD
import Event from '../../Event/Event';
import Marquee from 'react-fast-marquee';
import Footer from '../../Footer/Footer';
=======
import Event from '../../Events/Event';
>>>>>>> 146e513b3c881e692b95a5096ffe14ed68b99307

const Home = () => {
    return (
      <div>
        <Navber></Navber>
<<<<<<< HEAD
        <Slider></Slider>{" "}
        <div>
          <Marquee className=" z-20 bg-opacity-30 h-9 bg-red-500">
            Notice : Optimize design, content, and functionality. Prioritize
            user experience, security, and SEO. Integrate social media. Use
            professional domain and hosting. Regularly update.
          </Marquee>
        </div>
        <h1 className="text-[27px] font-semibold text-center pt-14 pb-14">
          বগুড়া ক্যান্টনমেন্ট বোর্ড হাই স্কুল এলামনাই এসোসিয়েশন এর লক্ষ্য ও
          উদ্দেশ্য সমূহ
        </h1>
        <Purpose></Purpose>
        <Event></Event>
        <Gallery></Gallery>
        <div className=" pt-20">
          <Footer></Footer>
        </div>
=======
        <Slider></Slider>
        <h1 data-aos='fade-up'  className='text-[27px] font-semibold text-center pt-14 pb-14'>বগুড়া ক্যান্টনমেন্ট বোর্ড হাই স্কুল এলামনাই এসোসিয়েশন এর লক্ষ্য ও উদ্দেশ্য সমূহ</h1>
         <Purpose></Purpose>
         <Event></Event>
         
         <Gallery></Gallery>
>>>>>>> 146e513b3c881e692b95a5096ffe14ed68b99307
      </div>
    );
};

export default Home;