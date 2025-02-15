import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { allProductsSelector, cartState } from "../utils/Recoil";
import Navbar from "../components/Navbar";
import Button from "../ui/Button";
import AlsoBought from "../components/alsoBought/AlsoBought";
import Footer from "./Footer";
import CheckOut from "./CheckOut";
import PopupModal from "../components/PopupModal";

function FinalProductPage() {
    const { sku_id } = useParams();
    const navigate = useNavigate();
    
    const [cart, setCart] = useRecoilState(cartState);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const allProducts = useRecoilState(allProductsSelector);
    const selectedProduct = allProducts[0].allproducts.find((item) => item.sku_id == sku_id);

    const addItemToCart = (e) => {
        e.preventDefault();
        if (!cart.some((cartItem) => cartItem.sku_id === sku_id)) {
            setCart((prev) => [...prev, selectedProduct]);
        }
    };

    const handleShopNowClick = () => {
        setIsPopupOpen(true);
    };

    

    

    return (
        <div className="container mx-auto">
            <div className="p-6 px-4 text-2xl font-semibold text-zinc-800 border-b-gray-300 cursor-pointer" onClick={() => navigate("/")}>
                SumukhJi
            </div>
            <div className="flex flex-col md:flex-row p-6 border-b-gray-400">
                <div className="md:w-1/2 flex flex-col items-center">
                    <div className="w-full max-h-96 aspect-w-1 aspect-h-1 overflow-hidden">
                        <img src={selectedProduct.image} className="object-contain w-full h-full hover:scale-105 transition-all duration-200" alt="" />
                    </div>
                    <div className="flex mt-4 gap-2">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="bg-black w-1/4">
                                <img src={selectedProduct.image} className="object-cover w-full h-full hover:scale-105 transition-all duration-200" alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col p-4">
                    <h2 className="text-3xl font-medium">{selectedProduct.name}</h2>
                    <p className="text-2xl font-medium">₹{selectedProduct.price}</p>
                    <p className="text-md font-normal mt-4 text-gray-500">{selectedProduct.description}</p>
                    <p className="text-md font-normal mt-4 text-gray-500">Category: <span className="text-black">{selectedProduct.category}</span></p>

                    <div className="mt-4 flex gap-4">
                        <Button variant="primary" text="Shop Now" onClick={handleShopNowClick} />
                        <Button variant="secondary" text="Add to Cart" onClick={addItemToCart} />
                    </div>
                </div>
            </div>

            <div className="p-6 px-4">
                <AlsoBought />
            </div>

            <Footer />

            {/* Popup Modal */}
            {isPopupOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <PopupModal setIsPopupOpen={setIsPopupOpen} selectedProduct={selectedProduct}/>
                </div>
            )}
        </div>
    );
}

export default FinalProductPage;
