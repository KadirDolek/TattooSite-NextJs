import Link from "next/link"



export default function Mosaique() {
    return(
        <section className="max-w-6xl mx-auto px-6 py-8 w-full">
        <h2 className='flex justify-left text-3xl bg-gradient-to-br font-bold from-white to-pink-400 bg-clip-text text-transparent my-12'>Mes dernières créations :</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[200px]">
          {/* Petite */}
          <div className="bg-gradient-to-br from-red-00 to-pink-400 rounded-lg h-full shadow-xl hover:scale-102" aria-hidden="true">
             <Link href="/tattoo" className="">
            <img src="./tatoo11.jpg" className="object-cover w-full rounded-lg h-full" alt="" />
            </Link>
          </div>

          {/* Moyenne */}
          <div className="bg-gradient-to-br from-red-00 to-pink-400 rounded-lg h-full hover:scale-102" aria-hidden="true" >
            <Link href="/flash" className="">
            <img src="./dessin5.jpg" className="object-cover w-full h-full rounded-lg" alt="" />
            </Link>
          </div>

          {/* Grande */}
          <div className="bg-gradient-to-br from-red-00 to-pink-400 rounded-lg h-full col-span-1 row-span-2 hover:scale-102" aria-hidden="true" >
              <Link href="/tattoo" className="">
            <img src="./tatoo5.jpg" className="object-cover w-full rounded-lg h-full" alt="" />
           </Link>
          </div>

          {/* Moyenne */}
          <div className="bg-gradient-to-br from-red-00 to-pink-400 rounded-lg h-full hover:scale-102" aria-hidden="true" >
            <Link href="/flash" className="">
            <img src="./dessin2.jpg" className="object-cover w-full rounded-lg h-full" alt="" />
            </Link>
            </div>
            

          {/* Petite */}
          <div className="bg-gradient-to-br from-red-00 to-pink-400 rounded-lg h-full hover:scale-102" aria-hidden="true" >
            <Link href="/tattoo" className="">
            <img src="./tatoo15.jpg" className="object-cover w-full rounded-lg h-full" alt="" />
            </Link>
          </div>

        </div>
      </section>
    )

}