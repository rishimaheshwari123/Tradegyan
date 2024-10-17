import React, { useEffect } from "react";
import { FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import Navbar from "../components/comman/Navbar";

const ComplaintEscalation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Complaint Escalation Process
          </h1>

          <p className="text-gray-600 mb-6">
            Please follow the procedure below to register your complaint with
            us:
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Level 1
            </h2>
            <p className="text-gray-600">
              All clients having complaints regarding any service or otherwise
              shall write a mail to{" "}
              <a
                href="mailto:compliance@tradegyan.co"
                className="text-blue-600 underline"
              >
                compliance@tradegyan.co
              </a>
              . To ensure timely recording and recognition of the grievance, the
              respective department shall revert within 72 hours with redressal
              of such complaints.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Level 2
            </h2>
            <p className="text-gray-600">
              If the client still wants to escalate the complaint, they can
              approach{" "}
              <span className="font-bold">
                Compliance Officer Himanshu Muralia
              </span>{" "}
              at{" "}
              <a href="tel:+917771004878" className="text-blue-600 underline">
                7771004878
              </a>
              . The complaint will be resolved within 48 hours.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-6">
            <p className="text-gray-600">
              Please note that in case the client marks a copy of the mail to
              all levels, it will not be considered escalated. The complaint
              shall always start from <span className="font-bold">Level 1</span>
              , and only after a separate mail following the expiration or reply
              from the previous level will it be escalated to the next level.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <a
              href="https://www.scores.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Visit SEBI SCORES Website
              <FaArrowRight className="ml-2" />
            </a>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:compliance@tradegyan.co"
                className="text-gray-500 hover:text-gray-800"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="tel:+917771004878"
                className="text-gray-500 hover:text-gray-800"
              >
                <FaPhone size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintEscalation;
