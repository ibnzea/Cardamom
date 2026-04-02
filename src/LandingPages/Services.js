import React, { useRef, useEffect, useState } from 'react';

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
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [text, speed, hasAnimated]);

  return <span ref={ref} className={className}>{displayText}</span>;
};


function Services() {
  return (
    <section className='bg-[#C3B7A4] overflow-hidden'>

      {/* MAIN HEADER BOX – now centered & sized properly */}
      <div className="relative w-full max-w-[1600px] h-[520px] mx-auto pt-10">

        {/* Main Title */}
        <div className="absolute left-1/2 top-[20px] -translate-x-1/2 text-center">
          <h1 className="font-playfair text-[85px] leading-[80px] text-gray-800">
            <TypingAnimation 
              text="CATERING"
              speed={220}
            />
            <br />
            <TypingAnimation 
              text="THE AMRIT WAY"
              speed={150}
            />
          </h1>
        </div>

        {/* Left subtitle (proper position) */}
        <div className="absolute left-0 top-[130px] text-gray-800 text-[18px] tracking-wide pl-[260px]">
          <TypingAnimation 
            text="EXCEPTIONAL FOOD"
            speed={70}
          />
        </div>

        {/* Right subtitle (proper position) */}
        <div className="absolute -left-[-1150px] top-[130px] text-gray-800 text-[18px] tracking-wide pr-[260px]">
          <TypingAnimation 
            text="ANYWHERE"
            speed={70}
          />
        </div>

        {/* Description Paragraph */}
        <div className="absolute left-1/2 top-[200px] -translate-x-1/2 text-center w-[900px]">
          <p className="text-gray-800 text-[17px] leading-relaxed font-bold">
            Whether you're hosting a wedding, corporate gathering, or private celebration,<br />
            our catering brings the warmth of Indian hospitality straight to your table. From<br />
            full-service spreads to curated menus, Cardamom delivers flavor, style, and care<br />
            — wherever the occasion takes you.
          </p>
        </div>

      </div>

      {/* IMAGE ROW – same layout as screenshot */}
      <div className='flex justify-center gap-4 px-4'>
        <div className="w-[33%]">
            <img alt="" src='/images/service1.png' className='w-full h-[420px] object-cover' />
            <div className="mt-4">
                <h1 className="text-xl font-semibold">Buffet Displays</h1>
                <p>
                    Elegant and abundant setups that showcase our dishes beautifully<br />
                    while making service smooth and efficient.
                </p>
            </div>
        </div>

        <div className="w-[33%]">
            <img alt="" src='/images/service2.png' className='w-full h-[420px] object-cover' />
            <div className="mt-4">
                <h1 className="text-xl font-semibold">Professional Service Team</h1>
                <p>
                    Our experienced staff provides courteous, attentive service so your <br />
                    event runs seamlessly.
                </p>
            </div>
        </div>

        <div className="w-[33%]">
            <img alt="" src='/images/service3.png' className='w-full h-[420px] object-cover' />
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
}

export default Services;
