import React from 'react'

function MenuBtn({btnStyle,text,onClick}) {

    const defaultStyle = 'h-1/2 text-center text-black hover:text-white border border-gray-200  shadow-md  flex items-center border border-black hover:bg-black hover:border-white  w-full justify-center text-2xl cursor-pointer transition-all duration-300'
   
  return (
    <div className={`${btnStyle} ${defaultStyle} `} onClick={onClick} >{text}</div>
  )
}

export default MenuBtn