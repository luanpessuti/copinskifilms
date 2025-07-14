'use client';

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Marina Silva",
    role: "Noiva",
    text: "Eduardo capturou cada momento especial do nosso casamento. O resultado foi incrível!",
    rating: 5
  },
  {
    name: "João Goularte",
    role: "Empresário",
    text: "O vídeo comercial aumentou muito nossa visibilidade. Trabalho profissional e criativo.",
    rating: 5
  },
  {
    name: "Ana Clara",
    role: "Corretora",
    text: "Os tours virtuais ajudaram muito nas vendas. Qualidade excepcional!",
    rating: 5
  }
];

// Array de logos (1 a 26)
const logos = Array.from({ length: 26 }, (_, i) => `/images/logo${i + 1}.png`);

// Duplicamos o array para criar um efeito contínuo sem pausas
const duplicatedLogos = [...logos, ...logos];

export default function Testimonials() {
  return (
    <motion.section
      className="section-padding bg-bordeux"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-offwhite mb-6 text-hero">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-offwhite p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-primary mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-black">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seção de Logos em Esteira */}
        <div className="text-center mb-12 overflow-hidden">
          <h3 className="text-2xl md:text-5xl font-bold text-offwhite mb-16">
            Marcas que já trabalharam conosco
          </h3>
          
            <div className="relative w-full h-40 md:h-48">
            {/* Primeira esteira */}
            <motion.div
              className="absolute top-0 left-0 flex items-center gap-8 md:gap-12"
              animate={{
              x: ["0%", "-100%"],
              }}
              transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={120}
                height={60}
                className="object-contain h-16 md:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              ))}
            </motion.div>

            {/* Segunda esteira (mais separada da primeira) */}
            <motion.div
              className="absolute left-0 flex items-center gap-8 md:gap-12"
              style={{ top: "60%" }}
              animate={{
              x: ["-100%", "0%"],
              }}
              transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={120}
                height={60}
                className="object-contain h-16 md:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}