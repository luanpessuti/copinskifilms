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
  //social media
  {
    id: 'social-media1',
    title: 'Bar ZéPelin',
    service: 'social-media',
    videoUrl: 'https://www.youtube.com/shorts/QBjNsKBdgWI',
    thumbnail: 'https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: true
  },
  {
    id: 'social-media2',
    title: 'Flora Cozinha Familiar',
    service: 'social-media',
    videoUrl: 'https://www.youtube.com/shorts/52Lx4tqYPK0',
    thumbnail: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: true
  },
  {
    id: 'social-media3',
    title: 'NIUÊ.BAR',
    service: 'social-media',
    videoUrl: 'https://www.youtube.com/shorts/QzCnQen9cf8',
    thumbnail: 'https://images.unsplash.com/photo-1546622891-02c72c1537b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: true
  },
  {
    id: 'social-media4',
    title: 'Bar ZéPelin',
    service: 'social-media',
    videoUrl: 'https://www.youtube.com/shorts/rXcG0R_JjT0',
    thumbnail: 'https://images.unsplash.com/photo-1620219365994-f443a86ea626?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: true
  },
  {
    id: 'social-media5',
    title: 'Feijoada P4',
    service: 'social-media',
    videoUrl: 'https://www.youtube.com/shorts/0WN5g_jZhPQ',
    thumbnail: 'https://images.unsplash.com/photo-1578974721235-ecce3a0d8dcf?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: true
  },
  {
    id: 'social-media6',
    title: 'Feijoada Daôci',
    service: 'social-media',
    videoUrl: 'https://www.youtube.com/shorts/Z7ysVZfCqLI',
    thumbnail: 'https://images.unsplash.com/photo-1651440204296-a79fa9988007?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: true
  },
  {
    id: 'social-media7',
    title: 'Dom Carmelito',
    service: 'social-media',
    videoUrl: 'https://www.youtube.com/shorts/EBfzcNWC72U',
    thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: true
  },
  {
    id: 'social-media8',
    title: 'Dom Carmelito',
    service: 'social-media',
    videoUrl: 'https://www.youtube.com/shorts/HwHK7byfiQY',
    thumbnail: 'https://images.unsplash.com/photo-1581340387428-daa644fbedb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: true
  },
  {
    id: 'social-media9',
    title: 'Flora Cozinha Familiar',
    service: 'social-media',
    videoUrl: 'https://www.youtube.com/shorts/iZIrlox9V2Y',
    thumbnail: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: true
  },
  {
    id: 'social-media10',
    title: 'NIUÊ.BAR',
    service: 'social-media',
    videoUrl: 'https://www.youtube.com/shorts/9bZPwZbrjd4',
    thumbnail: 'https://images.unsplash.com/photo-1749331479860-96ce9e68a725?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isShort: true
  },
];