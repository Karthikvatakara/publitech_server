import nodemailer from "nodemailer";

export const generateVerificationMail = async(
    email: string,
    title: string,
    body: string
):Promise<void> => {
    try{
        console.log(process.env.EMAIL_HOST);
        
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, 
            auth: {
                user: 'karthikbrototype@gmail.com',
                pass: 'cioh pepw qxgw norq'
            },
        })
    
        const info = await transporter.sendMail({
            from: "PubliTech Education company <foo@example.com>",
            to: email,
            subject: title,
            html: body
        })
        console.log('Message sent: %s');
    }catch(error:any){
        console.error(error?.message,"error occured in the nodemailer")
        throw new Error(error?.message);
    }
}