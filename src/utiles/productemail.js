import nodemailer from "nodemailer"

const productemail=async(userInfo,blogInfo)=>{
    let transport=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:process.env.EMAIL,
            pass    :process.env.PASSWORD
        },
    });
    let mailOption={
        from:process.env.EMAIL,
        to:userInfo.email,
        subject:`New Product`,
        html:`<p>Dear</p><p><b>${userInfo.firstName}</b></p><p> You did know?Wekraft Upload New Product<br><br>
        <b> ${blogInfo.title}</b></p>`
    }
    transport.sendMail(mailOption,function(err,info){
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
        }
    })
}
export default productemail