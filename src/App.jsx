import "./App.css";
import Deal from "./customer/components/Deal/Deal.jsx";
import Features from "./customer/components/Features/Features.jsx";
import FeaturesCards from "./customer/components/FeaturesCards/FeaturesCards.jsx";
import Footer from "./customer/components/Footer/Footer.jsx";
import { Hero } from "./customer/components/HeroSection/Hero.jsx";
import HotProducts from "./customer/components/HotProducts/HotProducts.jsx";
import InfiniteScroll from "./customer/components/InfiniteScroll/InfiniteScroll.jsx";
import Navbar from "./customer/components/Navigation/Navigation.jsx";
import Partners from "./customer/components/Partners/Partners.jsx";
import ProductCarousals from "./customer/components/ProductCarousals/ProductCarousals.jsx";
import TestimonialSlider from "./customer/components/Testimonials/Testimonial.jsx";
import TestimonialSlider1 from "./customer/components/Testimonials/Testimonial1.jsx";
// import Testimonials from "./customer/components/Testimonials/Testimonial.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      
      <HotProducts />
      <ProductCarousals />
      <ProductCarousals />
      
      <InfiniteScroll />
      <FeaturesCards />
      <Deal />
      <TestimonialSlider />
      <TestimonialSlider1 />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
