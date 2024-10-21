import React, { useEffect, useState } from "react";
import { getAllUser } from "../../../services/operations/admin";
import { verifyUserApi } from "../../../services/operations/auth";
import { FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import Pagination from "../Pagination";

const VerifyUser = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isVerifiedFilter, setIsVerifiedFilter] = useState("all"); // New state for verification filter

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [usernameError, setUsernameError] = useState(""); // State for username error

  // Fetch all users
  const fetchUser = async (currentPage, searchQuery, sortOrder,isVerifiedFilter) => {
    const response = await getAllUser(
      currentPage,
      limit,
      searchQuery,
      sortOrder,
      isVerifiedFilter
    );
    if (response) {
      setUsers(response.data);
      setTotalPages(response.totalPages);
    }
  };


  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    fetchUser(page, searchQuery, sortOrder, isVerifiedFilter === "all" ? undefined : isVerifiedFilter);
  }, [page, searchQuery, sortOrder,isVerifiedFilter]);

  // Handle input changes in the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      // Check if the name contains spaces
      if (/\s/.test(value)) {
        setUsernameError("No spaces allowed");
      } else {
        setUsernameError(""); // Clear error if no spaces
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Verify button click (opens modal)
  const handleVerifyClick = (user) => {
    setSelectedUser(user);
    setFormData({
      name: "",
      password: "",
    });
    setShowModal(true);
  };

  // Handle form submission in the modal
  const handleUpdate = async () => {
    const { name, password } = formData;

    // Check if there's any username error before proceeding
    if (usernameError || !name) {
      Swal.fire({
        title: "Error",
        text: "Please enter a valid username without spaces.",
        icon: "error",
      });
      return;
    }

    if (selectedUser) {
      // Convert name to lowercase and sanitize by removing spaces before sending to the backend
      const lowerCaseName = name.replace(/\s+/g, '').toLowerCase();
      const response = await verifyUserApi(lowerCaseName, password, selectedUser._id);

      if (response?.success) {
        setShowModal(false);
        // Optionally refresh the user list or show a success message
        await fetchUser(page, searchQuery, sortOrder,isVerifiedFilter === "all" ? undefined : isVerifiedFilter); // Refresh user list
        Swal.fire({
          title: "Success",
          text: "User verified successfully!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: response?.message || "Failed to verify user.",
          icon: "error",
        });
      }
    }
  };


  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setPage(1);
  };

  const handleVerificationFilterChange = (e) => {
    console.log(isVerifiedFilter)
    setIsVerifiedFilter(e.target.value);
    setPage(1);
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Verify Users</h1>
      <div className="overflow-x-auto">
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by name, email, or contact number..."
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

        <select
            value={isVerifiedFilter}
            onChange={handleVerificationFilterChange}
            className="p-2 border border-gray-300 rounded ml-2"
          >
            <option value="all">All Users</option>
            <option value="true">Verified Users</option>
            <option value="false">Unverified Users</option>
          </select>

      </div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Contact Number</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {users?.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {user?.name}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {user?.email}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {user?.contactNumber}
                </td>
                <td className="py-3 px-6 text-left">
                  {user?.isVerify ? (
                    <span className="text-green-500">Verified</span>
                  ) : (
                    <span className="text-yellow-500">Pending</span>
                  )}
                </td>
                <td className="py-3 px-6 text-center">
                  {!user?.isVerify && (
                    <button
                      onClick={() => handleVerifyClick(user)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                    >
                      <FaCheckCircle className="mr-2" />
                      Verify Account
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg w-96 p-6">
            <h2 className="text-xl font-semibold mb-4">Verify User</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md ${usernameError ? "border-red-500" : ""}`}
                placeholder="Enter Username"
              />
              {usernameError && (
                <p className="text-red-500 text-sm mt-1">No spaces allowed.</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter Password"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="mr-4 px-4 py-2 border border-gray-500 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default VerifyUser;
