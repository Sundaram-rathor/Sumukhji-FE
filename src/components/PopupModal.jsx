import React from 'react'
import CheckOut from '../pages/CheckOut';
import Button from '../ui/Button';
import { useState } from 'react';

function PopupModal({selectedProduct,setIsPopupOpen }) {

    const [userData, setUserData] = useState({
            fullName: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            country: "",
            pinCode: "",
            additionalInfo: "",
        });
    const [paymentStatus, setPaymentStatus] = useState()


    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleConfirmOrder = () => {
        console.log("Order Details:", userData);
        alert("Order Placed Successfully!");
        setIsPopupOpen(false);
    };
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-xl font-bold mb-4">Enter Order Details</h2>
                        
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                {selectedProduct.map((item, index)=>{
                                    return <div key={index}>
                                                <p className="font-medium">Product: {item.name}</p>
                                                <p>SKU: {item.sku_id}</p>
                                                <p>Quantity: 1</p>
                                                <p>Price: ₹{item.price}</p>
                                            </div>
                                })}
                            </div>

                            {/* Input Fields */}
                            <input type="text" name="fullName" value={userData.fullName} onChange={handleInputChange} className="p-2 border rounded w-full" placeholder="Recipient's Full Name" />
                            <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} className="p-2 border rounded w-full" placeholder="Recipient's Phone No." />
                            <input type="text" name="address" value={userData.address} onChange={handleInputChange} className="p-2 border rounded w-full" placeholder="Address" />
                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" name="city" value={userData.city} onChange={handleInputChange} className="p-2 border rounded w-full" placeholder="City" />
                                <input type="text" name="state" value={userData.state} onChange={handleInputChange} className="p-2 border rounded w-full" placeholder="State" />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" name="country" value={userData.country} onChange={handleInputChange} className="p-2 border rounded w-full" placeholder="Country" />
                                <input type="text" name="pinCode" value={userData.pinCode} onChange={handleInputChange} className="p-2 border rounded w-full" placeholder="Pin Code / Postal Code" />
                            </div>

                            <textarea name="additionalInfo" value={userData.additionalInfo} onChange={handleInputChange} className="w-full p-2 border rounded-md" rows="2" placeholder="Any additional information"></textarea>
                        </div>

                        <div className="mt-4 flex justify-between">
                            <CheckOut userData={userData} selectedProduct={selectedProduct} setPaymentStatus={setPaymentStatus} totalAmount={selectedProduct.price}/>
                            <Button variant="secondary" text="Cancel" onClick={handleClosePopup} />
                        </div>
                    </div>
  )
}

export default PopupModal