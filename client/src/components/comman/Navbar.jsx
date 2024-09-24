import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../../data/navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../redux/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(setToken(null));
    dispatch(setUser(null));

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/");
  };

  return (
    <nav className="bg-[#e9f5f9] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Logo</h1>
          </div>

          {/* Navbar links for larger screens */}
          <div className="hidden lg:flex space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="hover:bg-orange-700 px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="bg-gray-900"
              >
                {link.name}
              </NavLink>
            ))}

            {!token && (
              <NavLink
                to="/login"
                className="hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium text-white bg-green-500"
              >
                Login
              </NavLink>
            )}

            {token && (
              <button
                onClick={handleLogout}
                className="hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium text-white bg-red-500"
              >
                Logout
              </button>
            )}

            {user?.role === "Admin" && (
              <NavLink
                to="/admin/dashboard"
                className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-500"
              >
                Go to Dashboard
              </NavLink>
            )}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-black focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0 left-0 h-full bg-[#e9f5f9] z-50 w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-black">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col items-start pl-6 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={toggleSidebar}
              className="text-black text-lg hover:bg-orange-700 w-full px-4 py-2 rounded-md"
              activeClassName="bg-gray-900"
            >
              {link.name}
            </NavLink>
          ))}

          {!token && (
            <NavLink
              to="/login"
              onClick={toggleSidebar}
              className="hover:bg-green-600 w-full px-4 py-2 rounded-md text-lg font-medium text-white bg-green-500"
            >
              Login
            </NavLink>
          )}

          {token && (
            <button
              onClick={handleLogout}
              className="hover:bg-red-600 w-full px-4 py-2 rounded-md text-lg font-medium text-white bg-red-500"
            >
              Logout
            </button>
          )}
          {user?.role === "Admin" && (
            <NavLink
              to="/admin/dashboard"
              onClick={toggleSidebar}
              className="hover:bg-blue-600 w-full px-4 py-2 rounded-md text-lg font-medium text-white bg-blue-500"
            >
              Go to Dashboard
            </NavLink>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
