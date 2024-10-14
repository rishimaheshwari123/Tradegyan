import React from "react";
import axios from "axios";

const SendMessage = () => {
  const sendMessage = async () => {
    const apiUrl = `https://app.wabaconnect.com/api/sendtemplate.php?LicenseNumber=89796395190&APIKey=VIaqCUEYXjkBzpnQe0gODyw25&Contact=919893465781&Template=updatenav`;

    try {
      const response = await axios.get(apiUrl);
      console.log("Message sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <button onClick={sendMessage}>Send WhatsApp Message</button>
    </div>
  );
};

export default SendMessage;
