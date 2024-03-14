import User from "../model/user";
import bcrypt from "bcrypt"
import errormessage from "../utiles/errormessage";
import sucessmessage from "../utiles/successmessage";
import jwt from "jsonwebtoken"


class userController{
     static async signup(req,res){
        const {firstname,lastname,email,password,confrimpassword,role}=req.body
         
        try {
            if(req.body.password !== req.body.confrimpassword){
                return errormessage(res,401,'password and confrim password not match')
            }else{
                const hashpassword=bcrypt.hashSync(req.body.password,10)
                const hashconfrimpassword=bcrypt.hashSync(req.body.confrimpassword,10)

                const user= await User.create({firstname,lastname,email,password:hashpassword,confrimpassword:hashconfrimpassword,role})
                if(!user){
                    return errormessage(res,401,'user not created')
                }else{
                    return sucessmessage(res,201,'user successfuly created',user)
                }
            }
            
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
     }

     static async Login(req,res){
         const {email,password}=req.body
         const user = await User.findOne({email})
         if(!user){
            return errormessage(res,401,'please provide your email')
         }else{
            const comparepassword=bcrypt.compareSync(password,user.password)
            if(!comparepassword){
                return errormessage(res,401,'invalid password')
            }else{
               const token=jwt.sign({user:user},process.env.SCRET_KEY,{expiresIn:"1d"})
               return res.status(200).json({
                token:token,
                data:{
                 user:user
                }
              })
            }
         }
     }
}
export default userController