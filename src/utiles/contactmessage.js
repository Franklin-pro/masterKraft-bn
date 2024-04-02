import nodemailer from "nodemailer";

const contactEmail=async(userinfo)=>{
    let transport=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        },
    });
    let mailoptions={
        from:userinfo.email,
        to:"kagabojaphet22@getMaxListeners.com",
        subject:`Contact`,
        html:`<h2>${userinfo.email}</h2> <p>sent message</p>`
    };
    transport.sendMail(mailoptions,function(err,info){
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
        }
    });
}
export default contactEmail