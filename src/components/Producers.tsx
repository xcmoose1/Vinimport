'use client';

import { motion } from 'framer-motion';

const producers = [
  {
    name: 'Château Margaux',
    region: 'Bordeaux, Frankrike',
    description: 'En av de mest prestisjefylte vinprodusentene i verden, kjent for sine elegante og komplekse viner.',
    image: '/images/producer-1.jpg',
  },
  {
    name: 'Antinori',
    region: 'Toscana, Italia',
    description: 'En familie med over 600 års vinproduksjon, kjent for innovative og tradisjonelle viner.',
    image: '/images/producer-2.jpg',
  },
  {
    name: 'Vega Sicilia',
    region: 'Ribera del Duero, Spania',
    description: 'Spanias mest prestisjefylte vinprodusent, kjent for sine kraftige og elegante rødviner.',
    image: '/images/producer-3.jpg',
  },
];

export default function Producers() {
  return (
    <section id="produsenter" className="py-20 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[#F8F5F0]">Våre Produsenter</h2>
          <p className="text-lg text-[#F8F5F0] max-w-2xl mx-auto">
            Vi samarbeider med noen av verdens mest anerkjente vinprodusenter for å bringe
            de beste vinene til det norske markedet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {producers.map((producer, index) => (
            <motion.div
              key={producer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#F8F5F0] rounded-lg overflow-hidden shadow-md"
            >
              <div
                className="h-64 relative"
                style={{
                  backgroundImage: `url(${producer.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#1C1C1C]">{producer.name}</h3>
                <p className="text-[#7D1424] font-medium mb-3">{producer.region}</p>
                <p className="text-[#1C1C1C]">{producer.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
