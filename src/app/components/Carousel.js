'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/artist.jpg',
  '/artist2.jpg',
  '/artist3.jpg',
];

export default function CarouselSection() {
  const [current, setCurrent] = useState(0);

  

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrent((prev)=>(prev +1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='about' className="px-4 py-8">
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl mx-auto mt-6 rounded-xl transition-transform duration-300 hover:scale-102 shadow-[0_0_0px_3px_rgba(255,0,150,0.5)]">
        {/* Description */}
        <div className="flex-1 bg-transparent p-4 md:p-6 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
          <h2 className="md:text-4xl font-bold mb-10 text-pink-600 text-left bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">About me</h2>
          <p className="bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent text-base md:text-[17px] text-left mb-6 font-bold ">
            My name is Alison and I’m a tattoo artist based in Auderghem. <br/> A fan of Sanrio, Pokémon, neo-tribal designs, and the color pink in general (as you can see on this site!), 
          <br/>  I’m also interested in many other forms of art such as sculpture, painting, and crafting.
           <br/><br/> Take a look at my creations and, most importantly, don’t hesitate to book an appointment! ☆
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex-1 h-64 md:h-92 w-full">
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