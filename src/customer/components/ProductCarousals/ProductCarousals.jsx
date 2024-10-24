import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./Assets/mobile.png";
import pimg1 from "./Assets/Product Images/1-Mobile Phones/1-Galaxy Z Fold 5/Samsung-Galaxy-Z-Flip-5-Qmart-1.webp";
import pimg2 from "./Assets/Product Images/1-Mobile Phones/2- iPhone 15 Pro Max/Apple-iPhone-15-Pro-Max-Qmart-1_8c3cb3fb-bc55-4424-a6c2-3847fb84a257.webp";
import pimg3 from "./Assets/Product Images/1-Mobile Phones/3-Google Pixel 8 Pro/Google-Pixel-8-Pro-Qmart-1.webp";
import pimg4 from "./Assets/Product Images/1-Mobile Phones/Samsung S23 Ultra/samsung-galaxy-s23-ultra-4-2.webp";

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute -bottom-14 left-[170px] ml-4 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 z-10"
      onClick={onClick}
    >
      Next
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className=" absolute -bottom-14 left-[100px]  mr-20 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 z-10"
      onClick={onClick}
    >
      Prev
    </button>
  );
};

const ProductCarousel = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy Z Flip 5",
      price: "799$",
      img: pimg1, // Replace with actual image URL
    },
    {
      id: 2,
      name: "Apple iPhone 15 Pro",
      price: "999$",
      img: pimg2, // Replace with actual image URL
    },
    {
      id: 3,
      name: "Google Pixel 8Pro",
      price: "899$",
      img: pimg3, // Replace with actual image URL
    },
    {
      id: 4,
      name: "Mi Xiaomi 14",
      price: "999$",
      img: pimg4, // Replace with actual image URL
    },
  ];

  return (
    <div className="flex w-full p-4  bg-gray-100">
      {/* Static Image */}
      <div className=" flex-shrink-0 rounded-2xl bg-[#0076DF]">
        <img
          src={img1} // Replace with actual static image URL
          alt="Flagship Mobile Phones"
          className="w-full object-cover "
        />
      </div>

      {/* Carousel */}
      <div className="w-3/4 pl-4 ">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-4 h-[450px] cursor-pointer ">
              <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full object-cover h-[270px] rounded-2xl mb-4"
                />
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-black text-xl font-bold mb-4 rounded-3xl border border-black px-3">
                    {product.price}
                  </p>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
