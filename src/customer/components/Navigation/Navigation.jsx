import React, { useState } from "react";
import profile from "./Assets/user.png";
import cart from "./Assets/bag.png";
const menuItems = [
  { label: "Home" },
  { label: "Shop" },
  { label: "About" },
  { label: "Contact" },
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState("Home"); // For active state

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-[#1D1D1D] rounded-2xl my-3">
      {/* Logo */}
      <div className="text-white font-bold text-lg w-[20%]">Gadget Gizmo</div>

      {/* Search bar */}
      <div className="flex-1 mx-6 w-[30%] ">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Products..."
          className="w-full p-2  rounded-full outline-none bg-white text-black placeholder-gray-500 text-center"
        />
      </div>

      {/* Menu Items */}
      <div className="flex items-center space-x-6 lg:block md:hidden sm:hidden  bg-white text-black rounded-full">
        {menuItems.map((menuItem, index) => (
          <a
            key={index}
            href="#"
            className={`text-black px-3 py-1 rounded-full ${
              activeMenu === menuItem.label ? "bg-blue-500 text-white" : ""
            } hover:bg-blue-600 hover:text-white`}
            onClick={() => setActiveMenu(menuItem.label)}
          >
            {menuItem.label}
          </a>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-3">
        <img
          src={profile} // Replace with the actual path to the profile icon
          alt="Profile"
          className="w-8 h-8 rounded-full mx-2"
        />
        <img
          src={cart} // Replace with the actual path to the cart icon
          alt="Cart"
          className="w-8 h-8"
        />
      </div>
    </nav>
  );
};

export default Navbar;
