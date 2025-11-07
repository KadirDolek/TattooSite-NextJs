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
    // './dessin10.jpg',
    // './dessin11.jpg',
    // './dessin12.jpg',
    // './dessin13.jpg',
    // './dessin14.jpg',
    // './dessin15.jpg',
  ];

  const spans = [
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-3 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-3 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="flex justify-center flex-col bg-gradient-to-t from-dark via-pink-400 to-black">
      <section className="relative w-full h-auto overflow-hidden">
        <div>
          <h1 className="text-3xl font-semibold text-center mt-12 mb-12 bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">
            Tous mes dessins réalisés 
          </h1>
          {/* <img className='absolute position translate-y-[-240px] -z-1' src="light2.png" alt="" /> */}
        </div> 
        
        <section className="max-w-6xl mx-auto px-4 py-8 w-full z-index-10">
          <div className="grid grid-cols-5 grid-rows-5 gap-4 h-[800px]">
            {spans.map((span, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br from-pink-400 to-red-300 rounded-xl shadow-xl  ${span} flex items-center justify-center cursor-pointer overflow-hidden`}
                onClick={() => setSelectedImage(images[i])}
              >
                <img
                  src={images[i]}
                  alt={`Dessin ${i + 1}`}
                  className="object-cover h-full w-full"
                />
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Image agrandie"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}

      <Footer />
    </main>
  );
}