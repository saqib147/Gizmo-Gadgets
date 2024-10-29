import React from "react";
import video from "../HeroSection/assets/HeroVideo.mp4";

export const Hero = () => {
  return (
    <div className="mx-4 md:mx-6 lg:mx-8 my-4">
      <div className="relative rounded-2xl overflow-hidden bg-gray-900">
        {/* Video Container */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[60vh]">
          <video
            src={video}
            loop
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="bg-[#1D1D1D] w-full rounded-b-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center p-4 md:p-6 gap-4 md:gap-6">
            {/* Left Content */}
            <div className="w-full md:w-3/5">
              <h2 className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl mb-2">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ex
                vero dolorem molestiae quidem beatae assumenda laboriosam debitis
                provident!
              </p>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-2/5 flex justify-start md:justify-end">
              <button className="bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-3 rounded-xl text-white text-sm sm:text-base w-full md:w-auto text-center">
                Lorem ipsum consectetur adipisicing.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;