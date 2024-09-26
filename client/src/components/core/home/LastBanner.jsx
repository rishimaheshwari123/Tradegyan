import React from 'react';

const PartnershipBlock = () => {
  return (
    <div className="partnership-blk py-4 relative z-0">
      <div className="container mx-auto py-5">
        <div className="flex justify-end py-5">
          <div className=" lg:w-[430px] lg:absolute lg:top-[100px] right-[150px] w-full text-center pt-4 lg:text-left ml-3 text-[#323232] -mt-10 ">
            {/* Large Screen Heading */}
            <h2 className="lg:text-5xl font-bold  mb-3 hidden lg:flex wow fadeInUp ">
              You are independent.<br />
              But never alone.
            </h2>

            {/* Small Screen Heading */}
            <h2 className="lg:text-4xl text-3xl font-bold  -mb-3 lg:hidden wow fadeInUp ">
              You are independent.<br />
              But never alone.
            </h2>

            <p className="lg:text-lg font-normal pb-5 mb-5 lg:mb-0 wow fadeInUp mt-6" data-wow-delay="0.5s">
              Good investments are all about the right decisions. And we're here to support you through our in-depth market briefings, around-the-clock alerts, investment options, training, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipBlock;
