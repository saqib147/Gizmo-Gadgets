import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import Cart from "../Cart/Cart";

function OrderSummery() {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>
      <Cart />
    </div>
  );
}

export default OrderSummery;
