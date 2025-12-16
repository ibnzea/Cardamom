import React, { useState, useEffect, useRef } from 'react';

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
      { threshold: 0.5, triggerOnce: true }
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

const ExpandingScrollContainer = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const height = 880; // fixed height

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // triggers as soon as 10% is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-1">
      <div className="flex flex-col items-center">
        <div
          ref={containerRef}
          className={`flex items-center justify-center text-white font-bold transition-all duration-[2000ms] ease-out`} // smooth 2s transition
          style={{
            width: isVisible ? '100vw' : '80vw', // start at 80% width, expand to full viewport
            height: `${height}px`,
          }}
        >
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover"
              src="https://ext.same-assets.com/3269557936/2069734220.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-transparent"></div>
            <div className="absolute left-8 top-7 text-white space-y-5">
              <h1 className="font-playfair text-6xl text-[#E9DDCC]">
                <TypingAnimation text="THE SPIRIT OF" speed={220} />
                <br />
                <TypingAnimation text="INDIAN DINING" speed={150} />
              </h1>
              <p className="text-[#E9DDCC]">
                From warm hospitality to bold flavors, every detail tells a story.
              </p>
              <div className="text-[#E9DDCC] p-1 w-40 h-14 border border-[#E9DDCC] rounded-sm">
                <button className="bg-[#E9DDCC] w-full h-full text-gray-800 rounded-sm">About Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandingScrollContainer;
