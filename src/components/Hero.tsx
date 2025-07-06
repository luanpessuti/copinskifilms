'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative h-screen flex items-center justify-start overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="https://blog.sothebysrealty.ae/hubfs/Imported_Blog_Media/5f860961-5e85-459b-b261-410eb3e4ea63-1.jpg"
          alt="Eduardo Copinski"
          fill
          className="object-cover"
          sizes="100vw"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>

      <motion.div
        className="relative z-10 text-left text-white px-4 max-w-2xl ml-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-wider">
          <span className="text-offwhite">COPINSKI</span>{" "}
          <span className="text-offwhite">FILMS</span>
        </h1>

        <p className="text-xl md:text-xl mb-8 leading-snug max-w-4xl font-light">
          <span className="font-bold">Videomaker</span> com mais de cinco anos de experiência no mercado, ajudo empresas
          e pessoas a realizar produções audiovisuais para comerciais, eventos,
          casamentos, festas, imobiliários entre outros.
        </p>

        <p className="text-lg md:text-xl mb-12 text-offwhite border px-4 py-2 w-65 rounded-4xl">
          Baseado em Curitiba, PR.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <a
            href="https://wa.me/5541999094463"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bordeux/90 text-offwhite border-2 border-offwhite px-6 py-3 rounded-4xl font-semibold transition-colors duration-200 hover:bg-ashgray/90 hover:text-bordeux hover:border-bordeux flex items-center justify-center"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
