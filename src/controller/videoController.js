

import Videoupload from "../model/videoupload";
import errormessage from "../utiles/errormessage";
import sucessmessage from "../utiles/successmessage";

// exports.uploadVideo = async (req, res) => {
//   try {
//     const { video, uploader, youtubeLink } = req.body;
//     const newVideo = new Video({ video, uploader, youtubeLink });
//     await newVideo.save();
//     res.status(201).json({ message: 'Video uploaded successfully', video: newVideo });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

class videocontrollers{

    static async uploadpostvideo(req,res){
        try {
            const {video,videoTitle,videoDescription,youtubeLink } = req.body;
            console.log(req.body)
            const newVideo = new Videoupload({video,videoTitle,videoDescription,youtubeLink });
            
             await newVideo.save();
             res.status(201).json({ message:'Video uploaded successfully', video: newVideo })
        } catch (error) {
            res.status(500).json({ error: error.message });
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
