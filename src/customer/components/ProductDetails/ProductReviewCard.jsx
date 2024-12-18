import React from "react";
import { Avatar, Box, Grid, Rating } from "@mui/material";

function ProductReviewCard() {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              S
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p>Saqib</p>
              <p>April 5, 2024</p>
            </div>
          </div>

          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductReviewCard;
