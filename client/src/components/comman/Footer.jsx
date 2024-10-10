import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaTelegram,
  FaFacebookMessenger,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm sm:text-base">
            Trade Gyan Solutions is an investment advisor in India. The company
            provides recommendations for stocks, cash, and F&O traded in NSE &
            BSE.
          </p>
          <div className="mt-4 flex items-center">
            <FaPhone className="mr-2" />
            <span>+91 777-100 4878</span>
          </div>
          <p className="text-sm mt-1 sm:text-base">121@tradegyan.co</p>
        </div>

        {/* Client Zone */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Client Zone</h3>
          <ul className="text-sm sm:text-base space-y-2">
            <li>
              <Link to="/faqs" className="hover:text-yellow-400">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/kyc-form" className="hover:text-yellow-400">
                KYC Form
              </Link>
            </li>
            <li>
              <Link to="/client-agreement" className="hover:text-yellow-400">
                Client Agreement
              </Link>
            </li>
            <li>
              <Link to="/risk-profile" className="hover:text-yellow-400">
                Risk Profile
              </Link>
            </li>
            <li>
              <Link to="/support-grievance" className="hover:text-yellow-400">
                Support & Grievance
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:text-yellow-400">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-yellow-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/complaint-data" className="hover:text-yellow-400">
                Complaint Data
              </Link>
            </li>
          </ul>
        </div>

        {/* Know More About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Know More About
          </h3>
          <ul className="text-sm sm:text-base space-y-2">
            <li>
              <Link to="/privacy-policy" className="hover:text-yellow-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="hover:text-yellow-400">
                Disclaimer And Disclosure
              </Link>
            </li>

            <li>
              <Link to="/terms-conditions" className="hover:text-yellow-400">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-yellow-400">
                Career
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-yellow-400">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/investment-charter" className="hover:text-yellow-400">
                Investment Charter
              </Link>
            </li>
            <li>
              <Link
                to="/complaint-escalation"
                className="hover:text-yellow-400"
              >
                Complaint Escalation
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="grid grid-cols-4 justify-center gap-4">
            <Link
              to="#"
              className="text-2xl text-white bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center"
            >
              <FaFacebook />
            </Link>
            <Link
              to="#"
              className="text-2xl text-white bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center"
            >
              <FaInstagram />
            </Link>
            <Link
              to="#"
              className="text-2xl text-white bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center"
            >
              <FaWhatsapp />
            </Link>
            <Link
              to="#"
              className="text-2xl text-white bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              className="text-2xl text-white bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="#"
              className="text-2xl text-white bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center"
            >
              <FaTelegram />
            </Link>
            <Link
              to="#"
              className="text-2xl text-white bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center"
            >
              <FaFacebookMessenger />
            </Link>
            <Link
              to="#"
              className="text-2xl text-white bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center"
            >
              <FaPhone />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-10 border-t border-gray-700 pt-4 p-4">
        <div className="container mx-auto text-center text-sm sm:text-base">
          <p>
            Copyright &copy; 2024 Trade Gyan Solutions. All rights reserved.
          </p>
          <p>Trade Gyan Solutions Reviewed by 500 Customers Rated: 4.8 / 5</p>
          <p>Created by: I Next Ets</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
