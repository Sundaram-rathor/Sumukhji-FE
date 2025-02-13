import React, { useEffect } from 'react';
import Button from '../../ui/Button';
import { useRecoilState } from 'recoil';
import { cartState } from '../../utils/Recoil';
import { useNavigate } from 'react-router-dom';

function Card({ item }) {
  const [cart, setCart] = useRecoilState(cartState);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function checkForCart() {
    return cart?.some(cartItem => cartItem.sku_id === item.sku_id);
  }

  const isInCart = checkForCart();

  const addItemToCart = (e) => {
    e.preventDefault();
    if (!isInCart) {
      setCart((prev) => [...prev, item]);
    }
  };

  return (
    <div className='w-full sm:w-full md:w-full lg:w-full p-4 flex flex-col items-center'>
      <div className='relative h-72 w-full max-w-sm rounded-md shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105' onClick={() => {
        navigate(`/product/${item.sku_id}`);
        location.reload();
      }}>
        <div className='absolute h-full w-full bg-gradient-to-b from-transparent to-black opacity-50'></div>
        <img src={item.image} alt='' className='object-cover h-full w-full' />
      </div>
      <div className='mt-4 text-center w-full max-w-sm '>
        <div className='font-semibold text-lg h-1/2'>{item.title}</div>
        <div className='flex justify-center mt-2'>
          <Button text={'Add to Cart'} variant={'secondary'} onClick={addItemToCart} className='w-full' />
        </div>
      </div>
    </div>
  );
}

export default Card;
