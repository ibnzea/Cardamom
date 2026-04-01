import React from 'react'

function Contact() {
  const darkMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.811775528236!2d36.811948275755995!3d-1.2870243356285513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6c4f0f09d%3A0xfcea546bb215a4b0!2sNairobi%20Serena%20Hotel!5e0!3m2!1sen!2ske!4v1765130082414!5m2!1sen!2ske&style=feature:all|element:labels|visibility:simplified&style=feature:administrative|visibility:off&style=feature:landscape|color:0x121212&style=feature:poi|visibility:off&style=feature:road|color:0x2a2a2a&style=feature:transit|visibility:off&style=feature:water|color:0x0a0a0a";

  return (
    <section className='bg-[#2e2e2e]'>
      <div className='flex justify-center'>
        <h1 className='font-playfair text-8xl text-[#E9DDCC] mt-48'>
          <span className='ml-12'>WE'D LOVE TO</span> <br />HEAR FROM YOU
        </h1>
      </div>

      <div className='border-t border-amber-100/30 flex mt-12'>
        <div className='w-full border-r border-amber-100/30 flex justify-between items-center p-4'>
          <div>
            <h3 className='font-playfair text-[#E9DDCC] text-xl'>Write us</h3>
            <p className='text-[#E9DDCC] text-4xl font-playfair'>management@amritpalace.com</p>
          </div>
          <div className='w-10 h-10 bg-[#E39A3B] p-2 rounded'>
            <img className='w-full h-full object-cover' src='/images/email.png' alt="Email"/>
          </div>
        </div>
        <div className='w-full flex justify-between items-center gap-[500px] p-6'>
          <div>
            <h3 className='font-playfair text-[#E9DDCC] text-xl'>Call us</h3>
            <p className='text-[#E9DDCC] text-4xl font-playfair'>+1 (352) 873-8500</p>
          </div>
          <div className='w-10 h-10 bg-[#E39A3B] p-2 rounded mr-auto'>
            <img className='w-full h-full object-cover' src='/images/phone.png' alt="Phone"/>
          </div>
        </div>
      </div>

      {/* Third Part */}
      <div className='border-t border-amber-100/30 flex'>
        {/* Left Column - Location & Map */}
        <div className='w-full border-r border-amber-100/30 p-6'>
          <h1 className='text-[#E9DDCC] text-3xl mb-6 font-playfair'>Where we are located</h1>
          
          {/* Custom Dark Styled Google Maps Embed */}
          <div className='relative w-full overflow-hidden rounded-xl shadow-2xl border border-amber-100/20'>
            {/* DARK OVERLAY TO ENSURE DARKNESS */}
            <div className="absolute inset-0 bg-[#1a1a1a]/40 z-10 pointer-events-none rounded-xl mix-blend-multiply"></div>
            
            <iframe 
              src={darkMapUrl}
              width="100%" 
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl filter invert-[85%] hue-rotate-180 brightness-90 contrast-120"
              title="Cardamom Nairobi Location"
            />
            
            {/* Custom Marker Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div className="w-12 h-12 bg-[#E39A3B] rounded-full border-4 border-[#E9DDCC] shadow-lg"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-[#2e2e2e]/90 text-[#E9DDCC] px-3 py-1 rounded-lg text-sm font-playfair border border-amber-100/30">
                    Cardamom
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Location Details - Icons Removed */}
          <div className='mt-8 text-[#E9DDCC] space-y-4'>
            <div>
              <p className='text-xl font-playfair mb-1'>Nairobi Serena Hotel</p>
              <p className='text-amber-100/70'>City Center, Nairobi, Kenya</p>
            </div>
            <div className='text-[#E9DDCC] p-1 w-44 h-16 border border-[#E9DDCC] rounded-lg mt-6'>
              <button className="bg-[#E9DDCC] w-full h-full text-gray-800 rounded-md">
                <a 
                  href="https://maps.google.com/?q=Nairobi+Serena+Hotel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className='w-full p-8'>
          <h1 className='text-[#E9DDCC] text-4xl font-playfair leading-tight'>
            Whether you're booking a table, planning an event, <br />
            or just have a question — our team is here to help.
          </h1>

          <form className='w-full mt-10'>
            <div className='flex gap-12 w-full'>
              <input 
                type='text' 
                className='w-full py-4 bg-transparent text-[#E9DDCC] text-xl border-b border-amber-100/30 focus:outline-none placeholder:text-amber-100/50 duration-300 hover:border-b-[#E9DDCC] focus:border-b-[#E9DDCC]' 
                placeholder='Name (optional)'
              />
              <input 
                type='text' 
                className='w-full py-4 bg-transparent text-[#E9DDCC] text-xl border-b border-amber-100/30 focus:outline-none placeholder:text-amber-100/50 duration-300 hover:border-b-[#E9DDCC] focus:border-b-[#E9DDCC]' 
                placeholder='Last Name*'
              />
            </div>
            <div className='flex gap-12 w-full mt-10'>
              <input 
                type='email' 
                className='w-full py-4 bg-transparent text-[#E9DDCC] text-xl border-b border-amber-100/30 focus:outline-none placeholder:text-amber-100/50 duration-300 hover:border-b-[#E9DDCC] focus:border-b-[#E9DDCC]' 
                placeholder='Email*'
              />
              <input 
                type='tel' 
                className='w-full py-4 bg-transparent text-[#E9DDCC] text-xl border-b border-amber-100/30 focus:outline-none placeholder:text-amber-100/50 duration-300 hover:border-b-[#E9DDCC] focus:border-b-[#E9DDCC]' 
                placeholder='Phone (optional)'
              />
            </div>
            <div className='flex w-full mt-10'>
              <input 
                type='text' 
                className='w-full py-4 bg-transparent text-[#E9DDCC] text-xl border-b border-amber-100/30 focus:outline-none placeholder:text-amber-100/50 duration-300 hover:border-b-[#E9DDCC] focus:border-b-[#E9DDCC]' 
                placeholder='Subject*'
              />
            </div>
            <div className='flex w-full mt-10'>
              <textarea 
                className='w-full py-8 bg-transparent text-[#E9DDCC] text-xl border-b border-amber-100/30 focus:outline-none placeholder:text-amber-100/50 duration-300 hover:border-b-[#E9DDCC] focus:border-b-[#E9DDCC]' 
                placeholder='Message*' 
                rows="4"
              ></textarea>
            </div>
            <div className='text-[#E9DDCC] p-1 w-full h-16 border border-[#E9DDCC] rounded-lg mt-6'>
              <button className='bg-[#E9DDCC] w-full h-full text-gray-800 rounded-md'>Send Message</button>
            </div>
          </form>
        </div>
      </div>

      <div className='h-[850px]'>
        <img src='/images/contact.png' className='w-full h-full object-cover'/>
      </div>
    </section>
  )
}

export default Contact