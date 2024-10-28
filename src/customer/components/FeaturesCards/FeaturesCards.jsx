import React from "react";
import { Truck, Phone, MessageCircle, Gift } from "lucide-react";

const FeaturesCards = () => {
  const features = [
    {
      Icon: Truck,
      title: "Free Shipping",
      description: "When you spend 100$",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-500",
    },
    {
      Icon: Phone,
      title: "Call Us anytime",
      description: "+92 3244678620",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500",
    },
    {
      Icon: MessageCircle,
      title: "Chat with us",
      description: "We offer 24-hour Chat support",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      Icon: Gift,
      title: "Gift Cards",
      description: "For your loved one, in any moment",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-500",
    },
  ];

  return (
    <div className="px-3 md:px-6 lg:px-8 my-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {features.map((feature, index) => {
          const Icon = feature.Icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center p-3 md:p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon Section */}
              <div
                className={`p-2 md:p-3 rounded-lg ${feature.bgColor} mb-2 md:mb-3`}
              >
                <Icon className={`w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 ${feature.iconColor}`} />
              </div>

              {/* Text Section */}
              <div className="text-center">
                <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-0.5 md:mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesCards;