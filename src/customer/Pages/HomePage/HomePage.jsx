import React from 'react'
import Hero from '../../components/HeroSection/Hero'
import Features from '../../components/Features/Features'
import HotProducts from '../../components/HotProducts/HotProducts'
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll'
import FeaturesCards from '../../components/FeaturesCards/FeaturesCards'
import Deal from '../../components/Deal/Deal'
import TestimonialSlider from '../../components/Testimonials/Testimonial'
import TestimonialSlider1 from '../../components/Testimonials/Testimonial1'
import Partners from '../../components/Partners/Partners'
import ProductCarousals from "../../components/ProductCarousals/ProductCarousals"

function HomePage() {
  return (
    <div>
         <Hero />
      <Features />
      
      <HotProducts />
      <ProductCarousals heading="Featured Mobile Phones"/>
      <ProductCarousals heading="Top Sellers"/>
      
      <InfiniteScroll />
      <FeaturesCards />
      <Deal />
      <TestimonialSlider />
      <TestimonialSlider1 />
      <Partners />
    </div>
  )
}

export default HomePage