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

function About2() {
  return (
    <section>
      <div className='relative w-[1920px] h-[926px]'>
        <img className='w-full h-full object-cover' src='/images/about2.png'/>
        <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-transparent'></div>

        <div className='absolute left-4 top-10 text-white'>
          <h1 className='font-playfair text-7xl text-[#E9DDCC]'>
            <TypingAnimation 
              text="ROOTED IN"
              speed={220}
            />
            <br />
            <TypingAnimation 
              text="EXPERIENCE"
              speed={150}
            />
          </h1>
        </div>

        <div className='absolute left-4 bottom-4 text-white'>
          <p className='text-[#E9DDCC]'>
           Since 1996, Amrit Palace has been more than a destination for <br />
           Indian cuisine. It has been a space for celebration, connection, and <br />
           tradition reimagined. Each visit is a quiet ritual; the warmth of spice, <br />
           the hum of conversation, the comfort of something familiar yet <br />
           elevated. Whether it’s your first time or your fiftieth, we believe the <br />
           best meals are the ones that stay with you long after the last bite.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About2;