// components/VideoModal.tsx
'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
  isShort: boolean;
}

export default function VideoModal({ videoUrl, isOpen, onClose, isShort }: VideoModalProps) {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    if (videoUrl) {
      // Extrai o ID do vídeo do URL do YouTube
      const match = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
      setVideoId(match ? match[1] : '');
    }
  }, [videoUrl]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        aria-label="Fechar modal"
      >
        <X className="w-8 h-8" />
      </button>
      
      <div className={`relative ${isShort ? 'w-full max-w-md h-[80vh]' : 'w-full max-w-4xl aspect-video'}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
          className={`w-full h-full ${isShort ? 'rounded-[40px]' : 'rounded-lg'}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}