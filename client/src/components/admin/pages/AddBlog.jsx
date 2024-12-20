import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AddBlog = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    type: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        title: "Loading",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
      });

      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("desc", formData.desc);
      formDataToSend.append("type", formData.type);
      formDataToSend.append("image", formData.image);

      const response = await axios.post(
        `${BASE_URL}/blog/create`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      Swal.close();

      if (response?.data?.success) {
        Swal.fire({
          title: `Blog created successfully! `,
          text: `Have a nice day!`,
          icon: "success",
        });
        setFormData({
          title: "",
          desc: "",
          type: "",
          image: "",
        });
      }
    } catch (error) {
      Swal.close();
      toast.error("Oops, something went wrong!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-blue-600 text-center text-2xl md:text-3xl border-b-2 border-blue-600 pb-2">
        Add Blogs
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg md:text-xl font-bold mb-2"
            htmlFor="title"
          >
            Title: <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg md:text-xl font-bold mb-2"
            htmlFor="desc"
          >
            Description: <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
            name="desc"
            id="desc"
            value={formData.desc}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg md:text-xl font-bold mb-2"
            htmlFor="type"
          >
            Type: <span className="text-red-500">*</span>
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
            name="type"
            id="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="news">News</option>
            <option value="blog">Blog</option>
            <option value="articles">Articles</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg md:text-xl font-bold mb-2"
            htmlFor="image"
          >
            Image:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div className="flex items-center justify-center md:justify-start">
          <button
            className="px-6 py-2 bg-black text-white rounded-md text-base md:text-lg hover:bg-gray-800 transition"
            type="submit"
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
