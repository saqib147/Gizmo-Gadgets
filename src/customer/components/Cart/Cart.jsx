import React from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  return (
    <div className="p-4 md:p-8">
      <div className="md:grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <h1 className="text-2xl md:text-3xl p-4 font-semibold">
            Your Tech Cart
          </h1>
          {[1, 1, 1, 1].map((item, index) => (
            <CartItem key={index} />
          ))}
        </div>
        <div className="p-5 rounded-2xl sticky h-[auto] md:h-fit ml-0 md:ml-4 top-0 space-y-2 bg-[#d9d9d9] mt-5 md:mt-0">
          <div className="p-4 rounded-2xl">
            <p className="uppercase text-xl font-bold opacity-60 pb-4">
              Shipping Charges
            </p>
            <Divider />
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis qui quis cumque at doloribus. Pariatur rerum
              aspernatur dolor.
            </span>
          </div>
          <div className="border p-4 bg-white rounded-2xl">
            <p className="uppercase text-xl font-bold opacity-60 pb-4">
              Cart Total
            </p>
            <Divider />
            <div className="space-y-3 font-semibold">
              <div className="flex font-normal justify-between pt-3 text-black ">
                <span>Cart Subtotal</span>
                <span>$899</span>
              </div>
              <div className="flex font-normal justify-between pt-3 text-black ">
                <span>Shipping</span>
                <span>$3.99</span>
              </div>
              <Divider />
              <div className="flex text-lg font-semibold justify-between pt-3 text-black ">
                <span>Cart Total</span>
                <span>$902.99</span>
              </div>
              <Button
                onClick={handleCheckout}
                variant="contained"
                className="w-full border"
                sx={{
                  px: "2.5rem",
                  py: ".75rem",
                  bgcolor: "black",
                  borderRadius: "50px",
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
