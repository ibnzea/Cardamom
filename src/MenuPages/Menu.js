import React from 'react';
import { useState, useRef, useEffect } from 'react';

const TypingAnimation = ({ text, speed = 100, className = "" }) => {
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
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
};

function Menu() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [containerSize, setContainerSize] = useState({
    width: 200,
    height: 200,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on how far we've scrolled (0 to 1)
      // Starts expanding immediately, completes after scrolling 300px
      const scrollThreshold = 300; // Adjust this for faster/slower expansion
      const progress = Math.min(scrollTop / scrollThreshold, 1);
      setScrollProgress(progress);
      
      // Calculate new size with gradual expansion
      const newWidth = 200 + (window.innerWidth - 200) * progress;
      const newHeight = 200 + (window.innerHeight - 200) * progress;
      
      setContainerSize({
        width: newWidth,
        height: newHeight,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='menu'>
      <div className='relative w-[1920px] h-[706px]'> 
        <div className='absolute left-[790px] top-[350px] text-white'>
          <h1 className='font-playfair text-9xl text-black'>
            <TypingAnimation 
              text="MENU"
              speed={220}
            />
          </h1>
        </div>

        <div className='absolute left-[640px] top-[416px] text-black'>
          <h1>
            <TypingAnimation 
              text="SPICES OF INDIA"
              speed={70}
            />
          </h1>
        </div>

        <div className='absolute left-[1180px] top-[416px] text-black'>
          <h1>
            <TypingAnimation 
              text="NEW DISCOVERIES"
              speed={70}
            />
          </h1>
        </div>
        <div className='absolute left-[700px] bottom-12'>
          <p className='font-dancing text-3xl'>Every dish tells a story of spice, care, and heritage..</p>
        </div>
      </div>

      <div className='h-[700px]'>
        <img src='/images/menu1.png' className='w-full h-full object-cover'/>
      </div>

      <div className='mt-16 ml-8'>
        <h1 className='font-playfair text-4xl text-black'>
            <TypingAnimation 
              text="A symphony of flavors, crafted with care. At"
              speed={20}
            />
            <br />
            <TypingAnimation 
              text="Cardamom, every dish is a reflection of"
              speed={40}
            />
            <br />
            <TypingAnimation 
              text="tradition and creativity from the spices that"
              speed={60}
            />
            <br />
            <TypingAnimation 
              text="awaken your senses to the sweetness that lingers"
              speed={60}
            />
            <br />
            <TypingAnimation 
              text="at the end. Pair your meal with curated drinks"
              speed={60}
            />
            <br />
            <TypingAnimation 
              text="and let the journey unfold."
              speed={150}
            />
            
        </h1>
      </div>

      <div className='mt-32 border border-gray-500/40 mx-auto w-[800px] flex flex-col justify-center items-center'>
        <div className='w-full text-center border-b border-gray-500/40 space-y-3'>
          <h1 className='font-playfair text-5xl'>Create your own course</h1>
          <p className='text-2xl'>$39.79</p>
          <p>
            Design your perfect dining experience by selecting one 
            appetizer, entrée, and dessert — <br />
            served with two sides, naan or tandoori roti, and
             signature sauces.
          </p>
          <p className='font-bold'>
            Add an additional entrée and 2 sides for only $16.99!
          </p>
        </div>
        <div className='w-full text-center p-3 border-b border-gray-500/40'>
          <h1 className='text-2xl'>I.</h1>
          <p className='text-2xl'>Choose any ONE appetizer</p>
        </div>
        <div className='w-full text-center p-3 border-b border-gray-500/40'>
          <h1 className='text-2xl'>II.</h1>
          <p className='text-2xl'>Choose any ONE entrée</p>
          <p className='text-xl'>From Chicken, Lamb, Vegetable, or Seafood entrées.</p>
        </div>
        <div className='text-center p-3'>
          <h1 className='text-2xl'>III.</h1>
          <p className='text-2xl'>Choose any ONE dessert</p>
        </div>
      </div>

    </section>
  );
}

export default Menu;