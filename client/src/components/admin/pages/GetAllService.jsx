import React, { useEffect, useState } from "react";
import {
  deleteServices,
  getAllService,
} from "../../../services/operations/auth";
import { FaTrashAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai"; // Import SMS icon
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { enrolledUser } from "../../../services/operations/order";
import { useSelector } from "react-redux";
import EnrollmentForm from "../EnrolledForm";
// import Swal from 'sweetalert2';
const BASE_URL = process.env.REACT_APP_BASE_URL; // Update this to your actual backend URL

const GetAllService = () => {
  const [services, setServices] = useState([]);
  const [showGlobalModal, setShowGlobalModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enrolledModel, setEnrolledModel] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedServiceName, setSelectedServiceName] = useState("");

  const [minimun, setMinum] = useState(0);
  const [maxmium, setmaximum] = useState(0);

  const [globalMessage, setGlobalMessage] = useState("");
  const [sendVia, setSendVia] = useState({
    whatsapp: false,
    email: false,
    sms: false,
  });

  const getService = async () => {
    setLoading(true)
    try {
      const response = await getAllService();
      setServices(response); // Assuming response is an array of services
    } catch (error) {
      console.error("Failed to fetch services:", error);
    }
    setLoading(false)
  };

  // const handleDelete = async (id) => {
  //   try {
  //     const res = await deleteServices(id);
  //     setServices(services.filter((service) => service._id !== id));
  //   } catch (error) {
  //     console.log("Error in deleting event in front end");
  //   }
  // };




  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "Deleting this service will remove all associated subscriptions. Do you want to proceed?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      });
  
      if (result.isConfirmed) {
        const res = await deleteServices(id);
        setServices(services.filter((service) => service._id !== id));
        Swal.fire('Deleted!', 'The service has been deleted successfully.', 'success');
      }
    } catch (error) {
      console.log("Error in deleting event in front end");
      Swal.fire('Error', 'An error occurred while deleting the service.', 'error');
    }
  };


  useEffect(() => {
    getService();
  }, []);

  const handleSendMessage = async () => {
    Swal.fire({
      title: "Sending message...",
      text: "Please wait while the message is being sent",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/send-message/${selectedServiceId}`,
        {
          message: globalMessage,
          sendVia: Object.keys(sendVia).filter((method) => sendVia[method]), // Send only selected methods
        }
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent",
        text: "The message was sent successfully!",
      });

      // Reset state
      setShowGlobalModal(false);
      setGlobalMessage("");
      setSendVia({ whatsapp: false, email: false, sms: false }); // Reset the sending methods
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send the message. Please try again.",
      });
      console.error("Error sending message:", error);
    }
  };


  if (loading || !services) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Our Services
      </h1>
        <div className="spinner"></div>
      </div>
    );
  }
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-6"
          >
            <div className="flex flex-col space-y-4 relative">
              <button
                onClick={() => handleDelete(service._id)}
                className="text-red-600 hover:text-red-800 absolute top-0 right-0"
              >
                <FaTrashAlt size={23} />
              </button>
              <Link to={`/admin/service/${service?._id}`}>
                <h2 className="text-xl font-semibold text-blue-600">
                  {service.serviceName}
                </h2>
              </Link>

              <p className="text-gray-700">{service.description}</p>
              <div className="flex flex-col space-y-2">
                <span className="font-bold text-lg text-gray-900">
                  Price: ₹
                  {service.price ? service.price.toLocaleString() : "N/A"}
                </span>
                <span className="text-gray-600">
                  Category: {service.serviceCategory || "N/A"}
                </span>
                <span className="text-gray-600">
                  Duration: {service.duration || "N/A"}
                </span>
                <span className="text-gray-600">
                  Available Plans: {service.availablePlans.join(", ") || "N/A"}
                </span>
                {/* <span className="text-gray-600">Advisor: {service.advisorName || 'N/A'}</span> */}
                {/* <span className="text-gray-600">Rating: {service.rating ? `${service.rating} ⭐` : 'N/A'}</span> */}
                {/* <span className="text-gray-600">Target Audience: {service.targetAudience || 'N/A'}</span> */}
                <span className="text-gray-600">
                  Risk Level: {service.riskLevel || "N/A"}
                </span>
                <span className="text-gray-600">
                  Investment Type: {service.investmentType || "N/A"}
                </span>
                <span className="text-gray-600">
                  Min Investment: ₹
                  {service.minInvestment
                    ? service.minInvestment.toLocaleString()
                    : "N/A"}
                </span>
                <span className="text-gray-600">
                  Max Investment: ₹
                  {service.maxInvestment
                    ? service.maxInvestment.toLocaleString()
                    : "N/A"}
                </span>
                <span
                  className={`font-bold ${
                    service.serviceAvailability
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  Status:{" "}
                  {service.serviceAvailability ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => {
                  setShowGlobalModal(true);
                  setSelectedServiceId(service._id);
                }}
                className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-200"
              >
                Send Message
              </button>
              <button
                onClick={() => {
                  setEnrolledModel(true);
                  setSelectedServiceId(service?._id);
                  setSelectedServiceName(service?.serviceName);
                  setMinum(
                    service.minInvestment ? Number(service.minInvestment) : 0
                  );
                  setmaximum(
                    service.maxInvestment ? Number(service.maxInvestment) : 0
                  );
                }}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Enrolled
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Sending Global Message */}
      {showGlobalModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-center">
              Send Message To All Users
            </h2>
            <textarea
              rows="4"
              placeholder="Type your global message here..."
              value={globalMessage}
              onChange={(e) => setGlobalMessage(e.target.value)}
              className="p-3 border border-gray-300 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Sending Method Selection */}
            <div className="flex items-center mb-4">
              <label className="mr-4">Send Via:</label>
              <label className="flex items-center mr-2">
                <input
                  type="checkbox"
                  checked={sendVia.whatsapp}
                  onChange={() =>
                    setSendVia((prev) => ({
                      ...prev,
                      whatsapp: !prev.whatsapp,
                    }))
                  }
                  className="mr-2"
                />
                <FaWhatsapp className="mr-1" /> WhatsApp
              </label>
              <label className="flex items-center mr-2">
                <input
                  type="checkbox"
                  checked={sendVia.email}
                  onChange={() =>
                    setSendVia((prev) => ({ ...prev, email: !prev.email }))
                  }
                  className="mr-2"
                />
                <MdEmail className="mr-1" /> Email
              </label>
              <label className="flex items-center mr-2">
                <input
                  type="checkbox"
                  checked={sendVia.sms}
                  onChange={() =>
                    setSendVia((prev) => ({ ...prev, sms: !prev.sms }))
                  }
                  className="mr-2"
                />
                <AiOutlineMessage className="mr-1" /> SMS
              </label>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                Send to All Users
              </button>
              <button
                onClick={() => setShowGlobalModal(false)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200 ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {enrolledModel && selectedServiceId && selectedServiceName && (
        <EnrollmentForm
          serviceId={selectedServiceId}
          serviceName={selectedServiceName}
          onClose={setEnrolledModel}
          minimun={minimun}
          maxmium={maxmium}
        />
      )}
    </div>
  );
};

export default GetAllService;
