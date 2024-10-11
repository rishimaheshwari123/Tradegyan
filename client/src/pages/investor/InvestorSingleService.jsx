import React from "react";
import { useParams } from "react-router-dom"; // To get the id param
import { service } from "../../data/investordata"; // Assuming the array is exported from serviceData.js
import {
  FaCheckCircle,
  FaMoneyBillWave,
  FaTruck,
  FaChartLine,
  FaQuestionCircle,
  FaChartPie,
  FaListAlt,
  FaExchangeAlt,
  FaLayerGroup,
} from "react-icons/fa"; // Icons for design
import Navbar from "../../components/comman/Navbar";

const InvestorServices = () => {
  const { id } = useParams(); // Get the id from URL params
  const serviceItem = service.find((item) => item.id === id);

  if (!serviceItem) {
    return <p className="text-red-600 font-semibold">Service not found</p>; // Fallback if no service is found
  }

  return (
    <div>
      <Navbar />
      <div className="p-6 space-y-12 max-w-4xl mx-auto">
        {/* Service Image and Heading */}
        <div className="shadow-lg p-6 rounded-lg bg-white">
          <img
            src={serviceItem?.img || "https://via.placeholder.com/600"}
            alt={serviceItem?.name}
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="text-4xl font-bold mt-4">
            {serviceItem?.name || "Service Name"}
          </h2>
          <p className="text-xl text-gray-700 italic mt-2">
            {serviceItem?.tagline || "Tagline"}
          </p>
          <p className="mt-4 text-lg">
            {serviceItem?.overview || "Overview of the service."}
          </p>
        </div>

        {/* Features Section */}
        {serviceItem?.features?.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold flex items-center">
              <FaCheckCircle className="mr-2 text-green-500" /> Features
            </h3>
            <ul className="list-disc ml-8 space-y-1 mt-2">
              {serviceItem.features.map((feature, index) => (
                <li key={index} className="text-lg">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits Section */}
        {serviceItem?.benefits?.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold flex items-center">
              <FaMoneyBillWave className="mr-2 text-blue-500" /> Benefits
            </h3>
            <ul className="list-disc ml-8 space-y-1 mt-2">
              {serviceItem.benefits.map((benefit, index) => (
                <li key={index} className="text-lg">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Strategies Section */}
        {serviceItem?.strategies?.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold flex items-center">
              <FaChartPie className="mr-2 text-purple-500" /> Investment
              Strategies
            </h3>
            <ul className="list-disc ml-8 space-y-1 mt-2">
              {serviceItem.strategies.map((strategy, index) => (
                <li key={index} className="text-lg">
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
        )}
        {serviceItem?.bondCategories?.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold flex items-center">
              <FaChartPie className="mr-2 text-purple-500" />
              Bond Categories
            </h3>
            <ul className="list-disc ml-8 space-y-1 mt-2">
              {serviceItem.bondCategories.map((strategy, index) => (
                <li key={index} className="text-lg">
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Options Section */}
        {serviceItem?.option?.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold flex items-center">
              <FaListAlt className="mr-2 text-orange-500" /> Investment Options
            </h3>
            <ul className="list-disc ml-8 space-y-1 mt-2">
              {serviceItem.option.map((opt, index) => (
                <li key={index} className="text-lg">
                  {opt}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mutual Fund Categories Section */}
        {serviceItem?.mutualFundCategories && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold flex items-center">
              <FaLayerGroup className="mr-2 text-teal-500" /> Mutual Fund
              Categories
            </h3>
            <ul className="list-disc ml-8 space-y-2 mt-2">
              <li>
                <strong>Equity Funds:</strong>
                <ul className="ml-4 list-disc space-y-1">
                  {serviceItem.mutualFundCategories.equityFunds?.map(
                    (fund, index) => (
                      <li key={index} className="text-lg">
                        {fund}
                      </li>
                    )
                  )}
                </ul>
              </li>
              <li>
                <strong>Debt Funds:</strong>
                <ul className="ml-4 list-disc space-y-1">
                  {serviceItem.mutualFundCategories.debtFunds?.map(
                    (fund, index) => (
                      <li key={index} className="text-lg">
                        {fund}
                      </li>
                    )
                  )}
                </ul>
              </li>
              <li>
                <strong>Hybrid Funds:</strong>
                <ul className="ml-4 list-disc space-y-1">
                  {serviceItem.mutualFundCategories.hybridFunds?.map(
                    (fund, index) => (
                      <li key={index} className="text-lg">
                        {fund}
                      </li>
                    )
                  )}
                </ul>
              </li>
              <li>
                <strong>Index Funds & ETFs:</strong>
                <ul className="ml-4 list-disc space-y-1">
                  {serviceItem.mutualFundCategories.indexFundsETFs?.map(
                    (fund, index) => (
                      <li key={index} className="text-lg">
                        {fund}
                      </li>
                    )
                  )}
                </ul>
              </li>
            </ul>
          </div>
        )}

        {/* ETF Categories Section */}
        {serviceItem?.etfCategories && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold flex items-center">
              <FaExchangeAlt className="mr-2 text-blue-500" /> ETF Categories
            </h3>
            <ul className="list-disc ml-8 space-y-2 mt-2">
              <li>
                <strong>Equity ETFs:</strong>
                <ul className="ml-4 list-disc space-y-1">
                  {serviceItem.etfCategories.equityETFs?.map((etf, index) => (
                    <li key={index} className="text-lg">
                      {etf}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <strong>Debt ETFs:</strong>
                <ul className="ml-4 list-disc space-y-1">
                  {serviceItem.etfCategories.debtETFs?.map((etf, index) => (
                    <li key={index} className="text-lg">
                      {etf}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <strong>Commodity ETFs:</strong>
                <ul className="ml-4 list-disc space-y-1">
                  {serviceItem.etfCategories.commodityETFs?.map(
                    (etf, index) => (
                      <li key={index} className="text-lg">
                        {etf}
                      </li>
                    )
                  )}
                </ul>
              </li>
              <li>
                <strong>Real Estate ETFs:</strong>
                <ul className="ml-4 list-disc space-y-1">
                  {serviceItem.etfCategories.realEstateETFs?.map(
                    (etf, index) => (
                      <li key={index} className="text-lg">
                        {etf}
                      </li>
                    )
                  )}
                </ul>
              </li>
              <li>
                <strong>International ETFs:</strong>
                <ul className="ml-4 list-disc space-y-1">
                  {serviceItem.etfCategories.internationalETFs?.map(
                    (etf, index) => (
                      <li key={index} className="text-lg">
                        {etf}
                      </li>
                    )
                  )}
                </ul>
              </li>
            </ul>
          </div>
        )}

        {/* Service Plans Section */}
        {serviceItem?.servicePlans?.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold flex items-center">
              <FaTruck className="mr-2 text-yellow-500" /> Service Plans
            </h3>
            <ul className="space-y-1 mt-2">
              {serviceItem.servicePlans.map((plan, index) => (
                <li key={index} className="flex justify-between text-lg">
                  <span>{plan.name}</span>
                  <span>{plan.priceRange}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Delivery Channels Section */}
        {serviceItem?.deliveryChannels?.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold flex items-center">
              <FaTruck className="mr-2 text-indigo-500" /> Delivery Channels
            </h3>
            <ul className="list-disc ml-8 space-y-1 mt-2">
              {serviceItem.deliveryChannels.map((channel, index) => (
                <li key={index} className="text-lg">
                  {channel}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Marketing Strategy Section */}
        {serviceItem?.marketingStrategy?.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold flex items-center">
              <FaChartLine className="mr-2 text-teal-500" /> Marketing Strategy
            </h3>
            <ul className="list-disc ml-8 space-y-1 mt-2">
              {serviceItem.marketingStrategy.map((strategy, index) => (
                <li key={index} className="text-lg">
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Why Choose Us Section */}
        {serviceItem?.why?.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold flex items-center">
              <FaQuestionCircle className="mr-2 text-red-500" /> Why Choose Us?
            </h3>
            <ul className="list-disc ml-8 space-y-1 mt-2">
              {serviceItem.why.map((reason, index) => (
                <li key={index} className="text-lg">
                  {reason.heading || reason}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600">
          {serviceItem?.desc || "Description about why to choose this service."}
        </p>
      </div>
    </div>
  );
};

export default InvestorServices;
