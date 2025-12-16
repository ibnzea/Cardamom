import React from 'react'
import Navbar from "../components/Navbar"
import Home from "../LandingPages/Home"
import ExpandingScrollContainer from "../LandingPages/ExpandingScrollContainer"
import Menu from "../LandingPages/Menu"
import Services from "../LandingPages/Services";
import GiftCardCarousel from "./GiftCardCarousel";
import TestimonialCard from "./TestimonialCard";
import Menu2 from "../LandingPages/Menu2";
import About2 from "../LandingPages/About2";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="bg-[#d8c9b3]">
      <Navbar />
      <Home />
      <ExpandingScrollContainer />
      <Menu />
      <Services />
      <Menu2 />
      <About2 />
      {/* <GiftCardCarousel /> */}
      <TestimonialCard />
      <Footer />
    </div>
  )
}

export default LandingPage