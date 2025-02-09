import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProductsSelector, cartState } from '../utils/Recoil';
import { useRecoilState } from 'recoil';
import Navbar from '../components/Navbar';
import Button from '../ui/Button';
import GlowingBtn from '../ui/GlowingBtn';
import AlsoBought from '../components/alsoBought/AlsoBought';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import CheckOut from './CheckOut';

function FinalProductPage() {
    const { id } = useParams();
    const [cart, setCart] = useRecoilState(cartState);
    const navigate = useNavigate();
    const [uploadedImage, setUploadedImage] = useState(null);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function checkForCart() {
        return cart.some(cartItem => cartItem.id === id);
    }

    const isInCart = checkForCart();

    const addItemToCart = (e) => {
        e.preventDefault();
        if (!isInCart) {
            setCart((prev) => [...prev, item]);
        }
    };

    const allProducts = useRecoilState(allProductsSelector);
    console.log(allProducts);
    const selectedProduct = allProducts[0].filter((item) => item.id == id)[0];
    console.log(selectedProduct);
    
    return (
        <div className='container mx-auto '>
            <div className='p-6 px-4 text-2xl font-semibold text-zinc-800 border-b-gray-300 cursor-pointer' onClick={() => { navigate('/'); }}>SumukhJi</div>
            <div className='flex flex-col md:flex-row p-6 border-b-gray-400'>
                <div className='md:w-1/2 flex flex-col items-center'>
                    <div className='w-full max-h-96 aspect-w-1 aspect-h-1 overflow-hidden'>
                        <img src={selectedProduct.image} className='object-contain w-full h-full hover:scale-105 transition-all duration-200' alt='' />
                    </div>
                    <div className='flex mt-4 gap-2'>
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className='bg-black w-1/4'>
                                <img src={selectedProduct.image} className='object-cover w-full h-full hover:scale-105 transition-all duration-200' alt='' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='md:w-1/2 flex flex-col p-4'>
                    <h2 className='text-3xl font-medium'>{selectedProduct.title}</h2>
                    <p className='text-2xl font-medium'>₹{selectedProduct.price}</p>
                    <p className='text-md font-normal mt-4 text-gray-500'>{selectedProduct.description}</p>
                    <p className='text-md font-normal mt-4 text-gray-500'>Category: <span className='text-black'>{selectedProduct.category}</span></p>
                    <p className='text-md font-normal mt-4 text-gray-500'>Specifications: <span className='text-black'>{selectedProduct.category}</span></p>
                    {uploadedImage && (
                        <div className='border rounded-sm h-20 w-20 mt-4'>
                            <img src={uploadedImage} alt='Uploaded' className='w-full h-full object-cover rounded-md' />
                        </div>
                    )}
                    <div className='mt-4'>
                        <div className='flex items-center gap-2'>
                            <GlowingBtn onFileSelect={setUploadedImage} />
                            <span className='font-normal ml-4'>Upload Your Image</span>
                        </div>
                        <div className='mt-4 flex gap-4'>
                            <CheckOut totalAmount={selectedProduct.price}/>
                            <Button variant='secondary' text='Add to Cart' onClick={addItemToCart} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-6 px-4'>
                <AlsoBought />
            </div>
            <Footer />
        </div>
    );
}

export default FinalProductPage;
