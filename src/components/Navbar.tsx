"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "ROOMS", href: "#rooms" },
  ];

  const rightNavLinks = [
    { name: "RESTAURANT", href: "#restaurant" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-2xl saturate-150 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-b border-olive/10 text-olive-dark rounded-b-3xl" 
          : "bg-linear-to-b from-black/60 to-transparent py-8 border-transparent text-cream"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between lg:grid lg:grid-cols-3 lg:items-center w-full">
          
          {/* Mobile Menu Toggle (Left on mobile) */}
          <div className="lg:hidden flex-1">
            <button
              className="text-current focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Left Nav */}
          <nav className="hidden lg:flex items-center justify-start space-x-10 text-xs tracking-[0.2em] font-semibold">
            {leftNavLinks.map((link) => (
              <Link key={link.name} href={link.href} className="relative group py-2">
                <span className="relative z-10 group-hover:text-accent transition-colors duration-300 drop-shadow-md">{link.name}</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <Link href="/" className="flex flex-col items-center justify-center group z-10 mx-auto">
            <span className="font-serif text-3xl tracking-widest font-bold drop-shadow-md">HOTEL</span>
            <span className="text-[0.65rem] tracking-[0.4em] uppercase opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md mt-1">City Green</span>
          </Link>

          {/* Desktop Right Nav & Actions */}
          <div className="hidden lg:flex items-center justify-end space-x-10">
            <nav className="flex items-center space-x-10 text-xs tracking-[0.2em] font-semibold">
              {rightNavLinks.map((link) => (
                <Link key={link.name} href={link.href} className="relative group py-2">
                  <span className="relative z-10 group-hover:text-accent transition-colors duration-300 drop-shadow-md">{link.name}</span>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
            <Link href="#book" className={`relative overflow-hidden text-xs tracking-[0.2em] font-bold px-8 py-3 border border-accent/50 rounded group transition-colors duration-500 ${isScrolled ? "text-olive-dark hover:text-white" : "text-white hover:text-olive"}`}>
              <span className="relative z-10">BOOK NOW</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-olive-dark/95 backdrop-blur-2xl border-b border-cream/10 text-cream shadow-2xl overflow-hidden lg:hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {[...leftNavLinks, ...rightNavLinks].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-[0.2em] font-semibold hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-cream/10 flex flex-col space-y-6">
                <Link
                  href="#book"
                  className="text-center text-sm tracking-[0.2em] font-bold bg-accent text-white py-4 rounded hover:bg-white hover:text-olive transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BOOK NOW
                </Link>
                <span className="text-center text-xs tracking-[0.2em] text-cream/70">+1 234 567 890</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
