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

function AboutIntro() {
  return (
    <section className='mb-5'>
        <div className='mt-16'>
          <h1 className='font-playfair text-8xl '>
            <TypingAnimation 
              text="I. OUR JOURNEY"
              speed={220}
              className="ml-14"
            />
          </h1>
      </div>
      <div className='flex mt-[630px] mr-6'>
        <div className='ml-auto mr-4'>
            <p>
                Founded in 1996 in the heart of Ocala, Florida, Cardamom began as <br />
                a humble dream — to bring the vibrant flavors, warmth, and traditions <br />
                of Indian culture to American tables. What started as a family-run <br />
                restaurant quickly became a local landmark, cherished by generations <br />
                of guests who return time and again for our signature dishes and <br />
                welcoming atmosphere.
            </p>
            <p className='mt-2'>
                Over the decades, we’ve grown into a destination for both locals and <br />
                travelers, offering an experience that is as much about connection as it <br />
                is about cuisine. Our space blends the charm of Indian heritage with <br />
                modern comfort, creating an environment where stories are shared, <br />
                celebrations are held, and memories are made.
            </p>
            <p className='mt-[270px]'>
                Today, our menu is a testament to the heritage we honor and the <br />
                creativity we embrace. Every recipe carries the essence of tradition, <br />
                refined through years of passion and expertise. Whether it’s a classic <br />
                favorite passed down for generations or a new creation inspired by <br />
                seasonal ingredients, we ensure every plate leaves our kitchen with <br />
                one goal — that each guest departs not only satisfied, but truly <br />
                inspired to return.
            </p>
        </div>
        <div className='w-[570px] h-[700px]'>
            <img src='/images/about1.png' className='w-full h-full object-cover'/>
        </div>
      </div>

      <div className='flex mt-12 mb-4'>
        <div className='text-center'>
          <p className='font-dancing text-7xl mt-80'>
            Hospitality is not just what we serve, <br />
            it’s how we make you feel
          </p>
          <p className='mt-8 font-bold'>
            Laurhyn Akal
          </p>
          <p>
            Founder of Cardamom
          </p>
        </div>
        <div className='w-[950px] h-[900px]'>
          <img src='/images/about3.png' className='w-full h-full object-cover'/>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro;