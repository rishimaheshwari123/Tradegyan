import React from "react";
import { FaPhoneAlt, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import Navbar from "../components/comman/Navbar";

const ComplaintEscalation = () => {
  return (
    <div>
      <Navbar />
      <section className="p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            Complaint Escalation at Trade Gyan
          </h2>

          <div className="space-y-6 text-black">
            {/* Level 1 */}
            <div>
              <h3 className="text-2xl font-semibold">Level 1:</h3>
              <p className="mt-2 text-lg">
                All clients having complaints regarding any service or otherwise
                shall write a mail to
                <span className="font-semibold"> compliance@tradegyan.com</span>
                . To ensure timely recording and recognition of the grievance,
                the respective department shall respond within 72 hours with
                respect to the redressal of such complaint.
              </p>
            </div>

            {/* Level 2 */}
            <div>
              <h3 className="text-2xl font-semibold">Level 2:</h3>
              <p className="mt-2 text-lg">
                If the client still wants to escalate the complaint, he/she can
                approach the Compliance Officer,
                <span className="font-semibold"> Himanshu Muralia</span> at{" "}
                <FaPhoneAlt className="inline text-black" /> +91 7771004878. He
                shall ensure to resolve the issue within 48 hours.
              </p>
            </div>

            {/* Important note */}
            <div>
              <p className="text-lg">
                <span className="font-semibold">Note:</span> If the client marks
                a copy of the mail to all levels, it will not be considered as
                escalated. The complaint will always start at Level 1, and only
                after a separate mail post-expiration or reply from the previous
                level will the complaint move to the next level.
              </p>
            </div>

            {/* SEBI and ODR Platform */}
            <div className="mt-6">
              <p className="text-lg">
                You can also file a complaint on the SEBI SCORES platform -
                <a
                  href="https://scores.sebi.gov.in/"
                  className="text-black underline inline-flex items-center"
                >
                  https://scores.sebi.gov.in/{" "}
                  <FaExternalLinkAlt className="ml-1" />
                </a>
                , or contact SEBI on their Toll-Free Helpline at 1800 22 7575 /
                1800 266 7575.
              </p>
              <p className="mt-4 text-lg">
                If unsatisfied with the response, you can access the
                <a
                  href="https://smartodr.in"
                  className="text-black underline inline-flex items-center"
                >
                  ODR Portal <FaExternalLinkAlt className="ml-1" />
                </a>
                . Refer to SEBI circular no.
                SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131 dated July 31, 2023, for
                details on Online Dispute Resolution in the Indian Securities
                Market.
              </p>
            </div>
          </div>

          {/* Compliance Officer Contact */}
          <div className="mt-8 text-lg">
            <p>
              <span className="font-semibold">Compliance Officer:</span>{" "}
              Himanshu Muralia
            </p>
            <p>
              <FaEnvelope className="inline text-black" />{" "}
              <span className="ml-2">compliance@tradegyan.com</span>
            </p>
            <p>
              <FaPhoneAlt className="inline text-black" />{" "}
              <span className="ml-2">+91 7771004878</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComplaintEscalation;
