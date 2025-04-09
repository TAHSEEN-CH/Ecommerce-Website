import React from 'react'
import { BiLeftArrowCircle } from "react-icons/bi";

const EmptyCard = () => {
  return (
    <div className="w-full h-screen ">
      <div className='w-[80vw]  mx-auto  p-5'>
        <h3 className='text-2xl font-semibold'>Your Cart item</h3>
        <div className='w-full  py-50 flex flex-col gap-5 items-center'>
          <h1 className=' text-3xl text-center md:text-4xl font-semibold'>There are no more items in your cart.</h1>
          <p className="flex px-2 justify-center text-center py-1 items-center md:px-5 md:py-5 rounded-full text-white cursor-pointer hover:bg-yellow-400 bg-yellow-500 gap-2">
  <span>
    <BiLeftArrowCircle className="md:text-3xl transition-transform duration-300 hover:-translate-x-2" />
  </span>
  <span className="text-lg md:text-2xl">Continue Shopping</span>
</p>

        </div>
      </div>
      
    </div>
  )
}

export default EmptyCard;