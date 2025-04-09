import React from 'react'
import Hero from '../Components/Home/Hero'
import DigitalGaming from '../Components/Home/DigitalGaming';
import Facilities from '../Components/Home/Facilities';
import Products from '../Components/Home/Products';
import FeaturesProducts from '../Components/Home/FeaturesProducts';
import Headline from '../Components/Home/Headline';
import RatedProducts from '../Components/Home/RatedProducts';
import HomeBlog from '../Components/Home/HomeBlog';
import HomeCrousel from '../Components/Home/HomeCrousel';
import HomeSlider from '../Components/Home/HomeSlider';
import HomeSalesProduct from '../Components/Home/HomeSalesProduct';


const Home = () => {
  return (
    <div> 
        <Hero />
        <DigitalGaming />
        <Facilities/>
        <Products/>
        <HomeSalesProduct/>
        <Headline/>
        <FeaturesProducts/>
        <HomeCrousel/>
        <RatedProducts/>
        <HomeBlog/>
        <HomeSlider/>
        
    </div>
  )
}

export default Home;