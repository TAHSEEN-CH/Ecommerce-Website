import React from 'react'
import ShopHero from '../Components/ShopColumnSecond/ShopHero'
import ShopsProducts from '../Components/ShopColumnSecond/ShopsProducts';
import ShopSlider from '../Components/ShopColumnSecond/ShopSlider';

const ShopColumnSecond = () => {
  return (
    <div>
      <ShopHero/>
      <ShopsProducts/>
      <ShopSlider/>
    </div>
  )
}

export default ShopColumnSecond;
