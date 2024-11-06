import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

function CartItem() {
  return (
    <div className="p-5 my-4 shadow-lg border rounded-lg bg-[#e8e8e8]">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem]">
          <img
            className="w-full h-full object-cover rounded-xl object-top"
            src="https://picsum.photos/200/300"
            alt="product image"
          />
        </div>
        <div className="ml-5 space-y-1 w-full flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            <p className="font-semibold text-lg md:text-xl">
              Iphone 15 Pro Max
            </p>
            <p className="text-gray-500 text-sm md:text-md">Color: black</p>
            <p className="text-gray-500">Brand: Apple</p>
          </div>
          <div className="flex items-center text-lg md:text-xl text-gray-900 mt-2 md:mt-0">
            <p className="font-semibold">$899</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-3 border rounded-sm text-center">3</span>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <Button variant="outlined" color="error">
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
