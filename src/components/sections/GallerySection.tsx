"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1542314831-c6a4d27ce66f?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury Pool",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=800&auto=format&fit=crop",
    alt: "Premium Room",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
    alt: "Hotel Lobby",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
    alt: "Spa Area",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] text-accent uppercase font-bold mb-4 block"
            >
              Visual Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-olive"
            >
              A Glimpse of <span className="text-accent italic font-light">Paradise</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center space-x-4 cursor-pointer group"
          >
            <span className="text-xs tracking-[0.2em] text-olive uppercase font-bold group-hover:text-accent transition-colors border-b border-olive pb-1 group-hover:border-accent">View Full Gallery</span>
            <div className="w-10 h-10 rounded-full border border-olive/20 flex items-center justify-center group-hover:border-accent transition-colors shadow-sm bg-white">
              <ArrowRight className="text-olive group-hover:text-accent transition-colors" size={16} />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${image.span}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
