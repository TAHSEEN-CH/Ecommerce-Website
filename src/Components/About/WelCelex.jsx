import React from 'react'

const WelCelex = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-white">
      <div className="md:w-1/2 w-full">
        <img
          src="/about/a1.webp"
          alt="Modern Interior"
          className="w-full h-auto rounded-sx shadow-md"
        />
      </div>
      <div className="md:w-1/2 w-full mt-6 md:mt-0 md:pl-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Welcome To Celex</h2>
        <p className="text-gray-600 mt-4 font-medium leading-relaxed">
          Our qualified staff will transform your space into the ultimate luxury
          experience. We deliver exceptional designs that inspire creativity and
          comfort. Customer satisfaction is at the forefront of our approach.
        </p>
        <p className="text-gray-600 mt-2 font-medium  leading-relaxed">
          Whether you need a cozy living room, a professional workspace, or a
          stunning hotel lobby, we provide expert solutions with modern touches.
        </p>
      </div>
    </section>
  )
}

export default WelCelex
