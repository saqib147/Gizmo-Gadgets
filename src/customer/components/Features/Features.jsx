import React from "react";
import Left from "./Assets/Left.png";
import Right from "./Assets/Right.png";

const Features = () => {
  return (
    <>
      <div className="flex mt-8 margin-x gap-8">
        <div
          className=" w-1/2 bg-cover bg-gray-100 rounded-3xl p-8 h-[400px] flex flex-row items-center"
          style={{ backgroundImage: `url(${Left})` }}
        >
          <div className="w-3/5">
            <h2 className="text-4xl font-semibold mt-6  ">HeadPhones</h2>
            <p className="mt-3 text-lg">
              Buy Flagships with our Premium Phone category
            </p>
            <button
              type="button"
              className="text-white my-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Explore
            </button>
          </div>
        </div>
        <div
          className=" w-1/2 bg-grey-100 bg-cover bg-gray-100 rounded-3xl p-8 h-[400px] flex flex-row items-center"
          style={{ backgroundImage: `url(${Right})` }}
        >
          <div className="w-3/5">
            <h2 className="text-4xl font-semibold  mt-6">Mobile Phones</h2>
            <p className="mt-3 text-lg">
              Buy Flagships with our Premium Phone category
            </p>
            <button
              type="button"
              className="text-white my-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
