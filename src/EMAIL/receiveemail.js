
import nodemailer from "nodemailer"

const recieveEmail=async(allUserInfo)=>{

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
        from:allUserInfo.email,
        to:process.env.Email,
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

export default recieveEmail