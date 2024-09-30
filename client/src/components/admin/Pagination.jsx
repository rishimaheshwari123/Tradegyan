import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'; // Import icons

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center mt-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1} // Disable if on the first page
        className={`flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-l-lg hover:bg-blue-700 transition ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <FaAngleLeft className="mr-2" />
        Previous
      </button>

      {/* Page Number Buttons */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`mx-1 px-3 py-1 text-sm font-medium rounded-lg transition-colors ${
            number === currentPage
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-300'
          }`}
        >
          {number}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages} // Disable if on the last page
        className={`flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-r-lg hover:bg-blue-700 transition ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Next
        <FaAngleRight className="ml-2" />
      </button>
    </div>
  );
};

export default Pagination;
