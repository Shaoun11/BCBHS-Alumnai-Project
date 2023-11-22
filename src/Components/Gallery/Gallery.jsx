/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import visual from "../../assets/lv_0_20230918161357.mp4"


  
const Gallery = () => {
    const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
    return (
      <div  className="  px-5 py-2 lg:px-32 lg:pt-24">
        <h1 className="text-5xl text-center font-semibold mt-8 mb-8 ">
          Our <span className="text-red-500">Emotions</span>
        </h1>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/H2Vk8Yz/IMG-20231116-WA0007.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/3vSm031/Screenshot-2023-11-16-01-13-11-894-org-telegram-messenger.jpg"
              />
            </div>
            <div>
              <video
                style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                className="rounded"
                playsInline
                loop
                muted
                controls
                alt="All the devices"
                src={visual}
                ref={videoEl}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/khX6HfS/IMG-20220118-120052.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/K0jzN0h/IMG-20220118-121939.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/dPmyJTB/IMG-20210921-113141.jpg"
              />
            </div>
            <div></div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/1bby8LB/IMG-20220118-122836.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Gallery;