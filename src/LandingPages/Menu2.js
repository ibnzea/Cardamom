import React from 'react'
import {useRef, useState, useEffect} from 'react'

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

function Menu2() {
  return (
    <section>
        <div className='flex'>
            {/* Text section - made sticky */}
            <div className='px-4 lg:sticky lg:top-0 lg:self-start lg:h-screen '>
                <div className='space-y-6 mb-36'>
                    <h1 className='font-playfair text-6xl'>
                    <TypingAnimation 
                        text="DRINKS THAT"
                        speed={150}
                    />
                    <br />
                    <TypingAnimation 
                        text="COMPLETE"
                        speed={150}
                    />
                    <br />
                    <TypingAnimation 
                        text="THE EXPERIENCE"
                        speed={150}
                    />
                    </h1>
                    <p>
                    From house-special cocktails to traditional Indian lassi, every drink is <br />
                    designed to pair perfectly with your meal.
                    </p>
                    <div className='text-[#E9DDCC] m- w-44 p-1 w- h-16 border border-gray-700 rounded-md'>
                        <button className='bg-black/85  w-full h-full text-white rounded-md'>Open Menu</button>
                    </div>
                </div>

                <div>
                    <div className='p-1 border-b border-t border-gray-700'>
                        <div className='flex justify-between p-1'>
                            <h1>Tamarind Margarita</h1>
                            <span>$11.99</span>
                        </div>
                        <p className='p-1'>
                            Tamarind with our signature in-house mix for a distinct take on the classic margarita. Pro-tip: make it spicy!
                        </p>
                    </div>

                    <div className='p-1 border-b border-gray-700'>
                        <div className='flex justify-between p-1'>
                            <h1>Tipssy Lassi</h1>
                            <span>$10.99</span>
                        </div>
                        <p className='p-1'>
                           Our renowned signature mango lassi with a boozy rum kick.
                        </p>
                    </div>

                    <div className='p-1 border-b border-gray-700'>
                        <div className='flex justify-between p-1'>
                            <h1>Lychee-Tini</h1>
                            <span>$10.99</span>
                        </div>
                        <p className='p-1'>
                            Fresh lychees and vodka; shaken not stirred.
                        </p>
                    </div>

                    <div className='p-1 border-b border-gray-700'>
                        <div className='flex justify-between p-1'>
                            <h1>Ginger Peach Soda</h1>
                            <span>$5.99</span>
                        </div>
                        <p className='p-1'>
                           A bright fusion of spicy ginger and juicy peach — refreshing, smooth, and perfectly balanced for any moment.
                        </p>
                    </div>

                    <div className='p-1 border-b border-gray-700'>
                        <div className='flex justify-between p-1'>
                            <h1>Smoked Old Fashion</h1>
                            <span>$13.99</span>
                        </div>
                        <p className='p-1'>
                            The classic cocktail smoked to excellence.
                        </p>
                    </div>

                    <div className='p-1 border-b border-gray-700'>
                        <div className='flex justify-between p-1'>
                            <h1>Mint Cucumber Fizz</h1>
                            <span>$5.99</span>
                        </div>
                        <p className='p-1'>
                            Cool cucumber meets crisp mint in this sparkling blend that feels like pure, chilled freshness in a glass.
                        </p>
                    </div>
                </div>
            </div>

            {/* Images section - will scroll normally */}
            <div>
                <div className='w-[1085px] h-[930px]'>
                    <img src='/images/menu3.png' className='w-full h-full'/>
                </div>
                <div className='w-[1085px] h-[864px] mt-1'>
                    <img src='/images/menu4.png' className='w-full h-full'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu2