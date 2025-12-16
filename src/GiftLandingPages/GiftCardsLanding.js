// pages/GiftCardsLanding.js
import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../pages/Footer"
import Navbar2 from '../AboutLandingPages/Navbar2'
// Import your GiftCardCarousel component

function GiftCardsLanding() {
  return (
    <div className="bg-[#d8c9b3] min-h-screen">
      <Navbar2 />
      {/* Add your Gift Cards content here */}
      <div className="pt-20">
        <h1 className="text-4xl font-bold text-center mt-12">Gift Cards</h1>
        {/* Add your GiftCardCarousel component */}
      </div>
      <Footer />
    </div>
  )
}

export default GiftCardsLanding