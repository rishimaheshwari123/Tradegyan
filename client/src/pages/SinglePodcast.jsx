import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SinglePodcast = () => {
  const [singleBlog, setSingleBlog] = useState(null);
  const { id } = useParams();

  const getSingleBlog = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/blog/get/${id}`
      );
      if (response?.data?.success) {
        setSingleBlog(response.data.blog);
      } else {
        throw new Error(response?.data?.message);
      }
    } catch (error) {
      toast.error("Error in getting details about single blog");
    }
  };

  useEffect(() => {
    getSingleBlog(id);
  }, [id]);

  const formatDescription = (desc) => {
    if (!desc) return "";
    const words = desc.split(" ");
    return words.reduce((acc, word, index) => {
      if ((index + 1) % 80 === 0) {
        return acc + word + "<br /><br />";
      }
      return acc + word + " ";
    }, "");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {singleBlog ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={singleBlog.image}
            alt={singleBlog.title}
            className="flex justify-center items-center lg:w-[60vw] lg:h-[50vh] object-cover mx-auto"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{singleBlog.title}</h1>
            <br />
            <p
              className="text-gray-700 text-lg mb-4"
              dangerouslySetInnerHTML={{
                __html: formatDescription(singleBlog.desc),
              }}
            ></p>
            <br />
            <Link
              to="/podcast"
              className="bg-orange-500 px-8 w-fit py-4 rounded-md flex m-auto text-white text-xl"
            >
              Back To Blog
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No blog found</p>
      )}
    </div>
  );
};

export default SinglePodcast;
