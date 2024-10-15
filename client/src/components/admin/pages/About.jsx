import React from "react";
import Navbar from "../../comman/Navbar";
import { FaChartLine, FaUsers, FaGlobe } from "react-icons/fa";

const About = () => {
  const impactAreas = [
    {
      title: "Retirement Planning",
      description:
        "We help you prepare for a secure and comfortable retirement by offering tailored investment strategies and financial planning services.",
      imgSrc:
        "https://www.livemint.com/lm-img/img/2023/11/01/600x338/invest__1698844278047_1698844286534.jpg",
      alt: "Retirement Planning",
    },
    {
      title: "Wealth Management",
      description:
        "Our wealth management services focus on growing and preserving your wealth with a personalized approach that matches your financial goals.",
      imgSrc:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/06/gettyimages-1207862114-612x612-1-e1595343740388.jpg",
      alt: "Wealth Management",
    },
    {
      title: "Investment Advisory",
      description:
        "We offer expert advice on building a diversified investment portfolio, tailored to your risk tolerance and financial objectives.",
      imgSrc:
        "https://cubelearn.com/wp-content/uploads/2019/05/288693-P6NYH1-966-1024x683.jpg",
      alt: "Investment Advisory",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
            About Us
          </h1>

          {/* Introduction Section */}
          <p className="text-center text-lg text-gray-700 mb-10">
            You are going to read a story where we have 15+ years of extensive
            research in stock movements.
          </p>

          {/* Icon Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-10">
            {[
              {
                icon: FaChartLine,
                text: "15+ Years of Experience",
                description:
                  "Extensive research and analysis in stock movements and financial markets.",
              },
              {
                icon: FaUsers,
                text: "Diverse Team",
                description:
                  "Our team consists of highly experienced professionals dedicated to your success.",
              },
              {
                icon: FaGlobe,
                text: "Global Presence",
                description:
                  "We have a global presence, helping clients succeed across regions and markets.",
              },
            ].map(({ icon: Icon, text, description }, index) => (
              <div key={index} className="bg-white p-6 shadow-md rounded-lg">
                <Icon className="text-5xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{text}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>

          {/* Main Story Section */}
          <div className="bg-white p-8 shadow-lg rounded-lg mb-16">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Trade Gyan Solution</strong> is a pure play financial
              market research and consulting company. We are differentiated by
              the stature of our diverse team. Our 15 years of legacy and values
              shape our future, helping to strengthen our business and bring
              value to our clients.
            </p>
            <p className="text-gray-700 mb-4">
              The company was founded in 2006 with the objective of offering
              unbiased technical analysis & solutions for the trading community,
              by experienced professionals to create a conducive environment.
            </p>
            <p className="text-gray-700">
              Our organization's commitment to sustainability informs our
              unmatched credibility, technology, intensive research, and
              customer satisfaction. The global presence that{" "}
              <strong>Trade Gyan Solution</strong> maintains acts as an edge on
              clients' success, giving us keen insight across regions and
              markets, and allowing us to make a difference around the world.
            </p>
          </div>

          {/* Mission, Vision Section */}
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg">
                  At <strong>Trade Gyan Solution</strong>, we are committed to
                  empowering underprivileged children and communities by
                  providing education, healthcare, and life skills.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg">
                  A world where every child has access to education and the
                  opportunity to reach their full potential.{" "}
                  <strong>Trade Gyan Solution</strong> aims to bridge the gap
                  between poverty and prosperity.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Values</h2>
              <p className="text-lg max-w-2xl mx-auto">
                At <strong>Trade Gyan Solution</strong>, we believe in:
                Respecting every individual, Bringing passion to work, Being
                disciplined, committed, and transparent, Demanding excellence,
                and Having fun while working.
              </p>
            </div>
          </div>

          {/* Impact Areas Section */}
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">What We Do</h2>
              <p className="text-lg text-gray-600">
                Our programs focus on key areas that have a lasting impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {impactAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                >
                  <img
                    src={area.imgSrc}
                    alt={area.alt}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
