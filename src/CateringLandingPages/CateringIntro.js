/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
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

function CateringIntro() {
  return (
    <section className='mb-24'>
      <div className='m-8'>
          <h1 className='font-playfair text-7xl m-3 leading-normal'>
            <TypingAnimation 
              text="At Cardamom, we specialize in creating"
              speed={40}
            />
            <br />
            <TypingAnimation 
              text="unforgettable 
              dining experiences for events"
              speed={60}
            />
            <br />
            <TypingAnimation 
              text="of all sizes and styles."
              speed={130}
            />
          </h1>
      </div>

      <div className='flex gap-10 m-8 mt-[400px]'>
        <p>
            From intimate weddings to large corporate gatherings, our <br />
            catering blends rich Indian flavors with sophisticated <br />
            presentation and exceptional attention to detail.
        </p>
        <p>
            Whether you envision a lavish sit-down dinner, a vibrant <br />
            buffet, or live on-site cooking, we tailor every aspect to your <br />
            event’s unique character.
        </p>
      </div>

      {/* Added relative to parent container for sticky to work properly */}
      <div className='relative flex gap-10 m-8'>
        <div className='w-[940px] h-[1100px]'>
            <img alt="" src='/images/services1.png' className='w-full h-full object-cover'/>
        </div>
        {/* Only added sticky classes here */}
        <div className='space-y-5 sticky top-8 self-start'>
            <h1 className='font-playfair text-5xl'>
                <TypingAnimation 
                text="WHERE TASTE MEETS"
                speed={40}
                />
                <br />
                <TypingAnimation 
                text="CELEBRATION"
                speed={130}
                />
            </h1>
            <p>
                From weddings to corporate galas — exceptional flavors, flawless <br />
                presentation, and personal touch for every occasion.
            </p>
            <div className='text-[#E9DDCC] p-1 w-52 h-16 border border-[#1C1B19] rounded-sm'>
              <button className=' w-full h-full bg-[#1C1B19] text-[#E9DDCC] rounded-sm'>Explore Services</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CateringIntro;