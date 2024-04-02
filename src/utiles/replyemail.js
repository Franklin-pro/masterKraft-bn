import nodemailer from "nodemailer";

const replyemail = async (userinfo) => {
    try {
        console.log("User Info:", userinfo); // Log userinfo to check its contents
        
        // Ensure that userinfo is defined and has the expected properties
        if (!userinfo || !userinfo.email || !userinfo.firstname) {
            throw new Error("Invalid userinfo object");
        }

        // Create a Nodemailer transporter
        let transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        // Email options
        let mailoptions = {
            from: process.env.EMAIL,
            to: userinfo.email,
            subject: `Hello, ${userinfo.firstname}`,
            text: `Dear ${userinfo.firstname},\n\nThank you for your message. We will get back to you soon.\n\nBest regards,\nYour Company Name`
            // You can customize the email text as needed
        };

        // Send the email
        let info = await transport.sendMail(mailoptions);
        console.log('Email sent: ' + info.response);
    } catch (err) {
        console.log(err);
    }
};

export default replyemail;

