'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = [
  {
    id: 'rodvin',
    name: 'Rødvin',
    description: 'Elegante og kraftfulle rødviner fra verdens beste vinregioner.',
    wines: [
      {
        name: 'Château Margaux 2015',
        region: 'Bordeaux',
        description: 'En eksepsjonell årgang med elegante tanniner og kompleks fruktprofil.',
        image: '/images/wine-1.jpg',
      },
      {
        name: 'Brunello di Montalcino 2018',
        region: 'Toscana',
        description: 'Kraftig og velbalansert med noter av mørke bær og krydder.',
        image: '/images/wine-2.jpg',
      }
    ]
  },
  {
    id: 'hvitvin',
    name: 'Hvitvin',
    description: 'Friske og mineralske hvitviner for enhver anledning.',
    wines: [
      {
        name: 'Chablis Grand Cru 2019',
        region: 'Burgund',
        description: 'Mineralsk og frisk med elegant struktur og lang ettersmak.',
        image: '/images/wine-3.jpg',
      },
      {
        name: 'Sancerre Blanc 2021',
        region: 'Loire',
        description: 'Livlig og aromatisk med toner av sitrus og stikkelsbær.',
        image: '/images/wine-4.jpg',
      }
    ]
  },
  {
    id: 'champagne',
    name: 'Champagne',
    description: 'Eksklusiv champagne fra prestisjetunge produsenter.',
    wines: [
      {
        name: 'Dom Pérignon 2012',
        region: 'Champagne',
        description: 'Presis og raffinert med perfekt balanse mellom frukt og syre.',
        image: '/images/wine-5.jpg',
      },
      {
        name: 'Krug Grande Cuvée',
        region: 'Champagne',
        description: 'Kompleks og fyldig med innslag av brioche og modne frukter.',
        image: '/images/wine-6.jpg',
      }
    ]
  },
  {
    id: 'naturvin',
    name: 'Naturvin',
    description: 'Økologiske og biodynamiske viner med unik karakter.',
    wines: [
      {
        name: 'Frank Cornelissen Munjebel 2020',
        region: 'Sicilia',
        description: 'Naturvin fra Etnas vulkanske jordsmonn med intens mineralitet.',
        image: '/images/wine-7.jpg',
      },
      {
        name: 'Gut Oggau Theodora 2021',
        region: 'Burgenland',
        description: 'Biodynamisk hvitvin med frisk syre og kompleks fruktighet.',
        image: '/images/wine-8.jpg',
      }
    ]
  },
  {
    id: 'ol',
    name: 'Øl',
    description: 'Håndverksbryggede øl fra utvalgte mikrobryggerier.',
    wines: [
      {
        name: 'Nøgne Ø Imperial Stout',
        region: 'Norge',
        description: 'Kraftig og kompleks imperial stout med smaker av kaffe og mørk sjokolade.',
        image: '/images/beer-1.jpg',
      },
      {
        name: 'Lervig Paragon 2022',
        region: 'Norge',
        description: 'Prisbelønt barley wine med rik maltkarakter og hint av karamell.',
        image: '/images/beer-2.jpg',
      }
    ]
  },
  {
    id: 'sprit',
    name: 'Sprit',
    description: 'Eksklusiv sprit og brennevin fra hele verden.',
    wines: [
      {
        name: 'Cognac Tesseron Lot N°29 XO',
        region: 'Frankrike',
        description: 'Eksepsjonell cognac med lang lagring og kompleks aromaprofil.',
        image: '/images/spirit-1.jpg',
      },
      {
        name: 'Macallan 18 Years Sherry Oak',
        region: 'Skottland',
        description: 'Elegant single malt whisky med rike smaker av tørket frukt og krydder.',
        image: '/images/spirit-2.jpg',
      }
    ]
  }
];

export default function WineExplorer() {
  const [activeCategory, setActiveCategory] = useState('rodvin');

  return (
    <section id="vinutvalg" className="py-20 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[#1C1C1C] font-serif">Utforsk vårt utvalg</h2>
          <p className="text-lg text-[#1C1C1C] opacity-90 max-w-2xl mx-auto">
            Opplev vårt nøye kuraterte utvalg av eksepsjonelle viner, øl og sprit fra verdens beste produsenter.
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

        {categories
          .filter((category) => category.id === activeCategory)
          .map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-12">
                <h3 className="text-2xl font-serif mb-4 text-[#1C1C1C]">{category.name}</h3>
                <p className="text-lg text-[#1C1C1C] opacity-90">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.wines.map((wine, index) => (
                  <motion.div
                    key={wine.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div
                      className="h-48 relative"
                      style={{
                        backgroundImage: `url(${wine.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 text-[#1C1C1C]">{wine.name}</h4>
                      <p className="text-[#7D1424] font-medium mb-1">{wine.region}</p>
                      <p className="text-[#1C1C1C] text-sm">{wine.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-4 py-2 bg-[#7D1424] text-[#F8F5F0] rounded hover:bg-[#A52A2A] transition-colors w-full"
                      >
                        Les mer
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#7D1424] text-[#F8F5F0] rounded-lg hover:bg-[#A52A2A] transition-colors"
          >
            Se hele vårt utvalg
          </motion.button>
        </div>
      </div>
    </section>
  );
}
