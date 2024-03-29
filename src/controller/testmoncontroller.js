import Testmon from "../model/testmon";
import errormessage from "../utiles/errormessage";
import sucessmessage from "../utiles/successmessage";



class testmonController{
    static async posttestmon (req,res){
        try {
            const {Name,Description,Role}=req.body
            const Image = req.file.path

            const testmon = await Testmon.create({Name,Image,Description,Role})
            if(!testmon){
                return errormessage(res,401,'not created please')
            }else{
                return sucessmessage(res,201,'thanks successfuly testmon posted',testmon)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }


    static async gettestmon (req,res){
        try {
            const testmon = await Testmon.find()
            if(!testmon){
                return errormessage(res,401,'not created please')
            }else{
                return sucessmessage(res,200,'thanks successfuly testmon retrived',testmon)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }


    static async deletetestmon (req,res){
        try {
            const testmon = await Testmon.deleteMany()
            if(!testmon){
                return errormessage(res,401,'not created please')
            }else{
                return sucessmessage(res,201,'thanks successfuly testmon deleted',testmon)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async getonetestmon (req,res){
        const id=req.params=id
        try {
            const testmon = await Testmon.findById(id)
            if(!testmon){
                return errormessage(res,401,'not created please')
            }else{
                return sucessmessage(res,200,'thanks successfuly testmon retrived',testmon)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async deletetestmon (req,res){
        const id=req.params=id
        try {
            const testmon = await Testmon.findByIdAndDelete(id)
            if(!testmon){
                return errormessage(res,401,'not created please')
            }else{
                return sucessmessage(res,201,'thanks successfuly testmon delete',testmon)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }


    static async updatetestmon (req,res){
        const id=req.params=id
        try {
            const testmon = await Testmon.findByIdAndUpdate(id,req.body,{new:true})
            if(!testmon){
                return errormessage(res,401,'not created please')
            }else{
                return sucessmessage(res,201,'thanks successfuly testmon updated',testmon)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }
}
export default testmonController