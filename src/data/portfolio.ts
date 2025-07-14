// data/portfolio.ts
interface PortfolioItem {
  id: string;
  title: string;
  service: string;
  videoUrl: string;
  thumbnail: string;
  isShort: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'corp1',
    title: 'Hotel San juan',
    service: 'corporativo',
    videoUrl: 'https://youtu.be/v1svJDEKL_Q',
    thumbnail: 'https://images.unsplash.com/photo-1596571553216-948cbfc9b2e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  {
    id: 'corp2',
    title: 'Laquila Advogados',
    service: 'corporativo',
    videoUrl: 'https://youtube.com/shorts/rzK13JlIaNk',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: true
  },
  {
    id: 'corp3',
    title: 'Renner Coatings',
    service: 'corporativo',
    videoUrl: 'https://www.youtube.com/watch?v=0YuzvYhOQIs&list=TLGGGQMGUInZQLYxNDA3MjAyNQ ',
    thumbnail: 'https://images.unsplash.com/photo-1456086272160-b28b0645b729?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  {
    id: 'corp4',
    title: 'Fábrica Font Life',
    service: 'corporativo',
    videoUrl: 'https://www.youtube.com/watch?v=cCjqBkgxO4E&list=TLGGEEx2eUvS-l4xNDA3MjAyNQ ',
    thumbnail: 'https://images.unsplash.com/photo-1623103275607-9c84fecf8d16?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  {
    id: 'corp5',
    title: 'Maha 3D',
    service: 'corporativo',
    videoUrl: 'https://www.youtube.com/watch?v=3pTDRD-hpi4&list=TLGGAX2PqJu5ww8xNDA3MjAyNQ',
    thumbnail: 'https://images.unsplash.com/photo-1642969164999-979483e21601?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  //casamento
  {
    id: 'casamento1',
    title: 'Camila & Jheannyto',
    service: 'casamentos',
    videoUrl: 'https://www.youtube.com/watch?v=tHbMNt1FsIc',
    thumbnail: 'https://images.unsplash.com/photo-1524777313293-86d2ab467344?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  {
    id: 'casamento2',
    title: 'Mel e Lucas',
    service: 'casamentos',
    videoUrl: 'https://www.youtube.com/watch?v=vz5V5Z0vIuk',
    thumbnail: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  {
    id: 'casamento3',
    title: 'Vitória e Marco',
    service: 'casamentos',
    videoUrl: 'https://youtu.be/3aeKEoaUW9o',
    thumbnail: 'https://images.unsplash.com/photo-1498979237786-9c35706bd45e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  {
    id: 'casamento4',
    title: 'Cindie e Marcio',
    service: 'casamentos',
    videoUrl: 'https://youtu.be/vB1JH3QNV3Q',
    thumbnail: 'https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  {
    id: 'casamento5',
    title: 'Eduarda e Maurício',
    service: 'casamentos',
    videoUrl: 'https://youtu.be/YCAvaQdP4QM',
    thumbnail: 'https://images.unsplash.com/photo-1595407753234-0882f1e77954?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  //festas
  {
    id: 'festa1',
    title: 'PUC In RIO',
    service: 'festas',
    videoUrl: 'https://www.youtube.com/shorts/bjlu-cJDW7s?feature=share',
    thumbnail: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: true
  },
  {
    id: 'festa2',
    title: 'FILET C7',
    service: 'festas',
    videoUrl: 'https://www.youtube.com/watch?v=Smp2q4UzvOA',
    thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  //imobiliario
  {
    id: 'imobiliario1',
    title: 'J8 Imóveis',
    service: 'imobiliario',
    videoUrl: 'https://www.youtube.com/watch?v=PXUtkdD8twI&list=TLGGXe_TPpZUko0xNDA3MjAyNQ',
    thumbnail: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  {
    id: 'imobiliario2',
    title: 'J8 Imóveis',
    service: 'imobiliario',
    videoUrl: 'https://www.youtube.com/watch?v=GuftdLUtgxM&list=TLGG9kBr2zQGIfcxNDA3MjAyNQ',
    thumbnail: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  {
    id: 'imobiliario3',
    title: 'J8 Imóveis',
    service: 'imobiliario',
    videoUrl: 'https://www.youtube.com/watch?v=iAlNSEl72zs&list=TLGGVIKIAJiS4bUxNDA3MjAyNQ',
    thumbnail: 'https://images.unsplash.com/photo-1629236714859-3a1ec2d8f6c3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  {
    id: 'imobiliario4',
    title: 'J8 Imóveis',
    service: 'imobiliario',
    videoUrl: 'https://www.youtube.com/watch?v=3OY7M1z83g8&list=TLGGwvujbCWVSrgxNDA3MjAyNQ&t=1s',
    thumbnail: 'https://images.unsplash.com/photo-1524026986132-000404263b59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
  {
    id: 'imobiliario5',
    title: 'J8 Imóveis',
    service: 'imobiliario',
    videoUrl: 'https://www.youtube.com/watch?v=fEXjQyxbFuI&list=TLGGG2B-ssFLRMgxNDA3MjAyNQ',
    thumbnail: 'https://images.unsplash.com/photo-1602497485099-e41a116a272c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
 {
    id: 'imobiliario6',
    title: 'J8 Imóveis',
    service: 'imobiliario',
    videoUrl: 'https://www.youtube.com/watch?v=ym8e2c7pIOM&list=TLGG5YsNc6TrBR0xNDA3MjAyNQ',
    thumbnail: 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: false
  },
];