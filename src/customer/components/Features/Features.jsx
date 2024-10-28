import React from "react";
import Left from "./Assets/Left.png";
import Right from "./Assets/Right.png";

const Features = () => {
  const banners = [
    {
      image: Left,
      title: "HeadPhones",
      description: "Buy Flagships with our Premium Phone category",
    },
    {
      image: Right,
      title: "Mobile Phones",
      description: "Buy Flagships with our Premium Phone category",
    },
  ];

  return (
    <div className="px-4 hidden lg:block md:px-6 lg:px-8 my-6 md:my-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <div
              className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center p-4 sm:p-6 md:p-8 flex items-center"
              style={{
                backgroundImage: `url(${banner.image})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Overlay for better text visibility if needed */}
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>

              {/* Content */}
              <div className="relative w-full sm:w-3/5 z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 md:mb-3">
                  {banner.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-800 mb-4 md:mb-6">
                  {banner.description}
                </p>
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-700 
                           transition-colors duration-200 font-medium 
                           rounded-lg text-sm sm:text-base lg:text-lg 
                           px-4 py-2 sm:px-5 sm:py-2.5 
                           focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;