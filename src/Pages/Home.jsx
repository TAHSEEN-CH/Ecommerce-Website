import React from 'react'
import Hero from '../Components/Home/Hero'
import DigitalGaming from '../Components/Home/DigitalGaming';
import Facilities from '../Components/Home/Facilities';
import Products from '../Components/Home/Products';

const Home = () => {
  return (
    <div> 
        <Hero />
        <DigitalGaming />
        <Facilities/>
        <Products/>
    </div>
  )
}

export default Home;