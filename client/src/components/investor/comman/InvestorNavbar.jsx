import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaDollarSign,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../../assets/logo.gif";

const InvestorNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="w-full z-10 bg-black text-white">
      {/* Top Section: Logo and Title */}
      <div className="max-w-7xl mx-auto p-5 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-left">
            <img src={logo} alt="not found" className="bg-white" />
          </div>
        </div>

        {/* Sidebar Toggle Button for Small Screens */}
        <div className="lg:hidden">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Main Navbar for Large Screens */}
        <div className="hidden lg:flex flex-col gap-4">
          <div className="flex items-center gap-3 justify-end">
            <div className="flex items-center space-x-4">
              <Link
                to="/client-login"
                className="flex items-center bg-red-800 text-white px-4 py-1 rounded-full hover:bg-red-700"
              >
                <FaUser className="mr-2" />
                CLIENT LOGIN
              </Link>
              <Link
                to="/international-investing"
                className="flex items-center bg-red-800 text-white px-4 py-1 rounded-full hover:bg-red-700"
              >
                <FaDollarSign className="mr-2" />
                INTERNATIONAL INVESTING
              </Link>
            </div>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com"
                className="flex items-center bg-red-800 text-white px-4 py-1 rounded-full hover:bg-red-700"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.twitter.com"
                className="flex items-center bg-red-800 text-white px-4 py-1 rounded-full hover:bg-red-700"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com"
                className="flex items-center bg-red-800 text-white px-4 py-1 rounded-full hover:bg-red-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com"
                className="flex items-center bg-red-800 text-white px-4 py-1 rounded-full hover:bg-red-700"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="text-xs">
              <p>INA 20002239</p>
              <p>SEBI Registered Corporate Advisor</p>
            </div>
          </div>

          <div className="container mx-auto flex justify-center py-2">
            <div className="flex space-x-8 font-bold text-[13px]">
              <Link to="/" className="hover:underline">
                MAIN HOME
              </Link>
              <Link to="/investor" className="hover:underline">
                HOME
              </Link>
              <Link to="/investor/about-us" className="hover:underline">
                ABOUT US
              </Link>
              <Link to="/investor/services" className="hover:underline">
                OUR SERVICES
              </Link>
              <Link to="/investor/contact-us" className="hover:underline">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 z-50 right-0 w-64 h-full bg-[#62000f] text-white p-5 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out sm:block lg:hidden`}
      >
        <button className="text-2xl ml-auto" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <div className="mt-10 flex flex-col space-y-3">
          <Link to="/" onClick={toggleSidebar} className="hover:underline">
            MAIN HOME
          </Link>
          <hr />
          <Link
            to="/investor"
            onClick={toggleSidebar}
            className="hover:underline"
          >
            HOME
          </Link>
          <hr />
          <Link
            to="/investor/about-us"
            onClick={toggleSidebar}
            className="hover:underline"
          >
            ABOUT US
          </Link>
          <hr />

          <Link
            to="/investor/services"
            onClick={toggleSidebar}
            className="hover:underline"
          >
            OUR SERVICES
          </Link>
          <hr />

          <Link
            to="/contact-us"
            onClick={toggleSidebar}
            className="hover:underline"
          >
            CONTACT US
          </Link>
          <br />

          <div className="flex flex-col gap-4">
            <Link
              onClick={toggleSidebar}
              to="/client-login"
              className="flex items-center bg-transparent border-2 border-white text-white px-4 py-2 rounded-full hover:bg-red-700"
            >
              <FaUser className="mr-2" />
              CLIENT LOGIN
            </Link>

            <Link
              onClick={toggleSidebar}
              to="/international-investing"
              className="flex items-center bg-transparent border-2 border-white text-white px-4 py-2 rounded-full hover:bg-red-700"
            >
              <FaDollarSign className="mr-2" />
              INTERNATIONAL INVESTING
            </Link>
          </div>
          <br />
          <div className="flex space-x-3 mt-6">
            <a
              href="https://www.linkedin.com"
              className="flex items-center bg-transparent border-2 border-white text-white px-4 py-2 rounded-full hover:bg-red-700"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.twitter.com"
              className="flex items-center bg-transparent border-2 border-white text-white px-4 py-2 rounded-full hover:bg-red-700"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com"
              className="flex items-center bg-transparent border-2 border-white text-white px-4 py-2 rounded-full hover:bg-red-700"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com"
              className="flex items-center bg-transparent border-2 border-white text-white px-4 py-2 rounded-full hover:bg-red-700"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InvestorNavbar;
