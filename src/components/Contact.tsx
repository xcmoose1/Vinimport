'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-[#1C1C1C] font-serif">Kontakt Oss</h2>
            <p className="text-lg mb-8 text-[#1C1C1C] opacity-90">
              Vi er her for å hjelpe deg med alle dine spørsmål om vin. Ta gjerne kontakt for mer informasjon
              om våre produkter eller for å diskutere samarbeidsmuligheter.
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-semibold text-[#1C1C1C] mb-2">Besøksadresse</h3>
                <p className="text-[#1C1C1C] opacity-90">
                  Vinveien 123<br />
                  0123 Oslo
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#1C1C1C] mb-2">Kontaktinformasjon</h3>
                <p className="text-[#1C1C1C] opacity-90">
                  Telefon: +47 123 45 678<br />
                  E-post: post@graawe-jacobsen.no
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#1C1C1C] mb-2">Åpningstider</h3>
                <p className="text-[#1C1C1C] opacity-90">
                  Mandag - Fredag: 09:00 - 16:00<br />
                  Lørdag - Søndag: Stengt
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D1424] focus:border-transparent"
                  placeholder="Ditt navn"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D1424] focus:border-transparent"
                  placeholder="din.epost@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Emne
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D1424] focus:border-transparent"
                >
                  <option value="">Velg emne</option>
                  <option value="general">Generell henvendelse</option>
                  <option value="order">Bestilling</option>
                  <option value="partnership">Samarbeid</option>
                  <option value="other">Annet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Melding
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D1424] focus:border-transparent"
                  placeholder="Skriv din melding her..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3 bg-[#7D1424] text-[#F8F5F0] rounded-lg hover:bg-[#A52A2A] transition-colors"
              >
                Send melding
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
