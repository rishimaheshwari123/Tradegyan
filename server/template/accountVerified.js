const accountVerifiedEmail = (name, password) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Account Verified</title>
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
                color: #4CAF50; /* Green to indicate success */
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
            <a href="https://tradegyan-nine.vercel.app"><img class="logo"
                    src="https://i.ibb.co/cvPYkP8/logo.jpg" alt="Logo"></a>
            <div class="message">Your Account is Verified</div>
            <div class="body">
                <p>Dear <span class="highlight">User</span>,</p>
                <div class="info">
                    <p>We are pleased to inform you that your account has been successfully verified. Below are your login credentials:</p>
                    <p><span class="highlight">Username:</span> ${name}</p>
                    <p><span class="highlight">Password:</span> ${password}</p>
                </div>
                <a href="https://tradegyan-nine.vercel.app/client-login" class="cta">Login Here</a>
            </div>
            <div class="support">
                <p>If you did not request this verification, please contact support immediately.</p>
            </div>
        </div>
    </body>
    
    </html>`;
};

module.exports = { accountVerifiedEmail };
