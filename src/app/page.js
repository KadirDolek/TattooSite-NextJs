import Carousel from '../app/components/Carousel';


export default function Home() {
  return (
    <main className="flex justify-center flex-col">
     <section className="relative w-full h-[550px] overflow-hidden">
  {/* Vidéo YouTube en arrière-plan */}
  
  {/* Vidéo YouTube en arrière-plan (fixe) */}
  <div className="fixed inset-0 -z-10 pointer-events-none scale-[1.4] -translate-y-16">
    <iframe
      src="https://www.youtube.com/embed/Ck8sslwkKRk?autoplay=1&mute=1&controls=0&loop=1&playlist=Ck8sslwkKRk&start=13"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/80" />
  </div>

  {/* Texte au-dessus de la vidéo */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 className="text-4xl md:text-4xl font-bold bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">
      Bienvenue dans mon univers
    </h1>
    <p className="mt-4 text-lg md:text-xl font-bold max-w-2xl bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">
      Explore mes créations, tatouages, dessins et crafts dans une ambiance immersive.
    </p>
  </div>
</section>
      <Carousel />  
    </main>
  )
}