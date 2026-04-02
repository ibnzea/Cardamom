import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const [activeItem, setActiveItem] = useState('restaurant')
    const location = useLocation()

    // NEW: scroll-direction navbar state
    const [hidden, setHidden] = useState(false)
    const [lastY, setLastY] = useState(0)

    // NEW: scroll listener
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY

            if (currentY > lastY + 5) {
                // Scrolling down → hide navbar
                setHidden(true)
            } else if (currentY < lastY - 5) {
                // Scrolling up → show navbar
                setHidden(false)
            }

            setLastY(currentY)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastY])

    const navLinks = [
        { key: "home", title: "Home", path: "/" },
        { key: "catering", title: "Catering", path: "/catering" },
        { key: "gift-cards", title: "Gift Cards", path: "/giftCards" },
        { key: "about", title: "About", path: "/about" },
        { key: "contact", title: "Contact", path: "/contact" },
    ]

    const navItems = [
        { key: "restaurant", title: "Restaurant" },
        { key: "shop", title: "Shop" }
    ]

    return (
        <section
            className={`
                fixed top-0 left-0 w-full z-50 px-3 py-4 bg-[#1C1B19]/80
                transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]
                ${hidden ? "-translate-y-[150%]" : "translate-y-0"}
            `}
        >
            <div className='flex justify-between items-center'>
                
                {/* LEFT NAV LINKS */}
                <div className='flex gap-6'>
                    <div className='mr-24'>
                        <img alt="" src='/images/Logo.png' className='h-10' alt="Logo" />
                    </div>

                    {navLinks.map(({ key, title, path }) => (
                        <Link
                            key={key}
                            to={path}
                            className={`
                                text-[14px] transition-all
                                ${location.pathname === path
                                    ? "text-[#E9DDCC]"
                                    : "text-[#E9DDCC]/70 hover:text-amber-400/70"
                                }
                            `}
                        >
                            {title}
                        </Link>
                    ))}
                </div>

                {/* MIDDLE SWITCH BUTTON */}
                <div className='flex bg-[#E9DDCC] p-1 mr-56 rounded-md'>
                    {navItems.map(({ key, title }) => (
                        <button
                            key={key}
                            onClick={() => setActiveItem(key)}
                            className={`
                                min-w-[120px] py-3 rounded-md transition-all font-medium
                                ${activeItem === key
                                    ? "bg-[#1C1B19] text-[#E9DDCC]"
                                    : "text-[#1C1B19]"
                                }
                            `}
                        >
                            {title}
                        </button>
                    ))}
                </div>

                {/* RIGHT SIDE ICON & BUTTONS */}
                <div className='flex items-center gap-6 text-[#E9DDCC]'>
                    
                    {/* Menu Button */}
                    <Link to="/menu" className="flex items-center gap-2 text-[16px] hover:text-amber-400/70">
                        Menu
                        <div className='w-10 bg-[#E39A3B] p-2 rounded'>
                            <img alt="" className='w-full h-full object-cover' src='/images/menu.png' alt="Menu" />
                        </div>
                    </Link>

                    {/* Divider */}
                    <div className='w-[1px] h-6 bg-[#E9DDCC]/40'></div>

                    {/* Order Button */}
                    <Link to="/order" className="flex items-center gap-2 text-[16px] hover:text-amber-400/70">
                        Order Now
                        <div className='w-10 bg-[#E39A3B] p-2 rounded'>
                            <img alt="" className='w-full h-full object-cover' src='/images/order.png' alt="Order" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Navbar
