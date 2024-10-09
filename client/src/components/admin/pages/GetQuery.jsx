import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  getQueryApi,
  deleteQueryApi,
  updateQueryApi,
} from "../../../services/operations/auth";
import Swal from "sweetalert2";

// Set the root element for the modal
Modal.setAppElement("#root");

const GetQuery = () => {
  const [queries, setQueries] = useState([]);
  const [editingQuery, setEditingQuery] = useState(null); // Holds the query to be edited
  const [updatedData, setUpdatedData] = useState({}); // Holds the new values for update
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls the modal visibility

  useEffect(() => {
    const fetchQueries = async () => {
      const data = await getQueryApi();
      if (data) {
        setQueries(data);
      }
    };

    fetchQueries();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await deleteQueryApi(id);
      setQueries(queries.filter((query) => query._id !== id)); // Remove deleted query from the list
    }
  };

  const handleEdit = (query) => {
    setEditingQuery(query); // Set the query to be edited
    setUpdatedData(query); // Set previous data in the updatedData state
    setIsModalOpen(true); // Open the modal
  };

  const handleUpdate = async () => {
    if (!editingQuery) return;

    // Call the update API
    await updateQueryApi(editingQuery._id, updatedData);

    // Refresh the query list after update
    const data = await getQueryApi();
    setQueries(data);
    setEditingQuery(null); // Clear the editing query
    setIsModalOpen(false); // Close the modal
  };

  const handleChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value || editingQuery[e.target.name], // Keep the previous value if not updated
    });
  };

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
              <th className="py-3 px-6 text-left">Actions</th>
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
                    {query.resolvedDuringTheMonth}
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
                  <td className="py-3 px-6 text-left">
                    <button
                      onClick={() => handleEdit(query)}
                      className="text-blue-600 hover:underline mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(query._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-3 px-6 text-center">
                  No Queries Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingQuery && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Edit Query Modal"
          className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <h2 className="text-lg font-semibold mb-4">Edit Query</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium">
              Beginning of the Month
            </label>
            <input
              type="text"
              name="beginningOfTheMonth"
              defaultValue={editingQuery.beginningOfTheMonth}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">
              During the Month
            </label>
            <input
              type="text"
              name="duringTheMonth"
              defaultValue={editingQuery.duringTheMonth}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">
              Resolved During the Month
            </label>
            <input
              type="text"
              name="resolvedDuringTheMonth"
              defaultValue={editingQuery.resolvedDuringTheMonth}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">
              Pending End of the Month
            </label>
            <input
              type="text"
              name="pendingEndOfTheMonth"
              defaultValue={editingQuery.pendingEndOfTheMonth}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">
              Reason for Pending
            </label>
            <input
              type="text"
              name="reasonForPending"
              defaultValue={editingQuery.reasonForPending}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Additional fields as needed */}

          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Update Query
          </button>
        </Modal>
      )}
    </div>
  );
};

export default GetQuery;
