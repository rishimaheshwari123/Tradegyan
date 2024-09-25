import React from "react";
import image from "../../../assests/our-edge-img.png";
import img1 from "../../../assests/ouredge/35-Years.png";
import img2 from "../../../assests/ouredge/License.png";
import img3 from "../../../assests/ouredge/24-Hours.png";
import img4 from "../../../assests/ouredge/Research.png";

const edge = [
  {
    img: img1,
    text: "Over 3 Decades of Experience",
  },
  {
    img: img2,
    text: "Licensed and Regulated",
  },
  {
    img: img3,
    text: "24x5 Dedicated Support",
  },
  {
    img: img4,
    text: "Research and Analysis",
  },
];
const OurEdge = () => {
  return (
    <div className=" lg:w-[80%] w-11/12 mx-auto  text-[#323232]">
      <div className=" flex flex-wrap ">
        <div className="lg:hidden text-center w-full my-10">
          <p className=" text-4xl  font-bold ">Our edge </p>
          <p className=" mt-4 text-xl">
            We are confident in what we bring to the table.
          </p>
        </div>

        <div className=" relative">
          <div className=" lg:min-h-[120px] min-h-[90px] absolute lg:min-w-[120px] min-w-[90px] lg:min-w-[120px] min-w-[90px]  m border-t-[30px] border-r-[30px]  max-w-[120px] lg:border-t-[40px] lg:border-r-[40px] border-[#f5c300] lg:top-[50px] lg:right-[100px] top-[10px] right-[10px]"></div>

          <div className=" lg:min-h-[120px] min-h-[90px] absolute lg:min-w-[120px]  min-w-[90px]  max-w-[120px] lg:border-b-[40px] lg:border-l-[40px] border-b-[30px] border-l-[30px]  border-[#f5c300] lg:bottom-[50px] lg:-left-[20px] bottom-0 left-0"></div>
          <img src={image} alt="" className=" lg:h-[82%]" />
        </div>

        <div className=" w-[95%] mx-auto text-center lg:mt-0 mt-[20px]">
          <div className="hidden lg:block">
            <p className=" text-4xl  font-bold ">Our edge </p>
            <p className=" mt-4 text-xl">
              We are confident in what we bring to the table.
            </p>
          </div>

          <div>
            <ul className=" grid grid-cols-2 gap-10 ">
              {edge?.map((ele, ind) => (
                <li
                  key={ind}
                  className=" w-[100px] text-[14px] text-center flex items-center flex-col mt-[60px]"
                >
                  <img src={ele?.img} alt="" />
                  <p>{ele?.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEdge;
