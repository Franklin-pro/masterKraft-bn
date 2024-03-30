

import Videoupload from "../model/videoupload.js";
import errormessage from "../utiles/errormessage.js";
import sucessmessage from "../utiles/successmessage.js";




class videocontrollers{

    static async postVideo(req, res) {
 const{video,videoTitle,videoDescription,youtubeLink}= req.body

 try {
    const videos = await Videoupload.create({video,videoTitle,videoDescription,youtubeLink})
    if(videos){
return sucessmessage(res,201,`video uploaded successfully`,videos)
    }else{
        return errormessage(res,401,`video not uploaded try again`)
    }
 } catch (error) {
    
 }
      }
    
    static async getvideo(req,res){
        try {
            const video = await Videoupload.find()
            if(!video){
                return errormessage(res,401,'no video found')
            }else{
                return sucessmessage(res,201,"video successfuly retrived",video)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async deletevideo(req,res){
        try {
            const video = await Videoupload.deleteMany()
            if(!video){
                return errormessage(res,401,'no video found')
            }else{
                return sucessmessage(res,201,"video successfuly deleted")
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async getonevideo(req,res){
        const id=req.params.id
        try {
            const video = await Videoupload.findById(id)
            if(!video){
                return errormessage(res,401,'no video found')
            }else{
                return sucessmessage(res,201,`video successfuly on this id ${id} retrived`,video)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async deleteonevideo(req,res){
        const id=req.params.id
        try {
            const video = await Videoupload.findByIdAndDelete(id)
            if(!video){
                return errormessage(res,401,'no video found')
            }else{
                return sucessmessage(res,201,`video successfuly on this id ${id} deleted`)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

}
export default videocontrollers
