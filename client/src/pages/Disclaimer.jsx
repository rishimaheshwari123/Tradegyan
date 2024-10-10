import React, { useState } from "react";
import Navbar from "../components/comman/Navbar";

// Updated Data array for policies with heading and points
const policiesData = [
  {
    title: "Corporate Policies",
    id: "corporate",
    content: [
      {
        heading:
          "REDUCING OUR ENVIRONMENTAL FOOTPRINT AND MAXIMIZING OUR SOCIAL IMPACT.",
        points: [
          "As a supreme global employer with remarkable business partnerships, Trade Nivesh Investment Adviser is accomplishing towards maintaining and promoting world-class standards of business nobility.",
          "Trade Nivesh values, which incorporate principles of corporate social responsibility (CSR) and sustainability, guide our relationships with clients, employees, and the communities we work in.",
          "Our approach to sustainability strengthens our brand and profile and secures that we remain a choice employer while gathering client requests for socially responsible partners.",
        ],
      },
    ],
  },
  {
    title: "Terms & Conditions",
    id: "terms",
    content: [
      {
        heading: "Terms Overview",
        points: [
          "Terms & Conditions content goes here.",
          "Another point regarding terms.",
        ],
      },
    ],
  },
  {
    title: "Privacy Policy",
    id: "privacy",
    content: [
      {
        heading: "Privacy Overview",
        points: [
          "Privacy Policy content goes here.",
          "Further details about privacy policy.",
        ],
      },
    ],
  },
  {
    title: "Disclaimer Policies",
    id: "disclaimer",
    content: [
      {
        heading: "Important Disclaimers",
        points: [
          "We do not receive any consideration by way of remuneration or compensation or in any other form whatsoever.",
          "We always make updates to our clients regarding their holding or position (if any) in the financial products or securities which are subject to advice.",
          "While making an investment advice, we make an adequate disclosure to our client of all material facts relating to the key features of the products or securities, particularly performance track records.",
        ],
      },
    ],
  },
  {
    title: "Risk Profile",
    id: "risk",
    content: [
      {
        heading: "Risk Considerations",
        points: [
          "Risk Profile content goes here.",
          "Additional information about risk factors.",
        ],
      },
    ],
  },
];

const Disclaimer = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("corporate");

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Container for policies */}
      <div className="container mx-auto py-8 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/4 bg-white shadow-md rounded-lg p-6 mb-6 sm:mb-0 sm:mr-6">
          <h2 className="text-2xl font-semibold mb-4">Our Policies</h2>
          <ul className="space-y-4">
            {policiesData.map((policy) => (
              <li key={policy.id}>
                <button
                  onClick={() => setActiveTab(policy.id)} // Set the active tab when clicked
                  className={`text-lg flex items-center w-full text-left transition-colors ${
                    activeTab === policy.id
                      ? "text-blue-800 font-semibold"
                      : "text-blue-600"
                  }`}
                >
                  <span className="mr-2">›</span> {/* Chevron Arrow */}
                  {policy.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="w-full sm:w-3/4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-600 inline-block pb-2">
            {policiesData.find((policy) => policy.id === activeTab)?.title}
          </h2>
          <div className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {policiesData
              .find((policy) => policy.id === activeTab)
              ?.content.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl text-blue-500 sm:text-2xl font-semibold mb-2">
                    {section.heading}
                  </h3>
                  <ul className="list-disc list-inside">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="mb-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
