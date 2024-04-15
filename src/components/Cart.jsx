import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';

// Define the 'Cart' functional component.
const Cart = () => {
  // Destructuring to extract 'currentColor' from the context, provided by 'useStateContext' hook.
  // This color is likely used to theme the component dynamically.
  const { currentColor } = useStateContext();

  // Rendering the component JSX.
  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      {/* Container with fixed positioning on the top-right, used for the cart sidebar. */} 
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        {/* A floating sidebar that animates in with a smooth transition, supporting dark mode. */} 
        <div className="flex justify-between items-center">
          {/* Header section of the cart, with title and close button. */} 
          <p className="font-semibold text-lg">Shopping Cart</p>
          {/* Using the 'Button' component with custom props for closing the cart. */} 
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
        </div>
        {/* Mapping over 'cartData' to list items in the cart. The '?' ensures it only tries to map if 'cartData' is not null. */} 
        {cartData?.map((item, index) => (
          <div key={index}>
            {/* Each cart item is wrapped in a 'div', identified by a unique 'key'. */} 
            <div>
              <div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                {/* Image, name, category, and interactive elements for each item. */} 
                <img className="rounded-lg h-80 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.category}</p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.price}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      {/* Quantity controls with '+' and '-' buttons. */} 
                      <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600"><AiOutlineMinus /></p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">0</p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          {/* Subtotal and total display section. */} 
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-5">
          {/* 'Place Order' button with dynamic background color based on current theme color. */} 
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

// Export the 'Cart' component as a default export.
export default Cart;
