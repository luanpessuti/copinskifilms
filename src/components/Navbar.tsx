"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-offwhite backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center">
            <Image
              src="/logocopinski.avif"
              alt="Copinski Films Logo"
              width={120}
              height={50}
              className="mt-4 h-auto w-auto"
              priority
            />
          </a>

          <div className="hidden md:flex space-x-8">
            {[
              { label: "Início", href: "home" },
              { label: "Sobre", href: "about" },
              { label: "Serviços", href: "services" },
              { label: "Contato", href: "contact" },
            ].map(({ label, href }, i) => (
              <a
                key={i}
                href={`#${href}`}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <button className="md:hidden p-2 bg-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 py-4 border-t border-gray-200" : "max-h-0 opacity-0 py-0 border-t-0"
            }`}
        >
          <div className="flex flex-col space-y-4">
            {[
              { label: "Início", href: "home" },
              { label: "Sobre", href: "about" },
              { label: "Serviços", href: "services" },
              { label: "Contato", href: "contact" },
            ].map(({ label, href }, i) => (
              <a
                key={i}
                href={`#${href}`}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
