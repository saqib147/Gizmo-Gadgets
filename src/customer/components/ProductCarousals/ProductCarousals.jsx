// // import React from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import img1 from "./Assets/mobile.png";
// // import pimg1 from "./Assets/Product Images/1-Mobile Phones/1-Galaxy Z Fold 5/Samsung-Galaxy-Z-Flip-5-Qmart-1.webp";
// // import pimg2 from "./Assets/Product Images/1-Mobile Phones/2- iPhone 15 Pro Max/Apple-iPhone-15-Pro-Max-Qmart-1_8c3cb3fb-bc55-4424-a6c2-3847fb84a257.webp";
// // import pimg3 from "./Assets/Product Images/1-Mobile Phones/3-Google Pixel 8 Pro/Google-Pixel-8-Pro-Qmart-1.webp";
// // import pimg4 from "./Assets/Product Images/1-Mobile Phones/Samsung S23 Ultra/samsung-galaxy-s23-ultra-4-2.webp";

// // const NextArrow = ({ onClick }) => {
// //   return (
// //     <button
// //       className="absolute -bottom-14 left-[170px] ml-4 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 z-10"
// //       onClick={onClick}
// //     >
// //       Next
// //     </button>
// //   );
// // };

// // const PrevArrow = ({ onClick }) => {
// //   return (
// //     <button
// //       className=" absolute -bottom-14 left-[100px]  mr-20 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 z-10"
// //       onClick={onClick}
// //     >
// //       Prev
// //     </button>
// //   );
// // };

// // const ProductCarousel = () => {
// //   // Slider settings
// //   const settings = {
// //     dots: false,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     swipeToSlide: true,
// //     nextArrow: <NextArrow />,
// //     prevArrow: <PrevArrow />,
// //   };

// //   // Sample product data
// //   const products = [
// //     {
// //       id: 1,
// //       name: "Samsung Galaxy Z Flip 5",
// //       price: "799$",
// //       img: pimg1, // Replace with actual image URL
// //     },
// //     {
// //       id: 2,
// //       name: "Apple iPhone 15 Pro",
// //       price: "999$",
// //       img: pimg2, // Replace with actual image URL
// //     },
// //     {
// //       id: 3,
// //       name: "Google Pixel 8Pro",
// //       price: "899$",
// //       img: pimg3, // Replace with actual image URL
// //     },
// //     {
// //       id: 4,
// //       name: "Mi Xiaomi 14",
// //       price: "999$",
// //       img: pimg4, // Replace with actual image URL
// //     },
// //   ];

// //   return (
// //     <div className="flex w-full p-4  bg-gray-100">
// //       {/* Static Image */}
// //       <div className=" hidden md:block flex-shrink-0 rounded-2xl bg-[#0076DF]">
// //         <img
// //           src={img1} // Replace with actual static image URL
// //           alt="Flagship Mobile Phones"
// //           className="w-full object-cover "
// //         />
// //       </div>

// //       {/* Carousel */}
// //       <div className="w-3/4 pl-4 ">
// //         <Slider {...settings}>
// //           {products.map((product) => (
// //             <div key={product.id} className="p-4 h-[450px] cursor-pointer ">
// //               <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
// //                 <img
// //                   src={product.img}
// //                   alt={product.name}
// //                   className="w-full object-cover  rounded-2xl mb-4"
// //                 />
// //                 <div className="flex justify-between">
// //                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
// //                     {product.name}
// //                   </h3>
// //                   <p className="text-black text-xl font-bold mb-4 rounded-3xl border border-black px-3">
// //                     {product.price}
// //                   </p>
// //                 </div>
// //                 <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </Slider>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCarousel;


// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img1 from "./Assets/mobile.png";
// import pimg1 from "./Assets/Product Images/1-Mobile Phones/1-Galaxy Z Fold 5/Samsung-Galaxy-Z-Flip-5-Qmart-1.webp";
// import pimg2 from "./Assets/Product Images/1-Mobile Phones/2- iPhone 15 Pro Max/Apple-iPhone-15-Pro-Max-Qmart-1_8c3cb3fb-bc55-4424-a6c2-3847fb84a257.webp";
// import pimg3 from "./Assets/Product Images/1-Mobile Phones/3-Google Pixel 8 Pro/Google-Pixel-8-Pro-Qmart-1.webp";
// import pimg4 from "./Assets/Product Images/1-Mobile Phones/Samsung S23 Ultra/samsung-galaxy-s23-ultra-4-2.webp";

