'use client';

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marina Silva",
    role: "Noiva",
    text: "Eduardo capturou cada momento especial do nosso casamento. O resultado foi incrível!",
    rating: 5
  },
  {
    name: "João Restaurante",
    role: "Empresário",
    text: "O vídeo comercial aumentou muito nossa visibilidade. Trabalho profissional e criativo.",
    rating: 5
  },
  {
    name: "Ana Imóveis",
    role: "Corretora",
    text: "Os tours virtuais ajudaram muito nas vendas. Qualidade excepcional!",
    rating: 5
  }
];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </motion.section>
  );
}
