import React from 'react'

const AboutCard = () => {
  return (
       <section className="p-6 md:p-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <img
            src="./about/cr1.webp"
            alt="Main Interior"
            className="w-full h-auto rounded-sx shadow-md"
          />
        </div>
        <div className="grid grid-rows-2 gap-4">
          <img
            src="./about/cr2.webp"
            alt="Small Interior 1"
            className="w-full h-auto rounded-sx shadow-md"
          />
          <img
            src="./about/cr3.webp"
            alt="Small Interior 2"
            className="w-full h-auto rounded-sx shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutCard;
