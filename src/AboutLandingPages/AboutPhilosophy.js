import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutPhilosophy() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".philosophy-card");
    const lastIndex = cards.length - 1;

    const lastCardTrigger = ScrollTrigger.create({
      trigger: cards[lastIndex],
      start: "center center",
    });

    cards.forEach((card, index) => {
      const isLast = index === lastIndex;

      gsap.fromTo(
        card,
        {
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
        },
        {
          scale: isLast ? 1 : 0.65,
          filter: isLast ? "blur(0px)" : "blur(10px)",
          opacity: isLast ? 1 : 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top top",
            end: () => lastCardTrigger.start,
            pin: true,
            pinSpacing: false,
            scrub: 0.6,
            ease: "none",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center mx-auto mt-56"
    >
      {/* FIXED TITLE */}
      <div className="text-center text-8xl sticky top-0 z-[50] pointer-events-none bg-transparent pb-16">
        <h1>III</h1>
        <p className="font-playfair leading-[1.2]">
          OUR CULINARY <br /> PHILOSOPHY
        </p>
      </div>

      {/* CARD 1 */}
      <div className="philosophy-card mt-16 border border-black/20 rounded-sm w-[450px] h-[540px] flex-shrink-0 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-1 border border-black/10 p-3">
          <span className="text-3xl">1.</span>
        </div>

        <p className="text-[32px] font-playfair leading-[1.45] mb-14 p-3">
          Full Service <br /> Catering
        </p>

        <div className="pt-52 p-3">
          Family recipes and regional classics cooked with respect, not trends.
          We honor origin while keeping flavors clear and honest.
        </div>
      </div>

      {/* CARD 2 */}
      <div className="philosophy-card mt-16 border border-black/20 rounded-sm w-[450px] h-[540px] flex-shrink-0 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-1 border border-black/10 p-3">
          <span className="text-3xl">2.</span>
        </div>

        <p className="text-[32px] font-playfair leading-[1.45] mb-14 p-3">
          Spice, Not Just Heat
        </p>

        <div className="pt-64 p-3">
          Whole spices are toasted and ground in-house, layered for aroma, depth,
          and balance. Heat is optional; harmony is essential.
        </div>
      </div>

      {/* CARD 3 */}
      <div className="philosophy-card mt-16 border border-black/20 rounded-sm w-[450px] h-[540px] flex-shrink-0 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-1 border border-black/10 p-3">
          <span className="text-3xl">3.</span>
        </div>

        <p className="text-[32px] font-playfair leading-[1.45] mb-14 p-3">
          Fire & Time
        </p>

        <div className="pt-64 p-3">
          Tandoor flame, slow braises, and breads made to order. Patience unlocks
          texture, sweetness, and that quiet, lingering finish.
        </div>
      </div>

      {/* CARD 4 */}
      <div className="philosophy-card mt-16 border border-black/20 rounded-sm w-[450px] h-[540px] flex-shrink-0 mb-[40vh] backdrop-blur-sm">
        <div className="flex items-center justify-between mb-1 border border-black/10 p-3">
          <span className="text-3xl">4.</span>
        </div>

        <p className="text-[32px] font-playfair leading-[1.45] mb-14 p-3">
          Sourced with Care
        </p>

        <div className="pt-64 p-3">
          Seasonal produce, responsible meats, local dairy where possible.
          Small-batch masalas, minimal waste, maximum integrity.
        </div>
      </div>
    </section>
  );
}

export default AboutPhilosophy;
