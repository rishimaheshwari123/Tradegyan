import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ScrollingBanner = () => {
  return (
    <div className="bg-red-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full py-3 px-6">
        {/* Scrolling Text */}
        <div className="relative overflow-hidden flex-1 mr-6">
          <div className="scrolling-text whitespace-nowrap">
            <span className="mx-4">
              यह सामग्री केवल सूचना के उद्देश्य के लिए है।
            </span>
            <span className="mx-4">
              निवेश किसी भी प्रकार के जोखिमों के अधीन हैं।
            </span>
            <span className="mx-4">
              हमारी संस्था किसी भी तरह की गारंटी नहीं देती है।
            </span>
          </div>
        </div>

        {/* Contact Button */}
        <div>
          <Link
            to={"/trader/contact"}
            className="flex items-center bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-600"
          >
            CONTACT US <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
