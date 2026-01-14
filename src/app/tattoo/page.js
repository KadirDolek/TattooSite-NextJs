'use client'

import { useState, useEffect } from 'react';
import Footer from "../components/Footer"
import DomeGallery from "../components/DomeGalleryTa"

export default function Tattoo() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTattoos();
  }, []);

  const fetchTattoos = async () => {
    try {
      const response = await fetch('/api/tattoos');
      const data = await response.json();
      setImages(data.tattoos || []);
    } catch (error) {
      console.error('Error fetching tattoos:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="flex justify-center items-center flex-col bg-gradient-to-t from-dark via-pink-400 to-black min-h-screen">
        <div className="text-white text-xl">Chargement...</div>
      </main>
    );
  }

  return (
    <main className="flex justify-center flex-col bg-gradient-to-t from-dark via-pink-400 to-black">
      <section className="relative w-full h-[100vh] overflow-hidden">
        <div>
          <h1 className="text-3xl font-semibold text-center mt-12 mb-12 bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">
            Tattoo Portfolio
          </h1>
        </div>
        <div style={{ width: '100vw', height: '100vh' }}>
          <DomeGallery images={images} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
