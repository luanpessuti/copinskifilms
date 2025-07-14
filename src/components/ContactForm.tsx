// components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function ContactForm({ service }: { service: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          service,
          message: formData.get('message')
        }),
      });

      if (response.ok) {
        setMessage({ text: 'Mensagem enviada com sucesso!', type: 'success' });
        form.reset();
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      setMessage({ text: 'Erro ao enviar mensagem. Tente novamente.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {message.text && (
        <div className={`p-4 rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message.text}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-[#1d1e20] border border-gray-700 rounded-md focus:ring-2 focus:ring-bordeux focus:border-transparent"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-[#1d1e20] border border-gray-700 rounded-md focus:ring-2 focus:ring-bordeux focus:border-transparent"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 font-medium">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-[#1d1e20] border border-gray-700 rounded-md focus:ring-2 focus:ring-bordeux focus:border-transparent"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-bordeux text-white py-3 px-6 rounded-md font-medium hover:bg-bordeux/90 transition flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : 'Enviar Mensagem'}
      </button>
    </form>
  );
}