import React from "react";
import google from "./Assets/google.png";
import samsung from "./Assets/samsung.png";
import onePlus from "./Assets/OnePlus.png";
import beats from "./Assets/Beats.png";
import xiaomi from "./Assets/Xiaomi.png";

const Partners = () => {
  const partners = [
    {
      name: "Google",
      logo: google,
    },
    {
      name: "Samsung",
      logo: samsung,
    },
    {
      name: "OnePlus",
      logo: onePlus,
    },
    {
      name: "Beats",
      logo: beats,
    },
    {
      name: "Xiaomi",
      logo: xiaomi,
    },
  ];

  return (
    <div className="my-12 p-8 flex items-center w-full">
      <div className="mb-8 w-[400px]">
        <h2 className="text-5xl font-medium">Our Trusted Partners</h2>
        <p className="text-gray-500">
          Some of the best companies & Believe on us
        </p>
      </div>
      <div className="flex justify-evenly w-full ">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-gray-100 flex justify-evenly items-center p-8 rounded-md shadow-inner w-60 h-48"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-16 bg-blend-multiply "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
