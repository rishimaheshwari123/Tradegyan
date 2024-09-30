import React from "react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r ">
      <div className="text-center">
        {/* Profile Avatar */}
        <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center text-black text-5xl font-bold mx-auto">
          {/* Display the first letter of the user's name */}
          {user?.name?.[0]?.toUpperCase() || <FaUserCircle />}
        </div>

        {/* Profile Name */}
        <h2 className="text-4xl mt-4 font-bold text-black">{user?.name}</h2>

        {/* Profile Details */}
        <div className="mt-6 text-xl text-black space-y-4">
          <p>
            <span className="font-semibold">Email:</span> {user?.email}
          </p>
          <p>
            <span className="font-semibold">Subscription Status:</span>{" "}
            {user?.isSubscription ? (
              <span className="text-green-300 font-semibold">Active</span>
            ) : (
              <span className="text-red-300 font-semibold">Inactive</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
