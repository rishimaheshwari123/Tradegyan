import React, { useState } from "react";
import { createQueryApi } from "../../../services/operations/auth";
import Swal from "sweetalert2";

const AddQuery = () => {
  const [beginningOfTheMonth, setBeginningOfTheMonth] = useState("");
  const [duringTheMonth, setDuringTheMonth] = useState("");
  const [redolvedDuringTheMonth, setRedolvedDuringTheMonth] = useState("");
  const [pendingEndOfTheMonth, setPendingEndOfTheMonth] = useState("");
  const [reasonForPending, setReasonForPending] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceData = {
      beginningOfTheMonth,
      duringTheMonth,
      redolvedDuringTheMonth,
      pendingEndOfTheMonth,
      reasonForPending,
    };

    try {
      const result = await createQueryApi(serviceData);
      if (result) {
        setBeginningOfTheMonth("");
        setDuringTheMonth("");
        setRedolvedDuringTheMonth("");
        setPendingEndOfTheMonth("");
        setReasonForPending("");

        Swal.fire({
          title: "Success!",
          text: result?.data?.message,
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Failed to create service:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Query</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            At the Beginning of the Month
          </label>
          <input
            type="text"
            value={beginningOfTheMonth}
            onChange={(e) => setBeginningOfTheMonth(e.target.value)}
            placeholder="At the Beginning of the Month"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Received During the Month
          </label>
          <input
            type="text"
            value={duringTheMonth}
            onChange={(e) => setDuringTheMonth(e.target.value)}
            placeholder="Received During the Month"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Resolved During the Month
          </label>
          <input
            type="text"
            value={redolvedDuringTheMonth}
            onChange={(e) => setRedolvedDuringTheMonth(e.target.value)}
            placeholder="Resolved During the Month
"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pending at the End of the Month
          </label>
          <input
            type="text"
            value={pendingEndOfTheMonth}
            onChange={(e) => setPendingEndOfTheMonth(e.target.value)}
            placeholder="Pending at the End of the Month

"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Reasons for Pendency
          </label>
          <input
            type="text"
            value={reasonForPending}
            onChange={(e) => setReasonForPending(e.target.value)}
            placeholder="Reasons for Pendency


"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Create Query
        </button>
      </form>
    </div>
  );
};

export default AddQuery;
