import React, { useEffect, useState } from "react";
import {
  FaExclamationCircle,
  FaRegEnvelope,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { getQueryApi } from "../../../services/operations/auth";

const ComplaintsTable = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      const data = await getQueryApi();
      if (data) {
        setQueries(data);
      }
    };

    fetchQueries();
  }, []);

  return (
    <div
      className="w-[90%] mx-auto my-5 p-4 bg-yellow-50 rounded-lg shadow-lg"
      id="complain"
    >
      <h2 className="text-xl font-semibold text-center mb-4 text-red-600">
        Number of Complaints
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-red-300">
          <thead>
            <tr className="bg-red-200">
              <th
                scope="col"
                className="border border-red-300 px-4 py-2 text-red-800 text-left"
              >
                <div className="flex items-center">
                  <FaExclamationCircle className="mr-2" /> At the Beginning of
                  the Month
                </div>
              </th>
              <th
                scope="col"
                className="border border-red-300 px-4 py-2 text-red-800 text-left"
              >
                <div className="flex items-center">
                  <FaRegEnvelope className="mr-2" /> Received During the Month
                </div>
              </th>
              <th
                scope="col"
                className="border border-red-300 px-4 py-2 text-red-800 text-left"
              >
                <div className="flex items-center">
                  <FaCheckCircle className="mr-2" /> Resolved During the Month
                </div>
              </th>
              <th
                scope="col"
                className="border border-red-300 px-4 py-2 text-red-800 text-left"
              >
                <div className="flex items-center">
                  <FaClock className="mr-2" /> Pending at the End of the Month
                </div>
              </th>
              <th
                scope="col"
                className="border border-red-300 px-4 py-2 text-red-800 text-left"
              >
                <div className="flex items-center">
                  <FaExclamationCircle className="mr-2" /> Reasons for Pendency
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {queries.length > 0 ? (
              queries.map((query, index) => (
                <tr key={index} className="bg-white hover:bg-red-50">
                  <td className="border border-red-300 px-4 py-2 text-center text-red-600">
                    {query.beginningOfTheMonth}
                  </td>
                  <td className="border border-red-300 px-4 py-2 text-center text-red-600">
                    {query.duringTheMonth}
                  </td>
                  <td className="border border-red-300 px-4 py-2 text-center text-red-600">
                    {query.redolvedDuringTheMonth}
                  </td>
                  <td className="border border-red-300 px-4 py-2 text-center text-red-600">
                    {query.pendingEndOfTheMonth}
                  </td>
                  <td className="border border-red-300 px-4 py-2 text-center text-red-600">
                    {query.reasonForPending}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="border border-red-300 px-4 py-2 text-center text-red-600"
                >
                  No queries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplaintsTable;
