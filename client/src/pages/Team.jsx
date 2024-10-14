import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Navbar from "../components/comman/Navbar";

const Team = () => {
  const [founderHover, setFounderHover] = useState(false);
  const [coFounderHover, setCoFounderHover] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        {/* Team Description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-lg text-gray-600">
            Our team is dedicated to providing the best service and experience
            to our customers. With expertise and passion, we work together to
            bring innovation and quality to everything we do.
          </p>
        </div>

        {/* Founder and Co-founder */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Founder */}
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs md:max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            onMouseEnter={() => setFounderHover(true)}
            onMouseLeave={() => setFounderHover(false)}
          >
            <img
              className="w-full h-64 object-cover transition duration-300"
              src={
                founderHover
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s"
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              alt="Founder"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
              <p className="text-gray-600 mb-4">Founder & CEO</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-700 transition"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Co-founder */}
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs md:max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            onMouseEnter={() => setCoFounderHover(true)}
            onMouseLeave={() => setCoFounderHover(false)}
          >
            <img
              className="w-full h-64 object-cover transition duration-300"
              src={
                coFounderHover
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s"
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              alt="Co-Founder"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-2">Jane Smith</h2>
              <p className="text-gray-600 mb-4">Co-Founder & COO</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-700 transition"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
