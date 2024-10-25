
import React from 'react';
import footerBg from "./Assets/footer-bg.png"
import { FaFacebookF, FaVrCardboard, FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 m-8 rounded-2xl text-white py-8 px-4" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="max-w-7xl p-8 mx-auto flex flex-wrap md:flex-nowrap gap-8">
        {/* Column 1: Gadget Gizmo */}
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl font-bold">Gadget Gizmo</h3>
          <p className="text-sm mt-2">
            Gadget Gizmo has brought a new dimension to technology – it
            effortlessly unlocks the doors to innovative gadgets.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="VR">
              <FaVrCardboard />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Column 2: Product Categories */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-bold">Product Categories</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#">Keyboard</a></li>
            <li><a href="#">EarPods</a></li>
            <li><a href="#">Data Cables</a></li>
            <li><a href="#">Gaming Controller</a></li>
            <li><a href="#">Mouse</a></li>
            <li><a href="#">Phones</a></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

        {/* Column 4: Compliance Pages */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-bold">Compliance Pages</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Purchase Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
