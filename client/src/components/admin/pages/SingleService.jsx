import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingelServiceAdmin } from '../../../services/operations/auth';
import { FaCalendarAlt, FaClock } from 'react-icons/fa'; // React Icons

function SingleServiceAdmin() {
    const [service, setService] = useState(null);
    const { id } = useParams();
    const { token, user } = useSelector(state => state.auth);

    const singleService = async () => {
        try {
            const response = await getSingelServiceAdmin(id);
            setService(response); // Assuming `response.service` contains service details
            console.log(response)
        } catch (error) {
            console.error("Failed to fetch service details:", error);
        }
    };

    useEffect(() => {
        singleService();
    }, []);

    // Helper function to calculate days remaining until expiration
    const getPendingDays = (expirationDate) => {
        const today = new Date().setHours(0, 0, 0, 0); // Normalize to start of day
        const expDate = new Date(expirationDate).setHours(0, 0, 0, 0); // Normalize expiration date to start of day
        const differenceInTime = expDate - today;
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Convert milliseconds to days
        return differenceInDays >= 0 ? differenceInDays : 0; // Return 0 if expiration has passed
    };

    if (!service) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            {/* Service Details */}
            <div className="bg-white shadow-lg p-6 rounded-lg mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{service.serviceName}</h1>
                <p className="text-gray-600"><strong>Category:</strong> {service.serviceCategory}</p>
                <p className="text-gray-600"><strong>Description:</strong> {service.description}</p>
                <p className="text-gray-600"><strong>Duration:</strong> {service.duration}</p>
                <p className="text-gray-600"><strong>Price:</strong> ₹{service.price}</p>
                <p className="text-gray-600"><strong>Investment Type:</strong> {service.investmentType}</p>
                <p className="text-gray-600"><strong>Risk Level:</strong> {service.riskLevel}</p>
            </div>

            {/* Enrolled Users */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Enrolled Users</h2>
                {service.usersEnroled && service.usersEnroled.length > 0 ? (
                    service.usersEnroled.map((enrollment, index) => (
                        <div key={index} className="border-b py-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-700">
                                        {enrollment?.user?.name}
                                    </h3>
                                    <p className="text-gray-500">{enrollment?.user?.email}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-600 flex items-center">
                                        <FaCalendarAlt className="mr-2" />
                                        <span>Enrolled On: {new Date(enrollment?.enrollmentDate).toLocaleDateString()}</span>
                                    </p>
                                    <p className="text-gray-600 flex items-center">
                                        <FaClock className="mr-2" />
                                        <span>
                                            Expires In: {getPendingDays(enrollment?.expirationDate)} days
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 text-gray-600">
                                <p><strong>Payable Amount:</strong> ₹{enrollment.payable}</p>
                                <p><strong>Order ID:</strong> {enrollment.razorpay_order_id}</p>
                                <p><strong>Payment ID:</strong> {enrollment.razorpay_payment_id}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No users enrolled yet.</p>
                )}
            </div>
        </div>
    );
}

export default SingleServiceAdmin;
