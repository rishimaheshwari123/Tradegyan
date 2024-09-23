import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createService } from "../../../services/operations/auth";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [availablePlans, setAvailablePlans] = useState(""); // Changed to string for select
  const [advisorName, setAdvisorName] = useState("");
  const [rating, setRating] = useState(0);
  const [targetAudience, setTargetAudience] = useState("");
  const [riskLevel, setRiskLevel] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [minInvestment, setMinInvestment] = useState("");
  const [maxInvestment, setMaxInvestment] = useState("");
  const [serviceAvailability, setServiceAvailability] = useState(true);

  const { token } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceData = {
      serviceName,
      description,
      serviceCategory,
      price,
      duration,
      availablePlans,
      advisorName,
      rating,
      targetAudience,
      riskLevel,
      investmentType,
      minInvestment,
      maxInvestment,
      serviceAvailability,
    };

    try {
      const result = await createService(serviceData, token);
      if (result) {
        setServiceName("");
        setDescription("");
        setServiceCategory("");
        setPrice("");
        setDuration("");
        setAvailablePlans("");
        setAdvisorName("");
        setRating(0);
        setTargetAudience("");
        setRiskLevel("");
        setInvestmentType("");
        setMinInvestment("");
        setMaxInvestment("");
        setServiceAvailability(true);
      }
    } catch (error) {
      console.error("Failed to create service:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Service Name
          </label>
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            placeholder="Service Name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Service Category
          </label>
          <select
            value={serviceCategory}
            onChange={(e) => setServiceCategory(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Service Category</option>
            <option value="Consulting">Consulting</option>
            <option value="Training">Training</option>
            <option value="Support">Support</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Advisor Name
          </label>
          <input
            type="text"
            value={advisorName}
            onChange={(e) => setAdvisorName(e.target.value)}
            placeholder="Service Name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Target Audience
          </label>
          <input
            type="text"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            placeholder="Service Name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Min Investment
          </label>
          <input
            type="text"
            value={minInvestment}
            onChange={(e) => setMinInvestment(e.target.value)}
            placeholder="Service Name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Max Investment
          </label>
          <input
            type="text"
            value={maxInvestment}
            onChange={(e) => setMaxInvestment(e.target.value)}
            placeholder="Service Name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Available Plans
          </label>
          <select
            value={availablePlans}
            onChange={(e) => setAvailablePlans(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Available Plan</option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
            <option value="Enterprise">Enterprise</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Risk Level
          </label>
          <select
            value={riskLevel}
            onChange={(e) => setRiskLevel(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Risk Level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Investment Type
          </label>
          <select
            value={investmentType}
            onChange={(e) => setInvestmentType(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Investment Type</option>
            <option value="Stocks">Stocks</option>
            <option value="Bonds">Bonds</option>
            <option value="Real Estate">Real Estate</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Service Availability
          </label>
          <select
            value={serviceAvailability ? "available" : "unavailable"}
            onChange={(e) =>
              setServiceAvailability(e.target.value === "available")
            }
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Create Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
