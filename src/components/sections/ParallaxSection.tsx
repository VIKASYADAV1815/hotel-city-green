"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative h-[80vh] w-full overflow-hidden flex items-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[140%] w-full top-[-20%]">
        <img
          src="https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=2000&auto=format&fit=crop"
          alt="Room Sanctuary"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-2xl text-cream">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl mb-6 leading-tight"
          >
            Our rooms are your own <br />
            <span className="italic font-light">personal sanctuary</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm md:text-base max-w-lg opacity-90 leading-relaxed mb-12"
          >
            Every detail is designed with your ultimate comfort in mind. From plush bedding to modern amenities, our suites offer the perfect retreat after a day of exploring the city or enjoying our renowned dining and bar venues.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center space-x-4 cursor-pointer group"
          >
            <span className="text-xs tracking-widest uppercase font-semibold">Find A Room</span>
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-hover transition-colors">
              <ArrowRight className="text-cream" size={20} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
