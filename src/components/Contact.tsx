'use client';

import React from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="section-padding bg-ashgray text-primary"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-bold mb-6 text-hero">
            Entre em Contato
          </h2>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            Pronto para dar vida ao seu projeto? Vamos conversar e criar algo incrível juntos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Esquerda: Informações */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full">
              <h3 className="text-2xl font-bold mb-6">Vamos conversar</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone / Whatsapp</p>
                    <p className="text-bordeux">(41)99909-4463</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-bordeux">@copinskifilms</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-bordeux">contato@copinskifilms.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-bordeux">Curitiba, PR</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Logo: só aparece em telas grandes */}
            <div className="w-full justify-start mt-5 hidden lg:flex">
              <div className="relative h-80 w-auto">
                <Image
                  src="/logocopinski.avif"
                  alt="Copinski Films Logo"
                  width={350}
                  height={150}
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Direita: Formulário */}
          <motion.div
            className="bg-white/5 p-8 rounded-lg flex items-center h-fit border border-white/20 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6 w-full">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tipo de Projeto</label>
                <select
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 transition-colors"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="casamento">Casamento</option>
                  <option value="comercial">Comercial</option>
                  <option value="evento">Evento</option>
                  <option value="corporativo">Corporativo</option>
                  <option value="imobiliario">Imobiliário</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="Conte-nos mais sobre seu projeto..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary bg-white text-black hover:bg-bordeux"
                onClick={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget.form;

                  if (!form) {
                    alert("Erro interno: formulário não encontrado.");
                    return;
                  }

                  try {
                    const response = await fetch('/api/submit-form', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        nome: form.nome.value,
                        email: form.email.value,
                        tipo: form.tipo.value,
                        mensagem: form.mensagem.value
                      })
                    });

                    if (response.ok) {
                      alert("Mensagem enviada com sucesso!");
                      form.reset();
                    } else {
                      throw new Error('Falha no envio');
                    }
                  } catch (error) {
                    alert("Erro ao enviar mensagem. Tente novamente.");
                  }
                }}
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
        {/* Logo: só aparece em mobile */}
        <div className="w-full flex justify-center mt-8 lg:hidden">
          <div className="relative h-50 w-100">
            <Image
              src="/logocopinski.avif"
              alt="Copinski Films Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 40vw, 100px"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
