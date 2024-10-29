import React, { useEffect, useState } from "react";
import { getSingelService } from "../services/operations/auth";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/comman/Footer";
import TraderNavbar from "../components/comman/Navbar";
import { BuyProduct } from "../services/operations/order";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const SingleService = () => {
  const [service, setService] = useState(null);
  const { id } = useParams();
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const singleService = async () => {
    try {
      const response = await getSingelService(id);
      setService(response);
    } catch (error) {
      console.error("Failed to fetch service details:", error);
    }
  };

  useEffect(() => {
    singleService();
  }, []);

  const enrollService = async () => {
    if (!token) {
      Swal.fire({
        title: "You need to login!",
        text: "Please log in to proceed with the enrollment.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/client-login");
        }
      });
      return; // Exit if not logged in
    }

    try {
      await BuyProduct(token, id, service.price, user, navigate, dispatch);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TraderNavbar />
      <div className="p-4 sm:p-6">
        {service ? (
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-lg p-8 space-y-6">
            {/* Title and Description */}
            <div className="border-b pb-4">
              <h1 className="text-4xl font-bold text-blue-700 mb-4">
                {service.serviceName}
              </h1>
              <p className="text-gray-700 text-lg">{service.description}</p>
            </div>

            {/* Service Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold">
                  <span className="font-bold text-gray-800">Category: </span>
                  {service.serviceCategory}
                </p>
                <p className="font-semibold">
                  <span className="font-bold text-gray-800">Price: </span>₹{service.price}
                </p>
                <p className="font-semibold">
                  <span className="font-bold text-gray-800">Duration: </span>
                  {service.duration}
                </p>
                <p className="font-semibold">
                  <span className="font-bold text-gray-800">Available Plans: </span>
                  {service.availablePlans}
                </p>
              </div>
              <div>
            
                <p className="font-semibold">
                  <span className="font-bold text-gray-800">Risk Level: </span>
                  {service.riskLevel}
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  <span className="font-bold text-gray-800">Investment Type: </span>
                  {service.investmentType}
                </p>
                <p className="font-semibold">
                  <span className="font-bold text-gray-800">Minimum Investment: </span>₹{service.minInvestment}
                </p>
                <p className="font-semibold">
                  <span className="font-bold text-gray-800">Maximum Investment: </span>₹{service.maxInvestment}
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  <span className="font-bold text-gray-800">Availability: </span>
                  {service.serviceAvailability ? "Available" : "Unavailable"}
                </p>
              </div>
            </div>

            {/* Subscription Button */}
            {/* <div className="text-center mt-8">
              <button
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105 shadow-md"
                onClick={enrollService}
              >
                Subscribe Now
              </button>
            </div> */}
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading service details...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SingleService;
