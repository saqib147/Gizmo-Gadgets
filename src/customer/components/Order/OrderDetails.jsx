import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { StarIcon } from "@heroicons/react/24/outline";

const OrderDetails = () => {
  return (
    <div className="margin-x">
      <div>
        <Typography variant="h4" className="font-bold py-5">
          Delivery Address
        </Typography>
        <AddressCard />
        <div className="py-10">
          <OrderTracker activeStep={3} />
        </div>
        <Grid container spacing={2} className="space-y-5 mt-8">
          {[1, 1, 1, 1, 1].map((item) => (
            <Grid
              item
              xs={12} // Responsive grid sizes
              className="shadow-xl rounded-2xl p-5 border"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} sm={6}>
                  <div className="flex items-center space-x-5">
                    <img
                      className="w-full h-auto rounded-md max-w-[5rem] object-cover object-top" // Responsive image
                      src="https://picsum.photos/200/300"
                      alt="Iphone 15 pro max"
                    />
                    <div className="space-y-2 ml-5">
                      <Typography variant="h6" className="font-semibold">
                        Iphone 15 pro max
                      </Typography>
                      <Typography>
                        <span>Color: black</span>
                      </Typography>
                      <Typography>
                        <span>$899</span>
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} container justifyContent="flex-end">
                  <Box
                    sx={{
                      color: blue[600],
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <StarIcon className="w-5 h-5 text-5xl text-blue-600" />
                    <span className="ml-2">Rate & Review</span>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default OrderDetails;
