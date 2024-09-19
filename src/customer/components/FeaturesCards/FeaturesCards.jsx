import React from "react";
import Shipping from "./Assets/Shipping.png";
import Call from "./Assets/Call.png";
import Chat from "./Assets/chat.png";
import Gift from "./Assets/Gift.png";

const FeaturesCards = () => {
  const features = [
    {
      icon: Shipping, // Replace with your actual icon URL for Free Shipping
      title: "Free Shipping",
      description: "When you spend 100$",
      bgColor: "bg-pink-100",
    },
    {
      icon: Call, // Replace with your actual icon URL for Call Us
      title: "Call Us anytime",
      description: "+92 3244678620",
      bgColor: "bg-purple-100",
    },
    {
      icon: Chat, // Replace with your actual icon URL for Chat
      title: "Chat with us",
      description: "We offer 24-hour Chat support",
      bgColor: "bg-blue-100",
    },
    {
      icon: Gift, // Replace with your actual icon URL for Gift Cards
      title: "Gift Cards",
      description: "For your loved one, in any moment",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <div className="flex justify-between space-x-4 mt-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center p-4 bg-white border rounded-lg shadow-sm w-full"
        >
          {/* Icon Section */}
          <div className={`p-3 rounded-lg ${feature.bgColor}`}>
            <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
          </div>

          {/* Text Section */}
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesCards;
