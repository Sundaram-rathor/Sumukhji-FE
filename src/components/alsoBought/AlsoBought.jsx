import React from 'react';
import { useRecoilState } from 'recoil';
import { allProductsSelector } from '../../utils/Recoil';
import Card from './Card';

function AlsoBought() {
  const allProducts = useRecoilState(allProductsSelector);
 
  const topProducts = [];
  for (let i = 0; i < 4; i++) {
    topProducts.push(allProducts[0].allproducts[i]);
  }
  return (
    <div className='mt-20 px-4 max-w-7xl mx-auto'>
      <div className='font-semibold text-2xl text-center md:text-left mb-6'>Customers Also Bought</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4'>
        {topProducts.map((item, index) => (
          <div className='flex justify-center' key={index}>
            <Card item={item} className='w-full max-w-xs shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlsoBought;
