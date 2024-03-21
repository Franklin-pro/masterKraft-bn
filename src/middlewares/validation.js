import {check,validationResult} from "express-validator"
import errormessage from "../utiles/errormessage"


class validator{
    static inputvalidator(req,res,next){
        const error=validationResult(req)

        if(!error==error.isEmpty()){
            error.errors.map((err)=>{
                return errormessage(res,401,err.msg)
            })
        }else{
            return next()
        }
    }

    static userAccountRule(){
        return[
            check("firstname","please write your firstName correctly").trim().isAlpha(),
            check("lastname","please write your lastName correctly").trim().isAlpha(),
            check("email","please write your email correctly").trim().isEmail(),
            check("password","please write your stronger password").trim().isStrongPassword(),
           
        ]
    }
    static contactAccountRule(){
        return[
            check('phonenumber','Invalid mobile number').isMobilePhone('any', { strictMode: true }),
            check("province","please write your province correctly").trim().isAlpha(),
            check("email","please write your email correctly").trim().isEmail(),
            check("fullname","please write your firstName correctly").trim().isAlpha(),
            check("schoolname","please write your schoolname correctly").trim().isAlpha(),
            check("course","please write your course correctly").trim().isAlpha(),
            check("message","please write your message correctly").trim().isString(),
        ]
    }
}
export default validator