import React from 'react';
import Blog from '../components/Blog';

function Follow() {
  return (
    <div className='min-h-screen flex flex-col px-4 sm:px-6 md:px-10'>
      {/* Header Section */}
      <div className='h-auto flex flex-col items-center text-center'>
        <span className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-10'>
          Blogs and Reviews
        </span>
        <hr className='w-32 sm:w-48 md:w-64 my-4 bg-[#AB96FF] border-0 h-1' />
      </div>

      {/* Blog Grid */}
      <div className='w-full mt-8 sm:mt-12 flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </div>
  );
}

export default Follow;
