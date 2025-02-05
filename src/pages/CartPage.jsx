import React from 'react';
import Navbar from '../components/Navbar';
import CartPageProduct from '../components/cart/CartPageProduct';
import { useRecoilState } from 'recoil';
import { cartState } from '../utils/Recoil';

function CartPage() {
  const [CartProducts] = useRecoilState(cartState);
  
  const totalPrice = CartProducts.reduce((acc, item) => acc + item.price, 0);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <div className="w-full px-4 sm:px-6 lg:px-16 py-4 bg-zinc-800">
        <Navbar />
      </div>

      {/* Cart Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-screen-xl mx-auto">
          <header className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl">Your Cart</h1>
          </header>

          <div className="mt-8">
            {/* Cart Items */}
            <ul className="space-y-4">
              {CartProducts.length > 0 ? (
                CartProducts.map((item, index) => <CartPageProduct key={index} item={item} />)
              ) : (
                <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
              )}
            </ul>

            {/* Cart Summary */}
            {CartProducts.length > 0 && (
              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="max-w-lg mx-auto space-y-4">
                  <dl className="space-y-2 text-sm sm:text-base text-gray-700">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>£{totalPrice.toFixed(2)}</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd>£25</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>Discount</dt>
                      <dd>-£20</dd>
                    </div>

                    <div className="flex justify-between text-lg font-medium">
                      <dt>Total</dt>
                      <dd>£{(totalPrice + 25 - 20).toFixed(2)}</dd>
                    </div>
                  </dl>

                  {/* Discounts Applied */}
                  <div className="flex justify-end">
                    <span className="inline-flex items-center justify-center bg-indigo-100 px-3 py-1 text-indigo-700 rounded-full text-xs sm:text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-700 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                        />
                      </svg>
                      <p>2 Discounts Applied</p>
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="block w-full sm:w-auto text-center bg-gray-700 hover:bg-gray-600 text-white font-semibold px-5 py-3 rounded transition duration-200"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartPage;
