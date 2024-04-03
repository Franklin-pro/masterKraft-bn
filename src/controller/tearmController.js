import Team from "../model/tearm.js";
import cloudinary from '../utiles/cloud.js';
import errormessage from '../utiles/errormessage.js';
import successmessage from '../utiles/successmessage.js'

class OurTearm {
    static async tearms (req,res){
try {
    if(!req.file){
        return errormessage(res,401,`please choose image`)
    }
    const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'tearm'
    });
    const tearm = await Team.create({
        teamImage: {
            public_id: result.public_id,
            url: result.secure_url,
          },
          personName:req.body.personName,
          personWork:req.body.personWork,
    })
    if(tearm){
        return successmessage(res,201,`${personName} posted successfully`,tearm)
    }
    else{
        return errormessage(res,401,`posted failed`)
    }
} catch (error) {
    console.error('Error:', error);
    return errormessage(res, 500, `Error: ${error.message}`);
}
    }
}
export default OurTearm

