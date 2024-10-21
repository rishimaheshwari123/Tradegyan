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
          {/* <p className="text-lg mb-4">
            At <strong>Trade Gyan Solutions</strong>, we value our customers and
            are committed to providing world-class services. While we strive for
            accuracy, we do NOT offer a 100% guarantee on our calls. Therefore,
            we cannot offer any refunds on subscriptions regardless of
            individual performance.
          </p> */}
          {/* <h2 className="text-xl font-bold mt-6">
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
          </p> */}

          {/* <h2 className="text-xl font-bold mt-6">
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
          </p> */}

          {/* <h2 className="text-xl font-bold mt-6">No Refund Policy Summary</h2> */}
          {/* <ul className="list-disc list-inside mb-4">
            <li>
              Read all information about our services before making payment.
            </li>
            <li>Review our past performance records.</li>
            <li>Visit our FAQs, Privacy Policy, and About Us sections.</li>
          </ul>

          <p className="mt-6 text-center font-semibold">
            By making a payment, you acknowledge that you agree to the above
            Refund Policy.
          </p> */}

          <p className="font-bold">
            Trade Gyan Solutions - Customer Service and Terms
          </p>
          <p className="mt-5">
            At Trade Gyan Solutions, we value our customers and are committed to
            providing high-quality services. While we strive for accuracy, our
            clients must understand that no advisory service can offer a 100%
            guarantee on recommendations, and fees are not refundable up to one
            quarter of the subscription period, regardless of individual
            performance.
          </p>
          <p className="mt-5">
            Please note that all sales are final for the first quarter of
            service. By reviewing our performance records and making a payment
            for the subscription, you agree to these terms. After the first
            quarter, service adjustments may be discussed, but no refunds will
            be issued within this period.
          </p>
          <p className="mt-5">
            We encourage our customers to carefully evaluate our performance
            records and ensure that our services meet their expectations. Once a
            service has been subscribed to and a payment has been made, clients
            will begin receiving the requested recommendations. If, for any
            unforeseen reason, the client is not satisfied with our services,
            they may contact us for guidance on future recommendations. We will
            make every effort to address their concerns, but requests to cancel
            services or obtain refunds within the first quarter will not be
            entertained.
          </p>
          <p className="mt-5">
            In the rare event that, after payment, the service for a client is
            not initiated due to technical reasons beyond the control of Trade
            Gyan Solutions, or if Trade Gyan Solutions decides not to start
            service for a specific client, the client will be reimbursed as soon
            as possible. This does not apply if the client is unable to receive
            notifications due to DND (Do Not Disturb) status. If our service
            provider confirms that messages were sent to the client’s provided
            number, this will be considered as service delivery from our end,
            and no refund will be issued based on non-delivery due to DND. We
            advise clients to de-register from DND before making a payment or
            immediately after the service begins.
          </p>
          <p className="mt-5">
            By making a payment to Trade Gyan Solutions, customers agree to
            submit KYC (Know Your Client) documents to Trade Gyan Solutions or
            their broker (to be added or updated in the KRA database). Failure
            to update KYC will result in a hold on the service, and no refund
            will be provided. The service will begin only after the customer’s
            KYC and CRP are satisfactorily updated.
          </p>
          <p className="font-bold">Important Information:</p>
          <p className="mt-5">
            We take the security of our clients' transactions very seriously.
            Therefore, we ask that you ensure your payment accounts are not
            accessed by unauthorized persons to prevent any unauthorized
            payments for subscriptions.
          </p>
          <p className="mt-5">
            By making a payment for membership to our site, you acknowledge that
            you have read and agreed to the above Trade Gyan Solutions policies.
            We are confident that you will find our advisory services
            beneficial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
