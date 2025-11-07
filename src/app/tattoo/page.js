import Footer from "../components/Footer"
import DomeGallery from "../components/DomeGalleryTa"

export default function Tattoo () {
  return (
    <main className="flex justify-center flex-col bg-gradient-to-t from-dark via-pink-400 to-black">
      <section className="relative w-full h-[100vh] overflow-hidden  ">
        <div>
          <h1 className="text-3xl font-semibold text-center mt-12 mb-12 bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">Portfolio tattoo</h1>
        </div>
          <div style={{ width: '100vw', height: '100vh' }}>
            <DomeGallery />
          </div>
      </section>
      <Footer />
    </main>
  )
}