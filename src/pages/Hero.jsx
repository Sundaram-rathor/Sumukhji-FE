import React from 'react';
import Navbar from '../components/Navbar';

function Hero() {
  return (
    <>
      {/* Navbar Section */}
      <div className="absolute top-0 left-0 w-full z-50 px-6 md:px-16 h-[12vh] flex items-center">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row h-screen w-full bg-red-500">
        
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black text-white flex items-center justify-center px-6 md:px-0">
          <div className="w-full md:w-1/2 flex items-center flex-col text-center">
            <div className="text-sm md:text-lg">Unique Treasures</div>
            <div className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide mt-2 flex flex-col items-center">
              <div>Discover</div>
              <div>Our</div>
              <div>Collection</div>
            </div>
            <button className="bg-[#AB96FF] text-[#0B073D] hover:border hover:bg-black hover:text-[#AB96FF] hover:border-[#AB96FF] px-6 py-2 md:px-10 md:py-3 mt-6 md:mt-10 text-sm md:text-base">
              Explore
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-blue-200">
          <img
            src="../../hero-bg.png"
            alt="banner"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
