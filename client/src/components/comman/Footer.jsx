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
import { Link, NavLink, useLocation } from "react-router-dom"; // Import Link and useLocation

const Footer = () => {
  const location = useLocation(); // Get the current URL path

  // Check if the current path includes "/admin"
  if (location.pathname.includes("/admin")) {
    return null; // Do not render the footer if the URL contains "/admin"
  }

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm sm:text-base">
            A Investment advisory company assisting investors diversify their
            investments and reap earnings through its profound industry
            expertise and a keen eye for detail that enables it to predict the
            market flow in an efficient manner
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
              <Link to="/faq" className="hover:text-yellow-400">
                FAQs
              </Link>
            </li>
            {/* <li>
              <Link to="/kyc-form" className="hover:text-yellow-400">
                KYC Form
              </Link>
            </li>
            <li>
              <Link to="/client-agreement" className="hover:text-yellow-400">
                Client Agreement
              </Link>
            </li> */}
            <li>
              <Link to="/disclaimer/risk" className="hover:text-yellow-400">
                Risk Profile
              </Link>
            </li>
            {/* <li>
              <Link to="/support-grievance" className="hover:text-yellow-400">
                Support & Grievance
              </Link>
            </li> */}
            <li>
              <Link to="/refund-policy" className="hover:text-yellow-400">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/disclaimer/complain" className="hover:text-yellow-400">
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
              <Link to="disclaimer/privacy" className="hover:text-yellow-400">
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
              <Link to="/podcast" className="hover:text-yellow-400">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
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
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="grid grid-cols-3 justify-center gap-4">
              <Link
                to="https://www.facebook.com/tradegyansolutions?mibextid=ZbWKwL"
                className="text-2xl text-blue-600 bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-yellow-300 transition-colors"
              >
                <FaFacebook />
              </Link>
              <Link
                to="https://www.instagram.com/tradegyan?igsh=Y2gyYmkwYXN0ZDh4"
                className="text-2xl text-pink-600 bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-yellow-300 transition-colors"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://wa.me/7771004878" // WhatsApp link
                className="text-2xl text-green-500 bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-yellow-300 transition-colors"
              >
                <FaWhatsapp />
              </Link>
              <Link
                to="#"
                className="text-2xl text-blue-400 bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-yellow-300 transition-colors"
              >
                <FaTwitter />
              </Link>
              <Link
                to="#"
                className="text-2xl text-blue-700 bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-yellow-300 transition-colors"
              >
                <FaLinkedin />
              </Link>

              <Link
                to="tel:+7771004878" // Call link
                className="text-2xl text-green-600 bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-yellow-300 transition-colors"
              >
                <FaPhone />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-10 border-t border-gray-700 pt-4 p-4">
        <div className="container mx-auto text-sm sm:text-base flex flex-col gap-2">
          <p>
            Copyright © 2017 Trade Gyan Solutions (Investment Advisor #
            INA000008808)2024. All rights reserved. Himanshu Muralia, Proprietor
            of Trade Gyan Solutions.
          </p>

          <p>Contact Details :+91 7771004878 E-Mail id :- 121@tradegyan.co</p>
          <p>Principal Officer Contact Details :+91 7771004878</p>
          <p>E-Mail id :- 121@tradegyan.co</p>

          <p>SEBI Registration Number: INA000008808</p>
          <p>Trade Name : TRADE GYAN SOLUTIONS</p>
          <p>Type of Registration : Individual.</p>
          <p>Validity of Registration- Nov. 2017 to Perpetual.</p>
          <p>
            Address :- Plot No.9, Sector C, Govindpura Industrial Area, J.K.
            Road, Bhopal, Madhya Pradesh, 462023
          </p>
          <p>
            Registration granted by SEBI, membership of BASL and certification
            from NISM in no way guarantee performance of the intermediary or
            provide any assurance of returns to investors.
          </p>
          <p>
            Standard Warning:- “Investment in securities market are subject to
            market risks. Read all the related documents carefully before
            investing.”
          </p>
          <p>
            {" "}
            SEBI Office Address - 305, 3rd Floor, Satguru Parinay, AB Rd,
            Opposite C-21 Mall, Indore, Madhya Pradesh 452010
          </p>
          <hr />
          <p className="text-center">Made By I Next Ets❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
