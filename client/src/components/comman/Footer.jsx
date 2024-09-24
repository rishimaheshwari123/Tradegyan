import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import { SiMaplibre } from "react-icons/si";
import { Link } from "react-router-dom";
import { MdEmail, MdLocationCity } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-[#e9f5f9] text-black py-10">
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className=" ">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <hr className="my-4" />
            <p>
              JPT Automotive Parts companies that was established in 2005, with
              a primary focus on the real estate, agricultural construction,
              construction and manufacturing industries. Through the years the
              company has expanded it’s operations, and has made substantial
              contributions to these industries.
            </p>
          </div>
          <div className="grid  grid-cols-2 gap-8 lg:gap-10 px-5">
            <div className="">
              <h2 className="text-xl font-semibold mb-4">Our Services</h2>
              <hr className="my-4" />
              <ul className="grid gap-2">
                <Link to="">Custom Installation</Link>

                <Link to="">Routine Maintenance</Link>
                <Link to="">Performance Upgrades</Link>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <hr className="my-4" />
              <ul className="grid gap-2">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact </Link>
              </ul>
            </div>
          </div>
          <div className="px-5">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <hr className="my-4" />
            <ul className="grid gap-3  ">
              <li className="flex gap-2">
                <MdLocationCity size={22} className="" /> Address
              </li>
            </ul>
            <ul className="grid my-1">
              <li className="flex gap-2 items-center">
                {" "}
                <FaPhone size={15} />
                12345678900
              </li>
            </ul>
            <ul className="grid my-1">
              <li className="flex gap-2 items-center">
                {" "}
                <MdEmail size={15} />
                info@gmail.com
              </li>
            </ul>
            <div className="mt-5 flex space-x-4">
              <Link to="" target="_blank">
                <FaFacebook className="h-6 w-6" />
              </Link>

              <Link to="" target="_blank">
                <FaInstagram className="h-6 w-6" />
              </Link>

              <Link to="" target="_blank">
                <FaYoutube className="h-6 w-6" />
              </Link>
              <Link to="" target="_blank">
                <SiMaplibre className="h-6 w-6" />
              </Link>
            </div>
            <div>
              <div className="flex items-center bg-green-500 rounded-full p-2 space-x-2 text-white hover:bg-green-600 transition w-fit px-5 mt-5 duration-300">
                <FaWhatsapp size={34} />
                <a
                  href="https://wa.me/+919009594537"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm"
                >
                  WhatsApp
                  <span className="block text-sm font-normal">
                    Click to Chat
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs mt-10 border-t border-blue-800 pt-4">
          <p>Made By I Next Ets❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
