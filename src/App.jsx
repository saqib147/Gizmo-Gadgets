import "./App.css";
// import HomePage from "./customer/Pages/HomePage/HomePage.jsx";
import Footer from "./customer/components/Footer/Footer.jsx";
import Navbar from "./customer/components/Navigation/Navigation.jsx";
import Product from "./customer/components/Product/Product.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </>
  );
}

export default App;
