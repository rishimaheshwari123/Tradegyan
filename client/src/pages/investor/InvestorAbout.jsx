import React from "react";
import { FaChevronDown } from "react-icons/fa";
import about from "../../assets/about.png";
import AboutGrid from "../../components/investor/core/about/AboutGrid";
import Slider from "../../components/investor/core/about/Slider";
import InvestorNavbar from "../../components/investor/comman/InvestorNavbar";
import Notification from "../../components/core/home/Notification";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const InvestorAbout = () => {
  return (
    <div>
      {/* <Notification /> */}
      <InvestorNavbar />
      <div className="relative flex justify-center items-center">
        <img
          src={about}
          alt="Service"
          className="w-full max-h-[85vh] object-cover"
        />

        <div className="absolute flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            About Us
          </h1>
          <br />
          <br />
          <br />
          <FaChevronDown className="text-white text-3xl mt-4 animate-bounce" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto p-5">
        <img
          src="https://www.dilzer.net/images/about-us/mission-statement.png"
          alt="Mission Statement"
          className="w-54 h-52 mb-4"
        />
        <p className="font-bold text-2xl mb-2">Mission Statement</p>
        <p className="text-xl ">
          "We will enable our clients to achieve their goals by providing the
          best in financial guidance, and maintaining the strictest possible
          standards with close and interactive engagement.”
        </p>
      </div>
      <br />
      <br />
      <div className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-md w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          SEBI Registered Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Registered Name */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600">
              SEBI Registered Name
            </h3>
            <p className="text-gray-800">
              Himanshu Muralia Proprietor of Trade Gyan Solutions
            </p>
          </div>

          {/* Trade Name */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600">Trade Name</h3>
            <p className="text-gray-800">TRADE GYAN SOLUTIONS</p>
          </div>

          {/* SEBI Registration No */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600">
              SEBI Registration No.
            </h3>
            <p className="text-gray-800">INA000008808</p>
          </div>

          {/* Principal / Compliance Officer */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600">
              Principal / Compliance Officer
            </h3>
            <p className="text-gray-800">Himanshu Muralia</p>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-gray-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Address</h3>
              <p className="text-gray-800">
                Plot No.9, Sector C, Govindpura Industrial Area, J.K. Road,
                Bhopal, Madhya Pradesh, 462023
              </p>
            </div>
          </div>

          {/* SEBI Office Address */}
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-gray-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">
                SEBI Office Address
              </h3>
              <p className="text-gray-800">
                305, 3rd Floor, Satguru Parinay, AB Rd, Opposite C-21 Mall,
                Indore, Madhya Pradesh 452010
              </p>
            </div>
          </div>

          {/* Contact Number */}
          <div className="flex items-start space-x-2">
            <FaPhoneAlt className="text-gray-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">
                Contact No.
              </h3>
              <p className="text-gray-800">+91 7771004878</p>
            </div>
          </div>

          {/* Email Id */}
          <div className="flex items-start space-x-2">
            <FaEnvelope className="text-gray-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Email Id</h3>
              <p className="text-gray-800">himanshu.muralia11@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <AboutGrid />
      <br />
      <br />
      <Slider />
      <br />
      <br />
      <br />
    </div>
  );
};

export default InvestorAbout;
