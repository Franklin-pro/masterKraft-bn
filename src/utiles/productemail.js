import nodemailer from "nodemailer";

const productemail = async (userInfo, blogInfo) => {
    try {
        let transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        let mailOptions = {
            from: process.env.EMAIL,
            to: userInfo.email,
            subject: `New Product`,
            html: `<p>Dear ${userInfo.firstName}</p><p>You did know? Wekraft Upload New Product</p><p><b>${blogInfo.title}</b></p>`
        };

        let info = await transport.sendMail(mailOptions);
        console.log("Email sent: ", info);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
};

export default productemail;
