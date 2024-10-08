import React, { useEffect, useState } from "react";
import { getQueryApi } from "../../../services/operations/auth"; // Assuming getQueryApi is in a separate file

const GetQuery = () => {
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
    <div className="container mx-auto px-4 h-[80vh]">
      <h1 className="text-2xl font-semibold mb-6 text-center">Query List</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Beginning of the Month</th>
              <th className="py-3 px-6 text-left">During the Month</th>
              <th className="py-3 px-6 text-left">Resolved During the Month</th>
              <th className="py-3 px-6 text-left">Pending End of the Month</th>
              <th className="py-3 px-6 text-left">Reason for Pending</th>
              <th className="py-3 px-6 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {queries.length > 0 ? (
              queries.map((query, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">
                    {query.beginningOfTheMonth}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {query.duringTheMonth}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {query.redolvedDuringTheMonth}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {query.pendingEndOfTheMonth}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {query.reasonForPending}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {new Date(query.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-3 px-6 text-center">
                  No Queries Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetQuery;
