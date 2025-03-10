'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="om-oss" className="py-20 bg-[#F8F5F0] relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#1C1C1C]">Om Graawe-Jacobsen</h2>
            <div className="space-y-4 text-[#1C1C1C]">
              <p className="text-lg">
                Med over 20 års erfaring i vinbransjen har Graawe-Jacobsen etablert seg som en av Norges mest respekterte vinimportører. Vår lidenskap for vin og tette samarbeid med håndplukkede vinprodusenter har gjort oss til en foretrukket leverandør av kvalitetsviner.
              </p>
              <p className="text-lg">
                Vi legger vår stolthet i å være formidlere av ikke bare førsteklasses viner, men også historiene og tradisjonene som følger med hver flaske. Vårt utvalg representerer det beste fra både etablerte vinregioner og spennende nykommere.
              </p>
              <p className="text-lg">
                Vår filosofi er enkel: kvalitet i alle ledd. Dette gjelder ikke bare vinene vi importerer, men også vår kunnskap, service og rådgivning til våre kunder.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#7D1424] text-[#F8F5F0] rounded-lg hover:bg-[#A52A2A] transition-colors"
            >
              Les mer om oss
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="aspect-[4/3] rounded-lg bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/about-us.jpg)' }}
            />
            <div className="absolute -bottom-6 -left-6 bg-[#7D1424] text-[#F8F5F0] p-6 rounded-lg max-w-xs">
              <p className="text-lg font-serif">
                "Vår lidenskap er å finne de beste vinene og dele dem med våre kunder."
              </p>
              <p className="mt-2 font-semibold">- Erik Graawe-Jacobsen</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
