import Footer from '../components/Footer';



export default function Flash () {

  const images = [
  '/images/dessin1.png',
  '/images/dessin2.png',
  '/images/dessin3.png',
  // ... jusqu’à 17 images
];


  return (
    <main className="flex justify-center flex-col">
      <section className="relative w-full h-auto overflow-hidden">
              <div>
                <h1 className="text-3xl font-semibold text-center mt-12 mb-12 bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">Tous mes flash dispos !</h1>
              </div>
                <section className="max-w-6xl mx-auto px-4 py-8 w-full">
  <div className="grid grid-cols-5 grid-rows-5 gap-4 h-[800px]">
    {[
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
      

    ].map((span, i) => (
      <div
        key={i}
        className={`bg-gradient-to-br from-pink-200 to-red-300 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-135 ${span} flex items-center justify-center`}
      >
        <img
          src={images[i]}
          alt={`Dessin ${i + 1}`}
          className="object-contain h-full w-full p-4"
        />

      </div>
    ))}
  </div>
</section>
            </section>
            <Footer />
    </main>
  )
}