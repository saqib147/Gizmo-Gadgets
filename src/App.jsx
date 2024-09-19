import "./App.css";
import Deal from "./customer/components/Deal/Deal.jsx";
import Features from "./customer/components/Features/Features.jsx";
import FeaturesCards from "./customer/components/FeaturesCards/FeaturesCards.jsx";
import { Hero } from "./customer/components/HeroSection/Hero.jsx";
import HotProducts from "./customer/components/HotProducts/HotProducts.jsx";
import InfiniteScroll from "./customer/components/InfiniteScroll/InfiniteScroll.jsx";
import Navbar from "./customer/components/Navigation/Navigation.jsx";
// import Navigation from "./customer/components/Navigation/Navigation.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FeaturesCards />
      <HotProducts />
      <InfiniteScroll />
      <Deal />
    </>
  );
}

export default App;
