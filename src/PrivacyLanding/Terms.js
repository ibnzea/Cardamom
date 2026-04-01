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

function Terms() {
  return (
    <div>
      <div>
        <h1 className='font-playfair mt-64 ml-8 text-8xl'>TERMS AND CONDITIONS</h1>
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
          <p>ELIGIBILITY AND USE OF THE SITE</p>
          <p>RESTRATIONS AND BOOKINGS</p>
          <p>ORDERS AND PROGRESS</p>
          <p>PRICING AND PAYMENT</p>
          <p>DELIVERY AND PICKUP</p>
          <p>RETURNS, REFUNDS, AND CANCELLATIONS</p>
          <p>ALCOHOLIC BEVERAGES</p>
          <p>ALLERGIES AND DIETARY INFORMATION</p>
          <p>GIFT CARDS AND LOYALTY PROGRAMS</p>
          <p>INTELLECTUAL PROPERTY</p>
          <p>LIMITATION OF LIABILITY</p>
          <p>GOVERNING LAW</p>
          <p>CHANGES TO TERMS</p>
          <p>CONTACT US</p>
        </div>

        {/* RIGHT SIDE – content */}
        <div className='w-full'>
          <h1 className='font-playfair text-4xl'>
            Welcome to amritpalace.com (the "Site"), operated by Cardamom ("Company", "we", "our", or "us"). By accessing or using this Site, placing an order, or visiting our restaurant, you agree to these Terms and Conditions ("Terms"). Please read them carefully.
          </h1>

          {/* First Section */}
          <div className='mt-16'>
            <span className='text-4xl'>01.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Eligibility and use of the site"
                speed={220}
              />
            </h1>
            <div className='ml-3 mt-6'>
              <span>&bull; You must be at least 18 years old to make purchases or reservations.</span><br />
              <span>&bull; You agree to use the Site only for lawful purposes and in compliance with these Terms.</span><br />
              <span>&bull; We reserve the right to refuse service, cancel orders, or deny access at our discretion.</span><br />
            </div>
          </div>

            {/* Second Section */}
          <div className='mt-16'>
            <span className='text-4xl'>02.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Reservations and bookings"
                speed={220}
              />
            </h1>
            <div className='ml-3 mt-6'>
              <span>&bull; Reservations are subject to availability.</span><br />
              <span>&bull; We may require a deposit for large groups or events.</span><br />
              <span>&bull; If you are late by more than [X minutes], your reservation may be released.</span><br />
            </div>
          </div>

          {/* Third Section */}
          <div className='mt-16'>
            <span className='text-4xl'>03.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Orders and purchases"
                speed={220}
              />
            </h1>
            <div className='ml-3 mt-6'>
              <span>&bull; By placing an order through the Site, you agree to provide accurate and complete information.</span><br />
              <span>&bull; All orders are subject to acceptance and availability.</span><br />
              <span>&bull; We reserve the right to limit quantities or refuse any order.</span><br />
              <span>&bull; Images of products or menu items on the Site are for illustrative purposes only; actual items may vary.</span><br />
            </div>
          </div>

            {/* Fourth Section */}
          <div className='mt-16'>
            <span className='text-4xl'>04.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Pricing and payment"
                speed={220}
              />
            </h1>
            <div className='ml-3 mt-6'>
              <span>&bull; All prices are listed in [currency] and include applicable taxes unless stated otherwise.</span><br />
              <span>&bull; We accept major credit cards and online payment methods through secure processors.</span><br />
              <span>&bull; Payment must be received before an order is processed or confirmed.</span><br />
            </div>
          </div>

          {/* Fifth Section */}
          <div className='mt-16'>
            <span className='text-4xl'>05.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Delivery and pickup"
                speed={220}
              />
            </h1>
            <div className='ml-3 mt-6'>
              <span>&bull; Delivery times are estimates and may vary due to traffic, weather, or other factors.</span><br />
              <span>&bull; We are not liable for delays outside our control.</span><br />
              <span>&bull; You are responsible for providing an accurate delivery address.</span><br />
              <span>&bull; Once delivered or picked up, the responsibility for the order passes to you.</span><br />
            </div>
          </div>

            {/* Sixth Section */}
          <div className='mt-16'>
            <span className='text-4xl'>06.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Returns, refunds, and cancellations"
                speed={220}
              />
            </h1>
            <div className='ml-3 mt-6'>
              <span>&bull; Due to the perishable nature of food, we do not accept returns.</span><br />
              <span>&bull; If an item is incorrect, missing, or unsatisfactory, please contact us immediately.</span><br />
              <span>&bull; Refunds, if applicable, will be processed back to the original payment method.</span><br />
              <span>&bull; For physical merchandise (non-food products), returns may be accepted within [14 days] if unused and in original packaging.</span><br />
            </div>
          </div>

          {/* Seventh Section */}
          <div className='mt-16'>
            <span className='text-4xl'>07.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Alcoholic beverages"
                speed={220}
              />
            </h1>
            <div className='ml-3 mt-6'>
              <span>&bull; Alcohol sales comply with applicable local laws.</span><br />
              <span>&bull; You must be of legal drinking age to purchase alcohol, and ID may be required upon delivery or pickup.</span><br />
              <span>&bull; We reserve the right to refuse alcohol service if age cannot be verified.</span><br />
            </div>
          </div>

                    {/* Eighth Section */}
          <div className='mt-16'>
            <span className='text-4xl'>08.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Allergens and dietary information"
                speed={220}
              />
            </h1>
            <div className='ml-3 mt-6'>
              <span>&bull; We strive to provide accurate allergen information, but we cannot guarantee that any item is free from allergens.</span><br />
              <span>&bull; Customers with allergies must inform staff before ordering.</span><br />
            </div>
          </div>

          {/* Ninth Section */}
          <div className='mt-16'>
            <span className='text-4xl'>09.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Gift cards and loyalty programs"
                speed={220}
              />
            </h1>
            <div className='ml-3 mt-6'>
              <span>&bull; Gift cards are non-refundable and valid only for purchases at Cardamom.</span><br />
              <span>&bull; Loyalty or promotional programs may be subject to additional terms.</span><br />
            </div>
          </div>

                    {/* Tenth Section */}
          <div className='mt-16'>
            <span className='text-4xl'>10.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Intellectual property"
                speed={220}
              />
            </h1>
            <div className='ml-3 mt-6'>
              <span>&bull; All content on the Site (text, images, logos, menus, designs) is the property of Cardamom.</span><br />
              <span>&bull; You may not copy, distribute, or use any content without prior written permission.</span><br />
            </div>
          </div>

          {/* Eleventh Section */}
          <div className='mt-16'>
            <span className='text-4xl'>11.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Limitation of liability"
                speed={220}
              />
            </h1>
            <div className='ml-3 mt-6'>
              <span>&bull; The Site and services are provided "as is" without warranties of any kind.</span><br />
              <span>&bull; To the maximum extent permitted by law, we are not liable for damages.</span><br />
            </div>
          </div>

          {/* Twelfth Section */}
          <div className='mt-16'>
            <span className='text-4xl'>12.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Governing law"
                speed={220}
              />
            </h1>
            <p className='mt-6'>These Terms are governed by the laws of United States of America. Any disputes shall be resolved in the courts of USA.</p>
          </div>

                    {/* Thirteenth Section */}
          <div className='mt-16'>
            <span className='text-4xl'>13.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Changes to terms"
                speed={220}
              />
            </h1>
            <p className='mt-6'>We may update these Terms at any time. Updates will be posted on this page, and continued use of the Site means acceptance of revised Terms.</p>
          </div>

          {/* Fourteenth Section */}
          <div className='mt-16'>
            <span className='text-4xl'>14.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Contact us"
                speed={220}
              />
            </h1>
            <p className='mt-6 mb-3'>If you have questions or concerns about these Terms and Conditions, please contact us:</p>
            
            <div className='ml-3'>
              <span>&bull; Email: management@amritpalace.com</span><br />
              <span>&bull; Website: www.amritpalace.com</span><br />
              <span>&bull; Address: 3415 SW College Rd Ocala, FL 34474</span><br />
            </div>
          </div>

          {/* Add more sections as you provide content */}
        </div>
      </div>
    </div>
  )
}

export default Terms