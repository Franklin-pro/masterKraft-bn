import cloudinary from 'cloudinary';
import Team from '../model/tearm.js';
import errormessage from '../utiles/errormessage.js'; 
import sucessmessage from '../utiles/successmessage.js';

class OurTearm {
    static async tearms(req, res) {
        try {
            if (!req.file) {
                return errormessage(res, 401, `Please choose an image`);
            }
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'tearm'
            });
            const tearm = await Team.create({
                teamImage: {
                    public_id: result.public_id,
                    url: result.secure_url,
                },
                personName: req.body.personName, // Access personName from req.body
                personWork: req.body.personWork, // Access personWork from req.body
            });
            if (tearm) {
                return sucessmessage(res, 201, `${req.body.personName} posted successfully`, tearm);
            } else {
                return errormessage(res, 401, `Posted failed`);
            }
        } catch (error) {
            console.error('Error:', error);
            return errormessage(res, 500, `Error: ${error.message}`);
        }
    }
}

export default OurTearm;
