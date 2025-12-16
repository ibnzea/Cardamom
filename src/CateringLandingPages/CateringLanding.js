import React from 'react'
import Navbar from "../components/Navbar"
import TestimonialCard from "../pages/TestimonialCard";
import Footer from "../pages/Footer";
import Catering from './Catering';
import CateringAbout from './CateringAbout'
import CateringServices from './CateringServices';
import CateringIntro from './CateringIntro';

function CateringLanding() {
  return (
    <div className="bg-[#d8c9b3]">
      <Navbar />
      <Catering />
      <CateringIntro />
      <CateringServices />
      <CateringAbout />
      <TestimonialCard />
      <Footer />
    </div>
  )
}

export default CateringLanding