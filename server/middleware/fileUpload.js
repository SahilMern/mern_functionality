import { multer } from "multer";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const fs = require('fs');
const path = require('path');

// Upload an image file from the local file system
const uploadImage = async () => {
  try {
    const result = await cloudinary.uploader.upload('path_to_your_image.jpg', {
      folder: 'your_folder', // Optional: Specify a folder where images will be stored
      public_id: 'your_custom_id', // Optional: Set a custom public ID for the image
    });

    console.log('Image uploaded successfully:', result);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};


