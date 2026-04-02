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

function About() {
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
    <section>
      <div className='relative w-[1920px] h-[926px]'>        
        <div className='absolute left-[790px] top-[300px] text-white'>
          <h1 className='font-playfair text-9xl text-black'>
            <TypingAnimation 
              text="OUR"
              speed={220}
              className="ml-14"
            />
            <br />
            <TypingAnimation 
              text="STORY"
              speed={150}
            />
          </h1>
        </div>

        <div className='absolute left-[680px] top-[496px] text-black'>
          <h1>
            <TypingAnimation 
              text="SINCE 2017"
              speed={70}
            />
          </h1>
        </div>

        <div className='absolute left-[1200px] top-[496px] text-black'>
          <h1>
            <TypingAnimation 
              text="IN EVERY BITE"
              speed={70}
            />
          </h1>
        </div>

        {/* Expanding div with medium-fast gradual expansion */}
        <div 
          className='absolute transition-all duration-200 ease-out overflow-hidden'
          style={{
            width: `${containerSize.width}px`,
            height: `${containerSize.height}px`,
            bottom: '12px',
            left: `calc(50% - ${containerSize.width / 2}px)`,
          }}
        >
          <img alt="" className='w-full h-full object-cover' src='/images/services1.png' alt="Expanding view"/>
          <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-transparent'></div>
        </div>
      </div>
    </section>
  );
}

export default About;