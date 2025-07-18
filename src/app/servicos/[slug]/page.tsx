import { services } from '@/data/services';
import { portfolioItems } from '@/data/portfolio';
import { testimonials } from '@/data/testimonials';
import ServiceGallery from '@/components/ServiceGallery';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import ContactForm from '@/components/ContactForm';
import { ChevronRight, Check } from 'lucide-react';
import NavbarServices from '@/components/NavbarServices';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

/* -------------------------------------------------- */
/* 1. generateMetadata — recebe params como Promise   */
/* -------------------------------------------------- */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string | string[] | undefined }> }
): Promise<Metadata> {
  const { slug } = await params;                         // ← resolvemos aqui
  const service = services.find(s => s.slug === slug);

  return {
    title: `${service?.title ?? 'Serviço'} | Copinski Films`,
    description: service?.desc,
    openGraph: { images: [`/images/services/${service?.slug}.jpg`] },
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string | string[] | undefined }> }
) {
  const { slug } = await params;                         // ← resolve Promise
  const cleanSlug = Array.isArray(slug) ? slug[0] : slug;

  const service = services.find(s => s.slug === cleanSlug);
  const servicePortfolio = portfolioItems.filter(p => p.service === cleanSlug);
  const serviceTestimonials = testimonials.filter(t => t.service === cleanSlug);

  /* slug inválido ---------------------------------- */
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Serviço não encontrado</h1>
          <Link href="/servicos" className="mt-6 inline-flex items-center text-bordeux font-medium">
            Ver todos os serviços <ChevronRight className="ml-1" />
          </Link>
        </div>
      </div>
    );
  }


  // ---------- Conteúdo da página ----------
  return (
    <div className="bg-[#25262a] text-offwhite">
      <NavbarServices />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/60" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">{service.longDesc}</p>
            <a
              href="#contato"
              className="inline-flex items-center bg-bordeux text-white px-6 py-3 rounded-full font-medium hover:bg-bordeux/90 transition"
            >
              Solicitar Orçamento <ChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">
            Nosso portfólio
          </h2>
          <ServiceGallery items={servicePortfolio} />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-[#1d1e20]">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">
            O que oferecemos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#2e2f33] p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-bordeux/20 p-2 rounded-full mr-4">
                    <Check className="text-bordeux w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature}</h3>
                </div>
                <p className="text-gray-300">
                  Descrição detalhada deste serviço específico e seus benefícios.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {serviceTestimonials.length > 0 && (
        <section className="py-16 md:py-24 bg-[#25262a]">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-12 text-center">
              O que nossos clientes dizem
            </h2>
            {typeof window !== 'undefined' && (
              <Link href="#contato">
                <a className="text-bordeux underline">Fale conosco</a>
              </Link>
            )}
            <ServiceTestimonials testimonials={serviceTestimonials} />
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contato" className="py-16 md:py-24 bg-[#1d1e20]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#25262a] p-8 md:p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Solicite um orçamento</h2>
            <p className="text-xl mb-8">
              Preencha o formulário abaixo e entraremos em contato para discutir
              seu projeto.
            </p>
            <ContactForm service={service.title} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
