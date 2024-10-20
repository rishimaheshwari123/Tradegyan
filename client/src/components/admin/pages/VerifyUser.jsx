import React, { useEffect, useState } from "react";
import { getAllUser } from "../../../services/operations/admin";
import { verifyUserApi } from "../../../services/operations/auth";
import { FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const VerifyUser = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  // Fetch all users
  const getAllUserFunction = async () => {
    const response = await getAllUser();
    if (response?.success) {
      setUsers(response.data);
    }
  };

  useEffect(() => {
    getAllUserFunction();
  }, []);

  // Handle input changes in the modal
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
    if (selectedUser) {
      const response = await verifyUserApi(name, password, selectedUser._id);

      Swal.fire({
        title: response?.message,
        text: `Have a nice day!`,
        icon: "success",
      });
    }
    setShowModal(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Verify Users</h1>
      <div className="overflow-x-auto">
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
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter Username"
              />
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
    </div>
  );
};

export default VerifyUser;
