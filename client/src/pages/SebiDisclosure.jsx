import React from "react";
import Notification from "../components/core/home/Notification";
import Navbar from "../components/comman/Navbar";

const SebiDisclosure = () => {
  return (
    <>
        {/* <Notification /> */}
      <Navbar />

      <div className="text-gray-800 min-h-screen p-6">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            SEBI’s Investor Charter for Investment Advisers (IAs)
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold">
              A. Vision and Mission Statements for Investors
            </h2>
            <p className="mt-4">
              <strong>Vision:</strong> Invest with knowledge & safety.
              <br />
              <strong>Mission:</strong> Every investor should be able to invest
              in right investment products based on their needs, manage and
              monitor them to meet their goals, access reports, and enjoy
              financial wellness.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold">
              B. Details of Business Transacted by the Investment Adviser with
              Respect to the Investors
            </h2>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                Enter into an agreement with the client providing all details
                including fee, conflict of interest disclosure, and
                confidentiality of information.
              </li>
              <li>
                Conduct unbiased risk profiling and suitability assessment of
                the client.
              </li>
              <li>
                Obtain registration with Know Your Client Registration Agency
                (KRA) and Central Know Your Customer Registry (CKYC).
              </li>
              <li>Conduct an annual audit.</li>
              <li>Disclose the status of complaints on its website.</li>
              <li>
                Display details like name, registration type, number, address,
                and SEBI office details on its website.
              </li>
              <li>Employ qualified and certified staff.</li>
              <li>Use official numbers only for client interaction.</li>
              <li>
                Maintain records of all client interactions, including
                prospective ones, prior to onboarding.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold">
              C. Details of Services Provided to Investors (No Indicative
              Timelines)
            </h2>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Onboarding clients and sharing the agreement copy.</li>
              <li>Completing KYC of clients.</li>
              <li>
                Providing full disclosure about business, affiliations, and
                compensation in the agreement.
              </li>
              <li>
                Not accessing the client’s accounts or holdings for offering
                advice.
              </li>
              <li>Disclosing the risk profile to the client.</li>
              <li>
                Providing investment advice based on risk profiling and
                suitability.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold">
              D. Details of Grievance Redressal Mechanism and How to Access It
            </h2>
            <p className="mt-4">
              <strong>1.</strong> In case of any grievance, an investor should
              approach the concerned Investment Adviser and resolve the issue
              within 30 days.
              <br />
              <strong>2.</strong> If the complaint isn’t resolved
              satisfactorily, investors can lodge complaints with SEBI through
              its ‘SCORES’ portal, a centralized system to track complaints.
              <br />
              <strong>3.</strong> Physical complaints can be sent to: SEBI
              Regional Office at Bhopal.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold">
              E. Expectations from Investors (Responsibilities of Investors)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div>
                <h3 className="text-xl font-semibold">Do’s</h3>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Always deal with SEBI registered Investment Advisers.</li>
                  <li>
                    Ensure the Investment Adviser has a valid registration
                    certificate.
                  </li>
                  <li>
                    Check for SEBI registration number. Refer to SEBI’s
                    registered IAs list on their website.
                  </li>
                  <li>
                    Pay advisory fees only through banking channels and keep
                    signed receipts.
                  </li>
                  <li>
                    Ask for your risk profiling before accepting investment
                    advice.
                  </li>
                  <li>
                    Clear all doubts with your Investment Adviser before acting
                    on advice.
                  </li>
                  <li>
                    Assess the risk-return profile, liquidity, and safety before
                    investing.
                  </li>
                  <li>
                    Insist on written terms and conditions before dealing with
                    an Investment Adviser.
                  </li>
                  <li>Be vigilant in your transactions.</li>
                  <li>
                    Approach appropriate authorities for grievance redressal.
                  </li>
                  <li>
                    Inform SEBI about any misleading or guaranteed return claims
                    by Investment Advisers.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Don’ts</h3>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>
                    Don’t fall for stock tips under the pretext of investment
                    advice.
                  </li>
                  <li>
                    Don’t provide funds for investment to the Investment
                    Adviser.
                  </li>
                  <li>
                    Don’t fall for promises of indicative or exorbitant returns.
                  </li>
                  <li>
                    Avoid making decisions based on phone calls or messages.
                  </li>
                  <li>
                    Don’t rush into investments that don’t match your risk
                    appetite.
                  </li>
                  <li>
                    Don’t share login credentials and passwords of your trading
                    or demat accounts.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p>
              <strong>SEBI Registration Number:</strong> INA000008808
            </p>
            <p>
              <strong>Company Name:</strong> Tradegyan.co
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SebiDisclosure;
