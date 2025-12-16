import React from 'react'
import Navbar2 from '../AboutLandingPages/Navbar2'
import Footer from '../pages/Footer'
import Navbar3 from './Navbar3'
import Order from './Order'

function OrderLanding() {
  return (
    <div className='bg-[#d8c9b3] border'>
        <Navbar3 />
        <Order />
        <Footer />
    </div>
  )
}

export default OrderLanding