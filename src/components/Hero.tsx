'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div 
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('./images/hero-bg.png')" }}
    >
      <div className="h-full bg-black/30">
        <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center"
          >
            <h1 className="text-4xl md:text-6xl text-[#F8F5F0] font-serif mb-6">
              Velkommen til<br />
              Graawe-Jacobsen
            </h1>
            <p className="text-xl text-[#F8F5F0] mb-8 opacity-90">
              Din eksklusive partner for kvalitetsviner fra verdens beste vinprodusenter
            </p>
            <motion.a
              href="#vinutvalg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-[#7D1424] text-[#F8F5F0] rounded-lg hover:bg-[#A52A2A] transition-colors"
            >
              Utforsk våre viner
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
