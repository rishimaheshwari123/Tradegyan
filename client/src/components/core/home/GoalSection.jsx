import React from "react";
import { FaBullseye, FaChartLine, FaRocket } from "react-icons/fa";

const GoalsSection = () => {
  const goals = [
    {
      title: "Set your goals",
      description:
        "Most people don’t plan to fail, they fail to plan. Start your financial plan here and allocate for your goals.",
      icon: <FaBullseye className="text-4xl text-blue-500" />,
    },
    {
      title: "Invest for future",
      description:
        "Select from hundreds of carefully tailored portfolios which can bring you profit based on your risk tolerance.",
      icon: <FaChartLine className="text-4xl text-green-500" />,
    },
    {
      title: "Launch your Products",
      description:
        "Show your investment skills by constructing a winning portfolio and always sharpen it with rebalancing.",
      icon: <FaRocket className="text-4xl text-orange-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {goals.map((goal, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg shadow-lg flex flex-col items-center"
        >
          {goal.icon}
          <h3 className="text-xl font-semibold mt-2">{goal.title}</h3>
          <p className="text-center mt-1">{goal.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GoalsSection;
