import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

const Notification = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(false);
  };

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    toggle && (
      <div className="bg-black text-white border-b-2 border-white">
        <div className="relative max-w-7xl mx-auto p-5 md:p-5">
          <p className="lg:text-sm md:text-sm text-[12px]">
            स्टॉक मार्केट में निवेश और व्यापार हमेशा बाजार जोखिमों के अधीन है,
            हमारी संस्था - ट्रेड ज्ञान सोलूशन्स (निवेश सलाहकार) किसी भी तरह की
            आश्वस्त, गारंटीकृत वापसी लाभ, लाभ साझेदारी सर्विस, और कोई भी ऐसी
            सर्विस जो कंपनी की वेबसाइट में उल्लेख नहीं हैं, प्रदान नहीं करती है.
            और ना ही हम किसी के डीमेट अकाउंट की जानकारी मांगते है. अगर कोई भी
            आपको ऐसी सेवाओं के बारे में बताता है तो हमसे एक बार संपर्क करे -
            7771004879. Investment & Trading In Securities Market Is Always
            Subjected To Market Risks. Trade Gyan Solutions. ( Investment
            Advisor) Do Not Provide Any Assured/ Guaranteed Return/Profit
            services, Any Profit Sharing Services, And Services Which Are Not
            Mention In Company Website, Please Trade Only Company SMS With
            Proper Stop Loss. We did not ask for Demat details to anyone. Please
            call us if anyone provides a talk about these services. 7771004879
          </p>
          <span
            className="absolute top-2 right-0 lg:-right-2 cursor-pointer p-1 text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            onClick={handleToggle}
          >
            <ImCross />
          </span>
        </div>
      </div>
    )
  );
};

export default Notification;
