import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

function CartItem() {
  return (
    <div className="p-5 my-4   shadow-lg border-xl rounded-lg md:rounded-3xl bg-[#D9D9D9] md:borer-3xl">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] md:w-[9rem] md:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://picsum.photos/200/300"
            alt="product image"
          />
        </div>
        <div className="ml-5 space-y-1 w-full flex flex-col md:flex-row justify-evenly">
          <p className="font-semibold text-lg md:text-xl">Iphone 15 Pro Max</p>
          <p className="text-gray-500 text-sm md:text-md">Color: black</p>
          <p className="text-gray-500">brand: Apple</p>
          <div className="flex space-x-5 items-center text-lg md:text-xl text-gray-900 mt-6">
            <p className="font-semibold">$899</p>
          </div>
        </div>
      </div>
      <div className="md:flex items-center mt-4 md:space-y-10">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>

          <div>
            <Button>Remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
