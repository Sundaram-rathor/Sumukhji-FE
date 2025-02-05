import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../utils/Recoil";
import { useNavigate } from "react-router-dom";

function Product({ item }) {
  const [cart, setCart] = useRecoilState(cartState);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function checkForCart() {
    return cart.some((cartItem) => cartItem.id === item.id);
  }

  const isInCart = checkForCart();

  // Add item to the cart
  const addItemToCart = (e) => {
    e.preventDefault();
    if (!isInCart) {
      setCart((prev) => [...prev, item]);
    }
  };

  // Remove item from the cart
  const removeItemFromCart = (e) => {
    e.preventDefault();
    if (isInCart) {
      const filteredCart = cart.filter((currValue) => currValue.id !== item.id);
      setCart(filteredCart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <div className="relative m-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden bg-white shadow-md rounded-lg transition-transform hover:scale-105">
      <a href="#" onClick={() => navigate(`/product/${item.id}`)}>
        <img
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-t-lg"
          src={item.image}
          alt="product image"
        />
      </a>
      <span className="absolute top-0 left-0 w-20 sm:w-24 md:w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-xs sm:text-sm text-white">
        Sale
      </span>
      <div className="mt-4 px-4 sm:px-6 pb-5">
        <a href="#" onClick={() => navigate(`/product/${item.id}`)}>
          <h5 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">
            {item.title}
          </h5>
        </a>
        <div className="flex items-center justify-between mt-2">
          <p>
            <span className="text-xl sm:text-2xl font-bold text-slate-900">
              ${item.price}
            </span>
            <span className="ml-2 text-sm text-slate-500 line-through">
              ${Math.floor(item.price + 10)}
            </span>
          </p>
          <a
            href="#"
            onClick={addItemToCart}
            className="flex items-center rounded-md bg-slate-900 px-4 py-2 sm:px-5 sm:py-2.5 text-center text-xs sm:text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
