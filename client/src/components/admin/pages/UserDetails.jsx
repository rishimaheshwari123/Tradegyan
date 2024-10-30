import React, { useEffect, useState } from "react";
import { getUserDetails } from "../../../services/operations/admin";
import { useParams } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaRegFile,
} from "react-icons/fa";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  // Fetch user details
  const userDetails = async () => {
    try {
      const response = await getUserDetails(id);
      console.log(response)
      setUser(response); // Set user data
    } catch (err) {
      setError(err.message); // Set error message
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  useEffect(() => {
    userDetails();
  }, [id]);

  // Render loading state or error message
  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <FaUser className="h-5 w-5 text-gray-500" />
          <div className="flex-1">
            <span className="font-semibold">Name:</span>
            <span className="block">{user?.name || "N/A"}</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="h-5 w-5 text-gray-500" />
          <div className="flex-1">
            <span className="font-semibold">Email:</span>
            <span className="block">{user?.email || "N/A"}</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaPhone className="h-5 w-5 text-gray-500" />
          <div className="flex-1">
            <span className="font-semibold">Contact Number:</span>
            <span className="block">{user?.contactNumber || "N/A"}</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaWhatsapp className="h-5 w-5 text-gray-500" />
          <div className="flex-1">
            <span className="font-semibold">WhatsApp Number:</span>
            <span className="block">{user?.whatsappNumber || "N/A"}</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaRegFile className="h-5 w-5 text-gray-500" />
          <div className="flex-1">
            <span className="font-semibold">Created At:</span>
            <span className="block">
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
        </div>

        {/* Display Subscription Details */}
        <div>
  <h2 className="font-semibold">Subscriptions:</h2>
  {user?.subscriptions?.length > 0 ? (
    <ul className="list-disc ml-5">
      {user?.subscriptions?.map((subscription) => (
        <li key={subscription?._id} className="mb-4">
          <div className="flex items-center">
            <FaRegFile className="h-4 w-4 text-gray-500 mr-2" />
            <span className="font-bold">{subscription?.service?.serviceName}</span>
          </div>
          <div className="ml-6 text-sm text-gray-600">
            <p><strong>Advisor:</strong> {subscription?.service?.advisorName}</p>
            <p><strong>Investment Type:</strong> {subscription?.service?.investmentType}</p>
            <p><strong>Plan:</strong> {subscription?.service?.availablePlans?.join(', ')}</p>
            <p><strong>Risk Level:</strong> {subscription?.service?.riskLevel}</p>
            <p><strong>Service Category:</strong> {subscription?.service?.serviceCategory}</p>
            <p><strong>Enrollment Date:</strong> {new Date(subscription?.enrollmentDate).toLocaleDateString()}</p>
            <p><strong>Expiration Date:</strong> {new Date(subscription?.expirationDate).toLocaleDateString()}</p>
            <p><strong>Amount Paid:</strong> INR {subscription?.payable}</p>
            <p><strong>Status:</strong> {subscription?.isActive ? "Active" : "Inactive"}</p>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>No subscriptions found.</p>
  )}
</div>


      </div>
    </div>
  );
}

export default UserDetails;
