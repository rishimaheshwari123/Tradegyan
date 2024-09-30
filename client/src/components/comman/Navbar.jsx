import React, { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../../data/navbar";
import image from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../redux/authSlice";
import { toast } from "react-toastify";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get token and user from Redux state
  const { token, user } = useSelector((state) => state.auth);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  const handleMouseEnter = (index) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(null);
    }
  };

  const handleLogout = () => {
    dispatch(setUser(null));
    dispatch(setToken(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout Successfully");
    // navigate("/login");
  };

  return (
    <nav className="bg-white text-black p-4 border-b-2 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <img src={image} alt="logo" className="h-[70px]" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.path}
                  className="flex items-center font-bold hover:text-[#efcc41]"
                >
                  {link.name}
                  {link.sublinks && <FaChevronDown className="ml-1 mt-[3px]" />}
                </Link>
                {/* Dropdown */}
                {link.sublinks && activeDropdown === index && (
                  <ul className="absolute left-0 z-50 top-4 mt-2 w-40 bg-white text-black shadow-lg">
                    {link.sublinks.map((sublink, subIndex) => (
                      <li
                        key={subIndex}
                        className="py-2 px-4 font-bold hover:text-[#efcc41]"
                      >
                        <Link to={sublink.path}>{sublink.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Conditional Buttons */}
            {token && user ? (
              <>
                {user.role === "Admin" && (
                  <li>
                    <Link
                      to="/admin/dashboard"
                      className="px-4 py-2 font-bold bg-blue-500 text-white rounded"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                <li>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 font-bold bg-red-500 text-white rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/client-login"
                  className="px-4 py-2 font-bold bg-green-500 text-white rounded"
                >
                  Client-Login
                </Link>
              </li>
            )}

            <li className="bg-green-500 px-8 py-2 rounded-full text-white">
              <a
                href="https://wa.me/+917771004878"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={28} />
              </a>
            </li>
          </ul>

          {/* Mobile Sidebar Button */}
          <div className="lg:hidden">
            <button onClick={toggleSidebar}>
              {!isOpen && <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Background overlay when sidebar is open */}
        <div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleSidebar}
        ></div>

        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed top-0 left-0 z-50 w-64 h-full bg-white p-4 border-r-4 border-gray-300 transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header with Logo and Close Icon */}
          <div className="flex justify-between items-center mb-4">
            <img src={image} alt="not found" className="h-14" />
            <button onClick={toggleSidebar}>
              <FaTimes size={24} />
            </button>
          </div>
          <hr className="border-b border-gray-300 mb-4" />

          <ul className="space-y-4">
            {navLinks.map((link, index) => (
              <li key={index} className="relative">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <Link to={link.path} className="block text-black font-bold">
                    {link.name}
                  </Link>
                  {link.sublinks && <FaChevronDown />}
                </div>
                {/* Dropdown in sidebar */}
                {link.sublinks && activeDropdown === index && (
                  <ul className="mt-2 bg-blue-400 space-y-2">
                    {link.sublinks.map((sublink, subIndex) => (
                      <li key={subIndex} className="py-1 px-4">
                        <Link to={sublink.path} className="text-white">
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Mobile Conditional Buttons */}
            {token && user ? (
              <>
                {user.role === "Admin" && (
                  <li>
                    <Link
                      to="/admin/dashboard"
                      className="block text-blue-500 font-bold"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                <li>
                  <button
                    onClick={handleLogout}
                    className="block text-red-500 font-bold"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="block text-green-500 font-bold">
                  Login
                </Link>
              </li>
            )}

            <li>
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black"
              >
                <FaWhatsapp size={24} />
                <span className="ml-2">WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
