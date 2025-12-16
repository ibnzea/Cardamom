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
              text="OUR MOST"
              speed={220}
            />
            <br />
            <TypingAnimation 
              text="REQUESTED EVENT"
              speed={150}
            />
            <br />
            <TypingAnimation 
              text="FAVORITES"
              speed={150}
            />
          </h1>
        </div>

        <div className='text-[#E9DDCC] p-1 mt-56 w-52 h-16 border border-[#1C1B19] rounded-sm'>
          <button className=' w-full h-full bg-[#1C1B19] text-[#E9DDCC] rounded-sm'>Open Menu</button>
        </div>
      </div>

       {/* IMAGE ROW – same layout as screenshot */}
      <div className='flex justify-center gap-4 px-4'>
        <div className="w-[33%]">
            <img src='/images/service1.png' className='w-full h-[420px] object-cover' />
            <div className="mt-4">
                <h1 className="text-xl font-semibold">Buffet Displays</h1>
                <p>
                    Elegant and abundant setups that showcase our dishes beautifully<br />
                    while making service smooth and efficient.
                </p>
            </div>
        </div>

        <div className="w-[33%]">
            <img src='/images/service2.png' className='w-full h-[420px] object-cover' />
            <div className="mt-4">
                <h1 className="text-xl font-semibold">Professional Service Team</h1>
                <p>
                    Our experienced staff provides courteous, attentive service so your <br />
                    event runs seamlessly.
                </p>
            </div>
        </div>

        <div className="w-[33%]">
            <img src='/images/service3.png' className='w-full h-[420px] object-cover' />
            <div className="mt-4">
                <h1 className="text-xl font-semibold">Years of Experience</h1>
                <p>
                    Decades of catering knowledge and event expertise to ensure a stress- <br />
                    free, memorable experience for you and your guests.
                </p>
            </div>
        </div>
      </div>

    </section>
  );
};

export default TestimonialCard;