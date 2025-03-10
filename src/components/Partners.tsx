'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: 'Vinslottet Italia',
    logo: '/images/partner-1.png',
    description: 'Eksklusiv italiensk vinprodusent',
  },
  {
    name: 'Château Bordeaux',
    logo: '/images/partner-2.png',
    description: 'Prestisjetung fransk vingård',
  },
  {
    name: 'Vino Español',
    logo: '/images/partner-3.png',
    description: 'Spansk vinkooperativ',
  },
  {
    name: 'Weingut Schmidt',
    logo: '/images/partner-4.png',
    description: 'Tradisjonell tysk vinprodusent',
  },
  {
    name: 'California Dreams',
    logo: '/images/partner-5.png',
    description: 'Innovativ amerikansk vingård',
  },
  {
    name: 'Stellenbosch Vineyards',
    logo: '/images/partner-6.png',
    description: 'Sør-afrikansk vinprodusent',
  },
];

export default function Partners() {
  return (
    <section id="samarbeidspartnere" className="py-20 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[#F8F5F0] font-serif">Våre samarbeidspartnere</h2>
          <p className="text-lg text-[#F8F5F0] opacity-90 max-w-2xl mx-auto">
            Vi er stolte av å samarbeide med noen av verdens fremste vinprodusenter for å tilby deg det beste utvalget.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative w-40 h-40 mb-4 bg-[#F8F5F0]/10 rounded-lg p-4 flex items-center justify-center hover:bg-[#F8F5F0]/20 transition-colors">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg font-medium text-[#F8F5F0] mb-1 text-center">{partner.name}</h3>
              <p className="text-sm text-[#C2A77D] text-center">{partner.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[#F8F5F0]/80 italic">
            "Vi velger våre samarbeidspartnere med omhu for å sikre at vi kun tilbyr viner av høyeste kvalitet til våre kunder."
          </p>
          <p className="text-[#C2A77D] mt-2">— Erik Graawe-Jacobsen, Grunnlegger</p>
        </motion.div>
      </div>
    </section>
  );
}
