import React from "react";
import { FaArrowRight } from "react-icons/fa";
import shares from '../../../assets/shares22.png'
const Financial = () => {
  return (
    <div>
      <p className="text-center text-3xl lg:text-5xl font-bold p-5">Forex</p>
      <div className="grid lg:grid-cols-2 max-w-7xl mx-auto p-5">
        <img
          src="https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/currencies.png"
          alt=""
        />
        <p>
          <span>
            Currency derivatives are used for currency arbitrage or to hedge
            against foreign exchange risks. Importers and exporters use them to
            protect against domestic currency fluctuations. Currency derivatives
            can be traded in currency pairs, such as USD/INR and EUR/INR, or
            cross-currency pairs, such as EURUSD and GBPUSD. 
          </span>
          <br />
          <span>
            Currency derivatives are traded on stock exchanges, or
            over-the-counter (OTC). The foreign exchange options market is the
            largest and most liquid options market. 
          </span>
          <span>
            Foreign exchange derivatives can improve economic efficiency by
            providing businesses with tools to reduce financial risk and
            founding costs. 
          </span>
        </p>
      </div>

      <div className="bg-gray-200">
        <p className="text-center text-3xl lg:text-5xl font-bold p-5">Shares</p>
        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto p-5 mt-10">
          <div>
            <p>
              <span>
                When you buy a share, you are buying a small part – or ‘unit of
                ownership’ – in a company. The benefit of trading shares is
                receiving dividends which are usually paid out by the company
                twice a year.
              </span>
              <br />
              {/* <span>
                Take a position on more than 40,000 global share CFDs and
                exchange traded shares from 31 countries, including 2,000 ETFs.
                We offer share CFDs on many popular stocks, including Apple, BP,
                Barclays, Tesla, Amazon, Meta Platforms (formerly Facebook),
                Tesco, Rio Tinto, and many more.
              </span> */}
            </p>
            <ul className="mt-5 space-y-3">
              {/* <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Access to 40,000 share CFDs and exchange traded stocks across
                US, UK, European & Asian Stock Markets and 2,000+ ETFs (Stock &
                Bond)
              </li> */}
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Actively buy and hold stocks
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Go long or short easily
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                More control, functionality, and liquidity, plus see market
                depth
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Invest in rising and falling markets
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Invest for capital appreciation or dividend income
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Focus on large-cap, mid-cap, or small-cap company shares
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Target domestic or international opportunities
              </li>
            </ul>
          </div>
          <img
  src={shares}
  alt="Shares"
  className=" lg:ml-24 lg:mt-0 mt-8 w-[80%]"

  style={{ filter: 'grayscale(100%)' }}
/>

        </div>
        <p className=" text-center text-3xl lg:text-5xl font-bold p-5">
          Share Baskets
        </p>
        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto p-5 mt-10 ">
          <div >
            <p>
              <span>
                Ride the next big trend with share baskets, these thematic
                portfolios are built for performance. We have worked to discover
                current and emerging trends driving the economy, and the
                companies best placed to reap the potential rewards.
              </span>
              <br />
              <br />
              <br />
              <span>
                Take advantage of the growth potential from emerging industries,
              
              </span>
            </p>
          </div>
          <img
            src="https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/share-basket/sb-icon-markets-b.png"
            alt="Shares"
            className=" lg:ml-24 lg:mt-0 mt-8"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 max-w-7xl mx-auto p-5 mt-10">
        <img
          src="https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/commodities.png"
          alt="Commodities"
        />
        <div>
          <p className="text-3xl lg:text-5xl font-bold">Commodities</p>
          <br />
          <p>
            <span>
              Commodities can be an important way to diversify a portfolio
              beyond traditional securities – either for the long term or as a
              place to park cash during unusually volatile or bearish stock
              markets.
            </span>
            <br />
            <span>
              Today, tradeable commodities fall into four categories – Metals,
              Energy, Livestock & Meat, and Agricultural; and are mostly traded
              in two forms – cash and forward – with the settlement (or
              delivery) dates being the main difference between the two.
            </span>
            <br />
            <span>
              We offer Exchange Traded Products on a wide range of cash
              and forward commodities instruments, including Brent and WTI Crude
              Oil, Nat Gas, Gold, Silver, Aluminum, Palladium, Copper, Wheat,
              and Sugar.
            </span>
          </p>

          <ul className="mt-5 space-y-3">
            {/* <li className="flex items-center">
              <FaArrowRight className="mr-2 text-yellow-500" />
              130+ commodities across a wide variety of asset categories
            </li> */}
            <li className="flex items-center">
              <FaArrowRight className="mr-2 text-yellow-500" />
              Go long or short easily
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2 text-yellow-500" />
              Ability to trade intra- and inter-market spreads
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2 text-yellow-500" />
              Nearly 24 hours of trading on global exchanges including CME, ICE,
              LME
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2 text-yellow-500" />
              Contracts based on Futures and Spot
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2 text-yellow-500" />
              Trade mini and micro lots
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-200">
        <p className="text-center text-3xl lg:text-5xl font-bold p-5">
          Indices
        </p>
        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto p-5 mt-10">
          <div>
            <p>
              {/* <span>
                Our range of indices covers all major exchanges all over the
                world. Choose from over 100+ cash and forward indices products,
                including the most popularly traded stock indices from US, UK,
                Europe, and Asia.
              </span> */}
              <br />
              <span>
                Indices provide the best way to gauge the performance of an
                industry, sector, or an entire country’s stock market. If, on
                average, the share prices of the companies making up the index
                go up, the index will rise with them. And if they fall, it will
                drop.
              </span>
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Tight spreads offering potential to profit from small price
                movements
              </li>
         
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Guaranteed stop loss (GSLO) feature available with some
                principals
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Enjoy low spreads and high liquidity
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                24hr trading
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Go long or short
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Real-time pricing
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Maximum exposure from minimal investment
              </li>
            </ul>
          </div>
          <img
            src="https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/markets/indices-new.png"
            alt="Shares"
          />
        </div>
      </div>
    </div>
  );
};

export default Financial;
