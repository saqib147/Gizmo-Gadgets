import React from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Process from "../../components/Process/Process";
import FeaturesCards from "../../components/FeaturesCards/FeaturesCards";
import Deal from "../../components/Deal/Deal";

function SingleProductPage() {
  return (
    <div>
      <ProductDetails />
      <FeaturesCards />
      <Process />
      <Deal />
    </div>
  );
}

export default SingleProductPage;
