import React from "react";
import { Link } from "react-router-dom";
import kno from "../assets/kno.png";
import k1 from "../assets/boomberg.png";
import k2 from "../assets/invest.jpeg";
import k3 from "../assets/ret.jpg";

const Knowledge = () => {
  const blog = [
    {
      id: 1,
      type: "news",
      link: "https://www.bloomberg.com/asia",
      image: k1,
      title: "Bloom Berg",
      desc: "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
    },
    {
      id: 2,
      type: "news",
      link: "https://www.investing.com",
      image: k2,
      title: "Investing",
      desc: "Investing.com India serves traders of a wide range of asset classes with real-time charts & quotes along with news and analysis.",
    },
    {
      id: 3,
      type: "news",
      link: "https://www.reuters.com",
      image: k3,
      title: "Returns",
      desc: "Find latest news from every corner of the globe at Reuters.com, your online source for breaking international news coverage.",
    },
  ];

  return (
    <div>
      {/* First Section */}
      <div className="bg-[#d5edee] p-10">
        <div className="max-w-7xl mx-auto p-5">
          <p className="text-center font-bold text-3xl lg:text-6xl">
            Knowledge Center
          </p>
          <p className="text-center mt-8">Daily Global Market Snapshots</p>
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-7xl mx-auto p-5 mt-10">
        <p className="text-center text-xl">
          Develop your trading skills with our suite of educational tools and
          resources.
        </p>
        <p className="text-center mt-5">
          Find dedicated trading platform guides, video tutorials, advanced
          trading strategies, articles & blogs from our market analysts <br />{" "}
          and many more interesting reference materials.
        </p>
      </div>

      {/* Blog Section */}
      <div className="bg-[#f6f6f6] p-10">
        <div className="main max-w-7xl mx-auto p-5">
          <div className="flex flex-col lg:flex-row gap-10">
            <img src={kno} alt="not found" />
            <p>
              It’s time to treat your grey cells, every now and then. We bring
              you interesting facts about anything & everything finance – from
              currencies to Presidents, from instruments to Stock markets. We
              vouch to keep you surprised.
            </p>
          </div>
          <br />
          <br />
          <div className="grid lg:grid-cols-3 gap-10">
            {blog?.map((currElem) => (
              <Link
                to={currElem?.link}
                className="card flex flex-col gap-4"
                key={currElem.id}
              >
                {/* Image with minimized size */}
                <img
                  src={currElem?.image}
                  alt="not found"
                  className="w-full h-48 object-cover"
                />
                {/* Title and description with hover effect */}
                <p className="text-xl font-bold hover:text-blue-500 text-center">
                  {currElem?.title}
                </p>
                <p className="text-[13px] hover:text-blue-500">
                  {currElem?.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
