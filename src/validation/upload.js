import multer from 'multer';
import path from 'path';
// Multer storage configuration
const storage = multer.diskStorage({
  destination: 'uploads/', 
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an video! Please upload an video.'), false);
  }
};

const upload = multer({ storage,fileFilter });
export default upload;
