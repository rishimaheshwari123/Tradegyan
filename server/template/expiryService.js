const serviceExpiredEmail = (
    name, serviceName, expirationDate
) => {
    return `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Service Expired</title>
        <style>
            body {
                background-color: #f4f4f4;
                font-family: 'Arial', sans-serif;
                color: #333;
                margin: 0;
                padding: 0;
            }

            .container {
                max-width: 600px;
                margin: 20px auto;
                padding: 30px;
                background-color: #ffffff;
                border-radius: 12px;
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            }

            .header {
                text-align: center;
                margin-bottom: 20px;
            }

            .logo {
                max-width: 200px;
                margin-bottom: 10px;
            }

            .message {
                font-size: 28px;
                font-weight: bold;
                color: #f44336; /* Red color for expiration alert */
                margin-bottom: 15px;
            }

            .body {
                font-size: 18px;
                color: #555;
                margin-bottom: 20px;
                line-height: 1.6;
            }

            .info {
                border-top: 2px solid #FFD60A;
                padding-top: 15px;
                margin-top: 15px;
            }

            .info p {
                margin: 8px 0;
            }

            .highlight {
                font-weight: bold;
                color: #FFA500;
            }

            .footer {
                font-size: 12px;
                color: #777;
                text-align: center;
                margin-top: 20px;
            }

            .footer a {
                color: #4CAF50;
                text-decoration: none;
            }

            @media (max-width: 600px) {
                .container {
                    padding: 20px;
                }
                .message {
                    font-size: 24px;
                }
                .body {
                    font-size: 16px;
                }
            }
        </style>
    </head>

    <body>
        <div class="container">
            <div class="header">
                <a href="https://www.tradegyan.co/">
                    <img class="logo" src="https://i.ibb.co/ZdF6Cdr/tradegyan.png" alt="Trade Gyan Logo">
                </a>
                <div class="message">Service Expired</div>
                 <div class="info">
                <p><span class="highlight">Service Name:</span> ${serviceName}</p>
            </div>
            </div>
            <div class="body">
                <p>Dear <span class="highlight">${name}</span>,</p>
                <p>We regret to inform you that your service has expired as of <span class="highlight">${expirationDate}</span>. Here are the details of your service:</p>
            </div>
           
            <p>To continue enjoying our services, please consider renewing your subscription.</p>
            <a href="https://www.tradegyan.co" class="cta">Contact For Renew </a>
          
        </div>
    </body>

    </html>
    `;
};

module.exports = { serviceExpiredEmail };
