import React from "react";
import video from "../HeroSection/assets/HeroVideo.mp4";
// import arrow from "../HeroSection/assets/right-up.png";

export const Hero = () => {
  return (
    <>
      <div className="rounded-lg margin-x ">
        <video
          src={video}
          loop
          autoPlay
          muted
          style={{
            height: "60vh",
            objectFit: "cover", // add this style
          }} // adjust the values as needed
          className="hero-video rounded-t-2xl w-full"
        ></video>
        <div className="bg-[#1D1D1D] w-full flex  sm:flex-col mt-[-15px] rounded-2xl content-center items-center">
          <div className="left text-white w-3/5 sm:w-full md:w-full p-6">
            <h2 className="z-10 font-semibold text-3xl">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ex
              vero dolorem molestiae quidem beatae assumenda laboriosam debitis
              provident!
            </p>
          </div>
          <div className="  lg:w-2/5 sm:w-full md:w-full text-white p-6 text-right sm:text-center">
            <span className="bg-blue-500 p-4 rounded-xl text-lg cursor-pointer sm:text-sm md:text-sm ">
              Lorem ipsum consectetur adipisicing.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
