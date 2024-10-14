import React, { useEffect, useState } from "react";
import { getSingelService } from "../services/operations/auth";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/comman/Footer";
import TraderNavbar from "../components/comman/Navbar";
import { BuyProduct } from "../services/operations/order";
import { useDispatch, useSelector } from "react-redux";


const SingleService = () => {
  const [service, setService] = useState(null);
  const { id } = useParams();
const {token,user} = useSelector(state=>state.auth)
const navigate = useNavigate()
const dispatch = useDispatch()
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


  const enrollService = async()=>{
    try {
      await BuyProduct(token,id,service.price,user,navigate,dispatch)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <TraderNavbar />
      <div className="p-6">
        {service ? (
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
            {/* Part 1 - Title and Description */}
            <div className="border-b pb-4">
              <h1 className="text-3xl font-bold text-blue-600 mb-4">
                {service.serviceName}
              </h1>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>

            {/* Part 2 - Service Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-700">
                  <span className="font-bold">Category: </span>
                  {service.serviceCategory}
                </p>
                <p className="font-semibold text-gray-700">
                  <span className="font-bold">Price: </span>₹{service.price}
                </p>
                <p className="font-semibold text-gray-700">
                  <span className="font-bold">Duration: </span>
                  {service.duration}
                </p>
                <p className="font-semibold text-gray-700">
                  <span className="font-bold">Available Plans: </span>
                  {service.availablePlans}
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">
                  <span className="font-bold">Advisor Name: </span>
                  {service.advisorName}
                </p>
                <p className="font-semibold text-gray-700">
                  <span className="font-bold">Rating: </span>
                  {service.rating}⭐
                </p>
                <p className="font-semibold text-gray-700">
                  <span className="font-bold">Target Audience: </span>
                  {service.targetAudience}
                </p>
                <p className="font-semibold text-gray-700">
                  <span className="font-bold">Risk Level: </span>
                  {service.riskLevel}
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">
                  <span className="font-bold">Investment Type: </span>
                  {service.investmentType}
                </p>
                <p className="font-semibold text-gray-700">
                  <span className="font-bold">Minimum Investment: </span>₹
                  {service.minInvestment}
                </p>
                <p className="font-semibold text-gray-700">
                  <span className="font-bold">Maximum Investment: </span>₹
                  {service.maxInvestment}
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">
                  <span className="font-bold">Availability: </span>
                  {service.serviceAvailability ? "Available" : "Unavailable"}
                </p>
              </div>
            </div>

            {/* Subscription Button */}
            <div className="text-center mt-6">
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition duration-300" onClick={enrollService}>
                Subscribe Now
              </button>
            </div>
          </div>
        ) : (
          <p>Loading service details...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SingleService;
