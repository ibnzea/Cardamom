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

function CateringServices() {
  const [backgroundDarkness, setBackgroundDarkness] = useState({ from: 10, via: 50 });
  
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null); // Added fourth card ref

  useEffect(() => {
    // Define darkness levels for each card
    const cardDarkness = [
      { ref: card1Ref, from: 40, via: 60 },
      { ref: card2Ref, from: 60, via: 70 },
      { ref: card3Ref, from: 70, via: 80 },
      { ref: card4Ref, from: 80, via: 90 } // Added fourth card darkness
    ];

    const observers = cardDarkness.map(card => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // When this card enters view, set its specific darkness level
              setBackgroundDarkness({ from: card.from, via: card.via });
            }
          });
        },
        { 
          threshold: 0.5, // Trigger when 50% of card is visible
          rootMargin: '0px 0px 0px 0px' // No extra margin
        }
      );
      
      if (card.ref.current) {
        observer.observe(card.ref.current);
      }
      
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative min-h-[5000px]"> {/* Increased height for 4th card */}
      {/* Sticky Background Section */}
      <div className='sticky top-0 w-full h-screen'>
        <div className='relative w-full h-full'>
          <img alt="" className='w-full h-full object-cover' src='/images/service.png'/>
          
          {/* Dynamic gradient overlay - changes based on which card is in view */}
          <div 
            className={`absolute inset-0 bg-gradient-to-b transition-all duration-1000 ease-in-out
              from-black/${backgroundDarkness.from} 
              via-black/${backgroundDarkness.via} 
              to-transparent`}
          />

          <div className='absolute left-4 top-20 text-white'>
            <h1 className='font-playfair text-7xl text-[#E9DDCC]'>
              <TypingAnimation 
                text="ALL"
                speed={220}
              />
              <br />
              <TypingAnimation 
                text="SERVICES"
                speed={150}
              />
            </h1>
          </div>
          <div className='absolute left-4 top-60 text-[#E9DDCC] p-1 w-52 h-16 border border-[#E9DDCC] rounded-sm'>
            <button className='bg-[#E9DDCC] w-full h-full text-gray-800 rounded-sm'>Request Catering</button>
          </div>
        </div>
      </div>

      {/* Cards Container - positioned on the right as in your original design */}
      <div className="absolute right-16 top-[100vh]">
        
        {/* First Card - triggers from-black/40 via-black/60 */}
        <div
            ref={card1Ref}
            className="relative mb-[200px] border border-amber-100/30 rounded-sm w-[530px] h-[570px] flex-shrink-0"
        >
              {/* Header */}
              <div className="flex items-center justify-between mb-1 border border-amber-100/30 p-3">
                <div className="flex gap-1">
                  <span className='text-[#E9DDCC] text-3xl'>1.</span>
                </div>
              </div>

              {/* Main Text */}
              <p className="text-[#E9DDCC] text-[32px] font-playfair leading-[1.45] mb-14 p-3">
                Full Service <br />Catering
              </p>

              {/* Footer */}
              <div className="pt-64 pl-3">
                <p className='text-[#E9DDCC]'>
                    Complete serving with professional staff, ensuring
                    every guest is attended to and every detail is perfect.
                </p>
              </div>
        </div>

        {/* Second Card - triggers from-black/60 via-black/70 */}
        <div
            ref={card2Ref}
            className="relative mb-[200px] border border-amber-100/30 rounded-sm w-[530px] h-[570px] flex-shrink-0"
        >
              {/* Header */}
              <div className="flex items-center justify-between mb-1 border border-amber-100/30 p-3">
                <div className="flex gap-1">
                  <span className='text-[#E9DDCC] text-3xl'>2.</span>
                </div>
              </div>

              {/* Main Text */}
              <p className="text-[#E9DDCC] text-[32px] font-playfair leading-[1.45] mb-14 p-3">
                Drop-off <br />Catering
              </p>

              {/* Footer */}
              <div className="pt-64 pl-3">
                <p className='text-[#E9DDCC]'>
                    Professionally prepared meals delivered ready to serve,
                    perfect for casual gatherings and events.
                </p>
              </div>
        </div>

        {/* Third Card - triggers from-black/70 via-black/80 */}
        <div
            ref={card3Ref}
            className="relative mb-[200px] border border-amber-100/30 rounded-sm w-[530px] h-[570px] flex-shrink-0"
        >
              {/* Header */}
              <div className="flex items-center justify-between mb-1 border border-amber-100/30 p-3">
                <div className="flex gap-1">
                  <span className='text-[#E9DDCC] text-3xl'>3.</span>
                </div>
              </div>

              {/* Main Text */}
              <p className="text-[#E9DDCC] text-[32px] font-playfair leading-[1.45] mb-14 p-3">
                Corporate <br />Catering
              </p>

              {/* Footer */}
              <div className="pt-64 pl-3">
                <p className='text-[#E9DDCC]'>
                    Tailored menus and professional service for business
                    meetings, conferences, and corporate events.
                </p>
              </div>
        </div>

        {/* Fourth Card - triggers from-black/80 via-black/90 */}
        <div
            ref={card4Ref}
            className="relative mb-[200px] border border-amber-100/30 rounded-sm w-[530px] h-[570px] flex-shrink-0"
        >
              {/* Header */}
              <div className="flex items-center justify-between mb-1 border border-amber-100/30 p-3">
                <div className="flex gap-1">
                  <span className='text-[#E9DDCC] text-3xl'>4.</span>
                </div>
              </div>

              {/* Main Text */}
              <p className="text-[#E9DDCC] text-[32px] font-playfair leading-[1.45] mb-14 p-3">
                Special Events <br />Catering
              </p>

              {/* Footer */}
              <div className="pt-64 pl-3">
                <p className='text-[#E9DDCC]'>
                    Exclusive menus and premium service for weddings,
                    anniversaries, and other special celebrations.
                </p>
              </div>
        </div>

        {/* Final spacer to ensure all cards can be scrolled to */}
        <div className='h-[800px]'></div>
      </div>
    </section>
  );
}

export default CateringServices;