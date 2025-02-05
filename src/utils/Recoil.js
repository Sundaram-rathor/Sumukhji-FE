import { atom, selector } from "recoil";



export const cartState = atom({
  key: 'cartState', // Unique ID
  default: (() => {
    try {
      const savedCart = localStorage.getItem('cart');

      // Check if the value is null, "undefined", or invalid
      if (!savedCart || savedCart === "undefined") {
        return []; // Default to an empty array
      }

      return JSON.parse(savedCart); // Parse valid JSON
    } catch (error) {
      console.error('Error parsing cart from localStorage:', error);
      return []; // Default to an empty array on error
    }
  })(),
});



// Selector to fetch products asynchronously
export const allProductsSelector = selector({
  key: 'allProductsSelector',
  get: async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("data from recoil.js",data); // Debugging the fetched data
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  },
});
