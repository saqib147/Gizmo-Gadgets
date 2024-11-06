// CustomerRoutes.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../customer/Pages/ProductsPage/ProductsPage.jsx";
import HomePage from "../customer/Pages/HomePage/HomePage.jsx";
import CartPage from "../customer/Pages/CartPage/CartPage.jsx";
import Navbar from "../customer/components/Navigation/Navigation.jsx";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails.jsx";
import Checkout from "../customer/components/Checkout/Checkout.jsx";
import OrderPage from "../customer/Pages/OrderPage/Order.jsx";
import OrderDetails from "../customer/components/Order/OrderDetails.jsx";
// import other pages as needed...

const CustomerRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/orders" element={<OrderPage />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>
    </>
  );
};

export default CustomerRoutes;
