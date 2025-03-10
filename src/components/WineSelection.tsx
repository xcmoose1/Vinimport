'use client';

import { motion } from 'framer-motion';

const wines = [
  {
    name: 'Château Margaux 2015',
    type: 'Rødvin',
    region: 'Bordeaux',
    description: 'En eksepsjonell årgang med elegante tanniner og kompleks fruktprofil.',
    image: '/images/wine-1.jpg',
  },
  {
    name: 'Brunello di Montalcino 2018',
    type: 'Rødvin',
    region: 'Toscana',
    description: 'Kraftig og velbalansert med noter av mørke bær og krydder.',
    image: '/images/wine-2.jpg',
  },
  {
    name: 'Chablis Grand Cru 2019',
    type: 'Hvitvin',
    region: 'Burgund',
    description: 'Mineralsk og frisk med elegant struktur og lang ettersmak.',
    image: '/images/wine-3.jpg',
  },
  {
    name: 'Champagne Dom Pérignon 2012',
    type: 'Champagne',
    region: 'Champagne',
    description: 'Presis og raffinert med perfekt balanse mellom frukt og syre.',
    image: '/images/wine-4.jpg',
  }
];

export default function WineSelection() {
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
          <h2 className="text-3xl md:text-4xl mb-6 text-[#1C1C1C]">Vårt Vinutvalg</h2>
          <p className="text-lg text-[#1C1C1C]/80 max-w-2xl mx-auto">
            Utforsk vårt nøye kuraterte utvalg av eksepsjonelle viner fra verdens beste vinregioner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {wines.map((wine, index) => (
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
                <h3 className="text-xl font-semibold mb-2 text-[#1C1C1C]">{wine.name}</h3>
                <p className="text-[#7D1424] mb-1">{wine.type}</p>
                <p className="text-[#1C1C1C]/60 mb-3">{wine.region}</p>
                <p className="text-[#1C1C1C]/80 text-sm">{wine.description}</p>
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
