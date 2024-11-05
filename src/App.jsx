import "./App.css";
import CartPage from "./customer/Pages/CartPage/CartPage.jsx";
import CheckoutPage from "./customer/Pages/CheckoutPage/CheckoutPage.jsx";
import HomePage from "./customer/Pages/HomePage/HomePage.jsx";
import ProductsPage from "./customer/Pages/ProductsPage/ProductsPage.jsx";
import SingleProductPage from "./customer/Pages/SingleProduct/SingleProductPage.jsx";
import Footer from "./customer/components/Footer/Footer.jsx";
import Navbar from "./customer/components/Navigation/Navigation.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div>
        {/* <HomePage /> */}
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
        {/* <ProductsPage /> */}
        <CheckoutPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
