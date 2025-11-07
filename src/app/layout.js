import { Cinzel } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { Playfair_Display } from "next/font/google";



const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});


export const metadata = {
  title: "BaabyAlish Portfolio",
  description: "Projets et Flash Dispo!",
};

export default function RootLayout({ children }) {
 

  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${playfair.variable} antialiased`}
      >
          <Nav />
        {children}
        
      </body>
    </html>
  );
}
