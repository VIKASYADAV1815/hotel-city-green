"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-[90%] md:w-[80%] aspect-4/3 md:aspect-square overflow-hidden shadow-2xl rounded-tr-[4rem] rounded-bl-[4rem]">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop"
                alt="Woman relaxing"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute top-[60%] right-0 -translate-y-1/2 translate-x-1/4 md:translate-x-1/4 w-40 md:w-64 z-20 group">
              <div className="absolute inset-0 border-2 border-accent translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 z-0" />
              <img 
                src="/Gemini_Generated_Image_v2ih6nv2ih6nv2ih.png" 
                alt="Hotel Architecture" 
                className="w-full h-auto object-cover relative z-10 shadow-2xl rounded-none"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col justify-center max-w-xl"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-olive mb-8 leading-tight italic">
              Welcome to our luxurious Hotel, featuring a world-class restaurant and an exclusive bar, located in the heart of the city.
            </h2>
            <p className="text-olive/70 text-sm md:text-base leading-relaxed mb-8">
              Experience the perfect blend of comfort and elegance. Whether you are here for a relaxing getaway, a fine dining experience, or signature cocktails at our vibrant bar, we have everything you need. Our dedicated staff is committed to providing you with exceptional service and making your stay unforgettable.
            </p>
            <div className="mb-12">
              {/* Signature mock */}
              <span className="font-serif text-3xl italic text-olive opacity-80">Hotel City Green</span>
            </div>
            
            <div className="border-t border-olive/20 pt-8">
              <button className="text-xs tracking-widest uppercase font-semibold text-olive hover:text-accent transition-colors">
                Read More
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
