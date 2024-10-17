import React, { useEffect, useState } from "react";
import {
  FaExclamationCircle,
  FaRegEnvelope,
  FaCheckCircle,
  FaClock,
  FaTimes, // Cross icon
} from "react-icons/fa";
import { getQueryApi } from "../../../services/operations/auth";

const Complain = () => {
  const [queries, setQueries] = useState([]);
  const [showModal, setShowModal] = useState(true); // Control modal visibility

  useEffect(() => {
    const fetchQueries = async () => {
      const data = await getQueryApi();
      if (data) {
        setQueries(data);
      }
    };

    fetchQueries();
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-[97%] max-w-7xl relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black "
            >
              <FaTimes size={24} />
            </button>
            <div className="w-full mx-auto my-5 p-4 bg-yellow-50 rounded-lg shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-center mb-4 text-black">
                Number of Complaints
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-red-300">
                  <thead>
                    <tr className="bg-red-200">
                      <th
                        scope="col"
                        className="border border-red-300 px-2 sm:px-4 py-2 text-black text-left"
                      >
                        <div className="flex items-center">
                          <FaExclamationCircle className="mr-1 sm:mr-2" />{" "}
                          Beginning of the Month
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="border border-red-300 px-2 sm:px-4 py-2 text-black text-left"
                      >
                        <div className="flex items-center">
                          <FaRegEnvelope className="mr-1 sm:mr-2" /> Received
                          During the Month
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="border border-red-300 px-2 sm:px-4 py-2 text-black text-left"
                      >
                        <div className="flex items-center">
                          <FaCheckCircle className="mr-1 sm:mr-2" /> Resolved
                          During the Month
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="border border-red-300 px-2 sm:px-4 py-2 text-black text-left"
                      >
                        <div className="flex items-center">
                          <FaClock className="mr-1 sm:mr-2" /> Pending at the
                          End of the Month
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="border border-red-300 px-2 sm:px-4 py-2 text-black text-left"
                      >
                        <div className="flex items-center">
                          <FaExclamationCircle className="mr-1 sm:mr-2" />{" "}
                          Reasons for Pendency
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {queries.length > 0 ? (
                      queries.map((query, index) => (
                        <tr key={index} className="bg-white hover:bg-red-50">
                          <td className="border border-red-300 px-2 sm:px-4 py-2 text-center text-black">
                            {query.beginningOfTheMonth}
                          </td>
                          <td className="border border-red-300 px-2 sm:px-4 py-2 text-center text-black">
                            {query.duringTheMonth}
                          </td>
                          <td className="border border-red-300 px-2 sm:px-4 py-2 text-center text-black">
                            {query.redolvedDuringTheMonth}
                          </td>
                          <td className="border border-red-300 px-2 sm:px-4 py-2 text-center text-black">
                            {query.pendingEndOfTheMonth}
                          </td>
                          <td className="border border-red-300 px-2 sm:px-4 py-2 text-center text-black">
                            {query.reasonForPending}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="border border-red-300 px-2 sm:px-4 py-2 text-center text-black"
                        >
                          No queries found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Complain;
