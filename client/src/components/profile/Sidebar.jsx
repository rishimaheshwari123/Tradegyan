import React, { useState } from "react";
import { FaUserCircle, FaRegCreditCard, FaTimes, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`flex flex-col bg-gray-800 text-white h-screen ${
        isOpen ? "w-64" : "w-20"
      } transition-width duration-300 relative`}
    >
      {/* Toggle Button inside the Sidebar (Top-right of Sidebar) */}
      <button
        className="absolute top-4 right-4 p-2 text-2xl bg-gray-700 rounded-full focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Items */}
      <div className="mt-16">
        {/* Profile */}
        <div className="flex items-center space-x-4 p-4 hover:bg-gray-700 cursor-pointer">
          <FaUserCircle className="text-2xl" />
          {isOpen && <span className="text-lg">Profile</span>}
        </div>

        {/* Subscription */}
        <div className="flex items-center space-x-4 p-4 hover:bg-gray-700 cursor-pointer">
          <FaRegCreditCard className="text-2xl" />
          {isOpen && <span className="text-lg">Subscription</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
