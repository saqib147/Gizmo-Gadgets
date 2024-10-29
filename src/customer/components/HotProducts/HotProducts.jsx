import React from "react";
import HotProduct1 from "./Assets/HotProduct1.png";
import HotProduct2 from "./Assets/HotProduct2.png";
import HotProduct3 from "./Assets/HotProduct3.png";
import HotProduct4 from "./Assets/HotProduct4.png";
import HotProduct5 from "./Assets/HotProduct5.png";

const HotProducts = () => {
  return (
    <div className="container mx-auto px-4 my-8">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="space-y-4">
          {/* Featured product full width */}
          <div>
            <img 
              src={HotProduct1}
              alt="Featured hot product" 
              className="w-full rounded-3xl"
            />
          </div>
          {/* Other products in a row with horizontal scroll */}
          <div className="grid grid-cols-4 gap-4">
            <div>
              <img 
                src={HotProduct2}
                alt="Hot product 2" 
                className="w-full rounded-xl"
              />
            </div>
            <div>
              <img 
                src={HotProduct3}
                alt="Hot product 3" 
                className="w-full rounded-xl"
              />
            </div>
            <div>
              <img 
                src={HotProduct4}
                alt="Hot product 4" 
                className="w-full rounded-xl"
              />
            </div>
            <div>
              <img 
                src={HotProduct5}
                alt="Hot product 5" 
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Original Desktop/Tablet Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-4 grid-rows-2 gap-6">
          <div className="col-span-2 row-span-2">
            <img 
              src={HotProduct1} 
              alt="Featured hot product" 
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className="col-start-3">
            <img 
              src={HotProduct2} 
              alt="Hot product 2" 
              className="w-full"
            />
          </div>
          <div className="col-start-3 row-start-2">
            <img 
              src={HotProduct3} 
              alt="Hot product 3" 
              className="w-full"
            />
          </div>
          <div className="col-start-4 row-start-1">
            <img 
              src={HotProduct4} 
              alt="Hot product 4" 
              className="w-full"
            />
          </div>
          <div className="col-start-4 row-start-2">
            <img 
              src={HotProduct5} 
              alt="Hot product 5" 
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotProducts;