import React, { useState } from "react";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative margin-x">
      <nav className="flex items-center justify-between px-3 md:px-4 py-2 bg-[#1E1E1E] rounded-3xl my-3">
        {/* Logo */}
        <div className="text-white font-bold text-lg">Gadget Gizmo</div>

        {/* Mobile Menu Button and Cart Icon */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            className="text-white p-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link to="/cart" aria-label="Shopping cart">
            <button className="text-white">
              <ShoppingBag size={20} />
            </button>
          </Link>
        </div>

        {/* Right Side Menu and Icons (Desktop) */}
        <div className="hidden md:flex items-center justify-end space-x-3">
          {/* Menu Items */}
          <div className="flex items-center space-x-1 bg-white rounded-full px-2">
            {menuItems.map((menuItem, index) => (
              <Link to={menuItem.path} key={index}>
                <button
                  className={`px-2 py-1 rounded-full transition-colors ${
                    activeMenu === menuItem.label
                      ? "bg-blue-500 text-white"
                      : "text-black hover:bg-blue-100"
                  }`}
                  onClick={() => setActiveMenu(menuItem.label)}
                >
                  {menuItem.label}
                </button>
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-2 relative">
            <div className="relative">
              <button
                className="text-white flex items-center"
                onClick={toggleDropdown}
                aria-label="User  profile"
              >
                <User size={20} />
              </button>
              {isDropdownOpen && (
                <div className="absolute z-50 right-0 mt-1 w-48 bg-gray-800 rounded-lg shadow-lg">
                  <Link to="/profile">
                    <button className="block px-4 py-1 text-white hover:bg-gray-700 w-full text-left">
                      Profile
                    </button>
                  </Link>
                  <Link to="/account/orders">
                    <button className="block px-4 py-1 text-white hover:bg-gray-700 w-full text-left">
                      My Orders
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <Link to="/cart" aria-label="Shopping cart">
              <button className="text-white">
                <ShoppingBag size={20} />
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 rounded-lg shadow-lg">
          {menuItems.map((menuItem, index) => (
            <Link to={menuItem.path} key={index}>
              <div
                className={`block px-4 py-2 text-white hover:bg-gray-700 w-full text-left ${
                  activeMenu === menuItem.label ? "bg-blue-500" : ""
                }`}
                onClick={() => {
                  setActiveMenu(menuItem.label);
                  setIsMobileMenuOpen(false);
                }}
              >
                {menuItem.label}
              </div>
            </Link>
          ))}

          {/* Profile Icon */}
          <div className="flex items-center justify-between px-4 py-2 text-white hover:bg-gray-700 w-full text-left">
            <Link to="/profile" className="flex items-center w-full">
              <User size={20} className="mr-2" />
              Profile
            </Link>
          </div>

          {/* My Orders Link */}
          <div className="flex items-center justify-between px-4 py-2 text-white hover:bg-gray-700 w-full text-left">
            <Link to="/account/orders" className="flex items-center w-full">
              <User size={20} className="mr-2" />
              My Orders
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
