import React from 'react';

const PartnershipBlock = () => {
  return (
    <div className="partnership-blk py-4 relative z-0">
      <div className="container mx-auto py-5">
        <div className="flex justify-end py-5">
          <div className="lg:w-[430px] lg:absolute lg:top-[100px] right-[150px] w-full text-center pt-4 lg:text-left ml-3 text-[#323232] -mt-10 ">
            {/* Large Screen Heading */}
            <h2 className="lg:text-5xl font-bold mb-3 hidden lg:flex wow fadeInUp ">
              Empower Your Journey.<br />
              Together, We Thrive.
            </h2>

            {/* Small Screen Heading */}
            <h2 className="lg:text-4xl text-3xl font-bold -mb-3 lg:hidden wow fadeInUp ">
              Empower Your Journey.<br />
              Together, We Thrive.
            </h2>

            <p className="lg:text-lg font-normal pb-5 mb-5 lg:mb-0 wow fadeInUp mt-6" data-wow-delay="0.5s">
              Navigate your investment decisions with confidence. Our expert guidance and tailored resources are here to support your financial success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipBlock;
