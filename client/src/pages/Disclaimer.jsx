import React, { useEffect, useState } from "react";
import Navbar from "../components/comman/Navbar";
import RiskProfile from "../components/RiskProfile";
import { useParams } from "react-router-dom";
import ComplaintsTable from "../components/trader/comman/ComplaintsTable";

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
          "As a supreme global employer with remarkable business partnerships,  TradeGyan Solution Investment Adviser is accomplishing towards maintaining and promoting world-class standards of business nobility.",
          " TradeGyan Solution values, which incorporate principles of corporate social responsibility (CSR) and sustainability, guide our relationships with clients, employees, and the communities we work in.",
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
        points: [
          "An individual should also keep this mind that the  TradeGyan Solution Investment Adviser can change the terms and conditions and we assume that the client accept these modified terms and conditions. Hence, it is recommended to keep visiting the link of ‘Terms & Condition’ of the site on regular basis to stay updated about the newly introduced or any modified terms or conditions of the  TradeGyan Solution.",

          " TradeGyan Solution is neither liable to any kind of liability or loss resulting, indirectly or directly, from interruptions or delays due to the mechanical or electronic machine failures, telephone connection defect, strikes, weather, walkouts, strikes, acts of God, fire, armed conflicts, riots, acts of war or any other causes. The site shall have no liability to provide you the access to the  TradeGyan Solution.com due to the interruption of the site in any of such causes continues.",

          "You willingly agree that you use this site as on your own risk. The information, content, product, features, service, software published on this site may also include errors or inaccuracy. Modifications are regularly added to content. The Investment Adviser or the respective suppliers may do some changes or improvement in this site at any time period. This website may also be remaining temporary unavailable due to some problems, maintenance or any sort of other problems.  TradeGyan Solution.com shall not be responsible to member or user to discontinue to modify all or any of contents, software, information, products, services and features that get published in the site.",

          "The Investment Adviser or the respective associated entities create no representation of the suitability of contents, information, products, software, features, software and services available on the site for any purpose. All such information, contents, products, software, services and features are provided without any sort of warranty. The site or the associated entities also disclaim all conditions and warranties with the regard to the contents, software, information, products, services and features.",

          "Due to this reason, we suggest our visitors to do the following before payments:",
          "- Read all details of services, products, and supports carefully.",
          "- Read all the related documents carefully before investing, as Investment in securities market are subject to market risks.",
          "- Read the terms & conditions.",
          "- Read the privacy policy.",
          "- Read the FAQs sections also.",

          "By using information available on the site, you assume the whole responsibility for any losses and gains, emotional, financial, or otherwise, suffered, incurred, or experienced by you.",

          " TradeGyan Solution does not offer guaranteed accuracy, timeliness, or completeness of, or otherwise approve in either way, the opinions, recommendations, or views expressed in information.  TradeGyan Solution does not offer investment advice and at the same time does not advocate the sale or purchase of any investment or security by the client or any third party. The user information is not intended to provide legal, investment, or tax advice that you should get from a professional advisor prior to making any investment of the type discussed in the information.",

          "All materials, products, and services from this Site are provided 'As is' with no representations or warranties of any kind, either express or implied.",

          "You have to subscribe to the service in order to get full access to the site and to receive alert emails when Recommendation are released. You agree to provide accurate and current information about yourself as requested on the registration form and subscription payment process. We reserve the right to terminate this Agreement and your use of the Site if the information provided by you is false in any way or for any other reason we deem necessary to maintain the operation and integrity of the Site.",

          "While using the Site, you agree not to inhibit others from using the Site, deface the Site, or in any way do anything that would be dishonest or harmful to others.  TradeGyan Solution.com as well as the design and information contained in this site is valuable and exclusive property of  TradeGyan Solution.com, and nothing in this Agreement shall be construed as transferring or assigning any such ownership rights to you or any other person or entity.",

          "You cannot resell or transfer the information or use the information on  TradeGyan Solution.com. You may not distribute, transfer, copy, publicly display, and publish  TradeGyan Solution.com, any part thereof, or any of the information received or accessed therefrom to or through any other person or entity.",

          "Registration granted by SEBI, membership of BASL, and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.",

          "Any surfing and reading of the information is the acceptance of this disclaimer. All Rights Reserved.",
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
          " TradeGyan Solution respects and values the right to Privacy of each and every individual.",

          "We are esteemed by the relationship and by becoming our clients you have a promise from our side that we shall remain loyal to all our clients and non-clients whose information resides with us. This Privacy Policy of  TradeGyan Solution applies to the current clients as well as former clients.",

          "In addition to the service provided to you, your information (Mobile Number, E-Mail ID, etc.) can be brought in use for sending you newsletters, survey, contest information, or information about any new services of  TradeGyan Solution which will be for your own good. While subscribing for our services, you agree that  TradeGyan Solution has the right to do so.",

          "We would like to share our privacy policies with our clients in order to maintain transparency as follows:",

          "In general,  TradeGyan Solution collects consumer opinions, their email addresses, phone numbers, and other relevant information in order to provide services of value to our members. We generally use this information in three ways:",

          "- To provide members with relevant information and recommendations.",
          "- To introduce new products and market existing ones.",
          "- Sending Welcome greetings and service info with tenure/invoice.",

          "Please read the rest of our privacy policy mentioned below for more information.",

          "After filling in the details, if a customer wants to change the information, he/she can drop an email at: support@ TradeGyan Solution.com.",

          "Calls will be given through SMS.",

          "We are authorized to change this privacy policy from time to time. We will be posting all the updates and modifications on our website www. TradeGyan Solution.com, so please be sure to check the same periodically.",

          "By subscribing to our services, you consent to our Privacy Policy and Terms of Use.",
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
          "We do not receive any consideration by way of remuneration or compensation or in any other form whatsoever, by us or any of our associates or subsidiaries for any distribution or execution services in respect of the products or securities for which the investment advice is provided to the client.",

          "We always make updates to our clients regarding their holding or position (if any) in the financial products or securities which are subject to advice.",

          "While making investment advice,  TradeGyan Solution makes an adequate disclosure to our client of all material facts relating to the key features of the products or securities, particularly performance track records.",

          " TradeGyan Solution always draws the client’s attention in the form of warnings and disclaimers in documents and advertising materials related to the investment products which we are recommending to our client.",

          "We disclose to a prospective client all material information about our business, disciplinary history, terms and conditions on which we offer our advisory services, affiliations with other intermediaries, and such other information as it is necessary to take an informed decision on whether or not to avail our services.",

          "We do not recommend a stock broker or Portfolio Management Services or sell Demat accounts. Neither do we take payment for the purpose of redirecting the same into Demat accounts.",

          "To ensure compliance with the Investment Advisor Regulations 2013,  TradeGyan Solution and all its representatives will not make any trades in the market.",

          "Investment in stock or commodity markets is subject to market risk; though best attempts are made for predicting markets, no surety of return or accuracy of any kind is guaranteed. While the performance sheet of various products is available, it should not be considered a guarantee for future performance of the products/services.",

          "If the client wishes to advance his/her services pertaining to upgradation in tenure or any advancement in services, it will lead to an additional/adjusted balance amount as per the rate prescribed.",

          "We advise every client to check and seek his/her suitability, profiling, and investor category to ensure that recommended services are compatible with their profile.  TradeGyan Solution does not offer low-risk services. Any investor with a medium-risk appetite is recommended to subscribe to medium-risk services, and an investor with a high-risk appetite is recommended to subscribe to either medium or high-risk services.",

          "Clients are also advised to trade only if recommendations suit their current risk appetite and risk-bearing capacity. All such recommendations shall be considered views or opinions, and clients shall, at their discretion, decide actual trades.",

          "No litigation has been filed against  TradeGyan Solution Investment Adviser since its incorporation.",

          "We disclose our Annual Compliance Audit status of the two preceding years on our website under the Compliance portal.",

          "We disclose our details of investor complaints and their status report by every 7th of the succeeding month as prescribed, in order to facilitate Investment Awareness on our website in the Investor Charter section.",

          "All the information provided by us is totally based on our knowledge, and we do not ask/force you to take market positions in any particular stock.",

          " TradeGyan Solution Investment Adviser is not involved in trading of its own.",

          "An Investor/Trader has an appropriate investment in a trading account to trade on all the recommendations shared via SMS.",

          "It is mandatory to have a Demat account for the service subscriber.",

          "No GST or other hidden charges are applicable; all subscription charges are inclusive of GST.",

          "Registration granted by SEBI, membership of BASL, and certification from NISM in no way guarantee the performance of the intermediary or provide any assurance of returns to investors.",
          `Standard Warning : Investment in securities market are subject to market risks. Read all the related documents carefully before investing.`,
          "Disclaimer : Registration granted by SEBI, enlistment of IA with Exchange and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.",
          "Delete “We do not offer any refund policy.”",
        ],
      },
    ],
  },

  {
    title: "Complaint Data",
    id: "complain",
    content: [
      {
        heading: "Complaint Data",
        points: [<ComplaintsTable />],
      },
    ],
  },
  {
    title: "Risk Profile",
    id: "risk",
    content: [
      {
        heading: "Risk Considerations",
        points: [<RiskProfile />],
      },
    ],
  },
];

const Disclaimer = () => {
  const { name } = useParams();
  // State to manage active tab
  const [activeTab, setActiveTab] = useState(name || "corporate");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
