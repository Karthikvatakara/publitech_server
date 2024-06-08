import { generateVerificationMail } from "./generateVerificationMail";

export const sendOtpMail = async(email:string,otp:string) => {
    const mailResponse = await generateVerificationMail(
        email,
        "Email verification",
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Verification</title>
            <style>
                body {
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    background-color: #f0f0f0;
                    margin: 0;
                    padding: 0;
                    color: #333;
                }

                .container {
                    max-width: 600px;
                    margin: 40px auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                }

                .header {
                    background-color: #4CAF50;
                    padding: 10px;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    text-align: center;
                    color: #fff;
                }

                .header h1 {
                    margin: 0;
                    font-size: 24px;
                }

                .content {
                    padding: 20px;
                    text-align: center;
                }

                .content p {
                    font-size: 16px;
                    margin: 0 0 10px;
                }

                .otp-code {
                    display: inline-block;
                    margin: 20px 0;
                    padding: 10px 20px;
                    font-size: 24px;
                    font-weight: bold;
                    color: #fff;
                    background-color: #4CAF50;
                    border-radius: 5px;
                }

                .footer {
                    margin-top: 20px;
                    font-size: 14px;
                    text-align: center;
                    color: #aaa;
                }

                .footer p {
                    margin: 5px 0;
                }

                @media (max-width: 600px) {
                    .container {
                        width: 90%;
                        padding: 10px;
                    }

                    .header h1 {
                        font-size: 20px;
                    }

                    .content p {
                        font-size: 14px;
                    }

                    .otp-code {
                        font-size: 20px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Email Verification</h1>
                </div>
                <div class="content">
                    <p>Dear User,</p>
                    <p>We have received a request to verify your email address. Please use the following OTP code to complete the verification:</p>
                    <div class="otp-code">${otp}</div>
                    <p>If you didn't request this OTP, please ignore this email.</p>
                </div>
                <div class="footer">
                    <p>Best regards,</p>
                    <p>PubliTech</p>
                    <p>&copy; 2024 Publitech. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
        `
    )
    console.log("Email sent successfully: ", mailResponse);
}