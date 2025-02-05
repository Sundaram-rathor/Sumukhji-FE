import React, { useState } from 'react'
import Cart from './Cart';
import Menu from './Menu';

function Navbar() {
    const[cartOpen, setCartOpen] = useState(false);
    const[menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className='flex items-center justify-between w-full '>
        <div>
            <a href='/'>
            <img src="" alt="" />
            <span className='text-white'>Sumukhji</span>
            </a>
        </div>
        <div className='flex items-center'>
            <div onClick={()=>setCartOpen(true)} className='mr-4 h-full p-3 bg-white  hover:bg-black hover:text-white hover:shadow-3xl cursor-pointer rounded-full'>
                <i className="ri-shopping-cart-2-line ri-xl"></i>
            </div>
            <div>
                <button className='bg-white  hover:bg-black hover:text-white px-10 py-3' onClick={()=>setMenuOpen(true)}>
                    MENU
                </button>
            </div>
        </div>
         
    </div>
    {cartOpen ? <div className='absolute h-screen top-0 right-0 md:w-1/4 shadow-xl w-/2 transition-all ease-in-out'>
            <Cart setCartOpen={setCartOpen}/>
    </div> : null}
    {menuOpen ? <div className='absolute h-screen bg-white top-0 right-0 md:w-1/4 shadow-xl w-/2 transition-all duration-500'>
            <Menu setMenuOpen={setMenuOpen}/>
    </div> : null}
    </>
  )
}

export default Navbar