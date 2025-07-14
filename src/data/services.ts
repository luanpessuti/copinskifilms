// data/services.ts
import { Users, Camera, Heart, PartyPopper, Award } from "lucide-react";

interface Service {
  slug: string;
  title: string;
  desc: string;
  longDesc?: string;
  features: string[];
  icon: React.ElementType;
  image: string;
  cardImage: string;
}

export const services: Service[] = [
  {
    slug: "corporativo",
    title: "Vídeos Corporativos",
    desc: "Institucionais, treinamentos e apresentações empresariais",
    longDesc: "Produção de vídeos profissionais para empresas com foco em comunicação estratégica. Desenvolvemos desde vídeos institucionais até treinamentos corporativos e vídeos para redes sociais, sempre alinhados à identidade visual da sua marca.",
    features: [
       "Vídeos institucionais (formato tradicional)",
      "Shorts para redes sociais",
      "Treinamentos corporativos",
      "Vídeos para LinkedIn",
      "Conteúdo para múltiplas plataformas"
    ],
    icon: Users,
    image: "https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    cardImage: "https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
  },
  {
    slug: "social-media",
    title: "Social Media",
    desc: "Conteúdos dinâmicos e envolventes para redes sociais",
    longDesc: "Criação de conteúdo audiovisual otimizado para cada plataforma social. Produzimos vídeos curtos, reels, stories e conteúdos específicos para aumentar o engajamento e fortalecer sua presença digital.",
    features: [
      "Reels e Shorts",
      "Stories criativos",
      "Vídeos para feed",
      "Animações simples",
      "Edição para plataformas específicas"
    ],
    icon: Camera,
    image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardImage: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    slug: "casamentos",
    title: "Casamentos",
    desc: "Registros emocionantes de cerimônias e recepções",
    longDesc: "Cobertura completa do seu grande dia, desde os preparativos até a festa. Captamos cada momento especial com sensibilidade artística e técnica apurada, transformando memórias em filmes emocionantes.",
    features: [
      "Cobertura completa",
      "Vídeo teaser para redes sociais",
      "Edição cinematográfica",
      "Álbum digital",
      "Entrega rápida"
    ],
    icon: Heart,
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    slug: "festas",
    title: "Festas",
    desc: "Cobertura completa de aniversários e celebrações",
    longDesc: "Registro profissional de seus eventos especiais, captando a essência e a emoção de cada momento. Produzimos vídeos dinâmicos e editados com técnicas cinematográficas para reviver cada instante.",
    features: [
      "Cobertura de eventos",
      "Vídeos para redes sociais",
      "Edição criativa",
      "Montagem de highlights",
      "Entrega em múltiplos formatos"
    ],
    icon: PartyPopper,
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    cardImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    slug: "imobiliario",
    title: "Imobiliário",
    desc: "Vídeos de alta qualidade para imóveis e empreendimentos",
    longDesc: "Produção de vídeos imobiliários que destacam os melhores atributos de cada propriedade. Utilizamos técnicas profissionais para criar tours virtuais e vídeos promocionais que aumentam o interesse e o valor percebido dos imóveis.",
    features: [
      "Tours virtuais",
      "Vídeos promocionais",
      "Fotografia profissional",
      "Edição com informações técnicas",
      "Versões para diferentes plataformas"
    ],
    icon: Award,
    image: "https://images.unsplash.com/photo-1695937881958-d17f02448575?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardImage: "https://images.unsplash.com/photo-1695937881958-d17f02448575?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// Export auxiliar para o componente de serviços
export const servicesForComponent = services.map(service => ({
  icon: service.icon,
  title: service.title,
  desc: service.desc,
  slug: service.slug,
  image: service.cardImage
}));