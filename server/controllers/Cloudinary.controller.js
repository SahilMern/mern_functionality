import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

// Cloudinary configuration
cloudinary.config({
  cloud_name: "dt2zvo07s",
  api_key: "963549411432585",
  api_secret: "dCEpv6ooJ_WASF59skd87afNQ7k", 
});

// File upload function using Cloudinary
const uploadFileUsingCloudinary = async (req, res) => {
  try {
    // Log the file path (for debugging)
    console.log(req.file.path);

    // Upload the file to Cloudinary and await the result
    const cloudinaryData = await cloudinary.uploader.upload(req.file.path);
    console.log(cloudinaryData, "cloudinaryData");

    // Send response back with Cloudinary data
    return res.status(200).json({
      message: "File uploaded successfully",
      data: cloudinaryData, // Send back the Cloudinary response (image URL, etc.)
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return res.status(500).json({
      message: "Failed to upload file",
      error: error.message,
    });
  }
};

export { uploadFileUsingCloudinary };
