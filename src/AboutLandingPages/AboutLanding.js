// pages/AboutLanding.js
import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../pages/Footer"
import TestimonialCard from '../pages/TestimonialCard'
import About3 from './About3'
import About from './About'
import AboutIntro from './AboutIntro'
import AboutPhilosophy from './AboutPhilosophy'
import Navbar2 from './Navbar2'
// Import your About2 component

function AboutLanding() {
  return (
    <div className="bg-[#d8c9b3]">
      <Navbar2 />
      <About />
      <AboutIntro />
      <AboutPhilosophy />
      <About3 />
      <TestimonialCard />
      <Footer />
    </div>
  )
}

export default AboutLanding