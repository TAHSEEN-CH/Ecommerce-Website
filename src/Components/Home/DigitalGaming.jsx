import React from 'react'
import { Link } from 'react-router-dom';

const DigitalGaming = () => {
    return (
        <div className="justify-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-5 lg:p-20 lg:px-20  md:p-14 p-4 py-12 items-center">
            {/* Image Section */}
            <div className='flex justify-center'>
                <img
                    src="/Home/gaming.jpg"
                    alt="Gaming Controller"
                    className=" shadow-lg lg:h-[75vh] "
                    i
                />
            </div>

            {/* Text Section */}
            <div className='lg:pe-1'>
                <h2 className="text-3xl md:text-4xl lg:font-bold font-semibold mb-4 md:mt-4 font-serif  text-gray-800">Digital Gaming Headset</h2>
                <span className="text-xl text-gray-600 line-through">$330.00 </span>  <span>-</span>
                <span className='text-yellow-500 text-2xl font-semibold ms-2'>$230.00</span>
                <p className="text-gray-600 text-xl font-serif max-sm:text-lg mt-4">
                    Donec varius quam metus, ac ultricies ligula facilisis quis. Donec condimentum gravida accumsan. Fusce laoreet sit amet velit ut pretium. Aenean a mi placerat urna mollis aliquam et quis justo. Nullam gravida sem quis dolor feugiat convallis. Donec faucibus lectus et fermentum blandit libero elit cursus enim.
                </p>
                <Link to='/shop'>
                    <button className="mt-12 max-sm:mt-6  bg-yellow-500 text-white  text-xl md:py-3 px-3 py-2 md:px-8 lg:py-3 lg:px-8  shadow-md hover:bg-yellow-600 transition cursor-pointer">
                        Shop Now
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default DigitalGaming;