

import Videoupload from "../model/videoupload";

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
            const { video, videoTitle,videoDescription, youtubeLink } = req.body;
            const newVideo = new Videoupload({ video, videoTitle,videoDescription, youtubeLink });
             await newVideo.save();
             res.status(201).json({ message: 'Video uploaded successfully', video: newVideo })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}
export default videocontrollers
