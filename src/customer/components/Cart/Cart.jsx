import React from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";

function Cart() {
  return (
    <div>
      <div className="md:grid margin-x grid-cols-3 md:px-16 relative">
        <div className="col-span-2">
          <h1 className="text-2xl p-4 font-semibold">Your Tech Cart</h1>
          <div className="hidden px-8 md:flex justify-around mb-4 font-semibold rounded-3xl p-4 bg-[#d9d9d9]">
            <div className="border border-black rounded-full p-2 ">
              Product Image
            </div>
            <div className="border border-black rounded-full p-2 ">Name</div>
            <div className="border border-black rounded-full p-2 ">Color</div>
            <div className="border border-black rounded-full p-2 ">Brand</div>
            <div className="border border-black rounded-full p-2 ">Price</div>
          </div>
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="p-5 rounded-2xl sticky h-[50vh] ml-4 top-0 space-y-2 bg-[#d9d9d9] mt-5 md:mt-4">
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
