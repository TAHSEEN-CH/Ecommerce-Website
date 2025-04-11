import React from 'react'
import FaqHero from '../Components/Faq/FaqHero';
import FaqSlider from '../Components/Faq/FaqSlider';
import FaqSection from '../Components/Faq/FaqSection';

const FaqPage = () => {
  return (
    <div>
      <FaqHero/>
      <FaqSection/>
      <FaqSlider/>
    </div>
  )
}

export default FaqPage;
