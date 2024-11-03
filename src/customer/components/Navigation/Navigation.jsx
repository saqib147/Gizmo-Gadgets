import React, { useState } from "react";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";

const menuItems = [
  { label: "Home" },
  { label: "Shop" },
  { label: "About" },
  { label: "Contact" },
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative margin-x">
      <nav className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#1E1E1E] rounded-3xl my-3">
        {/* Logo */}
        <div className="text-white font-bold text-lg w-1/4">Gadget Gizmo</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center Search Bar (Desktop) */}
        <div className="hidden md:flex justify-center w-2/4">
          <div className="relative w-full max-w-lg">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Products..."
              className="w-full p-2 rounded-full outline-none bg-white text-black placeholder-gray-500 pl-10"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Right Side Menu and Icons (Desktop) */}
        <div className="hidden md:flex items-center justify-end space-x-4 w-1/4">
          {/* Menu Items */}
          <div className="flex items-center space-x-2 bg-white rounded-full px-2">
            {menuItems.map((menuItem, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeMenu === menuItem.label
                    ? "bg-blue-500 text-white"
                    : "text-black hover:bg-blue-100"
                }`}
                onClick={() => setActiveMenu(menuItem.label)}
              >
                {menuItem.label}
              </button>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            <button className="text-white" aria-label="User profile">
              <User size={24} />
            </button>
            <button className="text-white" aria-label="Shopping cart">
              <ShoppingBag size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-gray-900 mt-1 rounded-xl md:hidden transition-all duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Mobile Search */}
        <div className="p-4">
          <div className="relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Products..."
              className="w-full p-2 rounded-full outline-none bg-white text-black placeholder-gray-500 pl-10"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Mobile Menu Items */}
        <div className="px-4 pb-4">
          {menuItems.map((menuItem, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-2 rounded-lg mb-1 ${
                activeMenu === menuItem.label
                  ? "bg-blue-500 text-white"
                  : "text-white hover:bg-gray-800"
              }`}
              onClick={() => {
                setActiveMenu(menuItem.label);
                setIsMobileMenuOpen(false);
              }}
            >
              {menuItem.label}
            </button>
          ))}
        </div>

        {/* Mobile Icons */}
        <div className="flex justify-around p-4 border-t border-gray-800">
          <button
            className="flex items-center space-x-2 text-white"
            aria-label="User profile"
          >
            <User size={20} />
            <span>Profile</span>
          </button>
          <button
            className="flex items-center space-x-2 text-white"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={20} />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
