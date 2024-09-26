import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const offices = [
  {
    city: 'Bhopal',
    address: 'Mp Nagar Zonw 2',
    phone: '+91234567890',
    email: 'info@dummy.com'
  },
 
];

const ReachUs = () => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-lg font-bold mb-3">Reach Us</h2>
      {offices.map((office, index) => (
        <div key={index} className="mb-4 p-3 bg-white shadow-md rounded-lg">
          <h3 className="text-md font-semibold">{office.city}</h3>
          <div className="mt-1">
            <p className="flex items-center text-gray-700 text-sm">
              <FaMapMarkerAlt className="text-blue-500 mr-2" /> {office.address}
            </p>
            <p className="flex items-center text-gray-700 text-sm">
              <FaPhoneAlt className="text-blue-500 mr-2" /> {office.phone}
            </p>
            <p className="flex items-center text-gray-700 text-sm">
              <FaEnvelope className="text-blue-500 mr-2" /> {office.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReachUs;
