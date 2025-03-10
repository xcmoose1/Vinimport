'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Erik Graawe-Jacobsen',
    role: 'Grunnlegger og Daglig Leder',
    image: '/images/team-1.jpg',
    description: 'Med over 30 års erfaring i vinbransjen og en lidenskap for kvalitetsviner.',
  },
  {
    name: 'Maria Graawe-Jacobsen',
    role: 'Vinekspert og Innkjøpsansvarlig',
    image: '/images/team-2.jpg',
    description: 'Utdannet sommelier med spesialisering i europeiske viner.',
  },
  {
    name: 'Anders Berg',
    role: 'Salgssjef',
    image: '/images/team-3.jpg',
    description: 'Ekspert på markedsutvikling og kundeforhold.',
  },
  {
    name: 'Sofia Hansen',
    role: 'Vinekspert',
    image: '/images/team-4.jpg',
    description: 'Spesialist på naturviner og økologisk vinproduksjon.',
  },
];

export default function Team() {
  return (
    <section id="dette-er-oss" className="py-20 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[#F8F5F0] font-serif">Dette er oss</h2>
          <p className="text-lg text-[#F8F5F0] opacity-90 max-w-2xl mx-auto">
            Møt teamet bak Graawe-Jacobsen - dedikerte vinentusiaster med bred erfaring og kompetanse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#C2A77D] shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="192px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#F8F5F0]">{member.name}</h3>
              <p className="text-[#C2A77D] mb-3">{member.role}</p>
              <p className="text-[#F8F5F0] opacity-80">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
