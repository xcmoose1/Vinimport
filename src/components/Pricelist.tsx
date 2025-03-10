'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = [
  {
    id: 'rodvin',
    name: 'Rødvin',
    description: 'Vårt utvalg av kvalitetsrødviner fra hele verden.',
    products: [
      { name: 'Château Margaux 2015', region: 'Bordeaux, Frankrike', price: '4 950 kr', rating: '96/100' },
      { name: 'Brunello di Montalcino 2018', region: 'Toscana, Italia', price: '895 kr', rating: '93/100' },
      { name: 'Barolo Riserva 2016', region: 'Piemonte, Italia', price: '1 250 kr', rating: '94/100' },
      { name: 'Amarone della Valpolicella 2017', region: 'Veneto, Italia', price: '750 kr', rating: '92/100' },
      { name: 'Rioja Gran Reserva 2014', region: 'Rioja, Spania', price: '595 kr', rating: '91/100' },
      { name: 'Napa Valley Cabernet Sauvignon 2019', region: 'California, USA', price: '1 095 kr', rating: '93/100' },
      { name: 'Penfolds Grange 2017', region: 'South Australia', price: '4 250 kr', rating: '97/100' },
      { name: 'Châteauneuf-du-Pape 2018', region: 'Rhône, Frankrike', price: '750 kr', rating: '92/100' },
    ]
  },
  {
    id: 'hvitvin',
    name: 'Hvitvin',
    description: 'Friske og elegante hvitviner for enhver anledning.',
    products: [
      { name: 'Chablis Grand Cru 2019', region: 'Burgund, Frankrike', price: '895 kr', rating: '94/100' },
      { name: 'Sancerre Blanc 2021', region: 'Loire, Frankrike', price: '450 kr', rating: '91/100' },
      { name: 'Puligny-Montrachet 1er Cru 2018', region: 'Burgund, Frankrike', price: '1 350 kr', rating: '95/100' },
      { name: 'Mosel Riesling Auslese 2020', region: 'Mosel, Tyskland', price: '595 kr', rating: '93/100' },
      { name: 'Marlborough Sauvignon Blanc 2022', region: 'New Zealand', price: '295 kr', rating: '90/100' },
      { name: 'Soave Classico 2021', region: 'Veneto, Italia', price: '325 kr', rating: '89/100' },
    ]
  },
  {
    id: 'champagne',
    name: 'Champagne',
    description: 'Eksklusiv champagne og musserende vin.',
    products: [
      { name: 'Dom Pérignon 2012', region: 'Champagne, Frankrike', price: '2 450 kr', rating: '96/100' },
      { name: 'Krug Grande Cuvée', region: 'Champagne, Frankrike', price: '2 950 kr', rating: '97/100' },
      { name: 'Bollinger La Grande Année 2014', region: 'Champagne, Frankrike', price: '1 850 kr', rating: '95/100' },
      { name: 'Ruinart Blanc de Blancs', region: 'Champagne, Frankrike', price: '995 kr', rating: '93/100' },
      { name: 'Franciacorta Satèn DOCG', region: 'Lombardia, Italia', price: '495 kr', rating: '91/100' },
      { name: 'Prosecco Superiore DOCG', region: 'Veneto, Italia', price: '275 kr', rating: '89/100' },
    ]
  },
  {
    id: 'naturvin',
    name: 'Naturvin',
    description: 'Økologiske og biodynamiske viner fra dedikerte produsenter.',
    products: [
      { name: 'Frank Cornelissen Munjebel 2020', region: 'Sicilia, Italia', price: '750 kr', rating: '93/100' },
      { name: 'Gut Oggau Theodora 2021', region: 'Burgenland, Østerrike', price: '595 kr', rating: '92/100' },
      { name: 'La Stoppa Ageno 2018', region: 'Emilia-Romagna, Italia', price: '650 kr', rating: '91/100' },
      { name: 'Domaine Matassa Blanc 2020', region: 'Languedoc, Frankrike', price: '525 kr', rating: '90/100' },
      { name: 'Radikon Ribolla Gialla 2016', region: 'Friuli, Italia', price: '895 kr', rating: '94/100' },
    ]
  },
  {
    id: 'ol',
    name: 'Øl',
    description: 'Håndverksøl fra lokale og internasjonale bryggerier.',
    products: [
      { name: 'Nøgne Ø Imperial Stout', region: 'Norge', price: '145 kr', rating: '92/100' },
      { name: 'Lervig Paragon 2022', region: 'Norge', price: '195 kr', rating: '94/100' },
      { name: 'Aegir Bryggeri Sumbel Porter', region: 'Norge', price: '125 kr', rating: '90/100' },
      { name: 'Westvleteren 12', region: 'Belgia', price: '295 kr', rating: '99/100' },
      { name: 'Cantillon Gueuze 100% Lambic', region: 'Belgia', price: '350 kr', rating: '97/100' },
      { name: 'Mikkeller Beer Geek Brunch', region: 'Danmark', price: '175 kr', rating: '93/100' },
    ]
  },
  {
    id: 'sprit',
    name: 'Sprit',
    description: 'Premium sprit og destillater av høyeste kvalitet.',
    products: [
      { name: 'Macallan 18 Years Old', region: 'Skottland', price: '2 950 kr', rating: '95/100' },
      { name: 'Rémy Martin XO', region: 'Frankrike', price: '1 950 kr', rating: '94/100' },
      { name: 'Hennessy Paradis', region: 'Frankrike', price: '12 500 kr', rating: '98/100' },
      { name: 'Diplomatico Ambassador', region: 'Venezuela', price: '1 850 kr', rating: '93/100' },
      { name: 'Zacapa XO', region: 'Guatemala', price: '1 250 kr', rating: '92/100' },
      { name: 'Bareksten Botanical Gin', region: 'Norge', price: '595 kr', rating: '91/100' },
    ]
  }
];

