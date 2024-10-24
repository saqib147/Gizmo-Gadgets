import React from "react";
import HotProduct1 from "./Assets/HotProduct1.png";
import HotProduct2 from "./Assets/HotProduct2.png";
import HotProduct3 from "./Assets/HotProduct3.png";
import HotProduct4 from "./Assets/HotProduct4.png";
import HotProduct5 from "./Assets/HotProduct5.png";

export default function HotProducts() {
  return (
    <>
      <div className="my-8 margin-x">
        <div className="grid grid-cols-4 grid-rows-2 gap-6">
          <div className="col-span-2 row-span-2 ">
            <img src={HotProduct1} alt="product1" className="rounded-3xl" />
          </div>
          <div className="col-start-3">
            <img src={HotProduct2} alt="product2" />
          </div>
          <div className="col-start-3 row-start-2">
            <img src={HotProduct3} alt="product3" />
          </div>
          <div className="col-start-4 row-start-1">
            <img src={HotProduct4} alt="product4" />
          </div>
          <div className="col-start-4 row-start-2">
            <img src={HotProduct5} alt="product5" />
          </div>
        </div>
      </div>
    </>
  );
}
