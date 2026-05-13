"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Info } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Double room",
    price: "₹4,000 - ₹7,000 / night",
    image: "/gallery/g1 (5).png",
    badge: "Most Popular",
    tariffs: [
      { plan: "European", price: "₹4000/-" },
      { plan: "Continental", price: "₹5000/-" },
      { plan: "Modified American", price: "₹6000/-" },
      { plan: "American", price: "₹7000/-" },
    ]
  },
  {
    id: 2,
    name: "Single room",
    price: "₹3,500 - ₹6,000 / night",
    image: "/gallery/g1 (9).png",
    tariffs: [
      { plan: "European", price: "₹3500/-" },
      { plan: "Continental", price: "₹4000/-" },
      { plan: "Modified American", price: "₹5000/-" },
      { plan: "American", price: "₹6000/-" },
    ]
  }
];

const testimonials = [
  {
    id: 1,
    text: "The stay was absolutely wonderful! The room was incredibly spacious and clean, and the staff went above and beyond to make our anniversary special. The restaurant food was also top-notch.",
    author: "David & Sarah",
    source: "TripAdvisor"
  },
  {
    id: 2,
    text: "An unforgettable experience. The bar had some of the best cocktails I've ever tasted, and the bed was so comfortable. I highly recommend this place for anyone looking to relax and unwind.",
    author: "Emily R.",
    source: "Booking.com"
  },
  {
    id: 3,
    text: "Perfect location and exceptional service. We loved waking up to the beautiful views and enjoying the delicious breakfast. We will definitely be coming back next year!",
    author: "Michael & Jessica",
    source: "Google Reviews"
  }
];

export default function RoomsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="rooms" className="bg-cream py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-8 border-b border-olive/20 pb-8">
          <h2 className="font-serif text-4xl md:text-5xl text-olive">
            Rooms <span className="italic font-light">& Suites</span>
          </h2>
          <div className="flex items-center space-x-4 cursor-pointer group">
            <span className="text-xs tracking-widest text-accent uppercase font-semibold">View All Rooms</span>
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-hover transition-colors">
              <ArrowRight className="text-cream" size={16} />
            </div>
          </div>
        </div>

        <div className="mb-16 bg-olive-dark text-cream p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="flex-1">
              <h3 className="font-serif text-2xl md:text-3xl mb-6 text-cream flex items-center gap-3">
                <Info className="text-accent" size={28} />
                Good to Know
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-cream/80">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <p>Extra bed available at <strong className="text-white">₹800/-</strong>. Taxes as applicable.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <p>Children below 5 years stay complimentary. All prices in INR.</p>
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <p>Please contact the front office for group tariffs and reservations. Packages and group tariff is applicable on a group of minimum 15 pax.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24">
          {rooms.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="flex justify-between items-end mb-4">
                <h3 className="font-serif text-2xl text-olive">{room.name}</h3>
                <span className="text-sm text-olive/60">{room.price}</span>
              </div>
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg shadow-lg mb-4">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {room.badge && (
                  <div className="absolute top-4 right-4 bg-teal-500 text-cream text-xs px-3 py-1 font-semibold tracking-wider">
                    {room.badge}
                  </div>
                )}
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-olive mb-4 uppercase tracking-wider text-[10px] flex items-center gap-2">
                  <div className="w-8 h-px bg-accent"></div> 
                  Tariff Plans
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {room.tariffs?.map((t, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl border border-olive/5 flex flex-col justify-center items-start shadow-xs hover:border-accent/30 hover:shadow-md transition-all duration-300">
                      <span className="text-[9px] uppercase tracking-widest text-olive/50 mb-1">{t.plan}</span>
                      <span className="font-serif text-lg text-accent">{t.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial / Quote */}
        <div className="max-w-3xl mx-auto text-center relative overflow-hidden h-64 md:h-56">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-serif text-xl md:text-2xl text-olive leading-relaxed mb-8 px-4">
                &quot;{testimonials[currentTestimonial].text}&quot;
              </p>
              
              <div className="flex flex-col items-center justify-center w-full">
                <span className="text-sm font-semibold text-olive uppercase tracking-widest mb-6">
                  {testimonials[currentTestimonial].author}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center space-x-8 w-full justify-between border-t border-olive/20 pt-8 relative">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-olive/30 flex items-center justify-center hover:bg-olive hover:text-cream transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center">
              <div className="flex space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-green-600">★</span>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.span 
                  key={currentTestimonial}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-olive/60 tracking-widest uppercase"
                >
                  {testimonials[currentTestimonial].source}
                </motion.span>
              </AnimatePresence>
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-olive/30 flex items-center justify-center hover:bg-olive hover:text-cream transition-colors z-10"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
