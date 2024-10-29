const paymentSuccessEmail = (
    name,  serviceName, enrollmentDate, expirationDate
) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Payment Successful</title>
        <style>
            body {
                background-color: #f4f4f4;
                font-family: Arial, sans-serif;
                font-size: 16px;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 20px;
                color: #333333;
            }
    
            .body {
                font-size: 18px;
                margin-bottom: 20px;
                text-align: left;
                color: #666666;
            }
    
            .info {
                margin-bottom: 10px;
            }
    
            .info p {
                margin: 5px 0;
            }
    
            .highlight {
                font-weight: bold;
                color: #FFA500;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href="https://www.tradegyan.co/"><img class="logo"
                    src="https://i.ibb.co/qp9kBWJ/logo.jpg" alt="Not Found Logo"></a>
            <div class="message">Payment Successful</div>
            <div class="body">
                <p>Dear <span class="highlight">${name}</span>,</p>
                <div class="info">
                    <p>Your payment for the service has been successfully processed.</p>
                    <p><span class="highlight">Service Name:</span> ${serviceName}</p>
                    <p><span class="highlight">Enrollment Date:</span> ${enrollmentDate}</p>
                    <p><span class="highlight">Expiration Date:</span> ${expirationDate}</p>
                    <p>Thank you for choosing our services! If you have any questions, feel free to reach out.</p>
                </div>
                
            </div>
            <div class="support">If you need further assistance, please contact our support team.</div>
        </div>
    </body>

    </html>
    `;
};

module.exports = { paymentSuccessEmail };
