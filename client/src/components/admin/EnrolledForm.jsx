import React, { useState } from "react";
import { enrolledUser } from "../../services/operations/order";
import { useSelector } from "react-redux";

const EnrollmentForm = ({
  serviceId,
  serviceName,
  onClose,
  minimun,
  maxmium,
}) => {
  const [identifierType, setIdentifierType] = useState("username");
  const [identifier, setIdentifier] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [payable, setPayable] = useState(minimun);
  const{token} = useSelector(state=>state.auth)
  const [duration, setDuration] = useState("");

  const handleEnroll = async () => {
    const requestData = {
      [identifierType]: identifier, // Dynamically assigns either 'username' or 'email'
      serviceId: serviceId,
      transaction_id: transactionId,
      payable,
      timePeriods:duration
    };

    console.log("Request Data:", requestData);
await enrolledUser(requestData,token)
onClose(false)
    // Example API call
    // const response = await enrollInServiceApiCall(requestData);
    // if (response.success) {
    //   console.log("Enrollment successful:", response.enrollmentDetails);
    // } else {
    //   console.error("Enrollment failed:", response.message);
    // }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-md w-full mx-auto p-4 bg-white shadow-md rounded ">
        <h2 className="text-2xl font-bold mb-4">
          Enroll in Service {serviceName}
        </h2>

        <div className="mb-4">
          <label className="font-semibold mb-2 block">Choose Identifier:</label>
          <select
            value={identifierType}
            onChange={(e) => setIdentifierType(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="username">Username</option>
            <option value="email">Email</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="font-semibold mb-2 block">
            {identifierType === "username" ? "Username" : "Email"}:
          </label>
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder={`Enter your ${identifierType}`}
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold mb-2 block">Service Name:</label>
          <input
            type="text"
            value={serviceName}
            placeholder="Enter Service ID"
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold mb-2 block">Transaction ID:</label>
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder="Enter Transaction ID"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Duration</option>
            <option value="1 Month">1 Month</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="font-semibold mb-2 block">Investment Amount:</label>
          <input
            type="number"
            value={payable}
            onChange={(e) => setPayable(e.target.value)}
            placeholder="Enter Amount Payable"
            className="border p-2 rounded w-full"
          />

          <div className="flex justify-between px-4 b text-sm w-full text-gray-900">
            <p> Min. : {minimun}</p>
            <p>Max. : {maxmium}</p>
          </div>
        </div>

        <div className=" flex justify-between gap-6">
          <button
            onClick={handleEnroll}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-blue-600"
          >
            Enroll
          </button>
          <button
            onClick={() => onClose(false)}
            className="bg-red-400 text-white font-semibold py-2 px-4 rounded w-full hover:bg-red-600"
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;
