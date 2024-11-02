
const messageViaEmail = (
  messageContent, userName


) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Message from TradeGyan</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
      font-size: 24px;
      color: #333333;
      text-align: center;
    }

    p {
      font-size: 16px;
      color: #555555;
      line-height: 1.5;
    }

    .message-content {
      background-color: #f9f9f9;
      padding: 15px;
      border-left: 4px solid #4CAF50;
      margin: 20px 0;
      font-style: italic;
    }

    .cta-button {
      display: inline-block;
      background-color: #4CAF50;
      color: #ffffff;
      padding: 12px 24px;
      border-radius: 5px;
      text-decoration: none;
      font-size: 16px;
      margin: 20px 0;
      text-align: center;
    }

    .cta-button:hover {
      background-color: #45a049;
    }

    .footer {
      font-size: 12px;
      color: #777777;
      text-align: center;
      margin-top: 20px;
    }

    .footer a {
      color: #4CAF50;
      text-decoration: none;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Message from TradeGyan</h1>

    <p>Dear <strong>${userName}</strong>,</p>

    <p>We hope this message finds you well. As part of our continued effort to provide valuable stock market insights, we wanted to reach out to you with the following information:</p>

    <div class="message-content">
      ${messageContent}
    </div>

    <p>If you have any questions or require further details, please do not hesitate to contact us. Stay informed and take wise steps in the stock market!</p>

    <a href="https://www.tradegyan.co" class="cta-button">Visit TradeGyan</a>

    <p class="footer">
      You are receiving this email because you subscribed to TradeGyan. If you wish to unsubscribe, please click <a href="{{unsubscribeLink}}">here</a>.
    </p>
  </div>
</body>

</html>

    `
}


module.exports = { messageViaEmail }