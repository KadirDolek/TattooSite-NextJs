import Footer from '../components/Footer';

export default function Craft () {

  return (
    <main className="flex justify-center flex-col bg-gradient-to-t from-dark via-pink-400 to-black ">
      <section className="relative w-full h-auto overflow-hidden ">
              <div>
                <h1 className="text-3xl font-semibold text-center mt-12 mb-12 bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">Crafts & Brol</h1>
              </div>
                <div style={{ height: 'auto', position: 'relative' }}>
                
                  {/* Section 1 - Image à gauche */}
                  <div className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12 max-w-7xl mx-auto">
                    <div className="w-full md:w-1/2">
                      <img 
                        src="/dessin1.jpg" 
                        alt="Craft 1" 
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="w-full md:w-1/2 text-white">
                      <h2 className="text-2xl font-bold mb-4">Créations Artisanales</h2>
                      <p className="text-gray-100 leading-relaxed">
                        Découvrez nos créations uniques, faites à la main avec passion et attention aux détails. Chaque pièce raconte une histoire et apporte une touche personnelle à votre quotidien.
                      </p>
                    </div>
                  </div>

                  {/* Section 2 - Image à droite */}
                  <div className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12 max-w-7xl mx-auto">
                    <div className="w-full md:w-1/2">
                      <img 
                        src="/tatoo2.jpg" 
                        alt="Craft 2" 
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="w-full md:w-1/2 text-white">
                      <h2 className="text-2xl font-bold mb-4">Matériaux Durables</h2>
                      <p className="text-gray-100 leading-relaxed">
                        Nous utilisons des matériaux soigneusement sélectionnés pour leur qualité et leur durabilité. Notre engagement pour l'environnement se reflète dans chaque création.
                      </p>
                    </div>
                  </div>

                  {/* Section 3 - Image à gauche */}
                  <div className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12 max-w-7xl mx-auto">
                    <div className="w-full md:w-1/2">
                      <img 
                        src="/dessin3.jpg" 
                        alt="Craft 3" 
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="w-full md:w-1/2 text-white">
                      <h2 className="text-2xl font-bold mb-4">Techniques Traditionnelles</h2>
                      <p className="text-gray-100 leading-relaxed">
                        Nos artisans maîtrisent des techniques ancestrales transmises de génération en génération. Ce savoir-faire garantit l'authenticité et la qualité de nos produits.
                      </p>
                    </div>
                  </div>

                  {/* Section 4 - Image à droite */}
                  <div className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12 max-w-7xl mx-auto">
                    <div className="w-full md:w-1/2">
                      <img 
                        src="/dessin4.jpg" 
                        alt="Craft 4" 
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="w-full md:w-1/2 text-white">
                      <h2 className="text-2xl font-bold mb-4">Personnalisation</h2>
                      <p className="text-gray-100 leading-relaxed">
                        Chaque commande peut être personnalisée selon vos envies. Nous travaillons en étroite collaboration avec vous pour créer la pièce parfaite qui correspond à vos besoins.
                      </p>
                    </div>
                  </div>

                  {/* Section 5 - Image à gauche */}
                  <div className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12 max-w-7xl mx-auto mb-12">
                    <div className="w-full md:w-1/2">
                      <img 
                        src="/dessin5.jpg" 
                        alt="Craft 5" 
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="w-full md:w-1/2 text-white">
                      <h2 className="text-2xl font-bold mb-4">Passion & Expertise</h2>
                      <p className="text-gray-100 leading-relaxed">
                        Notre équipe partage la même passion pour l'artisanat de qualité. Chaque création est le fruit d'années d'expérience et d'un amour inconditionnel pour notre métier.
                      </p>
                    </div>
                  </div>

                </div>
            </section>
            <Footer />
    </main>
  )
}