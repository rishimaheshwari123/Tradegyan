
const contactUsEmail = (
    name, email, contact, message,role


) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>
Become an Associate Form Query</title>
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
        <div className="container">
            <a href="https://tradegyan.co"><img className="logo"
                    src="https://i.ibb.co/ZdF6Cdr/tradegyan.png" alt="TradeGyan Solution Logo"></a>
            <div className="message">New Business Related Query</div>
            <div className="body">
                <p>Dear <span className="highlight">Admin</span>,</p>
                <div className="info">
                    <p>A new query related to business</p>
                    <p><span className="highlight">Name:</span> ${name}</p>
                    <p><span className="highlight">Email:</span> ${email}</p>
                    <p><span className="highlight">Contact Number:</span> ${contact}</p>
                    <p><span className="highlight">Message:</span> ${message}</p>
                    <p><span className="highlight">For :</span> ${role}</p>
                    
                </div>
            </div>
        </div>
    </body>
    
    </html>
    `
}


module.exports = { contactUsEmail }