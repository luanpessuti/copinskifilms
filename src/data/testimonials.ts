// data/testimonials.ts
interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  service: string; // deve corresponder aos slugs dos serviços
  content: string;
  avatar: string;
  rating: number; // de 1 a 5
  date?: string;
  videoUrl?: string; // opcional - para depoimentos em vídeo
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Silva',
    role: 'Diretor de Marketing',
    company: 'Empresa X',
    service: 'corporativo',
    content: 'O trabalho realizado na produção do nosso vídeo institucional superou todas as expectativas. Profissionalismo e qualidade excepcionais!',
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    rating: 5,
    date: '15/03/2023'
  },
  {
    id: '2',
    name: 'Ana Paula',
    role: 'Social Media Manager',
    company: 'Marca Y',
    service: 'social-media',
    content: 'Os vídeos produzidos para nossas redes sociais aumentaram nosso engajamento em 300%. Criativos e perfeitos para cada plataforma!',
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VvfGVufDB8fDB8fHww",
    rating: 5,
    date: '22/07/2023'
  },
  {
    id: '3',
    name: 'Camila e Jheannyto',
    role: 'Noivos',
    service: 'casamentos',
    content: 'Captaram cada momento especial do nosso dia com sensibilidade e qualidade incríveis. Recomendamos para qualquer casal!',
    avatar: "https://images.unsplash.com/photo-1501901609772-df0848060b33?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhc2FsfGVufDB8fDB8fHww",
    rating: 5,
    videoUrl: 'https://youtube.com/exemplo-depoimento',
    date: '10/11/2023'
  },
  {
    id: '4',
    name: 'Mariana Costa',
    role: 'Gerente de Vendas',
    company: 'Imobiliária Luxo',
    service: 'imobiliario',
    content: 'Os tours virtuais que produziram para nossos imóveis premium foram decisivos para fechar vários negócios. Qualidade cinematográfica!',
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG11bGhlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4,
    date: '05/01/2024'
  },
  {
    id: '5',
    name: 'Sandra Oliveira',
    role: 'Organizadora de Eventos',
    service: 'festas',
    content: 'A cobertura do nosso evento foi impecável. Capturaram a essência da festa e todos os detalhes que faziam parte da nossa celebração.',
    avatar: "https://images.unsplash.com/photo-1592621385645-e41659e8aabe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG11bGhlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 5,
    date: '18/08/2023'
  },
  {
    id: '6',
    name: 'Ricardo Almeida',
    role: 'CEO',
    company: 'Startup Tech',
    service: 'corporativo',
    content: 'Os vídeos de treinamento para nossa equipe ficaram perfeitos. Conseguiram traduzir conceitos complexos de forma simples e atraente.',
    avatar: "https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VvfGVufDB8fDB8fHww",
    rating: 5,
    date: '30/09/2023'
  },
  // Adicione mais depoimentos conforme necessário
];