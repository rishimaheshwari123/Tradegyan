import React from "react";
import { service } from "../../../../data/investordata";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <div className="container mx-auto my-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {service.map((service, index) => (
            <div
              key={index}
              className="relative group text-white overflow-hidden"
            >
              <img
                src={service?.img}
                alt={service?.name}
                className="w-full h-96 object-cover group-hover:opacity-80 transition-opacity duration-500"
              />
              {/* Hover content */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <h3 className="text-2xl font-bold mb-2 text-center drop-shadow-lg">
                  {service?.name}
                </h3>
                <p className="text-sm mb-4 text-center drop-shadow-lg">
                  {service?.tagline}
                </p>
                <Link
                  to={`/investor/services/${service.id}`}
                  className="mt-4 text-sm text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition-all drop-shadow-lg"
                >
                  KNOW MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
