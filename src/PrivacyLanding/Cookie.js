import React from 'react'
import { useState, useRef, useEffect } from 'react'

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
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [text, speed, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
};

function Cookie() {
  return (
    <div>
      <div>
        <h1 className='font-playfair mt-64 ml-8 text-8xl'>COOKIE POLICY</h1>
      </div>

      <div>
        <div className='flex ml-8 mt-72 py-5 border-b border-gray-700/30'>
          <h1 className='w-full'>Last updated: 03.09.2025</h1>
          <h1 className='w-full'>Published: 03.09.2025</h1>
        </div>
      </div>

      <div className='flex ml-8 mt-4'>
        {/* LEFT SIDE – sticky navigation */}
        <div className='w-full lg:sticky lg:top-20 lg:self-start'>
          <p>WHAT ARE COOKIES?</p>
          <p>TYPES OF COOKIES WE USE</p>
          <p>WHY WE USE COOKIES</p>
          <p>MANAGING COOKIES</p>
          <p>COOKIES CONSENT</p>
          <p>THIRD-PARTY COOKIES</p>
          <p>UPDATES TO THIS POLICY</p>
          <p>CONTACT US</p>
        </div>

        {/* RIGHT SIDE – content */}
        <div className='w-full'>
          <h1 className='font-playfair text-4xl'>
            This Cookie Policy explains how Amrit Palace ("Company", "we", "our", or "us") uses cookies and similar technologies when you visit https://amritpalace.com (the "Site").
          </h1>

          {/* First Section */}
          <div className='mt-16'>
            <span className='text-4xl'>01.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="What are cookies?"
                speed={220}
              />
            </h1>
            <p className='mt-6'>Cookies are small text files stored on your device when you visit a website. They help websites remember your actions and preferences, making your browsing experience smoother and more personalized.</p>
            
            <p className='mt-6'>Cookies may be:</p>
            <div className='ml-3'>
              <span>&bull; <strong>Session Cookies:</strong> deleted when you close your browser.</span><br />
              <span>&bull; <strong>Persistent Cookies:</strong> remain on your device until they expire or are deleted.</span><br />
              <span>&bull; <strong>First-Party Cookies:</strong> set by the website you are visiting.</span><br />
              <span>&bull; <strong>Third-Party Cookies:</strong> set by external providers (e.g., analytics, advertising).</span><br />
            </div>
          </div>

        {/* Second Section */}
          <div className='mt-16'>
            <span className='text-4xl'>02.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Types of cookies we use"
                speed={220}
              />
            </h1>
            
            <h2 className='mt-6 mb-3 text-4xl font-playfair'>Essential cookies</h2>
            <div className='ml-3'>
              <span>&bull; Required for the Site to function properly.</span><br />
              <span>&bull; Enable core features such as navigation, shopping cart, secure login, and checkout.</span><br />
              <span>&bull; Without these, services you request cannot be provided.</span><br />
            </div>

            <h2 className='mt-6 mb-3 text-4xl font-playfair'>Performance and analytics cookies</h2>
            <div className='ml-3'>
              <span>&bull; Collect information about how visitors use our Site (pages visited, time spent, errors).</span><br />
              <span>&bull; Help us improve performance and usability.</span><br />
              <span>&bull; Example: Google Analytics.</span><br />
            </div>

            <h2 className='mt-6 mb-3 text-4xl font-playfair'>Functional cookies</h2>
            <div className='ml-3'>
              <span>&bull; Remember your preferences (e.g., language, location, delivery settings).</span><br />
              <span>&bull; Enhance personalization of your experience.</span><br />
            </div>

            <h2 className='mt-6 mb-3 text-4xl font-playfair'>Advertising and marketing cookies</h2>
            <div className='ml-3'>
              <span>&bull; Track browsing habits across websites to deliver relevant ads.</span><br />
              <span>&bull; Measure effectiveness of campaigns and promotions.</span><br />
              <span>&bull; May be set by third-party advertising networks.</span><br />
            </div>
          </div>

            {/* Third Section */}
          <div className='mt-16'>
            <span className='text-4xl'>03.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Why we use cookies"
                speed={220}
              />
            </h1>
            <p className='mt-6'>We use cookies to:</p>
            <div className='ml-3'>
              <span>&bull; Provide a secure and reliable shopping experience.</span><br />
              <span>&bull; Save your preferences for future visits.</span><br />
              <span>&bull; Analyze traffic and improve Site performance.</span><br />
              <span>&bull; Deliver personalized offers, discounts, and marketing communications (if you consent).</span><br />
            </div>
          </div>

          {/* Fourth Section */}
          <div className='mt-16'>
            <span className='text-4xl'>04.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Managing cookies"
                speed={220}
              />
            </h1>
            <p className='mt-6'>You can control cookies through your browser settings. Options typically include:</p>
            <div className='ml-3'>
              <span>&bull; Accept all cookies.</span><br />
              <span>&bull; Block all cookies.</span><br />
              <span>&bull; Delete cookies when closing the browser.</span><br />
              <span>&bull; Set exceptions for trusted sites.</span><br />
            </div>
            <p className='mt-6'>If you disable cookies, some features of the Site (e.g., online ordering, reservations, cart functionality) may not work properly.</p>
          </div>

             {/* Fifth Section */}
          <div className='mt-16'>
            <span className='text-4xl'>05.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Cookie consent"
                speed={220}
              />
            </h1>
            <p className='mt-6'>When you first visit our Site, you will see a cookie banner. By continuing to browse or clicking "Accept", you consent to the use of cookies as described in this Policy.</p>
            <p className='mt-6'>You may withdraw or update your consent at any time by adjusting your browser settings or cookie preferences.</p>
          </div>

          {/* Sixth Section */}
          <div className='mt-16'>
            <span className='text-4xl'>06.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Third-party cookies"
                speed={220}
              />
            </h1>
            <p className='mt-6'>We may allow trusted partners to place cookies on your device, such as:</p>
            <div className='ml-3'>
              <span>&bull; Analytics providers (e.g., Google Analytics).</span><br />
              <span>&bull; Payment processors (for fraud prevention and transaction security).</span><br />
              <span>&bull; Advertising networks (for personalized marketing).</span><br />
            </div>
            <p className='mt-6'>These third parties have their own privacy and cookie policies.</p>
          </div>

          {/* Seventh Section */}
          <div className='mt-16'>
            <span className='text-4xl'>07.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Updates to this policy"
                speed={220}
              />
            </h1>
            <p className='mt-6'>We may update this Cookie Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date will be revised.</p>
          </div>

          {/* Eighth Section */}
          <div className='mt-16'>
            <span className='text-4xl'>08.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Contact us"
                speed={220}
              />
            </h1>
            <p className='mt-6 mb-3'>If you have questions or concerns about this Cookie Policy, please contact us:</p>
            
            <div className='ml-3'>
              <span>&bull; Email: management@amritpalace.com</span><br />
              <span>&bull; Website: www.amritpalace.com</span><br />
              <span>&bull; Address: 3415 SW College Rd Ocala, FL 34474</span><br />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cookie