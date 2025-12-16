import React from 'react';
import './CardCarousel.css'; 

const CARD_DATA = [
  // Card data for initial scattered look (zIndex, initial rotation/tilt)
  { id: 1, value: '$25', color: 'bg-white', amountColor: 'text-gray-900', zIndex: 5, initialRotate: 20, initialTranslate: '-50px', initialTilt: 'rotateY(10deg)' },
  { id: 2, value: '$50', color: 'bg-amber-800', amountColor: 'text-white', zIndex: 4, initialRotate: 80, initialTranslate: '40px', initialTilt: 'rotateX(-5deg)' },
  { id: 3, value: '$100', color: 'bg-gray-900', amountColor: 'text-white', zIndex: 3, initialRotate: 150, initialTranslate: '10px', initialTilt: 'rotateY(-15deg)' },
  { id: 4, value: '$200', color: 'bg-lime-800', amountColor: 'text-white', zIndex: 2, initialRotate: 240, initialTranslate: '-30px', initialTilt: 'rotateX(5deg)' },
  { id: 5, value: '$500', color: 'bg-gray-400', amountColor: 'text-gray-900', zIndex: 1, initialRotate: 300, initialTranslate: '20px', initialTilt: 'rotateY(0deg)' },
];

const CardItem = ({ card }) => {
  return (
    <div
      className={`absolute flex items-center justify-center 
                  transform ${card.color} rounded-lg shadow-2xl`}
      style={{
        // 1. Set Size and Overlap (zIndex)
        width: '280px', 
        height: '180px',
        zIndex: card.zIndex,

        // 2. Initial Scrambled Position/Tilt (The "shuffled" look)
        transform: `
          rotateZ(${card.initialRotate}deg) 
          translate(calc(100% + ${card.initialTranslate}), 0) 
          ${card.initialTilt} 
          scale(0.95)`,
      }}
    >
      {/* Card Content (Same visual structure) */}
      <div className="p-4 w-full h-full flex flex-col justify-between">
        {/* ... Card content here ... */}
        <span className={`text-lg font-serif ${card.amountColor} self-end`}>{card.value}</span>
        <div className="flex-grow flex flex-col items-center justify-center">
            <h3 className={`text-4xl font-serif tracking-widest ${card.amountColor} transform rotate-90`}>
              E-GIFT CARD
            </h3>
        </div>
      </div>
    </div>
  );
};

export default function GiftCardCarousel() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-stone-200 overflow-hidden">
      {/* Outer container for 3D perspective */}
      <div 
        className="relative w-[800px] h-[800px] flex items-center justify-center" 
        style={{ perspective: '1200px' }} 
      >
        {/* NEW WRAPPER: This element handles the simultaneous rotation and in/out motion */}
        <div className="rotating-wrapper relative w-full h-full flex items-center justify-center">
            {CARD_DATA.map((card) => (
              <CardItem key={card.id} card={card} />
            ))}
        </div>
      </div>
    </div>
  );
}