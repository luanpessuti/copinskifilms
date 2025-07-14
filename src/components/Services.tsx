'use client';

import React from "react";
import { motion } from "framer-motion";
import { Users, Camera, Heart, PartyPopper, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Vídeos Corporativos",
    desc: "Institucionais, treinamentos e apresentações empresariais",
    slug: "corporativo",
    image: "https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Social Media",
    desc: "Conteúdos dinâmicos e envolventes para redes sociais",
    slug: "social-media",
    image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Casamentos",
    desc: "Registros emocionantes de cerimônias e recepções",
    slug: "casamentos",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: <PartyPopper className="w-8 h-8" />,
    title: "Festas",
    desc: "Cobertura completa de aniversários e celebrações",
    slug: "festas",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Imobiliário",
    desc: "Vídeos de alta qualidade para imóveis e empreendimentos",
    slug: "imobiliario",
    image: "https://images.unsplash.com/photo-1695937881958-d17f02448575?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
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
            Clique em um serviço para ver nosso portfólio específico de vídeos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={`/servicos/${service.slug}`}>
              <motion.div
                className="bg-offwhite rounded-lg shadow-lg hover:shadow-xl transition-shadow group cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 left-4 p-3 bg-white/90 rounded-full text-black group-hover:text-gray-600 transition-colors">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <span className="inline-block text-bordeux font-semibold underline underline-offset-4 group-hover:text-primary">
                    Ver portfólio
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}