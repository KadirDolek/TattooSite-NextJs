import Carousel from '../app/components/Carousel';
import Footer from './components/Footer';
import CircularGallery from './components/CircularGallery'


export default function Home() {
  return (
    <main className="flex justify-center flex-col">
     <section className="relative w-full h-[100vh] overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none scale-[1.4] -translate-y-16">
        <iframe
          src="https://www.youtube.com/embed/Ck8sslwkKRk?autoplay=1&mute=1&controls=0&loop=1&playlist=Ck8sslwkKRk&start=13"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
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

      {/* 2x2 grid de 4 divs (vide) */}
      <section className="max-w-6xl mx-auto px-4 py-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden bg-pink-200 h-48 md:h-56" aria-hidden="true">
            <p>Bonjour</p>
          </div>
          <div className="rounded-lg overflow-hidden bg-pink-200 h-48 md:h-56" aria-hidden="true" />
          <div className="rounded-lg overflow-hidden bg-pink-200 h-48 md:h-56" aria-hidden="true" />
          <div className="rounded-lg overflow-hidden bg-pink-200 h-48 md:h-56" aria-hidden="true" />
        </div>
      </section>
      
      <div className='mb-24' style={{ height: '600px', position: 'relative' }}>
        <h2 className='flex justify-center text-3xl bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent mt-12'>Mes dernières créations :</h2> 
        <CircularGallery  bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-8 w-full my-42">
  <div className="rounded-lg overflow-hidden bg-pink-200 md:h-auto flex flex-col items-stretch justify-center p-6 gap-6">
    <h3 className="text-2xl md:text-3xl font-bold text-pink-600">Questions souvent posées</h3>

    <div className="w-full">
      <details className="mb-3 rounded-lg bg-white/80 shadow-sm overflow-hidden">
        <summary className="cursor-pointer list-none px-5 py-4 md:py-5 flex items-center justify-between text-pink-700 font-semibold focus:outline-none focus:ring-2 focus:ring-pink-300">
          <span>Quels types de projets réalisez-vous ?</span>
          <svg className="ml-4 h-5 w-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
          </svg>
        </summary>
        <div className="px-5 pb-5 pt-2 text-gray-700">
          Je réalise des sites vitrines, boutiques en ligne, applications web sur-mesure et intégrations API, tous adaptés à vos besoins et à votre budget.
        </div>
      </details>

      <details className="mb-3 rounded-lg bg-white/80 shadow-sm overflow-hidden">
        <summary className="cursor-pointer list-none px-5 py-4 md:py-5 flex items-center justify-between text-pink-700 font-semibold focus:outline-none focus:ring-2 focus:ring-pink-300">
          <span>Quel est le délai moyen pour un projet ?</span>
          <svg className="ml-4 h-5 w-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
          </svg>
        </summary>
        <div className="px-5 pb-5 pt-2 text-gray-700">
          Un site simple peut prendre 1 à 3 semaines ; un projet plus complet peut demander 6 à 12 semaines. Une estimation précise est fournie après définition du cahier des charges.
        </div>
      </details>

      <details className="mb-3 rounded-lg bg-white/80 shadow-sm overflow-hidden">
        <summary className="cursor-pointer list-none px-5 py-4 md:py-5 flex items-center justify-between text-pink-700 font-semibold focus:outline-none focus:ring-2 focus:ring-pink-300">
          <span>Proposez-vous la maintenance après livraison ?</span>
          <svg className="ml-4 h-5 w-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
          </svg>
        </summary>
        <div className="px-5 pb-5 pt-2 text-gray-700">
          Oui. J'offre des options de maintenance et support pour assurer sécurité, mises à jour et évolutions fonctionnelles selon vos besoins.
        </div>
      </details>
      <details className="mb-3 rounded-lg bg-white/80 shadow-sm overflow-hidden">
        <summary className="cursor-pointer list-none px-5 py-4 md:py-5 flex items-center justify-between text-pink-700 font-semibold focus:outline-none focus:ring-2 focus:ring-pink-300">
          <span>Proposez-vous la maintenance après livraison ?</span>
          <svg className="ml-4 h-5 w-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
          </svg>
        </summary>
        <div className="px-5 pb-5 pt-2 text-gray-700">
          Oui. J'offre des options de maintenance et support pour assurer sécurité, mises à jour et évolutions fonctionnelles selon vos besoins.
        </div>
      </details>
      <details className="mb-3 rounded-lg bg-white/80 shadow-sm overflow-hidden">
        <summary className="cursor-pointer list-none px-5 py-4 md:py-5 flex items-center justify-between text-pink-700 font-semibold focus:outline-none focus:ring-2 focus:ring-pink-300">
          <span>Proposez-vous la maintenance après livraison ?</span>
          <svg className="ml-4 h-5 w-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
          </svg>
        </summary>
        <div className="px-5 pb-5 pt-2 text-gray-700">
          Oui. J'offre des options de maintenance et support pour assurer sécurité, mises à jour et évolutions fonctionnelles selon vos besoins.
        </div>
      </details>
      <details className="mb-3 rounded-lg bg-white/80 shadow-sm overflow-hidden">
        <summary className="cursor-pointer list-none px-5 py-4 md:py-5 flex items-center justify-between text-pink-700 font-semibold focus:outline-none focus:ring-2 focus:ring-pink-300">
          <span>Proposez-vous la maintenance après livraison ?</span>
          <svg className="ml-4 h-5 w-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
          </svg>
        </summary>
        <div className="px-5 pb-5 pt-2 text-gray-700">
          Oui. J'offre des options de maintenance et support pour assurer sécurité, mises à jour et évolutions fonctionnelles selon vos besoins.
        </div>
      </details>
    </div>
  </div>
</section>
      <Footer />
    </main>
     
  )
}