// const NextArrow = ({ onClick }) => (
//   <button
//   className="absolute -bottom-14 left-[170px] ml-4 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 z-10"
//        onClick={onClick}
//   >
//     Next
//   </button>
// );

// const PrevArrow = ({ onClick }) => (
//   <button
//   className=" absolute -bottom-14 left-[100px]  mr-20 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 z-10"
//         onClick={onClick}
//   >
//     Prev
//   </button>
// );

// const ProductCarousel = () => {
//   // Slider settings
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 2.5,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2.5,
//         },
//       },
//     ],
//   };

//   const products = [
//     { id: 1, name: "Samsung Galaxy Z Flip 5", price: "799$", img: pimg1 },
//     { id: 2, name: "Apple iPhone 15 Pro", price: "999$", img: pimg2 },
//     { id: 3, name: "Google Pixel 8Pro", price: "899$", img: pimg3 },
//     { id: 4, name: "Samsung S23 Ultra", price: "999$", img: pimg4 },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row w-full p-4 bg-gray-100">
//       {/* Static Image */}
//       <div className="hidden md:block md:w-1/4 flex-shrink-0 rounded-2xl bg-blue-600">
//         <img
//           src={img1}
//           alt="Flagship Mobile Phones"
//           className="w-full h-full object-cover rounded-2xl"
//         />
//       </div>

//       {/* Carousel */}
//       <div className="w-full md:w-3/4 md:pl-4">
//         <Slider {...settings}>
//           {products.map((product) => (
//             <div key={product.id} className="p-2">
//               <div className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="w-3/4 h-auto md:w-full md:h-64 object-cover rounded-lg mb-2"
//                 />
//                 <div className="flex flex-col items-center text-center flex-grow: 1">
//                   <h3 className=" md:text-lg font-semibold text-gray-800 mb-1 text-sm">
//                     {product.name}
//                   </h3>
//                   <p className="text-black text-sm md:text-lg font-bold mb-3 rounded-2xl border border-black px-3">
//                     {product.price}
//                   </p>
//                 </div>
//                 <button className="w-full bg-blue-500 text-white py-1 md:py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm md:text-base">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default ProductCarousel;


// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img1 from "./Assets/mobile.png";
// import pimg1 from "./Assets/Product Images/1-Mobile Phones/1-Galaxy Z Fold 5/Samsung-Galaxy-Z-Flip-5-Qmart-1.webp";
// import pimg2 from "./Assets/Product Images/1-Mobile Phones/2- iPhone 15 Pro Max/Apple-iPhone-15-Pro-Max-Qmart-1_8c3cb3fb-bc55-4424-a6c2-3847fb84a257.webp";
// import pimg3 from "./Assets/Product Images/1-Mobile Phones/3-Google Pixel 8 Pro/Google-Pixel-8-Pro-Qmart-1.webp";
// import pimg4 from "./Assets/Product Images/1-Mobile Phones/Samsung S23 Ultra/samsung-galaxy-s23-ultra-4-2.webp";

// const NextArrow = ({ onClick }) => (
//   <button
//     className="absolute -bottom-14 left-[170px] ml-4 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 z-10 hidden sm:block"
//     onClick={onClick}
//   >
//     Next
//   </button>
// );

// const PrevArrow = ({ onClick }) => (
//   <button
//     className="absolute -bottom-14 left-[100px] mr-20 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 z-10 hidden sm:block"
//     onClick={onClick}
//   >
//     Prev
//   </button>
// );

// const ProductCarousel = () => {
//   // Slider settings
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 2,
//           arrows: false,
//         },
//       },
//     ],
//   };

