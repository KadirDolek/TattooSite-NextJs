'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const firstFieldRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      // focus sur le premier champ à l'ouverture
      setTimeout(() => firstFieldRef.current?.focus(), 0);
      // empêcher le scroll du body quand modal ouvert
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isModalOpen]);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Merci de remplir tous les champs.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data?.error || 'Erreur serveur');
        setStatus('error');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');

      // fermer le modal après un court délai pour laisser l'utilisateur voir le succès
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus('idle');
      }, 1400);
    } catch (err) {
      console.error(err);
      setErrorMsg("Impossible d'envoyer le message. Réessaie plus tard.");
      setStatus('error');
    }
  }

  return (
    <>
      <footer id='contact' className="bg-transparent text-gray-200 border-t-3 border-pink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <Link href="/">
                <p className="font-bold text-xl text-pink-200">@BaabyAlish</p>
              </Link>
              <p className="text-sm text-gray-400 max-w-sm">
                Portfolio & créations. Disponible pour commandes et collaborations.
              </p>
              <div className="flex space-x-3">
                <a href="https://instagram.com/tonprofil" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-md bg-gray-800 hover:bg-gray-700">
                  <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </a>
                <a href="https://twitter.com/tonprofil" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-md bg-gray-800 hover:bg-gray-700">
                  <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20 7.5c-.6.3-1.2.5-1.9.6a3.3 3.3 0 0 0 1.4-1.8 6.6 6.6 0 0 1-2.1.8 3.3 3.3 0 0 0-5.6 3 9.4 9.4 0 0 1-6.8-3.4 3.3 3.3 0 0 0 1 4.4c-.5 0-1-.1-1.4-.4 0 1.6 1.2 3 2.7 3.3a3.3 3.3 0 0 1-1.5.1 3.3 3.3 0 0 0 3.1 2.3 6.6 6.6 0 0 1-4.1 1.4A6.9 6.9 0 0 1 3 19.2a9.4 9.4 0 0 0 5.1 1.5c6.1 0 9.4-5 9.4-9.4v-.4c.6-.4 1.1-1 1.5-1.6z" />
                  </svg>
                </a>
                <a href="mailto:ton@mail@exemple.com" aria-label="Email" className="p-2 rounded-md bg-gray-800 hover:bg-gray-700">
                  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11zm2.2 0L12 11.3l7.8-4.8H4.2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <nav aria-label="footer navigation"  className="flex flex-col md:flex-row md:justify-center gap-6">
              <div>
                <h3 className="text-sm font-semibold text-pink-200">Navigation</h3>
                <ul className="mt-3 space-y-2">
                  <li><Link href="/"><p className="text-sm text-gray-400 hover:text-white">Home</p></Link></li>
                  <li><Link href="/tattoo"><p className="text-sm text-gray-400 hover:text-white">Portfolio tattoo</p></Link></li>
                  <li><Link href="/flash"><p className="text-sm text-gray-400 hover:text-white">Portfolio dessins</p></Link></li>
                  <li><Link href="/craft"><p className="text-sm text-gray-400 hover:text-white">Craft & Brol</p></Link></li>
                  <li><Link href="/dessin"><p className="text-sm text-gray-400 hover:text-white">Mes flashs</p></Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-pink-200">Aide</h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Contact
                    </button>
                  </li>
                  <li><Link href="/faq"><p className="text-sm text-gray-400 hover:text-white">FAQ</p></Link></li>
                  <li><Link href="/privacy"><p className="text-sm text-gray-400 hover:text-white">Privacy</p></Link></li>
                </ul>
              </div>
            </nav>

            {/* petit rappel/call to action */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-pink-200">Contact</h3>
              <p className="text-sm text-gray-400">Envoie-moi un message — il arrivera directement dans ma boîte.</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-2 inline-block px-4 py-2 bg-gradient-to-b from-pink-400 to-pink-900 text-white rounded hover:bg-pink-600 cursor-pointer text-sm text-center"
              >
                Ouvrir le formulaire
              </button>
            </div>
          </div>

          <div className="mt-8  pt-6 flex flex-col md:flex-row items-center justify-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} BaabyAlish. Tous droits réservés. Réalisé par Kadir Dölek</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          {/* modal panel */}
          <div className="relative w-full max-w-lg mx-4 bg-gradient-to-b from-pink-400 to-pink-900  rounded-lg shadow-xl transform transition-all scale-100">
            <div className="px-6 py-5">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white">Contact</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white rounded p-1"
                  aria-label="Fermer"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-white mt-2">Envoie-moi un message — il arrivera directement dans ma boîte.</p>

              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <input
                    ref={firstFieldRef}
                    type="text"
                    placeholder="Ton nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-pink-200 text-gray-800 placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                    required
                    minLength={2}
                  />
                  <input
                    type="email"
                    placeholder="ton@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-pink-200 text-gray-800 placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                    required
                  />
                </div>

                <textarea
                  placeholder="Ton message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-pink-200 text-gray-800 placeholder-gray-400 rounded h-28 resize-y focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                  minLength={5}
                />

                {errorMsg && <p className="text-sm text-red-400">{errorMsg}</p>}

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-4 py-2 bg-gradient-to-b from-pink-400 to-pink-900 text-white rounded hover:bg-pink-600 disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Envoi...' : 'Envoyer'}
                  </button>

                  {status === 'success' && <span className="text-sm text-emerald-400">Message envoyé !</span>}
                  {status === 'error' && <span className="text-sm text-red-400">Erreur lors de l'envoi</span>}

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="ml-auto text-sm text-gray-400 hover:text-white"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}