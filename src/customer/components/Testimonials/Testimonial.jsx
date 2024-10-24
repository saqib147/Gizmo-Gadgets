// TestimonialSlider.js
import Avatar from "./Assets/Avatar.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css"; // Custom CSS for styling

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Sophie Moore",
      location: "San Francisco",
      feedback:
        "Gadget Gizmo has brought a new dimension to learning – it effortlessly unlocks the doors to knowledge!",
      rating: 5,
    },
    {
      name: "Sophie Moore",
      location: "San Francisco",
      feedback:
        "Gadget Gizmo has brought a new dimension to learning – it effortlessly unlocks the doors to knowledge!",
      rating: 5,
    },
    {
      name: "Sophie Moore",
      location: "San Francisco",
      feedback:
        "Gadget Gizmo has brought a new dimension to learning – it effortlessly unlocks the doors to knowledge!",
      rating: 3,
    },
    {
      name: "Sophie Moore",
      location: "San Francisco",
      feedback:
        "Gadget Gizmo has brought a new dimension to learning – it effortlessly unlocks the doors to knowledge!",
      rating: 5,
    },
    {
      name: "Sophie Moore",
      location: "San Francisco",
      feedback:
        "Gadget Gizmo has brought a new dimension to learning – it effortlessly unlocks the doors to knowledge!",
      rating: 4,
    },
    {
      name: "Sophie Moore",
      location: "San Francisco",
      feedback:
        "Gadget Gizmo has brought a new dimension to learning – it effortlessly unlocks the doors to knowledge!",
      rating: 4,
    },
    {
      name: "Sophie Moore",
      location: "San Francisco",
      feedback:
        "Gadget Gizmo has brought a new dimension to learning – it effortlessly unlocks the doors to knowledge!",
      rating: 5,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-container py-10 padding-x">
      <h2 className="font-bold text-3xl">What they Say About Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card " key={index}>
            <div className="testimonial-content">
              <div className="profile-img">
                {/* Placeholder image, you can replace it with actual images */}
                <img
                  src={Avatar}
                  className="float-left"
                  alt={testimonial.name}
                />
              </div>
              <div className="testimonial-details text-start">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.location}</p>
                <p>{testimonial.feedback}</p>
                <div className="rating text-start">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
