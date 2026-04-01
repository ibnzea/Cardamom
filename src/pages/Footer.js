import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const TypingAnimation = ({ text, speed = 150 }) => {
  const [displayText, setDisplayText] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let currentIndex = 0;
          
          const typeText = () => {
            if (currentIndex < text.length) {
              setDisplayText(text.slice(0, currentIndex + 1));
              currentIndex++;
              setTimeout(typeText, speed);
            }
          };
          
          typeText();
        }
      },
      { 
        threshold: 0.5,
        triggerOnce: true 
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [text, speed, hasAnimated]);

  return (
    <h1 ref={ref} className="text-[#F4A654] lg:text-[280px] font-heading text-center lg:text-left">
      {displayText}
    </h1>
  );
};

function Footer() {
  return (
    <section className='bg-[#1C1A17] mt-8'>
        <div className='flex justify-between p-9'>
            <div className='flex justify-center items  border-t border-b border-amber-100/30 text-[#E9DDCC] mt-7 w-[600px] h-[320px]'>
                <div className='flex flex-col justify-between  border-r border-amber-100/30 p-4'> 
                    <h1 className='mr-28'>Cardamom</h1>
                    <div className='mt-24 duration-200 hover:hover:text-amber-400/70'>
                        <p>3415 SW College Rd<br />
                            Ocala, FL 34474</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between   border-[#E9DDCC] p-4'> 
                    <h1 className='ml-28'>HOURS</h1>
                    <div className='mt-24 ml-28 duration-200 hover:hover:text-amber-400/70'>
                        <p>Tue-Fri 11 AM __ 10 PM</p>
                        <p>Sat-Sun 12 PM __ 10 PM</p>
                        <p className='ml-8'>Mon (Closed)</p>
                    </div>
                </div>
            </div>
            <div className='mt-40 w-12'>
                <img src='/images/Logo.png' />
            </div>
            <div className='flex justify-center items  border-t border-b border-amber-100/30 text-[#E9DDCC] mt-7 w-[600px] h-[320px]'>
                <div className='flex flex-col justify-between  border-r border-amber-100/30 p-4'> 
                    <h1 className='mr-28'>CONTACT</h1>
                    <div className='mt-24'>
                        <p className='duration-200 hover:hover:text-amber-400/70'>+254 793582005</p>
                        <p className='ml-8 duration-200 hover:hover:text-amber-400/70'>E-mail Us</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between   border-[#E9DDCC] p-4'> 
                    <h1 className='ml-28'>NEWSLETTER</h1>
                    <div className='mt-24 ml-28'>
                        <p className='duration-200 hover:hover:text-amber-400/70'>Get the Latest updates.</p>
                        <p className='duration-200 hover:hover:text-amber-400/70'>Coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-between'>
            <div className='flex justify-around gap-[200px] m-14 text-[#E9DDCC]'>
                <div>
                    <h3 className='mb-9 duration-200 hover:hover:text-amber-400/70'>Discover</h3>
                    <Link to="/" className='duration-200 hover:hover:text-amber-400/70 cursor-pointer'>Home</Link><br />
                    <Link to="/catering" className='duration-200 hover:hover:text-amber-400/70 cursor-pointer'>Catering</Link><br />
                    <Link to="/giftCards" className='duration-200 hover:hover:text-amber-400/70 cursor-pointer'>Gift Cards</Link><br />
                    <Link to="/about" className='duration-200 hover:hover:text-amber-400/70 cursor-pointer'>About</Link><br />
                    <Link to="/contact" className='duration-200 hover:hover:text-amber-400/70 cursor-pointer'>Contact</Link>
                </div>
                <div>
                    <h3 className='mb-9 duration-200 hover:hover:text-amber-400/70'>Legals</h3>
                    <Link to="/privacy" className='duration-200 hover:hover:text-amber-400/70 cursor-pointer'>Privacy Policy</Link><br />
                    <Link to="/terms" className='duration-200 hover:hover:text-amber-400/70 cursor-pointer'>Terms and Conditions</Link><br />
                    <Link to="/cookie" className='duration-200 hover:hover:text-amber-400/70 cursor-pointer'>Cookie Policy</Link>
                </div>
            </div>

           <div className='flex justify-around gap-[200px] m-14 text-[#E9DDCC]'>
                <div>
                    <h3 className='mb-9 duration-200 hover:hover:text-amber-400/70'>Actions</h3>
                    <Link to="/menu" className='duration-200 hover:hover:text-amber-400/70 cursor-pointer'>View Menu</Link><br />
                    <p className='duration-200 hover:hover:text-amber-400/70 cursor-pointer'>Order Gift Card</p>
                    <p className='duration-200 hover:hover:text-amber-400/70 cursor-pointer'>Reserve a Table</p>
                </div>
                <div>
                    <h3 className='mb-9 duration-200 hover:hover:text-amber-400/70'>Socials</h3>
                    <a href="https://www.instagram.com/" target="_blank" className='duration-200 hover:hover:text-amber-400/70 cursor-pointer'>Instagram</a><br />
                    <a href="https://www.facebook.com/" target="_blank" className='duration-200 hover:hover:text-amber-400/70 cursor-pointer'>Facebook</a>
                </div>
            </div>
        </div>

        <div>
         <TypingAnimation text="Cardamom" speed={150} />
         </div>

         <div className="flex justify-between p-3 text-[#E9DDCC]">
            <p>&copy; 2025 Cardamom</p>
            <p>All Rights Reserved</p>
            <p>Made by <a className="underline" href="https://my-portfolio-two-nu-58.vercel.app/">Oliver Ekeno</a></p>
         </div>

    </section>
  )
}

export default Footer