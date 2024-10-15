import React from "react";
import Navbar from "../components/comman/Navbar";

const InvestorCharter = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6">
            Investor Charter in respect of Investment Adviser (IA)
          </h1>

          {/* Section A */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              A. Vision and Mission Statements for investors
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Vision</h3>
              <p>Invest with knowledge & safety.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Mission</h3>
              <p>
                Every investor should be able to invest in the right investment
                products based on their needs, manage and monitor them to meet
                their goals, access reports, and enjoy financial wellness.
              </p>
            </div>
          </section>

          {/* Section B */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              B. Details of business transacted by the Investment Adviser with
              respect to the investors
            </h2>
            <ul className="list-disc pl-6">
              <li>
                To enter into an agreement with the client providing all details
                including fee details, conflict of interest disclosure, and
                maintaining confidentiality.
              </li>
              <li>
                To do a proper and unbiased risk-profiling and suitability
                assessment of the client.
              </li>
              <li>
                To obtain registration with Know Your Client Registration Agency
                (KRA) and Central Know Your Customer Registry (CKYC).
              </li>
              <li>To conduct an audit annually.</li>
              <li>To disclose the status of complaints on its website.</li>
              <li>
                To disclose company details such as name, proprietor,
                registration number, address, and SEBI office details on its
                website.
              </li>
              <li>To employ only qualified and certified employees.</li>
              <li>To deal with clients only from official numbers.</li>
              <li>
                To maintain records of interactions with all clients, including
                prospective clients (prior to onboarding).
              </li>
            </ul>
          </section>

          {/* Section C */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              C. Details of services provided to investors (No Indicative
              Timelines)
            </h2>
            <ul className="list-disc pl-6">
              <li>Onboarding of Clients</li>
              <li>Sharing of agreement copy</li>
              <li>Completing KYC of clients</li>
            </ul>
            <h3 className="text-xl font-bold mt-4">Disclosure to Clients</h3>
            <ul className="list-disc pl-6">
              <li>
                To provide full disclosure about its business, affiliations, and
                compensation in the agreement.
              </li>
              <li>
                To not access the client’s accounts or holdings for offering
                advice.
              </li>
              <li>To disclose the risk profile to the client.</li>
              <li>
                To provide investment advice based on the risk-profiling and
                suitability of the client.
              </li>
            </ul>
          </section>

          {/* Section D */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              D. Details of grievance redressal mechanism and how to access it
            </h2>
            <ul className="list-disc pl-6">
              <li>
                An investor should approach the Investment Adviser and ensure
                the grievance is resolved within 30 days.
              </li>
              <li>
                If not resolved, lodge a complaint with SEBI on the 'SCORES'
                portal, a web-based redressal system for tracking the status of
                complaints.
              </li>
              <li>
                Physical complaints can be sent to: Office of Investor
                Assistance and Education, SEBI Bhavan, Plot No. C4-A, ‘G’ Block,
                Bandra-Kurla Complex, Bandra (E), Mumbai – 400 051.
              </li>
            </ul>
          </section>

          {/* Section E */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              E. Expectations from the investors (Responsibilities of investors)
            </h2>
            <div>
              <h3 className="text-xl font-bold">Do's</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Always deal with SEBI registered Investment Advisers.</li>
                <li>
                  Ensure the Investment Adviser has a valid registration
                  certificate.
                </li>
                <li>Check for SEBI registration number.</li>
                <li>
                  Pay advisory fees only through banking channels and keep
                  receipts.
                </li>
                <li>
                  Ask for risk profiling before accepting investment advice.
                </li>
                <li>
                  Ask relevant questions and clear doubts before acting on
                  advice.
                </li>
                <li>
                  Assess the risk-return profile of the investment before
                  investing.
                </li>
                <li>
                  Get terms and conditions in writing before dealing with any
                  Investment Adviser.
                </li>
                <li>Be vigilant in your transactions.</li>
                <li>Approach authorities for redressal of grievances.</li>
                <li>
                  Inform SEBI about Advisers offering assured or guaranteed
                  returns.
                </li>
              </ul>

              <h3 className="text-xl font-bold">Don'ts</h3>
              <ul className="list-disc pl-6">
                <li>
                  Don’t fall for stock tips offered under the pretext of
                  investment advice.
                </li>
                <li>
                  Do not provide funds for investment to the Investment Adviser.
                </li>
                <li>Don’t fall for the promise of assured returns.</li>
                <li>
                  Don’t rush into investments that don’t match your goals or
                  risk appetite.
                </li>
                <li>
                  Don’t share login credentials of your trading and demat
                  accounts.
                </li>
              </ul>
            </div>
          </section>

          {/* SEBI Link */}
          <section className="text-sm">
            <p>
              For a list of all SEBI registered Investment Advisers, visit:
              <a
                href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline ml-2"
              >
                SEBI Website
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InvestorCharter;
