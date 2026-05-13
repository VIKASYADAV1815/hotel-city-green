"use client";

import { motion, type Variants } from "framer-motion";
import { Users, PartyPopper, CheckCircle, Utensils, CalendarDays, Ban } from "lucide-react";
import { useState, useRef } from "react";

const amenities = [
  { id: "conference", icon: Users, title: "Conference & Banquet", description: "Well Appointed Hall (25 to 100 Pax), Banquet Hall (300 Pax), Lush Green Party Lawn (200 Pax)." },
  { id: "banquet", icon: Utensils, title: "Banquet Menu", description: "Menu starts at ₹750/- per plate for weddings, receptions, anniversaries and birthday parties." },
  { id: "meeting", icon: CalendarDays, title: "Conference Meetings", description: "Conference meeting starts at ₹499/- + taxes. Contact front office for reservations." },
  { id: "kitty", icon: PartyPopper, title: "Kitty Party", description: "Starts at ₹249/- per plate. Perfect for small gatherings and celebrations." },
  { id: "room", icon: CheckCircle, title: "Premium Rooms", description: "20 tastefully decorated air conditioned rooms with attached bathroom and 24 hrs running hot & cold water." },
  { id: "cancellation", icon: Ban, title: "Cancellation Policy", description: "Within 24 hrs: No Refund. Within 48 hrs: 50% Refund. Before 48 hrs: 90% Refund." },
];

// Motion variants for staggered container entry
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delays subsequent items
    },
  },
};

// Motion variants for individual item entry
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

export default function AnimatedCompactAmenities() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // 3D Tilt Effect State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = itemRefs.current[index]?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = (y - centerY) / 10; // Adjust sensitivity
    const tiltY = (centerX - x) / 15; // Adjust sensitivity

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="amenities" className="bg-olive-dark text-cream py-16 md:py-20 relative overflow-hidden">
      
      {/* Background visual element */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-150 h-150 bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Compact Header */}
        <div className="mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold mb-2 block"
          >
            Facilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            className="font-serif text-3xl md:text-5xl"
          >
            Hotel <span className="italic font-light text-accent">Amenities</span>
          </motion.h2>
        </div>

        {/* 2-Column Grid with Entry Stagger */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 border-t border-cream/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {amenities.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredId === item.id;
            
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                onMouseMove={(e) => { setHoveredId(item.id); handleMouseMove(e, index); }}
                onMouseLeave={handleMouseLeave}
                // 3D Tilt perspective setting
                style={{ perspective: "1000px" }} 
              >
                <motion.div
                  className="flex items-start gap-5 py-6 border-b border-cream/10 cursor-pointer origin-center"
                  // 3D Tilt animation properties
                  animate={{ 
                    rotateX: isHovered ? tilt.x : 0, 
                    rotateY: isHovered ? tilt.y : 0,
                    scale: isHovered ? 1.02 : 1,
                    backgroundColor: isHovered ? "rgba(245, 242, 237, 0.02)" : "rgba(245, 242, 237, 0)"
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                >
                  <div className="mt-1">
                    <motion.div 
                      animate={{ 
                        color: isHovered ? "#C5A572" : "#F5F2ED",
                        y: isHovered ? [0, -3, 0] : 0, // Quick bounce on hover
                      }}
                      transition={{ duration: isHovered ? 0.4 : 0.2 }}
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <div className="flex-1 relative">
                    <h3 className="font-serif text-lg md:text-xl group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* The "Sliding Accent Line" Interaction */}
                    <div className="relative mt-1 mb-2 h-4">
                      <motion.div 
                        initial={{ scaleX: 0, opacity: 0.6 }}
                        animate={{ 
                          scaleX: isHovered ? 1 : 0, 
                          opacity: isHovered ? 1 : 0.6,
                          originX: 0 
                        }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-1/2 left-0 h-px w-16 -translate-y-1/2 bg-accent"
                      />
                    </div>

                    <p className="text-cream/60 text-sm leading-snug max-w-sm transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Right side indicator animation */}
                  <div className="self-center">
                    <motion.div 
                      animate={{ 
                        x: isHovered ? 5 : 0,
                        opacity: isHovered ? 1 : 0, 
                        scale: isHovered ? 1 : 0.5
                      }}
                      className="w-1 h-1 rounded-full bg-accent"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
