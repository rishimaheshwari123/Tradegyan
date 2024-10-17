import React, { useState } from "react";
import { sendContactForm } from "../services/operations/auth";
import Navbar from "../components/comman/Navbar";

const Partner = () => {
  const initialFormData = {
    name: "",
    email: "",
    contact: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendContactForm(formData);
    if (response?.data?.success) {
      setFormData(initialFormData);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative flex justify-center items-center w-full min-h-[40vh] -mt-2 bg-gradient-to-r bg-black">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/016/798/942/small_2x/contact-us-concept-business-man-consulting-customers-who-contact-us-call-center-service-customer-consulting-service-email-hotline-business-contact-digital-online-business-digital-service-photo.jpg)`,
          }}
        />
        <div className="absolute bottom-2 z-50 text-[#fff5f5] font-semibold text-5xl bg-[#e2571a] p-1 rounded-2xl">
          Contact Us
        </div>
      </div>
      <div className="w-11/12 mx-auto text-center flex lg:justify-between gap-3 mt-10 lg:gap-0 flex-wrap items-center justify-center">
        <div className=" lg:w-[28%] w-[60%]">
          <h3 className="  lg:text-3xl font-sans text-xl">Address</h3>
          <p className="  lg:text-xl text-sm">
            Plot No.9, Sector C, JK Road Bhoapl, MP 462023 India
          </p>
        </div>
        <div className=" lg:w-[28%] w-[60%]">
          <h3 className="  lg:text-3xl font-sans text-xl">Call Us</h3>
          <p className="  lg:text-xl text-sm">+91777-100 4878</p>
        </div>
        <div className=" lg:w-[28%] w-[60%]">
          <h3 className="  lg:text-3xl font-sans text-xl">Mail Us</h3>
          <p className="  lg:text-xl text-sm">
            <a href="mailto:thebharatexporter@gmail.com">121@tradegyan.co</a>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around p-10 bg-gray-50">
        <div className="md:w-1/2 p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Why Become a Partner with Excella
          </h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
            <li>
              <strong>Relationship:</strong> Build strong connections between
              clients and intermediaries while enhancing your brand visibility.
            </li>
            <li>
              <strong>ROI Focused:</strong> We prioritize your brand equity,
              market share, and profit margins for quick success.
            </li>
            <li>
              <strong>Experience in Fintech:</strong> Stay updated with the
              changing landscape of the financial services industry.
            </li>
            <li>
              <strong>Consultants:</strong> Our experts are available to address
              your technical queries effectively.
            </li>
            <li>
              <strong>Flexible Pricing:</strong> Choose from various modules or
              services tailored to your needs.
            </li>
            <li>
              <strong>Streamlined Process:</strong> Our organized approach
              ensures efficient progress and faster results.
            </li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 bg-white p-10 rounded-lg shadow-lg mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Register Now!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Type your name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Partner;
