import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SocialBar from '../components/SocialBar'
import WhatWeOffer from '../components/WhatWeOffer'
import OurServices from '../components/OurServices'
import AboutUs from '../components/AboutUs'
import PreviousWork from '../components/PreviousWork'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <SocialBar/>
        <WhatWeOffer/>
        <OurServices/>
        <AboutUs/>
        <PreviousWork/>
        
    </div>
  )
}

export default Home