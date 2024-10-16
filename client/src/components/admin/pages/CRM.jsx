import React, { useEffect, useState } from "react";
import { getAllUser } from "../../../services/operations/admin"; 
import { FaUser, FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa"; 
import Pagination from "../Pagination"; 
import { Link } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon
import { MdEmail } from 'react-icons/md'; // Email icon
import axios from 'axios';
import Swal from 'sweetalert2'; // Make sure you have SweetAlert2 imported

const BASE_URL = process.env.REACT_APP_BASE_URL; // Update this to your actual backend URL

function CRM() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1); 
  const [limit] = useState(10); 
  const [totalPages, setTotalPages] = useState(0); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [sortOrder, setSortOrder] = useState("newest"); 
  const [globalMessage, setGlobalMessage] = useState(""); 
  const [showGlobalModal, setShowGlobalModal] = useState(false); 
  const [showMessageModal, setShowMessageModal] = useState(false); 
  const [selectedUser, setSelectedUser] = useState(null); 
  const [messageContent, setMessageContent] = useState(""); 
  const [sendVia, setSendVia] = useState("whatsapp"); // Default to WhatsApp
  const [isGlobalMessage, setIsGlobalMessage] = useState(false); // Flag to indicate if sending globally
  const[seletcUser,setUser] = useState(null)

  const fetchUser = async (currentPage, searchQuery, sortOrder) => {
    const response = await getAllUser(currentPage, limit, searchQuery, sortOrder); 
    if (response) {
      setUsers(response.data); 
      setTotalPages(response.totalPages); 
    }
  };

  useEffect(() => {
    fetchUser(page, searchQuery, sortOrder); 
  }, [page, searchQuery, sortOrder]); 

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setPage(1); 
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setPage(1); 
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

  // Handle sending messages to backend

  const handleSendMessage = async () => {
    const message = isGlobalMessage ? globalMessage : messageContent;
    const targetUser = isGlobalMessage ? null : selectedUser; // Null for global messages
  
    // Show the loading Swal
    Swal.fire({
      title: 'Sending message...',
      text: 'Please wait while the message is being sent',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  
    try {
      const response = await axios.post(`${BASE_URL}/auth/send-message`, {
        messageContent: message,
        userId: targetUser,
        sendVia: sendVia // Include the sending method
      });
  
      // Show success Swal when the message is sent successfully
      Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        text: 'The message was sent successfully!',
      });
  
      // console.log("Message sent:", response.data);
  
      // Reset state
      setGlobalMessage("");
      setMessageContent("");
      setShowGlobalModal(false);
      setShowMessageModal(false);
      setSelectedUser(null);
      setIsGlobalMessage(false);
    } catch (error) {
      // Show error Swal if there's a failure
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to send the message. Please try again.',
      });
  
      console.error("Error sending message:", error);
    }
  };
  

  const handleSendGlobalMessage = () => {
    setIsGlobalMessage(true); 
    setShowGlobalModal(true); 
  };

  const handleSendMessageToUser = (userId) => {
    setSelectedUser(userId); 
    setShowMessageModal(true); 
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex lg:justify-between my-5 flex-col lg:flex-row">
        <h1 className="text-2xl font-bold mb-4">CRM - User Management</h1>
        <button onClick={handleDownloadExcel} className="bg-blue-500 text-white p-2 rounded">
          Download Users Excel
        </button>
      </div>

      {/* Global Message Section */}
      <div className="mb-4">
        <button onClick={handleSendGlobalMessage} className="bg-green-500 text-white p-2 rounded flex items-center">
          <FaPaperPlane className="mr-2" /> Send Message To All Users
        </button>

        {/* Global Message Modal */}
        {showGlobalModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-xl font-bold mb-4 text-center">Send Message To All Users</h2>
      <textarea
        rows="4"
        placeholder="Type your global message here..."
        value={globalMessage}
        onChange={(e) => setGlobalMessage(e.target.value)}
        className="p-3 border border-gray-300 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {/* Sending Method Selection */}
      <div className="flex items-center mb-4">
        <label className="mr-4">Send Via:</label>
        <label className="flex items-center mr-2">
          <input
            type="radio"
            value="whatsapp"
            checked={sendVia === "whatsapp"}
            onChange={() => setSendVia("whatsapp")}
            className="mr-2"
          />
          <FaWhatsapp className="mr-1" /> WhatsApp
        </label>
        <label className="flex items-center mr-2">
          <input
            type="radio"
            value="email"
            checked={sendVia === "email"}
            onChange={() => setSendVia("email")}
            className="mr-2"
          />
          <MdEmail className="mr-1" /> Email
        </label>
        <label className="flex items-center mr-2">
          <input
            type="radio"
            value="both"
            checked={sendVia === "both"}
            onChange={() => setSendVia("both")}
            className="mr-2"
          />
          <span>Both</span>
        </label>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Send to All Users
        </button>
        <button
          onClick={() => {setShowGlobalModal(false) ; setIsGlobalMessage(false);}}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200 ml-2"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      </div>

      {/* Search and Sort Inputs */}
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
      </div>

      {/* User Table */}
     <div className="overflow-x-auto">
     <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-scroll">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b border-gray-300 text-left">Name</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">Email</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">Contact Number</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300">
                <Link to={`/admin/user/${user?._id}`} className="flex items-center underline text-blue-700">
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
                  <FaPhoneAlt className="mr-2 text-gray-600" />
                  {user?.contactNumber || "Contact not provided"}
                </div>
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                <button
                  onClick={() =>{ handleSendMessageToUser(user._id) ; setUser(user?.name)}}
                  className="bg-blue-500 text-white p-1 rounded"
                >
                  Send Message
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Individual Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-center">Send Message To  {seletcUser}</h2>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              className="p-3 border border-gray-300 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center mb-4">
              <label className="mr-4">Send Via:</label>
              <label className="flex items-center mr-2">
                <input
                  type="radio"
                  value="whatsapp"
                  checked={sendVia === "whatsapp"}
                  onChange={() => setSendVia("whatsapp")}
                  className="mr-2"
                />
                <FaWhatsapp className="mr-1" /> WhatsApp
              </label>
              <label className="flex items-center mr-2">
                <input
                  type="radio"
                  value="email"
                  checked={sendVia === "email"}
                  onChange={() => setSendVia("email")}
                  className="mr-2"
                />
                <MdEmail className="mr-1" /> Email
              </label>
              <label className="flex items-center mr-2">
                <input
                  type="radio"
                  value="both"
                  checked={sendVia === "both"}
                  onChange={() => setSendVia("both")}
                  className="mr-2"
                />
                <span>Both</span>
              </label>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                Send
              </button>
              <button
                onClick={() => setShowMessageModal(false)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200 ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}

export default CRM;
