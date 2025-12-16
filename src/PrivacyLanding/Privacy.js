import React from 'react'
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

function Privacy() {
  return (
    <div>
      <div>
        <h1 className='font-playfair mt-64 ml-8 text-8xl'>PRIVACY POLICY</h1>
      </div>

      <div>
        <div className='flex ml-8 mt-72 py-5 border-b border-gray-700/30'>
          <h1 className='w-full'>Last updated: 03.09.2025</h1>
          <h1 className='w-full'>Published: 03.09.2025</h1>
        </div>
      </div>

      <div className='flex ml-8 mt-4'>

        {/* LEFT SIDE – now sticky */}
        <div className='w-full lg:sticky lg:top-20 lg:self-start'>
          <p>INFORMATION WE COLLECT</p>
          <p>HOW WE USE YOUR INFORMATION</p>
          <p>SHARING OF INFORMATION</p>
          <p>DATA RETENTION</p>
          <p>YOUR PRIVACY RIGHTS</p>
          <p>COOKIES AND TRACKINGS</p>
          <p>SECURITY</p>
          <p>CHILDREN'S PRIVACY</p>
          <p>THIRD-PARTY LINKS</p>
          <p>INTERNATIONAL DATA TRANSFERS</p>
          <p>CONTACT US</p>
        </div>

        {/* RIGHT SIDE – unchanged, scrolls normally */}
        <div className='w-full'>
          <h1 className='font-playfair text-4xl '>
            Amrit Palace (“Company”, “we”, “our”, or “us”) respects <br />
            your privacy and is committed to protecting your <br />
            personal data. This Privacy Policy explains how we <br />
            collect, use, store, and safeguard your information <br />
            when you visit our restaurant, use our website <br />
            https://amritpalace.com, or purchase our products and services.
          </h1>

          {/* First Policy */}
          <div className='mt-16'>
            <span className='text-4xl'>01.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Infromation we collect"
                speed={220}
              />
            </h1>
            <p className='mt-6'>We may collect the following categories of information:</p>

            <h2 className='mt-6 mb-3 text-4xl font-playfair'>Personal infromation</h2>
            <span>&bull; Name, email address, and phone number.</span><br />
            <span>&bull; Billing and shipping address.</span><br />
            <span>&bull; Payment information (processed securely by third-party providers, we do not store full payment details).</span><br />
            <span>&bull; Information provided during reservations, catering orders, or event bookings.</span>

            <h2 className='mt-6 mb-3 text-4xl font-playfair'>Order and transaction data</h2>
            <span>&bull; Items purchased (food, beverages, products).</span><br />
            <span>&bull; Delivery preferences.</span><br />
            <span>&bull; Order history.</span><br />

            <h2 className='mt-6 mb-3 text-4xl font-playfair'>Technical and usage data</h2>
            <div className='ml-3'>
              <span>&bull; IP address, browser type, operating system, and device information.</span><br />
              <span>&bull; How you interact with our website (pages visited, clicks, time spent).</span><br />
              <span>&bull; Cookies and similar tracking technologies.</span><br />
            </div>

            <h2 className='mt-6 mb-3 text-4xl font-playfair'>Marketing and communication data</h2>
            <div className='ml-3'>
              <span>&bull; Your preferences for receiving promotional emails, SMS, or newsletters.</span><br />
              <span>&bull; Responses to surveys, feedback, or reviews.</span><br />
            </div>
          </div>

          {/* Second Policy */}
          <div className='mt-16'>
            <span className='text-4xl'>02.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="How we use your information"
                speed={220}
              />
            </h1>
            <p className='mt-6'>We use your information to:</p>
            <div className='ml-3'>
              <span>&bull; Process, confirm, and deliver your food orders or online purchases.</span><br />
              <span>&bull; Manage table reservations, catering requests, and event bookings.</span><br />
              <span>&bull; Handle payments and issue invoices.</span><br />
              <span>&bull; Communicate with you about orders, deliveries, or support requests.</span><br />
              <span>&bull; Provide loyalty programs, gift cards, and promotional offers (with your consent).</span><br />
              <span>&bull; Improve website functionality, user experience, and customer service.</span><br />
              <span>&bull; Comply with applicable legal, tax, and regulatory requirements.</span><br />
            </div>
          </div>

          {/* Third Policy */}
          <div className='mt-16'>
            <span className='text-4xl'>03.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Sharing of information"
                speed={220}
              />
            </h1>
            <p className='mt-6'>We may share your data with trusted third parties, including:</p>

            <div className='ml-3'>
              <span>&bull; Payment processors.</span><br />
              <span>&bull; Delivery and logistics providers.</span><br />
              <span>&bull; IT and hosting providers.</span><br />
              <span>&bull; Marketing platforms.</span><br />
              <span>&bull; Legal or regulatory authorities.</span><br />
            </div>

            <p className='mt-6'>We do not sell or rent your personal data to third parties.</p>
          </div>

          {/* Fourth Policy */}
          <div className='mt-16'>
            <span className='text-4xl'>04.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Data retention"
                speed={220}
              />
            </h1>
            <p className='mt-6'>We keep your personal data only as long as necessary to:</p>

            <div className='ml-3'>
              <span>&bull; <strong>Fulfill your orders and provide services.</strong></span><br />
              <span>&bull; <strong>Meet accounting, tax, or legal obligations.</strong></span><br />
              <span>&bull; <strong>Resolve disputes and enforce agreements.</strong></span><br />
            </div>

            <p className='mt-6'>After this period, your data will be securely deleted or anonymized.</p>
          </div>

          {/* Fifth Policy */}
          <div className='mt-16'>
            <span className='text-4xl'>05.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Your privacy rights"
                speed={220}
              />
            </h1>
            <p className='mt-6'>Depending on your location, you may have the following rights:</p>

            <div className='ml-3'>
              <span>&bull; <strong>Access:</strong> request a copy of the data we hold about you.</span><br />
              <span>&bull; <strong>Correction:</strong> update or correct inaccurate personal data.</span><br />
              <span>&bull; <strong>Deletion:</strong> request that we delete your data when no longer needed.</span><br />
              <span>&bull; <strong>Restriction:</strong> limit how we process your information.</span><br />
              <span>&bull; <strong>Portability:</strong> receive your data in a structured, machine-readable format.</span><br />
              <span>&bull; <strong>Opt-Out:</strong> unsubscribe from marketing emails or SMS at any time.</span><br />
            </div>

            <p className='mt-6'>To exercise your rights, contact us at info@amritpalace.com</p>
          </div>

                    {/* Sixth Policy */}
          <div className='mt-16'>
            <span className='text-4xl'>06.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Cookies and tracking"
                speed={220}
              />
            </h1>
            <p className='mt-6'>Our website uses cookies and similar technologies to:</p>

            <div className='ml-3'>
              <span>&bull; Enable core site functionality (shopping cart, reservations).</span><br />
              <span>&bull; Analyze website usage and improve performance.</span><br />
              <span>&bull; Provide personalized recommendations and offers.</span><br />
            </div>

            <p className='mt-6'>You can control cookies through your browser settings. Please note that disabling cookies may affect website functionality.</p>
          </div>

          {/* Seventh Policy */}
          <div className='mt-16'>
            <span className='text-4xl'>07.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Security"
                speed={220}
              />
            </h1>
            <p className='mt-6'>
              We implement appropriate technical and organizational measures to protect your data, including encryption, secure servers, and access controls. However, no system is 100% secure, and we cannot guarantee absolute protection.
            </p>
          </div>

          {/* Eighth Policy */}
          <div className='mt-16'>
            <span className='text-4xl'>08.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Children's privacy"
                speed={220}
              />
            </h1>
            <p className='mt-6'>
              Our services are not directed to children under 13 (or the age of majority in your country). We do not knowingly collect personal data from children. If you believe a child has provided us with data, please contact us and we will delete it.
            </p>
          </div>

                    {/* Ninth Policy */}
          <div className='mt-16'>
            <span className='text-4xl'>09.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Third-party links"
                speed={220}
              />
            </h1>
            <p className='mt-6'>
              Our website may include links to third-party websites (e.g., delivery partners, payment providers). We are not responsible for their privacy practices. Please review their policies before sharing personal information.
            </p>
          </div>

          {/* Tenth Policy */}
          <div className='mt-16'>
            <span className='text-4xl'>10.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="International data transfers"
                speed={220}
              />
            </h1>
            <p className='mt-6'>
              If you are accessing our website from outside the US, your information may be transferred and processed in countries where data protection laws may differ. We ensure adequate safeguards are in place for such transfers.
            </p>
          </div>

          {/* Eleventh Policy */}
          <div className='mt-16'>
            <span className='text-4xl'>11.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Updates to this policy"
                speed={220}
              />
            </h1>
            <p className='mt-6'>
              We may update this Privacy Policy from time to time. The "Last Updated" date at the top indicates the latest version. Changes will take effect once posted on our website.
            </p>
          </div>

          {/* Twelfth Policy */}
          <div className='mt-16'>
            <span className='text-4xl'>12.</span>
            <h1 className='font-playfair text-6xl mt-5'>
              <TypingAnimation 
                text="Contact us"
                speed={220}
              />
            </h1>
            <p className='mt-6 mb-3'>If you have questions or concerns about this Privacy Policy, please contact us:</p>

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

export default Privacy
