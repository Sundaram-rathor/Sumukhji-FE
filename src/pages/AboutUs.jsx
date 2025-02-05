import React from 'react';

function AboutUs() {
  return (
    <div className="h-auto w-full bg-black flex flex-col md:flex-row border-t border-white">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
        <div className="text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Us</h2>
          <p className="mt-4 sm:mt-6 md:mt-8 w-full md:w-3/4 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid id consectetur facere, labore voluptatum asperiores quo ab quaerat ullam reprehenderit, excepturi porro dolorem magnam numquam illum quia aut. Labore.
          </p>
          <button className="bg-[#AB96FF] text-[#0B073D] hover:bg-black hover:text-[#AB96FF] hover:border-[#AB96FF] border px-6 py-2 sm:px-8 sm:py-3 mt-6 text-sm sm:text-base">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto">
        <img src="../../about.avif" alt="About Us" className="h-full w-full object-cover" />
      </div>
      
    </div>
  );
}

export default AboutUs;
