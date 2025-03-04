'use client'; 

import React from "react";

const Page = () => {
  const handleFileChange = (e) => {
    const files = e.target.files; 
    console.log(files);
    
    if (files.length > 0) {
      console.log("File selected:", files[0].name); 
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="container flex justify-center items-center min-h-screen">
      {/* Image Component */}
      {/* <Image src="your-image-url-here" alt="Preview Image" height={40} width={40} /> */}

      {/* File input with Tailwind CSS styling */}
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        required
      />
    </div>
  );
};

export default Page;
