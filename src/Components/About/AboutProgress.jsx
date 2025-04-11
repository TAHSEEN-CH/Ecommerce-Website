import React from 'react'

const AboutProgress = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-[#f5f5f5]">
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Functionality Meets Perfection
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          We strive to create productive, sophisticated, and aesthetically
          pleasing interiors that elevate user experience. Our designs are
          tailored to meet client expectations and business needs.
        </p>
      </div>
      <div className="md:w-1/2 w-full mt-6 md:mt-0 md:pl-8">
        <div className="mb-4">
          <span className="text-gray-700">UI/UX</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div className="bg-yellow-500 h-2.5 rounded-full w-4/5"></div>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-gray-700">Ideas</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div className="bg-yellow-500 h-2.5 rounded-full w-3/4"></div>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-gray-700">Strategy</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div className="bg-yellow-500 h-2.5 rounded-full w-2/3"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProgress;
