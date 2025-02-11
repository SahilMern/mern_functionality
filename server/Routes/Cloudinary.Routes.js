import express from "express";
import { uploadFileUsingCloudinary } from "../controllers/Cloudinary.controller.js";
import multer from "multer";
import fs from "fs";
import path from "path";

// Ensure the 'uploads' folder exists, if not, create it
const uploadFolder = './uploads';

if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({
  storage: storage,
  // Optional: Add file validation for size and type (e.g., images only)
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);  // Accept the file
    } else {
      cb(new Error('Invalid file type. Only images are allowed.'), false); // Reject the file
    }
  },
//   limits: { fileSize: 10 * 1024 * 1024 }  // Optional: Max file size (10MB)
});

router.post("/uploadfile", upload.single("image"), uploadFileUsingCloudinary);

export default router;
