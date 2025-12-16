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

function About3() {
  return (
    <section>
      <div className='relative w-[1920px] h-[926px]'>
        <img className='w-full h-full object-cover' src='/images/menu4.png'/>
        <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-transparent'></div>

        <div className='absolute left-10 top-10 text-white'>
          <h1 className='font-playfair text-7xl text-[#E9DDCC]'>
            <TypingAnimation 
              text="IV THE PEOPLE BEHIND"
              speed={90}
            />
            <br />
            <TypingAnimation 
              text="THE PALACE"
              speed={200}
              className='ml-20'
            />
          </h1>
        </div>

        <div className='absolute left-14 bottom-4 text-white'>
          <p className='text-[#E9DDCC]'>
           Our team is a family — united by a love for great food and great <br />
           service. From chefs and servers to event planners, each member <br />
           plays a role in making every visit unforgettable.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About3;