import React, { useEffect, useState } from "react";
import { getAllUser } from "../../../services/operations/admin"; // Import the user fetch function
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Import icons
import Pagination from "../Pagination"; // Pagination component
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

function CRM() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const [limit] = useState(10); // Items per page
  const [totalPages, setTotalPages] = useState(0); // Total pages
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [sortOrder, setSortOrder] = useState("newest"); // Sort order

  const fetchUser = async (currentPage, searchQuery, sortOrder) => {
    const response = await getAllUser(
      currentPage,
      limit,
      searchQuery,
      sortOrder
    ); // Fetch users with pagination
    if (response) {
      setUsers(response.data); // Set users in the state
      setTotalPages(response.totalPages); // Set total pages for pagination
    }
  };

  // Fetch users on page load and when the page changes
  useEffect(() => {
    fetchUser(page, searchQuery, sortOrder); // Fetch users with search and sort
  }, [page, searchQuery, sortOrder]); // Dependencies include searchQuery and sortOrder

  // Handle pagination page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setPage(1); // Reset to first page on new search
  };

  // Handle sort order change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setPage(1); // Reset to first page on new sort
  };

  const handleDownloadExcel = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/alluser/download`, {
        responseType: "blob", // Important to set this for file download
      });

      // Create a URL for the file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "users.xlsx"); // Set the file name
      document.body.appendChild(link);
      link.click(); // Trigger the download
      link.remove(); // Clean up the link element
    } catch (error) {
      console.error("Error downloading the Excel file:", error);
      alert("Error downloading the file. Please try again later.");
    }
  };
  return (
    <div className="p-6 bg-gray-100">
      <div className=" flex justify-between my-5">
        <h1 className="text-2xl font-bold mb-4">CRM - User Management</h1>
        <button
          onClick={handleDownloadExcel}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Download Users Excel
        </button>
      </div>
      {/* Search and Sort Inputs */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded mr-2 w-full"
        />
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="newest">Sort by Newest</option>
          <option value="oldest">Sort by Oldest</option>
        </select>
      </div>

      {/* User Table */}
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b border-gray-300 text-left">
              Name
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">
              Email
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">
              Contact Number
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300">
                <Link
                  to={`/admin/user/${user?._id}`}
                  className="flex items-center underline text-blue-700"
                >
                  <FaUser className="mr-2 text-gray-600" /> {user?.name}
                </Link>
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-gray-600" /> {user?.email}
                </div>
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                <div className="flex items-center">
                  <FaPhoneAlt className="mr-2 text-gray-600" />{" "}
                  {user?.contactNumber || "Contact not provided"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Component */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default CRM;
