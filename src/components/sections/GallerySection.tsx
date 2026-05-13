"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue
} from "framer-motion";

const images = [
  "/gallery/g1 (1).png", "/gallery/g1 (2).png", "/gallery/g1 (3).png", 
  "/gallery/g1 (4).png", "/gallery/g1 (6).png", "/gallery/g1 (7).png",
];

function ParqueeRow({ items, baseVelocity = 100, direction = 1 }: { items: string[], baseVelocity?: number, direction?: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  /**
   * Custom Wrap Function:
   * This ensures the x-position stays between -20% and -45%
   * creating a seamless jump-back for the infinite loop.
   */
  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = direction * baseVelocity * (delta / 1000);

    // Speed up based on scroll velocity
    moveBy += direction * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex overflow-hidden whitespace-nowrap flex-nowrap border-b border-olive/5">
      <motion.div className="flex flex-nowrap whitespace-nowrap" style={{ x }}>
        {[...items, ...items, ...items, ...items].map((src, i) => (
          <div key={i} className="w-[250px] md:w-[400px] aspect-video shrink-0 overflow-hidden">
            <img 
              src={src} 
              alt="Gallery" 
              className="w-full h-full object-cover brightness-110 saturate-[1.1] transition-transform duration-500 hover:scale-105" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function GallerySection() {
  return (
    <section className="bg-cream py-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="font-serif text-5xl md:text-7xl text-olive leading-tight">
          A Glimpse of <span className="italic font-light text-accent">Paradise</span>
        </h2>
      </div>

      <div className="flex flex-col gap-0 border-t border-olive/10">
        <ParqueeRow items={images} baseVelocity={-1} direction={1} />
        <ParqueeRow items={images} baseVelocity={1} direction={-1} />
        <ParqueeRow items={images} baseVelocity={-0.8} direction={1} />
      </div>
    </section>
  );
}