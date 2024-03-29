import Team from "../model/team"
import errormessage from "../utiles/errormessage.js"
import successmessage from "../utiles/successmessage.js"


class teamController{
    static async postdipertom(req,res){
        const personImage=req.file.path
        const {personName,personWork}=req.body
        try {
            const leader = await Team.create({personName,personWork,personImage})
            if(!leader){
                return errormessage(res,401,'no departiment leader found')
            }else{
                return successmessage(res,201,'leader successfilly created',leader)
            }
        } catch (error) {
            return errormessage(res,500,`error id ${error}`)
        }
    }


    static async getdipertom(req,res){
        try {
            const leader = await Team.find()
            if(!leader){
                return errormessage(res,401,'no departiment leader found')
            }else{
                return successmessage(res,200,'leader successfilly retrived',leader)
            }
        } catch (error) {
            return errormessage(res,500,`error id ${error}`)
        }
    }

    static async deletedipertom(req,res){
        try {
            const leader = await Team.deleteMany()
            if(!leader){
                return errormessage(res,401,'no departiment leader found')
            }else{
                return successmessage(res,201,'leader successfilly deleted')
            }
        } catch (error) {
            return errormessage(res,500,`error id ${error}`)
        }
    }


    static async getonedipertom(req,res){
        const id=req.params.id
        try {
            const leader = await Team.findById(id)
            if(!leader){
                return errormessage(res,401,'no departiment leader found')
            }else{
                return successmessage(res,200,'leader successfilly retrived',leader)
            }
        } catch (error) {
            return errormessage(res,500,`error id ${error}`)
        }
    }


    static async deletonedipertom(req,res){
        const id=req.params.id
        try {
            const leader = await Team.findByIdAndDelete(id)
            if(!leader){
                return errormessage(res,401,'no departiment leader found')
            }else{
                return successmessage(res,201,'leader successfilly deleted')
            }
        } catch (error) {
            return errormessage(res,500,`error id ${error}`)
        }
    }

    static async getonedipertom(req,res){
        const id=req.params.id
        try {
            const leader = await Team.findByIdAndUpdate(id,req.body,{new:true})
            if(!leader){
                return errormessage(res,401,'no departiment leader found')
            }else{
                return successmessage(res,200,'leader successfilly updated',leader)
            }
        } catch (error) {
            return errormessage(res,500,`error id ${error}`)
        }
    }
}
export default teamController