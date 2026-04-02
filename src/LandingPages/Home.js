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

function Home() {
  return (
    <section>
      <div className='relative w-[1920px] h-[926px]'>
        <img alt="" className='w-full h-full object-cover' src='/images/Home.png'/>
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-transparent'></div>
        
        <div className='absolute left-6 bottom-4 text-white'>
          <p className='text-[#E9DDCC]'>
            At Cardamom, every dish is a tribute to tradition and <br />every moment is crafted for today.
             We bring together <br />the warmth of Indian hospitality, the richness of timeless <br />flavors, and the pace of modern life.
          </p>
        </div>

        <div className='absolute left-[650px] top-[270px] text-white'>
          <h1 className='font-playfair text-9xl '>
            <TypingAnimation 
              text="FLAVORS"
              speed={220}
              className="ml-14"
            />
            <br />
            <TypingAnimation 
              text="THAT STAY"
              speed={150}
            />
          </h1>
        </div>

        <div className='absolute left-[430px] top-[460px] text-white'>
          <h1>
            <TypingAnimation 
              text="SERVING CENTRAL NAIROBI"
              speed={70}
            />
          </h1>
        </div>

        <div className='absolute left-[1330px] top-[460px] text-white'>
          <h1>
            <TypingAnimation 
              text="ESTABLISHED 2017"
              speed={70}
            />
          </h1>
        </div>

        <div className="absolute right-4 bottom-4 w-[400px] bg-[#E9DDCC] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-400/40">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 fill-[#FBBC04]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>

          {/* Rating section */}
          <div className="px-4 py-5">
            <div className="flex items-start gap-[85px]">
              <div className="flex items-baseline">
                <span className="text-[56px] font-semibold text-[#3C4043] leading-none">4.7</span>
                <span className="text-xl text-[#5F6368] ml-0.5">/5</span>
              </div>
              <div className="flex flex-col justify-center pt-3">
                <div className="text-[20px] font-medium text-[#3C4043]">Excellent</div>
                <div className="text-[15px] text-[#5F6368] leading-tight">
                  Based on 3,576 reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;