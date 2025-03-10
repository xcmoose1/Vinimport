'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#1C1C1C]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-serif text-[#F8F5F0]">
            Graawe-Jacobsen
          </a>

          <ul className="hidden md:flex space-x-8">
            <li>
              <a 
                href="#om-oss" 
                className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors"
              >
                Om oss
              </a>
            </li>
            <li>
              <a 
                href="#produsenter" 
                className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors"
              >
                Produsenter
              </a>
            </li>
            <li>
              <a 
                href="#vinutvalg" 
                className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors"
              >
                Vinutvalg
              </a>
            </li>
            <li>
              <a 
                href="#prislister" 
                className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors"
              >
                Prislister
              </a>
            </li>
            <li>
              <a 
                href="#dette-er-oss" 
                className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors"
              >
                Dette er oss
              </a>
            </li>
            <li>
              <a 
                href="#nyhetsbrev" 
                className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors"
              >
                Nyhetsbrev
              </a>
            </li>
            <li>
              <a 
                href="#kontakt" 
                className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors"
              >
                Kontakt
              </a>
            </li>
          </ul>

          <button 
            className="md:hidden text-[#F8F5F0]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1C1C1C] py-4"
          >
            <ul className="flex flex-col space-y-4 px-4">
              <li>
                <a 
                  href="#om-oss" 
                  className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors block py-2"
                  onClick={handleNavClick}
                >
                  Om oss
                </a>
              </li>
              <li>
                <a 
                  href="#produsenter" 
                  className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors block py-2"
                  onClick={handleNavClick}
                >
                  Produsenter
                </a>
              </li>
              <li>
                <a 
                  href="#vinutvalg" 
                  className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors block py-2"
                  onClick={handleNavClick}
                >
                  Vinutvalg
                </a>
              </li>
              <li>
                <a 
                  href="#prislister" 
                  className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors block py-2"
                  onClick={handleNavClick}
                >
                  Prislister
                </a>
              </li>
              <li>
                <a 
                  href="#dette-er-oss" 
                  className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors block py-2"
                  onClick={handleNavClick}
                >
                  Dette er oss
                </a>
              </li>
              <li>
                <a 
                  href="#nyhetsbrev" 
                  className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors block py-2"
                  onClick={handleNavClick}
                >
                  Nyhetsbrev
                </a>
              </li>
              <li>
                <a 
                  href="#kontakt" 
                  className="text-[#F8F5F0] hover:text-[#F8F5F0]/80 transition-colors block py-2"
                  onClick={handleNavClick}
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
