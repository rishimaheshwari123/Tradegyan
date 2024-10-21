import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { toast } from "react-toastify";

const InquiryForm = () => {
  const [showModal, setShowModal] = useState(true);
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && contactNumber) {
      // Handle form submission logic here
      toast.success("Inquiry submitted successfully!");
      setShowModal(false); // Close modal after submission
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black"
            >
              <FaTimes size={20} />
            </button>
            <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-md">
              {/* Highlighted Advice Message */}
              <div className="mb-4 text-center text-lg font-semibold text-blue-600">
                “Free” Advice is more Expensive than “Fee” Advice
              </div>
              
              <h2 className="text-xl font-semibold mb-4 text-center">
                Inquiry Form
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center mb-1 text-sm font-medium"
                  >
                    <span className="mr-2">
                      <AiFillPhone className="text-blue-500" />
                    </span>
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="flex items-center mb-1 text-sm font-medium"
                  >
                    <span className="mr-2">
                      <AiFillPhone className="text-blue-500" />
                    </span>
                    Contact Number:
                  </label>
                  <input
                    type="text"
                    id="contact"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your contact number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InquiryForm;
