import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid, Typography, Divider } from "@mui/material";
import { blue } from "@mui/material/colors";
import { StarIcon } from "@heroicons/react/24/outline";

const OrderDetails = () => {
  return (
    <div className="p-4 md:p-8">
      <Typography variant="h4" className="font-bold py-5">
        Delivery Address
      </Typography>
      <AddressCard />
      <div className="py-10">
        <OrderTracker activeStep={3} />
      </div>
      <Divider />
      <Typography variant="h5" className="font-bold my-5">
        Order Items
      </Typography>
      <Grid container spacing={2} className="space-y-5 pt-8">
        {[1, 1, 1, 1, 1].map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            className="shadow-xl rounded-2xl p-5 border"
          >
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={4}>
                <img
                  className="w-full rounded-md h-auto max-w-[5rem] object-cover object-top"
                  src="https://picsum.photos/200/300"
                  alt="Iphone 15 pro max"
                />
              </Grid>
              <Grid item xs={8}>
                <div className="space-y-1">
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
              </Grid>
            </Grid>
            <Box
              sx={{
                color: blue[600],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 2,
              }}
            >
              <StarIcon className="w-5 h-5 text-5xl text-blue-600" />
              <span className="ml-2">Rate & Review</span>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
