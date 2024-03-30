import nodemailer from "nodemailer";

const orderemail=async(userinfo)=>{
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
        from:process.env.EMAIL,
        to:userinfo.email,
        subject:` Ordering Done`,
        html:`<p> Dear, <b>${userinfo.firstname}</b></p><br><br>
        <p> Your Ordering Successfuly Done!!!!! <br><br>${userinfo.firstname} Thank your`
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
export default orderemail