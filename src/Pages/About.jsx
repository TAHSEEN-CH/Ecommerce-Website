import React from 'react'
import AboutHero from '../Components/About/AboutHero';
import WelCelex from '../Components/About/WelCelex';
import AboutProgress from '../Components/About/AboutProgress';
import AboutCard from '../Components/About/AboutCard';
import AboutTeam from '../Components/About/AboutTeam';
import AboutSlider from '../Components/About/AboutSlider';

const About = () => {
  return (
    <div>
        <AboutHero />
        <WelCelex />
        <AboutProgress />
        <AboutCard />
        <AboutTeam />
        <AboutSlider />
    </div>
  )
}

export default About;