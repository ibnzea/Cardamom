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

const TestimonialCard = () => {
  const testimony = [
    {
      rating: 5,
      platform: "Google",
      text: "Always so delicious. The staff is incredible and attentive. My favorite restaurant in Ocala.",
      author: "James T."
    },
    {
      rating: 5,
      platform: "Reddit",
      text: "I had some of the best Indian food around… Tandoori Chicken, Rogan Josh and samosa chaat — everything was incredible.",
      author: "Rahul S."
    },
    {
      rating: 5,
      platform: "Yelp",
      text: "The restaurant is very clean, food is amazing and servers very attentive. You will not regret eating here.",
      author: "Elizabeth M."
    },
    {
      rating: 5,
      platform: "MapQuest",
      text: "Inassumong on the outside, GORGEOUS on the inside. I was dining alone and it was just stellar.",
      author: "Marie R."
    },
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimony, ...testimony, ...testimony];
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;
    let animationId;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        
        // Reset scroll position when we've scrolled one-third of the total width
        if (scrollAmount >= scrollContainer.scrollWidth / 3) {
          scrollAmount = 0;
        }
        
        scrollContainer.scrollLeft = scrollAmount;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll
    animationId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className='mt-4 space-y-5'>
      <div className='flex justify-between p-8'>

        <div>
          <h1 className='font-playfair text-8xl'>
            <TypingAnimation 
              text="WHAT OUR"
              speed={220}
            />
            <br />
            <TypingAnimation 
              text="GUESTS SAY"
              speed={150}
            />
          </h1>
        </div>

        <div className="border border-gray-600/25 bg-[#E9DDCC] w-[480px] h-[150px] overflow-hidden mr-4">
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

      {/* Carousel Container - Simple and clean */}
      <div className="relative overflow-hidden">
        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden gap-7"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.platform}-${index}`} 
              className="mt-12 border border-black/20 rounded-sm w-[480px] h-[500px] flex-shrink-0"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-1 border border-b-black/20 p-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`w-5 h-5 ${starIndex < testimonial.rating ? 'text-[#e7a261]' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <span className="text-[#969696] font-medium text-sm">{testimonial.platform}</span>
              </div>

              {/* Main Text */}
              <p className="text-[#1f1f1f] text-[28px] font-playfair leading-[1.45] mb-14 p-3">
                {testimonial.text}
              </p>

              {/* Footer */}
              <div className="border-t border-[#e5d5bd] pt-40 pl-3">
                <p className="text-[#969696] text-xs mb-1">Author</p>
                <p className="text-[#1f1f1f] font-semibold">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;