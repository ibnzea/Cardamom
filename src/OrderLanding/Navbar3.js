import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar3() {
    const [activeItem, setActiveItem] = useState('restaurant')
    const location = useLocation()
    const navRef = useRef(null)
    const lastScrollY = useRef(0)

    // Original nav links
    const navLinks = [
        { key: "home", title: "Home", path: "/"},
        { key: "catering", title: "Catering", path: "/catering"},
        { key: "gift-cards", title: "Gift Cards", path: "/giftCards"},
        { key: "about", title: "About", path: "/about"},
        { key: "contact", title: "Contact", path: "/contact"},
    ]

    // Original nav switch items
    const navItems = [
        { key: "restaurant", title: "Restaurant"},
        { key: "shop", title: "Shop"}
    ]

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (!navRef.current) return

            if (currentScrollY > lastScrollY.current) {
                // Scrolling down → hide navbar slowly
                navRef.current.style.transform = 'translateY(-120%)'
            } else {
                // Scrolling up → show navbar slowly
                navRef.current.style.transform = 'translateY(0)'
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 px-3 py-3
                       bg-[#1C1B19]/80 backdrop-blur-sm
                       border-b border-white/10
                       transition-transform duration-700 ease-out"
        >
            <div className='flex justify-between items-center'>
                {/* LEFT NAV LINKS */}
                <div className='flex gap-6'>
                    <div className='mr-24'>
                        <img src='/images/Logo.png' className='h-10' alt="Logo"/>
                    </div>
                    {navLinks.map(({ key, title, path }) => (
                        <Link
                            key={key}
                            to={path}
                            className={`
                                text-[14px]
                                transition-all
                                ${location.pathname === path 
                                    ? "text-[#E9DDCC]" 
                                    : "text-[#E9DDCC]/70 hover:text-gray-400/70"
                                }
                            `}
                        >
                            {title}
                        </Link>
                    ))}
                </div>

                {/* MIDDLE SWITCH BUTTON */}
                <div className='flex bg-[#1C1B19] p-1 mr-56 rounded-md'>
                    {navItems.map(({ key, title }) => (
                        <button
                            key={key}
                            onClick={() => setActiveItem(key)}
                            className={`
                                min-w-[120px]
                                py-3
                                rounded-md
                                transition-all
                                font-medium
                                ${activeItem === key 
                                    ? "bg-[#E9DDCC] text-[#1C1B19]" 
                                    : "text-[#E9DDCC]"
                                }
                            `}
                        >
                            {title}
                        </button>
                    ))}
                </div>

                {/* RIGHT SIDE ICON + BUTTONS */}
                <div className='flex items-center gap-6 text-[#E9DDCC]'>
                    {/* Menu button */}
                    <Link to="/menu" className="flex items-center gap-2 text-[16px]">
                        Menu
                        <div className='w-10 bg-[#E39A3B] p-2 rounded'>
                            <img className='w-full h-full object-cover' src='/images/menu.png' alt="Menu"/>
                        </div>
                    </Link>

                    {/* Divider */}
                    <div className='w-[1px] h-6 bg-[#E9DDCC]/40'></div>

                    {/* Order button */}
                    <Link to="/order" className="flex items-center gap-2 text-[16px]">
                        Order Now
                        <div className='w-10 bg-[#E39A3B] p-2 rounded'>
                            <img className='w-full h-full object-cover' src='/images/order.png' alt="Order"/>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Navbar3
