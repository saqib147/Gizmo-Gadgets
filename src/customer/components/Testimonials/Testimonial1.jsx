// TestimonialSlider.js
import Avatar from "./Assets/Avatar.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css"; // Custom CSS for styling

const TestimonialSlider1 = () => {
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
    rtl: true,
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
    <div className="testimonial-container  padding-x">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card " key={index}>
            <div className="testimonial-content">
              <div className="profile-img">
                {/* Placeholder image, you can replace it with actual images */}
                <img src={Avatar} alt={testimonial.name} />
              </div>
              <div className="testimonial-details">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.location}</p>
                <p>{testimonial.feedback}</p>
                <div className="rating">{"★".repeat(testimonial.rating)}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider1;
