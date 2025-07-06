'use client';

import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";


const portfolio = [
  {
    id: 1,
    title: "Casamento Marina & João",
    category: "Casamento",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    video: true
  },
  {
    id: 2,
    title: "Comercial Restaurante",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    video: true
  },
  {
    id: 3,
    title: "Tour Virtual Apartamento",
    category: "Imobiliário",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    video: true
  },
  {
    id: 4,
    title: "Evento Corporativo",
    category: "Corporativo",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
    video: true
  },
  {
    id: 5,
    title: "Festa de Formatura",
    category: "Evento",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&h=400&fit=crop",
    video: true
  },
  {
    id: 6,
    title: "Lançamento de Produto",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    video: true
  }
];

export default function Portfolio() {
  return (
    <motion.section
      id="portfolio"
      className="section-padding bg-offwhite"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-bold text-bordeux mb-6 text-hero">
            Nosso Portfolio
          </h2>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            Veja alguns dos nossos trabalhos mais recentes e se inspire para seu próximo projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] bg-gray-200 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm font-medium">Assistir Vídeo</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="text-sm text-gray-300 mb-1">{item.category}</p>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}