import React from 'react';
import MenuBtn from '../ui/MenuBtn';
import UserUtility from '../ui/UserUtility';
import { useNavigate } from 'react-router-dom';

function Menu({ setMenuOpen }) {
  const navigate = useNavigate();
  return (
    <div className='fixed top-0 right-0 w-full md:w-1/3 h-full bg-white shadow-lg text-black flex flex-col justify-between p-6 md:p-12'>
      {/* Close Button */}
      <button 
        onClick={() => setMenuOpen(false)} 
        className='absolute top-4 right-4 text-gray-600 transition transform hover:scale-125 hover:text-black'
      >
        <span className='sr-only'>Close menu</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </button>

      {/* Navigation Buttons */}
      <div className='flex flex-col items-center justify-center flex-1 space-y-6'>
        <MenuBtn text='Home' onClick={() => { navigate('/'); setMenuOpen(false); }} />
        <MenuBtn text='Cart' onClick={() => { navigate('/cart'); setMenuOpen(false); }} />
        <MenuBtn text='About Us' onClick={() => { navigate('/about'); setMenuOpen(false); }} />
        <MenuBtn text='Contact Us' onClick={() => { navigate('/contactus'); setMenuOpen(false); }} />
      </div>

      {/* User Utility Section */}
      <div className='flex justify-center items-center py-4'>
        <UserUtility />
      </div>
    </div>
  );
}

export default Menu;
