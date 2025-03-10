'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = [
  {
    id: 'rodvin',
    name: 'Rødvin',
    description: 'Elegante og kraftfulle rødviner fra verdens beste vinregioner.',
    image: '/images/red-wine.jpg',
  },
  {
    id: 'hvitvin',
    name: 'Hvitvin',
    description: 'Friske og mineralske hvitviner for enhver anledning.',
    image: '/images/white-wine.jpg',
  },
  {
    id: 'champagne',
    name: 'Champagne',
    description: 'Eksklusiv champagne fra prestisjetunge produsenter.',
    image: '/images/champagne.jpg',
  },
  {
    id: 'naturvin',
    name: 'Naturvin',
    description: 'Økologiske og biodynamiske viner med unik karakter.',
    image: '/images/natural-wine.jpg',
  },
  {
    id: 'musserende',
    name: 'Musserende',
    description: 'Festlige musserende viner fra hele verden.',
    image: '/images/sparkling-wine.jpg',
  },
  {
    id: 'dessertvin',
    name: 'Dessertvin',
    description: 'Søte og komplekse viner for den perfekte avslutning.',
    image: '/images/dessert-wine.jpg',
  },
];

export default function WineCategories() {
  const [activeCategory, setActiveCategory] = useState('rodvin');

  return (
    <section id="vinkategorier" className="py-20 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[#1C1C1C] font-serif">Utforsk våre vinkategorier</h2>
          <p className="text-lg text-[#1C1C1C] opacity-90 max-w-2xl mx-auto">
            Fra elegante rødviner til friske hvitviner - opplev vårt brede utvalg av kvalitetsviner.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-lg transition-colors ${
                activeCategory === category.id
                  ? 'bg-[#7D1424] text-[#F8F5F0]'
                  : 'bg-white text-[#1C1C1C] hover:bg-[#7D1424] hover:text-[#F8F5F0]'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {categories
            .filter((category) => category.id === activeCategory)
            .map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div
                  className="h-[400px] rounded-lg bg-center bg-cover"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div>
                  <h3 className="text-2xl font-serif mb-4 text-[#1C1C1C]">{category.name}</h3>
                  <p className="text-lg text-[#1C1C1C] opacity-90 mb-6">{category.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-[#7D1424] text-[#F8F5F0] rounded-lg hover:bg-[#A52A2A] transition-colors"
                  >
                    Utforsk {category.name.toLowerCase()}
                  </motion.button>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
