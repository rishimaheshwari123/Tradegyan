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
      <div className="bg-black text-white">
        <div className="relative max-w-7xl mx-auto p-5 md:p-5">
          <p className="lg:text-sm md:text-sm text-[12px]">
            Century Financial Consultancy LLC ("Century") does not offer
            investment advisory or portfolio management services nor guarantees
            investment returns. We do not accept or make payments in
            cryptocurrency or digital currency. Our official website is
            www.century.ae. Beware of fraudulent companies or websites posing as
            Century. We are not responsible for any losses from using fake
            websites or entities. Trading in financial markets involves a
            significant risk of loss which can exceed deposits and may not be
            suitable for all investors. Before you start, please ensure you
            fully understand the risks involved.
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
