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
          src="https://images.unsplash.com/photo-1531645881745-b2efaf89e98f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Eduardo Copinski"
          fill
          className="object-cover"
          sizes="100vw"
          style={{ transform: "scaleX(1)" }}
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

        <p className="text-xl md:text-xl bg-black/10 mb-8 leading-snug max-w-4xl font-light px-4 py-2 border rounded-4xl">
          <span className="font-bold">Videomaker</span> com mais de cinco anos de experiência no mercado, ajudo empresas
          e pessoas a realizar produções audiovisuais para comerciais, eventos,
          casamentos, festas, imobiliários entre outros.<br /><br />
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-bordeux" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
            </svg>
            <span>Baseado em Curitiba, PR.</span>
          </span>
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
