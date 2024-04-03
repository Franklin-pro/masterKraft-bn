import nodemailer from "nodemailer";

const orderemail=async(userinfo,orderinfo)=>{
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
        subject:` Ordering Product`,
        html:`<p> Dear, <b>${userinfo.email}</b></p><br><br>
        <p>Your are Ordering <b>${orderinfo.productName}</b> Successfuly Done!!!!! <br><br>`
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