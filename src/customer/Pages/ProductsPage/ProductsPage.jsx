import React from "react";
import Product from "../../components/Product/Product";
import Deal from "../../components/Deal/Deal";
import FeaturesCards from "../../components/FeaturesCards/FeaturesCards";

export default function ProductsPage() {
  return (
    <>
      <Product />
      <FeaturesCards />
      <Deal />
    </>
  );
}
