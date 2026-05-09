"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  // {
  //   src: "https://images.unsplash.com/photo-1542314831-c6a4d27ce66f?q=80&w=2000&auto=format&fit=crop",
  //   alt: "Luxury Hotel Pool",
  //   title: "Welcome to our",
  //   highlight: "luxury",
  //   subtitle: "hotel",
  //   desc: "Experience unparalleled comfort and elegance. Unwind in our premium suites designed for your ultimate relaxation and peace of mind.",
  // },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop",
    alt: "Fine Dining Restaurant",
    title: "Exquisite dining",
    highlight: "world-class",
    subtitle: "restaurant",
    desc: "Savor culinary masterpieces crafted by top chefs. Our restaurant offers a diverse menu featuring global cuisines and local specialties.",
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop",
    alt: "Vibrant Bar",
    title: "Unwind at our",
    highlight: "exclusive",
    subtitle: "bar",
    desc: "Enjoy signature cocktails, premium spirits, and a vibrant atmosphere. The perfect place to relax after a long day or celebrate special moments.",
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000); // Slowed down animation to 10 seconds
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Darker overlay for better contrast */}
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col justify-end h-full pb-16 md:pb-24">
        <div className="flex flex-col items-start text-left max-w-3xl text-cream w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start"
            >
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-lg">
                {heroImages[currentIndex].title} <br />
                <span className="font-bold text-accent tracking-wider uppercase">{heroImages[currentIndex].highlight}</span> {heroImages[currentIndex].subtitle}
              </h1>
              <p className="font-sans text-xs md:text-sm max-w-lg opacity-90 leading-relaxed mb-8 drop-shadow-md">
                {heroImages[currentIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-4 cursor-pointer group"
            >
              <span className="text-xs tracking-widest text-cream uppercase font-semibold">Book Your Stay</span>
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-hover transition-colors shadow-lg">
                <ArrowRight className="text-cream" size={20} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows positioned absolutely at the bottom right */}
        <div className="absolute bottom-16 md:bottom-24 right-6 md:right-12 z-20 flex space-x-4">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/50 bg-white/10 flex items-center justify-center hover:bg-white hover:text-olive transition-colors backdrop-blur-sm text-white"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/50 bg-white/10 flex items-center justify-center hover:bg-white hover:text-olive transition-colors backdrop-blur-sm text-white"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
