
import Didyou from "../model/didyou";
import errormessage from "../utiles/errormessage";
import sucessmessage from "../utiles/successmessage";


class didyouController{
    static async sendDidyou(req,res){
        const didyou=await Didyou.create(req.body)
        if(!didyou){
            return errormessage(res,401,'no idea from didyou found')
        }else{
            return sucessmessage(res,201,'successfuly post',didyou)
        }
    }

}
export default didyouController