//   const products = [
//     { id: 1, name: "Samsung Galaxy Z Flip 5", price: "799$", img: pimg1 },
//     { id: 2, name: "Apple iPhone 15 Pro", price: "999$", img: pimg2 },
//     { id: 3, name: "Google Pixel 8Pro", price: "899$", img: pimg3 },
//     { id: 4, name: "Samsung S23 Ultra", price: "999$", img: pimg4 },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row w-full p-2 bg-gray-100">
//       {/* Static Image - Hidden on Mobile */}
//       <div className="hidden md:block md:w-1/4 flex-shrink-0 rounded-2xl bg-blue-600">
//         <img
//           src={img1}
//           alt="Flagship Mobile Phones"
//           className="w-full h-full object-cover rounded-2xl"
//         />
//       </div>

//       {/* Carousel */}
//       <div className="w-full md:w-3/4 md:pl-4">
//         <Slider {...settings}>
//           {products.map((product) => (
//             <div key={product.id} className="p-0.5 md:p-2">
//               <div className="bg-white rounded-lg shadow-md p-2 md:p-3 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="w-3/4 h-36 md:w-full md:h-64 object-cover rounded-lg mb-2"
//                 />
//                 <div className="flex flex-col items-center text-center">
//                   <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-1">
//                     {product.name}
//                   </h3>
//                   <p className="text-black text-sm md:text-lg font-bold mb-3 rounded-2xl border border-black px-2 md:px-3">
//                     {product.price}
//                   </p>
//                 </div>
//                 <button className="w-full bg-blue-500 text-white py-1 md:py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm md:text-base">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default ProductCarousel;



import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./Assets/mobile.png";
import pimg1 from "./Assets/Product Images/1-Mobile Phones/1-Galaxy Z Fold 5/Samsung-Galaxy-Z-Flip-5-Qmart-1.webp";
import pimg2 from "./Assets/Product Images/1-Mobile Phones/2- iPhone 15 Pro Max/Apple-iPhone-15-Pro-Max-Qmart-1_8c3cb3fb-bc55-4424-a6c2-3847fb84a257.webp";
import pimg3 from "./Assets/Product Images/1-Mobile Phones/3-Google Pixel 8 Pro/Google-Pixel-8-Pro-Qmart-1.webp";
import pimg4 from "./Assets/Product Images/1-Mobile Phones/Samsung S23 Ultra/samsung-galaxy-s23-ultra-4-2.webp";

const NextArrow = ({ onClick }) => (
  <button
    className="absolute -bottom-14 left-[170px] ml-4 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 z-10 hidden sm:block"
    onClick={onClick}
  >
    Next
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute -bottom-14 left-[100px] mr-20 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 z-10 hidden sm:block"
    onClick={onClick}
  >
    Prev
  </button>
);

const ProductCarousel = ({ heading }) => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5, // Display slightly more than 3 cards
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.25, // Display 2.5 cards on smaller screens
          arrows: false,
          swipeToSlide: true,
        },
      },
    ],
  };
  

  const products = [

    { id: 1, name: "Samsung Galaxy Z Flip 5", price: "799$", img: pimg1 },
    { id: 2, name: "Apple iPhone 15 Pro", price: "999$", img: pimg2 },
    { id: 3, name: "Google Pixel 8Pro", price: "899$", img: pimg3 },
    { id: 4, name: "Samsung S23 Ultra", price: "999$", img: pimg4 },
    { id: 5, name: "Google Pixel 9 Pro", price: "999$", img: pimg3 },
    { id: 6, name: "Samsung S24 Ultra", price: "1099$", img: pimg4 },
 
  ];

  return (
    <div className="flex flex-col md:flex-row w-full p-2 bg-gray-100">
      <h2 className="block md:hidden text-xl md:text-2xl font-bold text-center mb-4">{heading}</h2>
      {/* Static Image - Hidden on Mobile */}
      <div className="hidden md:block md:w-1/4 flex-shrink-0 rounded-2xl bg-blue-600">
        <img
          src={img1}
          alt="Flagship Mobile Phones"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Carousel */}
      <div className="w-full md:w-3/4 pl-2 md:pl-2">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-0.5 md:p-2">
              <div className="bg-white rounded-lg shadow-md p-2 md:p-3 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-3/4 h-36 md:w-full md:h-64 object-cover rounded-lg mb-2"
                />
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-black text-sm md:text-lg font-bold mb-3 rounded-2xl border border-black px-2 md:px-3">
                    {product.price}
                  </p>
                </div>
                <button className="w-full bg-blue-500 text-white py-1 md:py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm md:text-base">
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
