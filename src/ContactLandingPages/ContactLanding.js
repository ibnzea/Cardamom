// pages/ContactLanding.js
import React from 'react'
import Navbar from "../components/Navbar"
import Contact from './Contact'
import Footer2 from './Footer2'
function ContactLanding() {
  return (
    <div className="bg-[#d8c9b3]">
      <Navbar />
      {/* Add your Contact content here */}
      <Contact />
      <Footer2 />
    </div>
  )
}

export default ContactLanding