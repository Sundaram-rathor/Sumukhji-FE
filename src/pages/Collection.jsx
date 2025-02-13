import React from 'react';
import Product from '../components/Product';
import { useRecoilValueLoadable } from 'recoil';
import { allProductsSelector } from '../utils/Recoil';

function Collection() {
  const productsLoadable = useRecoilValueLoadable(allProductsSelector);

  if (productsLoadable.state === 'loading') {
    return (
      <div className='h-auto w-full bg-white text-black flex flex-col items-center border-t-2 p-4 sm:p-6 md:p-10'>
        <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-10 font-extrabold tracking-wide text-center'>
          Our Collections
        </div>
        <div className='h-auto w-full mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-6 md:p-10 text-center'>
          Loading...
        </div>
      </div>
    );
  }

  if (productsLoadable.state === 'hasError') {
    return (
      <div className='h-auto w-full bg-white text-black flex flex-col items-center border-t-2 p-4 sm:p-6 md:p-10'>
        <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-10 font-extrabold tracking-wide text-center'>
          Our Collections
        </div>
        <div className='h-auto w-full mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-6 md:p-10 text-center'>
          Error loading products.
        </div>
      </div>
    );
  }

  const products = productsLoadable.contents.allproducts;

  return (
    <div className='h-auto w-full bg-white text-black flex flex-col items-center border-t-2 border-b-2 p-4 sm:p-6 md:p-10'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-10 font-extrabold tracking-wide flex flex-col items-center text-center'>
        Our Collections
        <hr className='w-32 sm:w-48 md:w-64 my-4 bg-[#AB96FF] border-0 h-1' />
      </div>
      <div className='h-auto w-full mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6 sm:py-10'>
        { products.map((item, index) => (
          <Product key={index} item={item} />
        ))
        }
      </div>
    </div>
  );
}

export default Collection;
