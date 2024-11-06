import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="p-5 shadow-lg hover:shadow-2xl rounded-2xl border "
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-evelnly" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top rounded-md"
              src="https://picsum.photos/200/300"
            />
            <div className="ml-5 space-y-2">
              <p className="font-semibold">Iphone 15 Pro Max</p>
              <p className="opacity-50 text-xs font-semibold ">Color: black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$899</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2"
                />
                <span>Delivered on March 03</span>
              </p>
              <p className="text-xs">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on March 3</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
