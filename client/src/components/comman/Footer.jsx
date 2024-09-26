import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

import logo from '../../assets/logo.png'
import img1 from '../../assets/footer/1.png'
import img2 from '../../assets/footer/2.png'
import img3 from '../../assets/footer/3.png'
import img4 from '../../assets/footer/4.png'
import img5 from '../../assets/footer/5.png'
import img6 from '../../assets/footer/6.png'



const navigation = [
  {
    heading: "Markets",
    items: [
      "Currencies",
      "Shares",
      "Share Baskets",
      "Commodities",
      "Indices",
      "Treasuries",
      "CFDs",
      "ETP",
      "Market Information",
    ],
  },
  {
    heading: "Platforms",
    items: [
      "Century Trader App",
      "TradeRoom",
      "MT5 Platform",
      "CQG Platform",
      "TWS Platform",
      "Quantifier",
    ],
  },
  {
    heading: "About",
    items: [
      "About Us",
      "Awards",
      "Media",
      "Research",
      "Our Team",
      "Careers",
      "CSR & Sustainability",
      "Client Fund Protection",
    ],
  },
  {
    heading: "Learn",
    items: [
      "Webinars / Seminars",
      "Investment Insights",
      "Trading Smart Series",
      "Knowledge Center",
      "Blog",
      "Financial Glossary",
    ],
  },
];


const Footer = () => {
  return <div className=" w-[90%] mx-auto text-[#323232]">


{/* First section */}

<div className=" flex w-full mb-16">

{/* logo section */}
  <div className=" w-[25%] flex flex-col gap-3">

<div>
  <img src={logo} alt="TradegyanLogo" />
 
</div>

<div>
<h3 className=" font-bold text-xl">Regulated by SCA</h3>
<p className=" text-sm">Century Financial is a registered trademark of
Century Financial Consultancy LLC</p>

</div>

<div className="flex space-x-4 ">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="text-2xl text-[#3b5998] hover:text-gray-600" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-2xl text-[#00acee] hover:text-gray-600" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="text-2xl text-[#0077b5] hover:text-gray-600" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-2xl text-[#C13584] hover:text-gray-600" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-2xl text-[#FF0000] hover:text-gray-600" />
      </a>
    </div>
  </div>


{/* Links */}
  <div>

  </div>
</div>



  </div>;
};

export default Footer;
