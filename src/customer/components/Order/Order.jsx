import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  return (
    <div className="margin-x px-5 md:px-20">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        {/* Sidebar for Filters */}
        <Grid item xs={12} sm={4} md={3}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Order Status</h1>
              {orderStatus.map((option) => (
                <div className="flex items-center" key={option.value}>
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        {/* Order Cards */}
        <Grid item xs={12} sm={8} md={9}>
          <div className="space-y-5">
            {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <OrderCard key={index} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
