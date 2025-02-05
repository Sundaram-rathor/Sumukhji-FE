import React from "react";
import Upload from "../icons/Upload";

const GlowingButton = ({ text, onFileSelect }) => {
  const handleFileChange = (event) => {
    if (onFileSelect && event.target.files.length > 0) {
      const file = URL.createObjectURL(event.target.files[0]); // Create a preview URL
      onFileSelect(file); // Pass it to the parent component
    }
  };

  return (
    <label className="relative flex items-center justify-center w-52 h-12 cursor-pointer rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600 bg-origin-border p-1 transition-transform duration-500 ease-in-out hover:scale-110 active:border-pink-500">
      <div className="absolute inset-0 bg-gray-900 rounded-full" />
      
      {/* Upload Icon and Text */}
      <span className="relative z-10 text-white font-bold tracking-widest text-xs flex items-center gap-2">
        <Upload />
        {text || "Upload File"}
      </span>

      {/* Hidden File Input */}
      <input 
        type="file" 
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
        onChange={handleFileChange} 
      />

      {/* Floating Effects */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute w-[50rem] h-[50rem] -top-40 -left-80 bg-transparent animate-[animStarRotate_90s_linear_infinite] bg-[radial-gradient(white_1px,transparent_1%)] bg-[50px_50px] opacity-50" />
        <div className="absolute w-[50rem] h-[50rem] -top-40 -left-80 bg-transparent animate-[animStar_60s_linear_infinite] bg-[radial-gradient(white_1px,transparent_1%)] bg-[50px_50px]" />
      </div>
      <div className="absolute flex w-48">
        <div className="w-full h-8 bg-pink-500 opacity-60 blur-2xl animate-[pulse_3011_4s_infinite]" />
        <div className="w-full h-8 bg-purple-500 opacity-70 blur-2xl animate-[pulse_3011_4s_infinite]" />
      </div>
    </label>
  );
};

export default GlowingButton;
