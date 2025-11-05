'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState(null);

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
    } catch (err) {
      console.error(err);
      setErrorMsg('Impossible d\'envoyer le message. Réessaie plus tard.');
      setStatus('error');
    } finally {
      // remise à idle visuelle après succès
      if (status === 'success') {
        setTimeout(() => setStatus('idle'), 3000);
      }
    }
  }

  return (
    <footer className="bg-transparent text-gray-200 border-t-3 border-pink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <p className="font-bold text-xl text-white">BaabyAlish@</p>
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
          <nav aria-label="footer navigation" className="flex flex-col md:flex-row md:justify-center gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-300">Navigation</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="/"><p className="text-sm text-gray-400 hover:text-white">Home</p></Link></li>
                <li><Link href="/tattoo"><p className="text-sm text-gray-400 hover:text-white">Portfolio tattoo</p></Link></li>
                <li><Link href="/dessin"><p className="text-sm text-gray-400 hover:text-white">Portfolio dessins</p></Link></li>
                <li><Link href="/craft"><p className="text-sm text-gray-400 hover:text-white">Craft & Brol</p></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300">Aide</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="#contact"><p className="text-sm text-gray-400 hover:text-white">Contact</p></Link></li>
                <li><Link href="/faq"><p className="text-sm text-gray-400 hover:text-white">FAQ</p></Link></li>
                <li><Link href="/privacy"><p className="text-sm text-gray-400 hover:text-white">Privacy</p></Link></li>
              </ul>
            </div>
          </nav>

          {/* Contact form */}
          <div id="contact" className="flex flex-col gap-3">
  <h3 className="text-sm font-semibold text-gray-300">Contact</h3>
  <p className="text-sm text-gray-400">Envoie-moi un message — il arrivera directement dans ma boîte.</p>

  <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-2">
    {/* grille : 1 colonne sur mobile, 2 colonnes à partir de md */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <input
        type="text"
        placeholder="Ton nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
        required
        minLength={2}
      />
      <input
        type="email"
        placeholder="ton@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
        required
      />
    </div>

    <textarea
      placeholder="Ton message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-400 rounded h-24 resize-y focus:outline-none focus:ring-2 focus:ring-pink-400"
      required
      minLength={5}
    />

    {errorMsg && <p className="text-sm text-red-400">{errorMsg}</p>}

    <div className="flex items-center gap-3">
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 disabled:opacity-50"
      >
        {status === 'loading' ? 'Envoi...' : 'Envoyer'}
      </button>

      {status === 'success' && <span className="text-sm text-emerald-400">Message envoyé !</span>}
      {status === 'error' && <span className="text-sm text-red-400">Erreur lors de l'envoi</span>}
    </div>
  </form>
</div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} BaabyAlish. Tous droits réservés. Réalisé par Kadir Dölek</p>
        </div>
      </div>
    </footer>
  );
}