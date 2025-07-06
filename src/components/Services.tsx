'use client';

import React from "react";
import { motion } from "framer-motion";
import { Camera, Film, Award, Users } from "lucide-react";

const services = [
  { icon: <Camera className="w-8 h-8" />, title: "Comerciais", desc: "Produções para empresas e marcas" },
  { icon: <Film className="w-8 h-8" />, title: "Eventos", desc: "Casamentos, festas e celebrações" },
  { icon: <Award className="w-8 h-8" />, title: "Imobiliário", desc: "Tours virtuais e apresentações" },
  { icon: <Users className="w-8 h-8" />, title: "Corporativo", desc: "Vídeos institucionais e treinamentos" }
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="section-padding bg-[#1d1e20]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-bold text-offwhite mb-6 text-hero">
            Nossos Serviços
          </h2>
          <p className="text-lg text-offwhite max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços audiovisuais para atender suas necessidades específicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-offwhite p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-black mb-4 group-hover:text-gray-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
