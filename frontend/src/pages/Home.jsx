import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SocialBar from '../components/SocialBar'
import WhatWeOffer from '../components/WhatWeOffer'
import OurServices from '../components/OurServices'
import AboutUs from '../components/AboutUs'
import PreviousWork from '../components/PreviousWork'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import WhatWeSell from '../components/WhatWeSell'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WhatWeOffer/>
        <WhatWeSell/>
        
        <OurServices/>
        <SocialBar/>
        <AboutUs/>
        <PreviousWork/>
        <Faq/>
        {/* <ContactUs/> */}
        <Footer/>
        
    </div>
  )
}

export default Home