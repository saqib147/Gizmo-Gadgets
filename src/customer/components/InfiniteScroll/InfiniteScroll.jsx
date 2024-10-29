import React from "react";
import star1 from "./Assets/Star.svg";
import star2 from "./Assets/Star1.svg";
import star3 from "./Assets/Star2.svg";
import star4 from "./Assets/Star3.svg";

export default function InfiniteScroll() {
  const Items = [
    {
      Name: "Innovative",
      Star: star1,
    },
    {
      Name: "Amazing",
      Star: star2,
    },
    {
      Name: "Gadgets",
      Star: star3,
    },
    {
      Name: "Upgrade",
      Star: star4,
    },
    {
      Name: "Innovative",
      Star: star1,
    },
    {
      Name: "Amazing",
      Star: star2,
    },
    {
      Name: "Gadgets",
      Star: star3,
    },
    {
      Name: "Upgrade",
      Star: star4,
    },
  ];
  return (
    <>
      <div className="overflow-hidden bg-black flex">
        <ul className="flex gap-10  text-white text-lg md:text-2xl  font-semibold py-4 md:py-2 animate-infinite-scroll">
          {[...Items, ...Items].map((item) => (
            <li className="flex gap-10">
              <p>{item.Name}</p>
              <img className="mr-5 md:mr-2 w-6 md:w-8 h-6 md:h-8" src={item.Star} alt="star" />

            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
