import React, { useState } from 'react';
import axios from 'axios';

const AddComplaint = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [source, setSource] = useState('');
  const [receivedFrom, setReceivedFrom] = useState('');
  const [received, setReceived] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [pending, setPending] = useState(0);
  const [error, setError] = useState('');

  // Generate years for the dropdown (last 10 years)
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 10 }, (_, i) => (currentYear - i).toString());
  };

  // Months for the dropdown
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Source options for dropdown
  const sourceOptions = [
    'Directly From Investors',
    'SEBI (SCORES)',
    'Other Sources (If Any)',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate the inputs
    if (!year || !month || !source || !receivedFrom) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/add', {
        year,
        month,
        source,
        receivedFrom,
        received,
        resolved,
        pending,
      });

      console.log('Complaint added:', response.data);
      // Optionally, reset the form
      setYear('');
      setMonth('');
      setSource('');
      setReceivedFrom('');
      setReceived(0);
      setResolved(0);
      setPending(0);
      setError('');
      alert('Complaint added successfully');
    } catch (error) {
      console.error('Error adding complaint:', error);
      setError('Error adding complaint. Please try again.');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Add Complaint</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Year</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Year</option>
            {generateYears().map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Month</label>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Month</option>
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Source</label>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Source</option>
            {sourceOptions.map((source) => (
              <option key={source} value={source}>{source}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Received From</label>
          <input
            type="text"
            value={receivedFrom}
            onChange={(e) => setReceivedFrom(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Received</label>
          <input
            type="number"
            value={received}
            onChange={(e) => setReceived(Number(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Resolved</label>
          <input
            type="number"
            value={resolved}
            onChange={(e) => setResolved(Number(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Pending</label>
          <input
            type="number"
            value={pending}
            onChange={(e) => setPending(Number(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Complaint
        </button>
      </form>
    </div>
  );
};

export default AddComplaint;
