import nodemailer from "nodemailer";

export const instructorApprovalMail = async(data:{ instructor:any,reason:string}):Promise<void> =>{
    try{
        const { instructor,reason } = data;


        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, 
            auth: {
                user: 'karthikbrototype@gmail.com',
                pass: 'cioh pepw qxgw norq'
            },
        })

        const successHtml = (instructor:any) => `
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
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            border-radius: 8px;
        }
        h2, h4 {
            color: #333333;
        }
        .button {
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            margin: 20px 0;
            border-radius: 4px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <h2>Congratulations, ${instructor.username}!</h2>
        <p>Dear ${instructor.username},</p>
        <p>We are thrilled to inform you that your application to become an instructor on the Publitech Edu platform has been approved. Welcome to our team!</p>
        <p>We are excited to have you with us and look forward to your contributions to our learning community.</p>
        <p>To get started, please log in to your account and explore the instructor dashboard:</p>
        <a class="button" href="https://www.publitechedu.com/login">Go to Dashboard</a>
        <p>Should you have any questions or require further information, please do not hesitate to contact us.</p>
        <p>Best regards,</p>
        <p>The Publitech Edu Team</p>
    </div>
</body>
</html>
`;
const rejectHtml = (instructor:any, reason:string) => `
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
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            border-radius: 8px;
        }
        h2, h4 {
            color: #333333;
        }
        .button {
            background-color: #dc3545;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            margin: 20px 0;
            border-radius: 4px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <h2>Application Rejected, ${instructor.username}</h2>
        <p>Dear ${instructor.username},</p>
        <p>We regret to inform you that your application to become an instructor on the Publitech Edu platform has been rejected.</p>
        <p>Reason: ${reason}</p>
        <p>You can resubmit your application after addressing the issues mentioned above. We encourage you to review the feedback and apply again.</p>
        <p>For more details, please visit our guidelines page:</p>
        <a class="button" href="http://localhost:5173/login">Review Guidelines</a>
        <p>Should you have any questions or require further information, please do not hesitate to contact us.</p>
        <p>Best regards,</p>
        <p>The Publitech Edu Team</p>
    </div>
</body>
</html>
`;

const htmlContent = reason === "null" ? successHtml(instructor) : rejectHtml(instructor,reason)

const info = await transporter.sendMail({
    from: "PubliTech Education company <foo@example.com>",
    to: instructor.email,
    subject:"Reply for Your tutor Request",
    html: htmlContent
})
    console.log("messaga sent succesfully")
    }catch(error:any){
        throw new Error(error?.message)
    }
}