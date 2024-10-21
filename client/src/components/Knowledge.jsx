import React, { useEffect, useState } from "react";
import axios from "axios";
import kno from "../assets/kno.png";
import k1 from "../assets/k1.png";
import k2 from "../assets/k2.png";
import k3 from "../assets/k3.png";

const Knowledge = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [blog, setBlog] = useState([]);

  const getAllBlogs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/blog/getAll`);

      if (response?.data?.success) {
        setBlog(response.data.blogs);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
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
            {blog?.map(
              (currElem) =>
                currElem?.type === "news" && (
                  <div className="card flex flex-col gap-4" key={currElem.id}>
                    <img src={currElem?.image} alt="not found" />
                    <p>{formatDate(currElem?.createdAt)}</p>
                    <p className="text-xl font-bold">{currElem?.title}</p>
                    <p className="text-[13px]">{currElem?.desc}</p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>

      {/* <div className=" p-10">
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
      </div> */}
    </div>
  );
};

export default Knowledge;
