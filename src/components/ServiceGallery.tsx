
'use client';

import { Play} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import VideoModal from './VideoModal';

interface PortfolioItem {
  id: string;
  title: string;
  service: string;
  videoUrl: string;
  thumbnail: string;
  isShort: boolean;
}

const extractVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|shorts\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};


interface ServiceGalleryProps {
  items: PortfolioItem[];
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ items }) => {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; isShort: boolean } | null>(null);

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl">Em breve novos trabalhos serão adicionados aqui.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg aspect-video">
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity">
              <button
                onClick={() => setSelectedVideo({ url: item.videoUrl, isShort: item.isShort })}
                className="bg-bordeux/50 text-white p-4 rounded-full transition-transform hover:scale-110 flex items-center justify-center shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Play className="w-8 h-8" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-medium">{item.title}</h3>
              <span className="text-sm text-gray-300">
                {item.isShort ? 'YouTube Short' : 'Vídeo Completo'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <VideoModal
        videoUrl={selectedVideo?.url || ''}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        isShort={selectedVideo?.isShort || false}
      />
    </>
  );
};

export default ServiceGallery;