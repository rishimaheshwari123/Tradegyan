import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { setToken, setUser } from "../../redux/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUser(null));
    dispatch(setToken(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout Successfully");
    navigate("/client-login");
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-r from-gray-200 to-gray-400">
      <div className="text-center p-4 max-w-sm w-full">
        {/* Profile Avatar */}
        <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-300 rounded-full flex items-center justify-center text-black text-4xl md:text-5xl font-bold mx-auto">
          {user?.name?.[0]?.toUpperCase() || <FaUserCircle />}
        </div>

        {/* Profile Name */}
        <h2 className="text-2xl md:text-4xl mt-4 font-bold text-black">
          {user?.name}
        </h2>

        {/* Profile Details */}
        <div className="mt-4 md:mt-6 text-base md:text-xl text-black space-y-2 md:space-y-4">
          <p>
            <span className="font-semibold">Email:</span> {user?.email}
          </p>

          {/* Logout Button */}
          <div>
            <button
              onClick={handleLogout}
              className="px-3 py-1 md:px-4 md:py-2 font-bold bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
