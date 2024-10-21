import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUserCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../../data/navbar";
import image from "../../assets/logo.gif";
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
    navigate("/client-login");
    setIsOpen(false); // Close sidebar on logout
  };

  const goToProfile = () => {
    navigate("/profile");
    setIsOpen(false); // Close sidebar on profile navigation
  };

  // Close sidebar when the screen resizes (especially for mobile/desktop transitions)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <div>
      

    <nav className="bg-white text-black p-4 border-b-2 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <img src={image} alt="logo" className="lg:h-[70px] h-[46px]" />
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
                  onClick={() => setIsOpen(false)} // Close sidebar when navigating
                >
                  {link.name}
                  {link.sublinks && <FaChevronDown className="ml-1 mt-[3px]" />}
                </Link>
                {link.sublinks && activeDropdown === index && (
                  <ul className="absolute left-0 z-50 top-4 mt-2 w-40 bg-white text-black shadow-lg">
                    {link.sublinks.map((sublink, subIndex) => (
                      <li
                        key={subIndex}
                        className="py-2 px-4 font-bold hover:text-[#efcc41]"
                      >
                        <Link
                          to={sublink.path}
                          onClick={() => setIsOpen(false)} // Close sidebar on sublink click
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Conditional Buttons */}
            {token && user ? (
              <>
                {user?.role === "Admin" && (
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
        {
          token && user?.role ==="user" &&     <li
              className="flex items-center space-x-2 cursor-pointer border-2 p-4 rounded-full"
              onClick={goToProfile}
            >
              <FaUserCircle size={28} className="text-orange-700" />
              <span className="font-bold">{user?.name}</span>
            </li>
        }
          </ul>

          {/* Mobile Sidebar Button */}
          <div className="lg:hidden">
            <button onClick={toggleSidebar}>
              {!isOpen ? <FaBars size={24} /> : <FaTimes size={24} />}
            </button>
          </div>
        </div>

        {/* Background overlay when sidebar is open */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed top-0 left-0 z-50 w-64 h-full bg-white p-4 border-r-4 border-gray-300 transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
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
                  <Link
                    to={link.path}
                    className="block text-black font-bold"
                    onClick={toggleSidebar} // Close sidebar on navigation
                  >
                    {link.name}
                  </Link>
                  {link.sublinks && <FaChevronDown />}
                </div>
                {link.sublinks && activeDropdown === index && (
                  <ul className="mt-2 bg-blue-400 space-y-2">
                    {link.sublinks.map((sublink, subIndex) => (
                      <li key={subIndex} className="py-1 px-4">
                        <Link
                          to={sublink.path}
                          className="text-white"
                          onClick={toggleSidebar} // Close sidebar on sublink click
                        >
                          {sublink?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {token && user ? (
              <>
                {user.role === "Admin" && (
                  <li>
                    <Link
                      to="/admin/dashboard"
                      className="block text-blue-500 font-bold"
                      onClick={toggleSidebar}
                    >
                      Dashboard
                    </Link>
                  </li>
                )}

            {
              token && user?.role ==="user" &&     <li
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={goToProfile}
                >
                  <FaUserCircle size={24} className="text-gray-700" />
                  <span className="font-bold">{user.name}</span>
                </li>
            }

                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full py-2 text-center font-bold bg-red-500 text-white rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/client-login"
                  className="block text-center font-bold bg-green-500 text-white rounded py-2"
                  onClick={toggleSidebar}
                >
                  Client Login
                </Link>
              </li>
            )}

            <li className="bg-green-500 px-8 py-2 rounded-full text-white text-center">
              <a
                href="https://wa.me/+917771004878"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>


  );
};

export default Navbar;
