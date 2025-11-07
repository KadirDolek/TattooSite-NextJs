'use client'
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Flash() {
  const images = [
    './dessin1.jpg',
    './dessin2.jpg',
    './dessin3.jpg',
    './dessin4.jpg',
    './dessin5.jpg',
    './dessin6.jpg',
    './dessin7.jpg',
    './dessin8.jpg',
    './dessin9.jpg',
    './dessin10.jpg',
    './dessin11.jpg',
    './dessin12.jpg',
    './dessin13.jpg',
    './dessin14.jpg',
    './dessin15.jpg',
  ];

  const spans = [
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-2 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-3 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="flex justify-center flex-col bg-gradient-to-t from-dark via-pink-400 to-black min-h-screen">
      <section className="relative w-full h-auto overflow-hidden px-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-center mt-12 mb-12 bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">
            Tous mes dessins réalisés 
          </h1>
        </div> 
        
        <section className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-[200px] md:auto-rows-[150px]">
            {images.map((image, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br from-pink-400 to-red-300 rounded-xl shadow-xl cursor-pointer overflow-hidden
                ${i === 6 ? 'md:col-span-2 md:row-span-2' : ''}
                ${i === 11 ? 'md:col-span-1 md:row-span-1' : ''}
                ${i === 3 ? 'md:row-span-1 md:col-span-2'  : ''}
                ${i === 8 ? 'md:col-span-2 md:row-span-1'  : ''}`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Dessin ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Image agrandie"
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

      <Footer />
    </main>
  );
}