export default function Pricelist() {
  const [activeCategory, setActiveCategory] = useState('rodvin');

  return (
    <section id="prislister" className="py-20 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[#1C1C1C] font-serif">Prislister</h2>
          <p className="text-lg text-[#1C1C1C] opacity-90 max-w-2xl mx-auto">
            Utforsk vårt sortiment med priser for restauranter, barer og andre profesjonelle kunder.
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
                  : 'bg-[#1C1C1C]/10 text-[#1C1C1C] hover:bg-[#1C1C1C]/20'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {categories.map((category) => (
          <div
            key={category.id}
            className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h3 className="text-2xl font-serif text-[#1C1C1C] mb-2">{category.name}</h3>
              <p className="text-[#1C1C1C] mb-6">{category.description}</p>
            </motion.div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-[#1C1C1C]/10">
                  <tr>
                    <th className="py-4 px-6 text-left text-[#1C1C1C] font-semibold">Produkt</th>
                    <th className="py-4 px-6 text-left text-[#1C1C1C] font-semibold hidden md:table-cell">Region</th>
                    <th className="py-4 px-6 text-right text-[#1C1C1C] font-semibold">Pris</th>
                    <th className="py-4 px-6 text-right text-[#1C1C1C] font-semibold hidden lg:table-cell">Vurdering</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1C1C1C]/10">
                  {category.products.map((product, index) => (
                    <motion.tr
                      key={product.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hover:bg-[#1C1C1C]/5 transition-colors"
                    >
                      <td className="py-4 px-6 text-[#1C1C1C] font-medium">
                        {product.name}
                      </td>
                      <td className="py-4 px-6 text-[#1C1C1C] hidden md:table-cell">
                        {product.region}
                      </td>
                      <td className="py-4 px-6 text-right text-[#7D1424] font-semibold">
                        {product.price}
                      </td>
                      <td className="py-4 px-6 text-right text-[#1C1C1C] font-medium hidden lg:table-cell">
                        {product.rating}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[#1C1C1C] max-w-2xl mx-auto">
            Alle priser er oppgitt i NOK inkl. mva. for privatpersoner. 
            For restauranter og andre profesjonelle kunder, 
            <a href="#kontakt" className="text-[#7D1424] hover:text-[#A52A2A] transition-colors ml-1 font-medium">
              ta kontakt med oss
            </a> for å få tilgang til våre grossistpriser.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
