import React from 'react';
import { FaExclamationCircle, FaRegEnvelope, FaCheckCircle, FaClock } from 'react-icons/fa';

const ComplaintsTable = () => {
    const data = {
        beginningOfMonth: 0,
        receivedDuringMonth: 0,
        resolvedDuringMonth: 0,
        pendingAtEndOfMonth: 0,
        reasonsForPendency: 'Not Any Complaint',
    };

    return (
        <div className="w-[90%] mx-auto my-5 p-4 bg-yellow-50 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center mb-4 text-red-600">Number of Complaints</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-red-300">
                    <thead>
                        <tr className="bg-red-200">
                            <th scope="col" className="border border-red-300 px-4 py-2 text-red-800 text-left">
                                <div className='flex items-center justify-start'>
                                    <FaExclamationCircle className="mr-2" /> At the Beginning of the Month
                                </div>
                            </th>
                            <th scope="col" className="border border-red-300 px-4 py-2 text-red-800 text-left">
                                <div className='flex items-center justify-start'>
                                    <FaRegEnvelope className="mr-2" /> Received During the Month
                                </div>
                            </th>
                            <th scope="col" className="border border-red-300 px-4 py-2 text-red-800 text-left">
                                <div className='flex items-center justify-start'>
                                    <FaCheckCircle className="mr-2" /> Resolved During the Month
                                </div>
                            </th>
                            <th scope="col" className="border border-red-300 px-4 py-2 text-red-800 text-left">
                                <div className='flex items-center justify-start'>
                                    <FaClock className="mr-2" /> Pending at the End of the Month
                                </div>
                            </th>
                            <th scope="col" className="border border-red-300 px-4 py-2 text-red-800 text-left">
                                <div className='flex items-center justify-start'>
                                    <FaExclamationCircle className="mr-2" /> Reasons for Pendency
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-red-300 px-4 py-2 text-center text-red-600">{data.beginningOfMonth}</td>
                            <td className="border border-red-300 px-4 py-2 text-center text-red-600">{data.receivedDuringMonth}</td>
                            <td className="border border-red-300 px-4 py-2 text-center text-red-600">{data.resolvedDuringMonth}</td>
                            <td className="border border-red-300 px-4 py-2 text-center text-red-600">{data.pendingAtEndOfMonth}</td>
                            <td className="border border-red-300 px-4 py-2 text-center text-red-600">{data.reasonsForPendency}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ComplaintsTable;
