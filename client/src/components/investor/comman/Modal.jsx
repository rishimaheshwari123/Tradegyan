import React from "react";

const Modal = ({ isOpen, toggleModal, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Phone"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={toggleModal}
              className="px-4 py-2 bg-gray-300 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#631f28] text-white rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
