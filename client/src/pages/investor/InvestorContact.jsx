import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import contact from "../../assets/contact.jpg";
import Modal from "../../components/investor/comman/Modal";
import InvestorNavbar from "../../components/investor/comman/InvestorNavbar";
import Notification from "../../components/core/home/Notification";
import { sendContactForm } from "../../services/operations/auth";

const InvestorContact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialFormData = {
    name: "",
    email: "",
    contact: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendContactForm(formData);
    if (response?.data?.success) {
      setFormData(initialFormData);
    }
    toggleModal();
  };

  return (
    <div>
      <Notification />
      <InvestorNavbar />
      <div className="relative flex justify-center items-center">
        <img
          src={contact}
          alt="contact"
          className="w-full max-h-[85vh] object-cover"
        />

        <div className="absolute flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Contact</h1>
          <FaChevronDown className="text-white text-3xl mt-4 animate-bounce" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-5 grid lg:grid-cols-2">
        <div className="flex flex-col w-full md:w-1/2 p-4">
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Address:</h3>
            <p>
              plot,9, Sector C Rd, Govindpura Industrial Area, Bhopal, Madhya
              Pradesh 462023
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Phone Number:</h3>
            <p>+ (91) 777-100 4878</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email:</h3>
            <p>121@tradegyan.co</p>
          </div>

          <button
            onClick={toggleModal}
            className="mt-6 px-6 py-3 bg-[#631f28] text-white text-lg font-bold rounded-lg hover:bg-[#3b4451] transition duration-300"
          >
            Enquiry Now
          </button>
        </div>

        <div>
          <iframe
            title="Trade Gyan Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14662.38355328528!2d77.4562741!3d23.2577881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69e288cb22d9%3A0x560387e9851c6181!2sTrade%20Gyan%20Solution!5e0!3m2!1sen!2sin!4v1728912306890!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        onSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
    </div>
  );
};

export default InvestorContact;
