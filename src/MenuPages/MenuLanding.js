import React from 'react'
import Menu from './Menu'
import Navbar2 from '../AboutLandingPages/Navbar2'
import Footer from '../pages/Footer'
import MenuList from './MenuList'

function MenuLanding() {
  return (
    <div className='bg-[#d8c9b3]'>
        <Navbar2 />
        <Menu />
        <MenuList />
        <Footer />
    </div>
  )
}

export default MenuLanding