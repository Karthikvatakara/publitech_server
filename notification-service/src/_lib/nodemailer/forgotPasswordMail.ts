import nodemailer from "nodemailer";

export const forgotPasswordMail = async(data:{email:string,url:string}) => {
    try{
        const { email,url } = data;
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, 
            auth: {
                user: 'karthikbrototype@gmail.com',
                pass: 'cioh pepw qxgw norq'
            },
        })
        const emailHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }
                .email-container {
                    background-color: #ffffff;
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    box-shadow: 0 0 5px rgba(0,0,0,0.1);
                }
                .button {
                    background-color: #056b10;
                    color: #ffffff;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 5px;
                    display: inline-block;
                }
                h2, h4 {
                    color: #333333;
                }
                .resetPass{
                  color:#ffff;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <h2>Reset Your Password</h2>
                <p>If you requested a password reset, use the button below to proceed. If you did not make this request, please ignore this email.</p>
                <p><a href="${url}" class="button"><span class="resetPass">Reset Password</span></a></p>
                <p>This link will expire in 15 minutes. If you did not request a password reset, no further action is required.</p>
            </div>
        </body>
        </html>`;

        const info = await transporter.sendMail({
            from: "PubliTech Education company <foo@example.com>",
            to: email,
            subject:"Password Reset Request",
            html: emailHTML
        })
        console.log('Message sent: %s');
    }catch(error:any){
        throw new Error(error?.message);
    }
}