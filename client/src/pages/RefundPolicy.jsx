import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import Navbar from "../components/comman/Navbar";

const RefundPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 py-8 px-4 lg:px-12">
        <div className="max-w-5xl mx-auto text-gray-800">
          <div className="flex items-center space-x-3 mb-4">
            <FaRegTimesCircle className="text-red-600 text-2xl" />
            <h1 className="text-3xl font-semibold">Refund Policy</h1>
          </div>
          <p className="text-lg mb-4">
            At <strong>Trade Gyan Solutions</strong>, we value our customers and
            are committed to providing world-class services. While we strive for
            accuracy, we do NOT offer a 100% guarantee on our calls. Therefore,
            we cannot offer any refunds on subscriptions regardless of
            individual performance.
          </p>
          <h2 className="text-xl font-bold mt-6">
            No Refunds or Cancellations
          </h2>
          <p className="mb-4">
            Please note that all sales are final. By subscribing to our services
            and making a payment, you agree to our strict NO REFUND and NO
            CANCELLATION policy.
          </p>
          <p className="mb-4">
            We encourage you to thoroughly review our past performance records
            before subscribing. Once payment is made, you will start receiving
            the services you've requested. If you are not satisfied, you may
            contact us for assistance, but no refunds or cancellations will be
            issued.
          </p>

          <h2 className="text-xl font-bold mt-6">
            Technical Issues and SMS Delivery
          </h2>
          <p className="mb-4">
            If service is not started due to technical issues beyond our
            control, a refund will be processed. However, this does not apply if
            you fail to receive SMS messages due to your number being on DND.
            Ensure your number is de-registered from DND before making payment.
          </p>

          <h2 className="text-xl font-bold mt-6">KYC and CRP Submission</h2>
          <p className="mb-4">
            After payment, customers are required to submit KYC (Know Your
            Customer) and CRP (Customer Risk Profile) documents. Services will
            only begin after satisfactory submission of these documents. Failure
            to provide KYC will result in service suspension without a refund.
          </p>

          <h2 className="text-xl font-bold mt-6">Important Note</h2>
          <p className="mb-4">
            Please ensure that unauthorized individuals do not have access to
            your payment methods. Payments made without your permission will not
            be refunded.
          </p>

          <h2 className="text-xl font-bold mt-6">No Refund Policy Summary</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Read all information about our services before making payment.
            </li>
            <li>Review our past performance records.</li>
            <li>Visit our FAQs, Privacy Policy, and About Us sections.</li>
          </ul>

          <p className="mt-6 text-center font-semibold">
            By making a payment, you acknowledge that you agree to the above
            Refund Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
