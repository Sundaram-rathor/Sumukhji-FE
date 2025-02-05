import React from 'react';

function Button({ variant, text, style, onClick }) {
    const btnStyle = {
        primary: "bg-[#2f22fb] text-black hover:bg-black hover:text-[#AB96FF]",
        secondary: "bg-gray-500 text-gray-300 hover:bg-black hover:text-white"
    };
    const defaultStyle = "px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-lg transition-all duration-300 w-full md:w-auto";

    return (
        <button className={`${defaultStyle} ${btnStyle[variant]} ${style}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
