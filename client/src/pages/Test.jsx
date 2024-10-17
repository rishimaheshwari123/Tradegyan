import React, { useState } from "react";
import axios from "axios";

const SendMessage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendSMS = async () => {
    const url = `http://mysms.msg24.in/api/mt/SendSMS`;
    const params = {
      apikey: "fhKQG4QS6kmRZoIzorwjJg", // Your API key
      senderid: "TDGYAN",
      channel: "trans",
      DCS: 0,
      flashsms: 0,
      number: `91${phoneNumber}`, // Include country code (91 for India)
      text: `TradeGyan option: {#var#} CALL{#var#}{#var#} Call - {#var#} www.tradegyan.co`,
      route: 8,
    };

    try {
      const response = await axios.get(url, { params });
      console.log("SMS sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending SMS:", error);
    }
  };

  return (
    <div>
      <input
        className="border border-2-red"
        type="text"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={sendSMS}>Send SMS</button>
    </div>
  );
};

export default SendMessage;
