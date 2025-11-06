'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/doggo.jpg',
  '/reed.jpg',
  '/leaf.jpg',
];

export default function CarouselSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='about' className="px-4 py-8">
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl mx-auto mt-6 rounded-xl transition-transform duration-300 hover:scale-102 shadow-[0_0_0px_3px_rgba(255,0,150,0.5)]">
        {/* Description */}
        <div className="flex-1 bg-transparent p-4 md:p-6 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-600 text-center bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">A propos de moi</h2>
          <p className="bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent text-base md:text-lg text-center mb-6 ">
            Ceci est un espace pour la description. Vous pouvez y ajouter du texte explicatif, des détails ou tout autre contenu pertinent.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex-1 h-64 md:h-72 w-full">
          <Image
            src={images[current]}
            alt={`Image ${current + 1}`}
            fill
            className="object-cover rounded-b-xl md:rounded-r-xl md:rounded-bl-none z-0"
          />
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          </div>
        </div>
      </div>
    </section>
  );
}