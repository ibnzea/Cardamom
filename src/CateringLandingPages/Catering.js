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

function Catering() {
  return (
    <section>
      <div className='relative w-[1920px] h-[926px]'>
        <img className='w-full h-full object-cover' src='/images/catering.png'/>
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-transparent'></div>
        
        <div className='absolute left-[800px] bottom-24 text-white'>
          <p className='text-[#E9DDCC]'>
            From intimate gatherings to grand celebrations, our <br />
             catering brings the flavors of India to your table with<br />
             <span className='ml-8'>elegance, warmth, and unforgettable taste.</span>
          </p>
        </div>
        <div className='absolute left-[880px] bottom-6 text-[#E9DDCC] p-1 w-52 h-16 border border-[#E9DDCC] rounded-sm'>
          <button className='bg-[#E9DDCC] w-full h-full text-gray-800 rounded-sm'>Request Catering</button>
        </div>

        <div className='absolute left-[540px] top-[300px] text-white'>
          <h1 className='font-playfair text-9xl text-[#E9DDCC]'>
            <TypingAnimation 
              text="CATERING,"
              speed={220}
              className="ml-36"
            />
            <br />
            <TypingAnimation 
              text="THE AMRIT WAY"
              speed={150}
              className='mr-24'
            />
          </h1>
        </div>

        <div className='absolute left-[350px] top-[500px] text-white'>
          <h1>
            <TypingAnimation 
              text="EXCEPTIONAL FOOD"
              speed={70}
            />
          </h1>
        </div>

        <div className='absolute left-[1530px] top-[490px] text-white'>
          <h1>
            <TypingAnimation 
              text="ANYWHERE"
              speed={70}
            />
          </h1>
        </div>

       
      </div>
    </section>
  )
}

export default Catering;