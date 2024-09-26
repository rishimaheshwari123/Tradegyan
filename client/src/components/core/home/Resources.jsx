import React from "react";

const Resources = () => {
  const resourcesData = [
    {
      title: "Seminars and Training",
      description:
        "Develop your trading skills with our suite of free educational tools and resources.",
      buttonText: "Register Now",
      icon: "📊", // You can replace this with any React Icon
    },
    {
      title: "Trading Strategies",
      description:
        "Choose to trade over 10,000 derivatives, with competitive spreads and margins.",
      buttonText: "Learn More",
      icon: "💡", // You can replace this with any React Icon
    },
    {
      title: "Knowledge Center",
      description:
        "Take a look at all the ways you can keep up with the market.",
      buttonText: "Learn More",
      icon: "📚", // You can replace this with any React Icon
    },
  ];

  return (
    <section className="bg-gray-100 py-12 p-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">
          Resources to make you a better trader
        </h2>
        <p className="text-gray-600 mt-2">
          Decades of experience, dedicated services, regulated and more – you
          have got it all on your side.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {resourcesData.map((resource, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">
              <div className="flex items-center justify-center h-16 w-16 bg-yellow-100 rounded-full mx-auto">
                <span className="text-4xl">{resource.icon}</span>{" "}
                {/* Replace with Icon */}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-6">{resource.description}</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white flex m-auto font-bold py-2 px-4 rounded-full">
              {resource.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
