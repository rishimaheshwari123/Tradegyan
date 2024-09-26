import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import Navbar from "../components/comman/Navbar";

const Support = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Support & Help Center
          </h1>
          <p className="text-center text-gray-600 mb-8">
            We are here to help you with any questions or issues you may have.
            Feel free to reach out to us via phone, email, or visit us.
          </p>

          {/* Support Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Support */}
            <div className="flex flex-col items-center text-center">
              <FaPhoneAlt className="text-4xl text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Phone Support</h2>
              <p className="text-gray-600">Call us at:</p>
              <p className="font-bold text-blue-700">+1 (123) 456-7890</p>
            </div>

            {/* Email Support */}
            <div className="flex flex-col items-center text-center">
              <FaEnvelope className="text-4xl text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Email Support</h2>
              <p className="text-gray-600">Send us an email:</p>
              <p className="font-bold text-blue-700">
                support@investadvisor.com
              </p>
            </div>

            {/* Office Location */}
            <div className="flex flex-col items-center text-center">
              <FaMapMarkerAlt className="text-4xl text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Office Location</h2>
              <p className="text-gray-600">Visit us at:</p>
              <p className="font-bold text-blue-700">
                123 Finance St, Suite 100
              </p>
              <p className="font-bold text-blue-700">New York, NY 10001</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FiHelpCircle className="text-blue-600 text-2xl mr-2" />
                <p className="font-semibold">
                  How can I reset my account password?
                </p>
              </div>
              <div className="flex items-center">
                <FiHelpCircle className="text-blue-600 text-2xl mr-2" />
                <p className="font-semibold">
                  What investment services do you offer?
                </p>
              </div>
              <div className="flex items-center">
                <FiHelpCircle className="text-blue-600 text-2xl mr-2" />
                <p className="font-semibold">
                  How can I contact my financial advisor?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
