import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import contact from "../../assets/contact.jpg";
import Modal from "../../components/investor/comman/Modal"; // Import the Modal component
import InvestorNavbar from "../../components/investor/comman/InvestorNavbar";

const InvestorContact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toggleModal(); // Close the modal after submission
  };

  return (
    <div>
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
        {/* Left Column: Contact Details */}
        <div className="flex flex-col w-full md:w-1/2 p-4">
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Address:</h3>
            <p>123, Main Street, Your City, Your State, 123456</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Phone Number:</h3>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email:</h3>
            <p>info@yourcompany.com</p>
          </div>

          <button
            onClick={toggleModal}
            className="mt-6 px-6 py-3 bg-[#631f28] text-white text-lg font-bold rounded-lg hover:bg-[#3b4451] transition duration-300"
          >
            Enquiry Now
          </button>
        </div>

        {/* Right Column: Map */}
        <div>
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.8510343500087!2d144.955432715673!3d-37.8173259797515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cb1aa9f2ad71!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1615530123456!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default InvestorContact;
