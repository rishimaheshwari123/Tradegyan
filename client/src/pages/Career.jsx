import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import Navbar from "../components/comman/Navbar";

export const jobPostings = [
  {
    title: "Business Analyst Position Open",
    details: `**No. of Vacancies:** Upto 20
    
    **Experience:** 0 To 1 year
    
    **Qualification:** MBA Finance / Marketing / Operations / Graduate / Any Stream
    
    **Job Responsibility:**
    
    - Generate clients for subscription of our research services and achieve targets as assigned by the authority.
    - Understand the requirements of the customer and map them to the available services of the organization or to the expertise and skills within the organization.
    - Strategize effectively to create new customers on a continuous basis.
    - Handle customer queries and provide them information regarding the different services of the company.
    
    **Skills Required:**
    - Good communication skills are a must.
    
    To apply, please send your resume to hr@tradegyan.co with the subject "Apply For Research Services Subscription".`,
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

const Career = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div>
        <p className="text-center text-3xl font-bold">Application Process</p>
        <div className="max-w-7xl mx-auto p-5 flex flex-col gap-2">
          <p>
            1. Read Application Read the application carefully before applying
            for the position
          </p>
          <p>
            2. Send Your Resume Send Your Resume at hr@tradegyan.co with subject
            (Apply For Business Analyst)
          </p>
          <p>
            3. Come For Interview If your profile will shortlist for interview,
            we will call you.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <p className="text-center font-bold text-xl my-5">Open Positions</p>
        {jobPostings.map((job, index) => (
          <JobPosting
            key={index}
            job={job}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Career;
