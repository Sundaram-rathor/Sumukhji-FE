import React from "react";
import CartProduct from "./CartProduct";

function Cart({ setCartOpen }) {
  let CartProducts = [];

  try {
    const cart = localStorage.getItem("cart");
    CartProducts = cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Error parsing cart from localStorage:", error);
    CartProducts = []; // Default to empty array
  }

  let totalPrice = CartProducts.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 flex items-end justify-center sm:items-center bg-black bg-opacity-50">
      <div
        className="relative h-full sm:h-auto w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white border border-gray-600 px-4 py-6 sm:py-8 sm:px-6 lg:px-8 rounded-t-lg sm:rounded-lg overflow-y-auto"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        {/* Close Button */}
        <button
          onClick={() => setCartOpen(false)}
          className="absolute top-4 right-4 text-gray-600 transition hover:scale-110"
        >
          <span className="sr-only">Close cart</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Cart Items */}
        <div className="mt-4 space-y-6">
          <ul className="space-y-4 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto">
            {CartProducts.length > 0 ? (
              CartProducts.map((item, index) => <CartProduct key={index} item={item} />)
            ) : (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            )}
          </ul>

          {/* Total Price */}
          <div className="text-lg font-semibold text-gray-900 text-center">
            Total: ₹{totalPrice.toFixed(2)}
          </div>

          {/* Cart Actions */}
          <div className="space-y-4 text-center">
            <a
              href="/cart"
              className="block border border-black px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400 rounded-md"
            >
              View my cart
            </a>

            <a
              href="#"
              className="block bg-black px-5 py-3 text-sm text-gray-100 hover:text-black hover:border-black transition hover:bg-white rounded-md"
            >
              Checkout
            </a>

            <a
              href="#"
              className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
            >
              Continue shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
