

import nodemailer from "nodemailer"

const sendEmail=async(allUserInfo)=>{

    let transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:process.env.Email,
            pass:process.env.PASSWORD,
        }
    });

    let maiOptions={
        from:process.env.Email,
        to:allUserInfo.email,
        subject:`${allUserInfo.firstname} new post has been posted`,
        html: `<p>Dear, <b>${allUserInfo.firstname} ${allUserInfo.lastname}</b></p>`,
    }
    transporter.sendMail(maiOptions,function(err,info){
        if(err){
            console.error(err)
        }else{
            console.info(info)
        }
    })
}

export default sendEmail