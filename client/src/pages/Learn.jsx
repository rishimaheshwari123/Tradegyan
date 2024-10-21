import React from "react";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaVideo,
  FaQuestionCircle,
} from "react-icons/fa";
import Navbar from "../components/comman/Navbar";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center  mb-8">
            Learn About Investing
          </h1>

          {/* Introduction Section */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700">
              Explore our comprehensive learning resources to enhance your
              knowledge about investing, markets, and financial planning.
            </p>
          </div>

          {/* Resource Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Articles Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaBookOpen className="text-5xl  mx-auto mb-4" />
              <h2 className="text-2xl font-semibold  mb-4">Articles</h2>
              <p className="text-gray-600 mb-6">
                Read in-depth articles written by experts on investment
                strategies, market analysis, and financial planning.
              </p>
              <Link to="/articles" className=" font-bold hover:underline">
                Explore Articles
              </Link>
            </div>

            {/* Tutorials Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaChalkboardTeacher className="text-5xl  mx-auto mb-4" />
              <h2 className="text-2xl font-semibold  mb-4">Tutorials</h2>
              <p className="text-gray-600 mb-6">
                Watch tutorials to guide you through essential topics like
                portfolio management and market analysis.
              </p>
              {/* <a href="/tutorials" className=" font-bold hover:underline">
                Browse Tutorials
              </a> */}
            </div>

            {/* Videos Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaVideo className="text-5xl  mx-auto mb-4" />
              <h2 className="text-2xl font-semibold  mb-4">Videos</h2>
              <p className="text-gray-600 mb-6">
                Watch educational videos that explain investing concepts in an
                easy-to-understand format.
              </p>
              {/* <a href="/videos" className=" font-bold hover:underline">
                Watch Videos
              </a> */}
            </div>

            {/* FAQ Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaQuestionCircle className="text-5xl  mx-auto mb-4" />
              <h2 className="text-2xl font-semibold  mb-4">FAQs</h2>
              <p className="text-gray-600 mb-6">
                Get answers to the most frequently asked questions about
                investing and financial planning.
              </p>
              <Link to="/faq" className=" font-bold hover:underline">
                Read FAQs
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-semibold  mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Join our community of investors and access valuable resources to
              enhance your financial knowledge.
            </p>
            <a
              href="/client-login"
              className="bg-green-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
