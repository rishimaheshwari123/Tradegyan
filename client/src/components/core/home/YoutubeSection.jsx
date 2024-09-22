import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // For X close button

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-[#1A2138] flex items-center justify-center py-10">
      <button
        onClick={handleModal}
        className="flex items-center space-x-2 text-white text-lg hover:opacity-80 focus:outline-none"
      >
        <div className="w-10 h-10 border-2 border-teal-400 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-teal-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-3.197-2.132c-.53-.354-1.255.032-1.255.696v4.268c0 .664.725 1.05 1.255.696l3.197-2.132a.813.813 0 000-1.396z"
            />
          </svg>
        </div>
        <span className="text-sm lg:text-xl">
          Watch our video to know more about the Software.
        </span>
      </button>

      {/* Modal Section */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 lg:w-3/4 p-5 relative">
            {/* Close Button */}
            <button
              onClick={handleModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black focus:outline-none"
            >
              <FaTimes size={24} />
            </button>

            {/* YouTube Video */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
