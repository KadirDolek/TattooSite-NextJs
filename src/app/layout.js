import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BaabyAlish Portfolio",
  description: "Projets et Flash Dispo!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="p-4 flex justify-center bg-gradient-to-b from-pink-400 to-black">
      <ul className="flex gap-6">
        <li>
          <Link href="/" passHref>
            <p className="bg-gradient-to-br from-red-300 to-pink-400 bg-clip-text text-transparent font-bold hover:scale-115 transition-transform duration-300">
              Home
            </p>
          </Link>
        </li>
        <li>
          <Link href="/tattoo" passHref>
            <p className="bg-gradient-to-br from-red-300 to-pink-400 bg-clip-text text-transparent font-bold hover:scale-115 transition-transform duration-300">
              Portfolio tattoo
            </p>
          </Link>
        </li>
        <li>
          <Link href="/dessin" passHref>
            <p className="bg-gradient-to-br from-red-300 to-pink-400 bg-clip-text text-transparent font-bold hover:scale-115 transition-transform duration-300">
              Portfolio dessins
            </p>
          </Link>
        </li>
        <li>
          <Link href="/craft" passHref>
            <p className="bg-gradient-to-br from-red-300 to-pink-400 bg-clip-text text-transparent font-bold hover:scale-115 transition-transform duration-300">
              Craft & Brol
            </p>
          </Link>
        </li>
      </ul>
    </nav>



        {children}
      </body>
    </html>
  );
}
