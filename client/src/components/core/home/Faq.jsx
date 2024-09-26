import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "tailwindcss/tailwind.css";

export const jobPostings = [
  {
    title: "What kind of company is Trade Gyan Solutions",
    details:
      "Trade Gyan Solutions is an Investment Advisor- purely research company focusing on Technical Analysis that provides real-time financial markets recommendation (Trading Advice) to its customers for intra-day and short term trading on real-time data.",
  },
  {
    title: "What is the authenticity of your company?",
    details:
      "We follow strict policies in our organization, and for more you can visit our website www.tradegyan.co. And you are always welcomed to visit our office too.",
  },
  {
    title: "What Services do you provide?",
    details:
      "We provide the recommendations of Equity, Derivative and Commodity Market.",
  },
  {
    title:
      "What is the Minimum Investment requirement for Trading in order to get your calls?",
    details:
      "There is no such minimum investment required for our calls. First of all, you need to check your risk appetite. You can choose the lot size & shares according to your convenience but it would be easier for you to have at least 50k to trade in intraday efficiently.",
  },
  {
    title: "Is there any Free-Trial Service? If yes, how can I avail that?",
    details:
      "No, We are not providing any free trial service according to SEBI new Rules (https://bit.ly/2MHXnlG), See our Traksheet and Ask for service",
  },
  {
    title: "What will be the mode of Recommendations you provide?",
    details:
      "You can avail the recommendations at all Digital Platforms like (Only Phone SMS).",
  },
  {
    title: "What is your Success / Accuracy / Hit Ratio?",
    details: "We provide good accuracy on a consistent basis.",
  },
  {
    title: "How to contact you in the Market hours?",
    details:
      "You can anytime call us at our Support Number: +91-7771004878, you can contact to our specific departments.",
  },
  {
    title: "What are your paid services?",
    details:
      "You can find the various Services / Products offered by us in the Pricing section of our Website: Trade Gyan Pricing.",
  },
  {
    title: "What is the procedure to subscribe to your services?",
    details:
      "You can fill up the Subscription Form available on the Website or simply talk to our Support Team 24/7 for assistance at +91-7771004878.",
  },
  {
    title: "What is the Best Trading Style you recommend for the trader?",
    details:
      "We always suggest Intraday Trading to our customers because, in the present scenario, the Indian markets are mostly governed by the global trends which can change in a day or night. Hence, most of our calls are purely intraday.",
  },
  {
    title: "Do you provide some special services?",
    details:
      "Yes, we have a Premium & Special pack for the investors and traders who trade in heavy lots and their risk appetite should be high.",
  },
  {
    title: "Do you provide the detailed analysis of the market?",
    details:
      "Yes, we provide the Weekly Premium Reports, Daily Premium Newsletter, and Daily Technical Levels, which help you to trade and invest better in the market.",
  },
  {
    title: "Can we directly talk to the analysts?",
    details:
      "Yes, you can directly contact to our representatives, as when you get subscribed with us one of our representatives takes your regular follow-up and you can contact your representative any time at his/her extensions or you can call us 24/7 at our hotline number +91-7771004878 and talk directly to our Analysts and get complete support on your Positions.",
  },
  {
    title: "Do you recommend taking delivery?",
    details:
      "Predominantly we have intraday packages and generally, we always suggest our customers close their Positions on the same day but at the same time, we have some packages for delivery as well.",
  },
  {
    title: "Do you suggest when can I book a profit or exit?",
    details:
      "Yes, we provide complete follow-ups for both Stop-Loss & Targets via SMS only until you close your position, as we use strong technologies to provide the best services to our clients.",
  },
  {
    title: "Is there any support helpline available?",
    details:
      "We provide the quality services to our clients but still if you have any queries and support, then you can directly contact to our support and Grievances Department 24/7 by contacting at +91-7771004878 or you can write us at 121@tradegyan.co .",
  },
  {
    title: "Is there any live support facility available?",
    details:
      "Yes, we provide live support to our customers as we believe in giving the best solutions at the right time for your queries. For live support, you need to visit our website or can follow the link: Trade Gyan Help Desk.",
  },
];
const JobPosting = ({ job, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="border rounded-md mb-4 transition-all duration-500 ease-in-out">
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium">{job.title}</h3>
        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: contentHeight }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="p-4 bg-white">
          <p className="whitespace-pre-line">{job.details}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <p className="text-center font-bold text-xl my-5">
        Frequently Asked Questions
      </p>
      {jobPostings.map((job, index) => (
        <JobPosting
          key={index}
          job={job}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Faq;
