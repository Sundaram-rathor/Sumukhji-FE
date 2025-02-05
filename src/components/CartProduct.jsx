import React from 'react'

function CartProduct({item}) {
  
  return (
    <div>
        <li className="flex items-center gap-4">
        <img
          src={item.image}
          alt="product image"
          className="size-16  object-cover"
        />

        <div>
          <h3 className="text-sm text-gray-900">{item.title}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Price:</dt>
              <dd className="inline">{item.price}</dd>
            </div>

            
          </dl>
        </div>
      </li>
    </div>
  )
}

export default CartProduct