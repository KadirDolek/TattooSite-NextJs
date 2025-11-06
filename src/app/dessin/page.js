import Footer from "../components/Footer"
import DomeGallery from "../components/DomeGallery"

export default function Dessin () {
  return (
    <main className="flex justify-center flex-col">
      <section className="relative w-full h-[100vh] overflow-hidden">
        <div>
          <h1 className="text-3xl font-semibold text-center mt-12 bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">Portfolio dessins</h1>
        </div>
          <div style={{ width: '100vw', height: '100vh' }}>
            <DomeGallery />
          </div>
      </section>
      <Footer />
    </main>
  )
}