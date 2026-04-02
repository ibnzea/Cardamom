import React, {useRef, useState, useEffect} from 'react'

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

function Menu() {
  return (
    <section>
        <div className='flex'>
            <div className='bg-black/85 p-7'>
                <div className='bg-[#F4A654] w-[750px] rounded-md'>
                    {/* title */}
                    <div className='flex justify-between p-2 border-b border-gray-700 py-8'>
                        <h1 className='font-playfair text-6xl text-gray-800'>
                        <TypingAnimation 
                            text="SIGNATURE"
                            speed={220}
                        />
                        <br />
                        <TypingAnimation 
                            text="PLATES"
                            speed={150}
                        />
                        </h1>
                        <div className='w-10 h-10'>
                            <img alt="" className='w-full h-full object-cover' src='/images/menu.png' alt="Menu"/>
                        </div>
                    </div>

                    <div>
                        <div className='p-1 border-b border-gray-700'>
                            <div className='flex justify-between p-1'>
                                <h1>Variety Tray</h1>
                                <span>$16.99</span>
                            </div>
                            <p className='p-1'>
                                A sampler platter perfect for sharing, featuring a mix of vegetable and <br /> meat samosas
                                aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.
                            </p>
                        </div>

                        <div className='p-1 border-b border-gray-700'>
                            <div className='flex justify-between p-1'>
                                <h1>Variety Tray</h1>
                                <span>$16.99</span>
                            </div>
                            <p className='p-1'>
                                A sampler platter perfect for sharing, featuring a mix of vegetable and meat samosas,<br />
                                aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.
                            </p>
                        </div>

                        <div className='p-1 border-b border-gray-700'>
                            <div className='flex justify-between p-1'>
                                <h1>Variety Tray</h1>
                                <span>$16.99</span>
                            </div>
                            <p className='p-1'>
                                A sampler platter perfect for sharing, featuring a mix of vegetable and meat samosas,<br />
                                aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.
                            </p>
                        </div>

                        <div className='p-1 border-b border-gray-700'>
                            <div className='flex justify-between p-1'>
                                <h1>Variety Tray</h1>
                                <span>$16.99</span>
                            </div>
                            <p className='p-1'>
                                A sampler platter perfect for sharing, featuring a mix of vegetable and meat samosas,<br />
                                aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.
                            </p>
                        </div>

                        <div className='p-1 border-b border-gray-700'>
                            <div className='flex justify-between p-1'>
                                <h1>Variety Tray</h1>
                                <span>$16.99</span>
                            </div>
                            <p className='p-1'>
                                A sampler platter perfect for sharing, featuring a mix of vegetable and meat samosas,<br />
                                aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.
                            </p>
                        </div>

                        <div className='p-1 border-b border-gray-700'>
                            <div className='flex justify-between p-1'>
                                <h1>Variety Tray</h1>
                                <span>$16.99</span>
                            </div>
                            <p className='p-1'>
                                A sampler platter perfect for sharing, featuring a mix of vegetable and meat samosas,<br />
                                aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.
                            </p>
                        </div>

                        <div className='p-1 border-b border-gray-700'>
                            <div className='flex justify-between p-1'>
                                <h1>Variety Tray</h1>
                                <span>$16.99</span>
                            </div>
                            <p className='p-1'>
                                A sampler platter perfect for sharing, featuring a mix of vegetable and meat samosas,<br />
                                aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.
                            </p>
                        </div>

                        <div className='p-1 border-b border-gray-700 mb-36'>
                            <div className='flex justify-between p-1'>
                                <h1>Variety Tray</h1>
                                <span>$16.99</span>
                            </div>
                            <p className='p-1'>
                                A sampler platter perfect for sharing, featuring a mix of vegetable and meat samosas,<br />
                                aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.
                            </p>
                        </div>
                    </div>
                    
                    <div className='text-[#E9DDCC] m-4 p-1  h-16 border border-gray-700 rounded-sm'>
                      <button className='bg-black/85  w-full h-full text-white rounded-sm'>View Full Menu</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='p-12 space-y-3'>
                    <h1 className='font-playfair text-6xl'>
                    <TypingAnimation 
                        text="SIGNATURE DISHES."
                        speed={150}
                    />
                    <br />
                    <TypingAnimation 
                        text="CLASSIC ROOTS."
                        speed={150}
                    />
                    </h1>
                    <p>
                    Every item on our menu reflects decades of tradition — recipes passed <br />
                        down, refined through experience, and thoughtfully adapted for today’s <br />
                        palate. From bold, aromatic curries to delicate tandoori finishes, our dishes <br />
                        are crafted to honor heritage while welcoming every kind of guest — <br />
                        whether it’s your first taste or a family favorite.
                    </p>
                    <div className='text-[#E9DDCC] m- w-44 p-1 w- h-16 border border-gray-700 rounded-md'>
                        <button className='bg-black/85  w-full h-full text-white rounded-md'>Reserve a Table</button>
                    </div>
                </div>

                <div className=''>
                    <img alt="" className='w-[1400px] h-[817px]' src='/images/menu2.png'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu