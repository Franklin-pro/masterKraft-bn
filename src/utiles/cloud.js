import { v2 as cloudinary } from "cloudinary";

class CloudinaryService {
    constructor() {
        cloudinary.config({
            cloud_name: "cloud",
            api_key: "link",
            api_secret: "secret"
        });
    }

    async upload(req) {
        try {
            const result = await cloudinary.uploader.upload(req.file.path, { folder: "videos" });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

const cloudinaryService = new CloudinaryService();
export default cloudinaryService;