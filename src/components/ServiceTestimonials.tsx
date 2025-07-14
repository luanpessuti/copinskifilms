// components/ServiceTestimonials.tsx
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  service: string;
  content: string;
  avatar: string;
}

export default function ServiceTestimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-[#2e2f33] p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-300 italic">"{testimonial.content}"</p>
        </div>
      ))}
    </div>
  );
}