"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wine, UtensilsCrossed, Coffee } from "lucide-react";

const menuItems = [
  {
    icon: <Wine className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />,
    category: "Signature Cocktails",
    name: "Green City Mojito",
    description: "A refreshing blend of premium white rum, fresh mint, lime, and a splash of sparkling water.",
    price: "₹1,150",
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />,
    category: "Main Course",
    name: "Grilled Atlantic Salmon",
    description: "Freshly caught salmon, perfectly grilled and served with seasonal roasted vegetables and lemon butter sauce.",
    price: "₹2,650",
  },
  {
    icon: <Coffee className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />,
    category: "Desserts",
    name: "Classic New York Cheesecake",
    description: "Rich and creamy cheesecake with a graham cracker crust, topped with fresh berries.",
    price: "₹950",
  },
];

export default function RestaurantSection() {
  return (
    <section id="restaurant" className="bg-cream py-24 md:py-32 text-olive relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">
          
          {/* Left Side: Images Grid (Sticky) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative lg:sticky lg:top-32"
          >
            <div className="flex flex-col gap-4 mt-12">
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-tl-[4rem] rounded-br-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop"
                  alt="Fine dining dish"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-tr-[4rem] rounded-bl-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
                  alt="Signature cocktails"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Decorative Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-olive rounded-full border-[6px] border-cream flex flex-col items-center justify-center text-center p-4 z-20 shadow-2xl">
              <span className="font-serif text-2xl text-accent">5★</span>
              <span className="text-[0.65rem] tracking-widest uppercase mt-1 text-cream">World Class<br/>Dining</span>
            </div>
          </motion.div>

          {/* Right Side: Content & Menu */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col pt-8"
          >
            <div className="mb-16">
              <span className="text-xs tracking-widest text-accent uppercase font-semibold mb-4 block">Our Restaurant & Bar</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic font-light mb-6 leading-tight text-olive">
                Experience World-Class <br className="hidden md:block" />
                Dining & Drinks
              </h2>
              <p className="text-olive/70 text-sm md:text-base leading-relaxed max-w-lg">
                Indulge in a culinary journey crafted by our expert chefs. From exquisite main courses to hand-crafted signature cocktails, every detail is designed to delight your senses.
              </p>
            </div>

            <div className="flex flex-col space-y-12">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col group cursor-pointer">
                  <div className="flex items-start">
                    <div className="mr-6 mt-1 opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs tracking-widest text-olive/50 uppercase font-bold mb-2 block">{item.category}</span>
                      <div className="flex justify-between items-end border-b border-olive/10 pb-4 mb-4 group-hover:border-accent transition-colors duration-300">
                        <h3 className="font-serif text-2xl md:text-3xl text-olive group-hover:text-accent transition-colors duration-300">{item.name}</h3>
                        <span className="text-sm tracking-widest font-bold text-accent">{item.price}</span>
                      </div>
                      <p className="text-olive/70 text-sm max-w-md leading-relaxed group-hover:text-olive transition-colors">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center space-x-4 cursor-pointer group"
              >
                <span className="text-xs tracking-widest uppercase font-bold text-olive group-hover:text-accent transition-colors border-b border-transparent group-hover:border-accent pb-1">View Full Menu</span>
                <div className="w-12 h-12 rounded-full border border-olive/20 flex items-center justify-center group-hover:border-accent transition-colors shadow-sm group-hover:shadow-md bg-white">
                  <ArrowRight className="text-olive group-hover:text-accent transition-colors" size={18} />
                </div>
              </motion.div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
