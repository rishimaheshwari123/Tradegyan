import React from "react";
import kno from "../assets/kno.png";
import k1 from "../assets/k1.png";
import k2 from "../assets/k2.png";
import k3 from "../assets/k3.png";

const bull = [
  {
    id: 1,
    img: "https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/Header-01(55).jpg",
    date: "10/12/2023",
    title:
      "Which Semiconductor Design Stocks Could Benefit from the AI Revolution?",
    desc: "by Trade Gyan Solutions Financial Consultancy in Brainy Bull",
  },
  {
    id: 2,
    img: "https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/Header-02(53).jpg",
    date: "10/12/2023",
    title: "How Has the IRA Affected Clean Energy Stocks?",
    desc: "by Trade Gyan Solutions Financial Consultancy in Brainy Bull",
  },
  {
    id: 3,
    img: "https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/Header-02(51).jpg",
    date: "10/12/2023",
    title: "Why is the cybersecurity sector set for a 9.63% CAGR?",
    desc: "by Trade Gyan Solutions Financial Consultancy in Brainy Bull",
  },
];
const mental = [
  {
    id: 1,
    img: k1,
    // date: "10/12/2023",
    // title:
    //   "Which Semiconductor Design Stocks Could Benefit from the AI Revolution?",
    // desc: "by Trade Gyan Solutions Financial Consultancy in Brainy Bull",
  },
  {
    id: 2,
    img: k2,
    // date: "10/12/2023",
    // title: "How Has the IRA Affected Clean Energy Stocks?",
    // desc: "by Trade Gyan Solutions Financial Consultancy in Brainy Bull",
  },
  {
    id: 3,
    img: k3,
    // date: "10/12/2023",
    // title: "Why is the cybersecurity sector set for a 9.63% CAGR?",
    // desc: "by Trade Gyan Solutions Financial Consultancy in Brainy Bull",
  },
];

const Knowledge = () => {
  return (
    <div>
      <div className="bg-[#d5edee] p-10">
        <div className="max-w-7xl mx-auto p-5 ">
          <p className="text-center font-bold text-3xl lg:text-6xl">
            Knowledge Center
          </p>
          <p className="text-center mt-8">Daily Global Market Snapshots </p>
        </div>
      </div>
      {/* second setion  */}
      <div className="max-w-7xl mx-auto p-5 mt-10">
        <p className="text-center text-xl">
          Develop your trading skills with our suite of educational tools and
          resources.
        </p>
        <p className="text-center mt-5">
          Find dedicated trading platform guides, video tutorials, advanced
          trading strategies, articles & blogs from our market analysts <br />{" "}
          and many more interesting reference material.
        </p>
      </div>

      <div className="bg-[#f6f6f6] p-10">
        <div className="main max-w-7xl mx-auto p-5 ">
          <div className="flex flex-col lg:flex-row gap-10">
            <img src={kno} alt="not foudn" />
            <p>
              It’s time to treat your grey cells, every now and then. We bring
              you interesting facts about anything & everything finance – from
              currencies to Presidents, from instruments to Stock markets. We
              vouch to keep you surprised.
            </p>
          </div>
          <br />
          <br />
          <div className="grid lg:grid-cols-3  gap-10">
            {bull.map((currElem) => (
              <div className="card flex flex-col gap-4" key={currElem.id}>
                <img src={currElem?.img} alt="not found" />
                <p>{currElem?.date}</p>
                <p className="text-xl font-bold">{currElem?.title}</p>
                <p className="text-[13px]">{currElem?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" p-10">
        <div className="main max-w-7xl mx-auto p-5 ">
          <div className="flex flex-col lg:flex-row gap-10">
            <img
              src={
                "https://d10t455z86w23i.cloudfront.net/public/uploads/blog/blog-category/0_mental-funda.png"
              }
              alt="not foudn"
            />
            <p>
              It’s time to treat your grey cells, every now and then. We bring
              you interesting facts about anything & everything finance – from
              currencies to Presidents, from instruments to Stock markets. We
              vouch to keep you surprised.
            </p>
          </div>
          <br />
          <br />
          <div className="grid lg:grid-cols-3  gap-10">
            {mental.map((currElem) => (
              <div className="card flex flex-col gap-4" key={currElem.id}>
                <img src={currElem?.img} alt="not found" />
                <p>{currElem?.date}</p>
                <p className="text-xl font-bold">{currElem?.title}</p>
                <p className="text-[13px]">{currElem?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
