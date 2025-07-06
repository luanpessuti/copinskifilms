'use client';

import React from "react";
import { motion } from "framer-motion";
import { Star, Award, Users } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      id="about"
      className="section-padding bg-ashgray"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-bordeux mb-6 text-hero">
              Quem é Eduardo Copinski
            </h2>
            <p className="text-lg text-primary mb-6 leading-relaxed">
              Sou um videomaker apaixonado por contar histórias através das lentes.
              Com mais de cinco anos de experiência no mercado audiovisual, transformo
              momentos especiais em memórias eternas.
            </p>
            <p className="text-lg text-primary mb-8 leading-relaxed">
              Minha missão é capturar a essência de cada projeto, seja um casamento
              íntimo, um evento corporativo ou uma campanha comercial. Cada frame é
              pensado para transmitir emoção e autenticidade.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-primary">5+ anos de experiência</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Award className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-primary">100+ projetos realizados</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-primary">Baseado em Curitiba</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/eduardocopinski.avif"
                alt="Eduardo Copinski"
                width={500}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-lg">
              <p className="text-sm font-medium">Eduardo Copinski</p>
              <p className="text-xs text-gray-300">Videomaker Professional</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
