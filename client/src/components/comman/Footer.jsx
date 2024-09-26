import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import logo from "../../assets/logo.png";
import img1 from "../../assets/footer/1.png";
import img2 from "../../assets/footer/2.png";
import img3 from "../../assets/footer/3.png";
import img4 from "../../assets/footer/4.png";
import img5 from "../../assets/footer/5.png";
import img6 from "../../assets/footer/6.png";
import ReachUs from "./Address";
import banner from "../../assets/footer/workbanner.png";
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

const websiteSections = [
  {
    title: "Regulatory License",
    url: "/regulatory-license",
  },
  {
    title: "Legal Documentation",
    url: "/legal-documentation",
  },
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    title: "Cookie Policy",
    url: "/cookie-policy",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
  {
    title: "Website Terms of Use",
    url: "/terms-of-use",
  },
  {
    title: "Sitemap",
    url: "/sitemap",
  },
];

const footerImages = [img1, img2, img3, img4, img5, img6];

const Footer = () => {
  return (
    <div className="w-[90%] mx-auto text-[#323232] mt-10">
      {/* First section */}
      <div className="flex w-full mb-16 flex-wrap justify-between ">
        {/* Logo section */}
        <div className="lg:w-[23%] w-full flex flex-col gap-3">
          <div className="mb-[30px]">
            <img src={logo} alt="TradegyanLogo" />
          </div>

          <div>
            <h3 className="font-bold text-xl">Regulated by SCA</h3>
            <p className="text-sm text-gray-500">
              Century Financial is a registered trademark of Century Financial
              Consultancy LLC
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-xl text-[#3b5998] hover:text-gray-600" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl text-[#00acee] hover:text-gray-600" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-xl text-[#0077b5] hover:text-gray-600" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl text-[#C13584] hover:text-gray-600" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-xl text-[#FF0000] hover:text-gray-600" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="lg:w-[72%]  lg:mt-0 mt-[50px] w-[96%] mx-auto gap-10 flex flex-col ">
          <div className="flex justify-between flex-wrap">
            {navigation.map((nav, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-4">{nav.heading}</h3>
                <ul className="space-y-2">
                  {nav.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm hover:text-gray-600 text-gray-500"
                    >
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="  ">
            {/* Sublinks */}
            {websiteSections?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`px-2 border-black text-sm hover:text-gray-600 text-gray-500 ${
                  index !== websiteSections.length - 1 ? "border-r" : ""
                }`}
              >
                {link.title}
              </a>
            ))}

            <div className=" grid grid-cols-6 gap-10 mt-[40px]">
              {footerImages?.map((img, inx) => (
                <img src={img} key={inx} alt="" className=" " />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full mb-1 flex-wrap justify-between ">
        <div className="lg:w-[30%] w-full flex flex-col gap-3">
          <ReachUs />
        </div>

        <div className=" w-[70%]">
          <img src={banner} alt="" />
        </div>
      </div>

      <div>
        <Disclaimer />
      </div>
    </div>
  );
};

export default Footer;

export const Disclaimer = () => {
  return (
    <div className="p-4 bg-gray-50">
      <h2 className="text-lg font-bold mb-2">Disclaimer</h2>
      <p className="text-gray-500 text-[12px]">
        Trading in financial products carries risk. Trading in leveraged
        Over-The-Counter (OTC) Derivative products (including Contracts for
        Difference (CFDs) and spot foreign exchange contracts) involves a
        significant risk of loss which can exceed deposits and may not be
        suitable for all investors. OTC Derivative products / CFDs are complex
        financial instruments that do not confer any claim or right to the
        underlying financial instrument. Transactions in these instruments are
        very risky, and you should trade only with the capital you can afford to
        lose. Before deciding to trade on these products, you should consider
        your investment objectives, risk tolerance and your level of experience.
        Accordingly, you should ensure that you understand the risks involved
        and seek independent advice from professionals, if necessary.
      </p>
      <p className="text-gray-500 text-xs mt-6">
        Century Financial Consultancy LLC (CFC) is duly licensed and regulated
        by the Securities and Commodities Authority of UAE (SCA) under license
        numbers 20200000028 and 20200000081 to practice the activities of
        Trading broker in the international markets, Trading broker of the OTC
        derivatives and currencies in the spot market, Introduction, Financial
        Consultation and Financial Analysis, and Promotion. CFC is a Limited
        Liability Company incorporated under the laws of UAE and registered with
        the Department of Economic Development of Dubai (registration number
        768189). CFC has its registered office at 601, Level 6, Building no. 4,
        Emaar Square, Downtown, Dubai, UAE, PO Box 65777.
      </p>
      <p className="text-gray-500 text-xs mt-6">
        Any content available on our website is presented solely to provide
        information and educate visitors. Under no circumstances is any of this
        content meant to be construed as an offer, recommendation, advice, or
        solicitation to buy or sell securities or other financial products.
      </p>
      <p className="text-gray-500 text-xs mt-6">
        This website's information is not intended for use by anybody residing
        outside UAE or where such use would violate local laws or regulations.
      </p>
    </div>
  );
};