import React from "react";

const LivePrice = () => {
  return (
    <div className="container mx-auto py-4">
      <gecko-coin-price-marquee-widget
        locale="en"
        outlined="true"
        coin-ids="bitcoin,ethereum,binancecoin,ripple,cardano"
        initial-currency="usd"
        class="border border-gray-300 rounded-lg shadow-md"
      ></gecko-coin-price-marquee-widget>
    </div>
  );
};

export default LivePrice;
