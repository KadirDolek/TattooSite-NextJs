


export default function Main() {

    return(
        <section className="relative w-full h-[100vh] overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none scale-[1.4] -translate-y-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ pointerEvents: 'none' }}
        >
          <source src="./myMelody2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-4xl font-bold bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">
          Welcome to my universe
        </h1>
        <p className="mt-4 text-lg md:text-xl font-bold max-w-2xl bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">
          Explore my creations, tattoos, drawings and crafts in an immersive atmosphere.
        </p>
      </div>
     </section>
    )
}