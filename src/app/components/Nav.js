'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const router = useRouter();

  const navigateToHash = (fullHref) => {
    // normaliser
    const hashIndex = fullHref.indexOf('#');
    const path = hashIndex === -1 ? fullHref : (fullHref.slice(0, hashIndex) || '/');
    const hash = hashIndex === -1 ? '' : fullHref.slice(hashIndex + 1);

    // si chemin différent, naviguer (router.push) en incluant le hash
    if (path && path !== window.location.pathname) {
      router.push(path + (hash ? `#${hash}` : ''));
      // tenter de scroller après un très court délai pour laisser le rendu se faire
      setTimeout(() => {
        if (hash) {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);
      return;
    }

    // même path : scroller vers l'élément si présent, sinon retenter quelques fois
    if (hash) {
      const tryScroll = () => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', `${path === '/' ? '' : path}#${hash}`);
          return true;
        }
        return false;
      };

      if (tryScroll()) return;

      let attempts = 0;
      const interval = setInterval(() => {
        attempts += 1;
        if (tryScroll() || attempts > 8) clearInterval(interval);
      }, 120);

      return;
    }

    // pas de hash et même path : noop
  };

  const onAnchorClick = (e, href) => {
    e?.preventDefault();
    setOpen(false);
    setPortfolioOpen(false);
    // gérer hrefs relatifs comme "#contact"
    const normalized = href.startsWith('#') ? `${window.location.pathname}${href}` : href;
    navigateToHash(normalized);
  };

  return (
    <nav className="relative bg-gradient-to-b from-pink-400 to-pink-900 sticky top-0 z-50 shadow-lg shadow-pink-500/20">
      {/* Mini logo positioned absolutely to the left */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <Link href="/" aria-label="Accueil" className="flex items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-full bg-white/10 p-1"
            role="img"
            aria-hidden="false"
          >
            <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.12" />
            <path d="M7 12c1.5-2 4.5-2 6 0-1.5 2-4.5 2-6 0z" fill="#fff" fillOpacity="0.95" />
          </svg>
        </Link>
      </div>

      {/* Centered nav content */}
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <ul className="flex gap-6 items-center">
          <li className="relative">
            <button
              type="button"
              onClick={() => { setOpen((s) => !s); setPortfolioOpen(false); }}
              aria-expanded={open}
              aria-controls="home-submenu"
              className="flex items-center gap-2 bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold hover:scale-105 cursor-pointer transition-transform duration-200"
            >
              Home <span className="text-pink-100 text-sm">▾</span>
            </button>

            <div
              id="home-submenu"
              className={`absolute mt-2 -right-2 w-44 bg-gradient-to-b from-pink-400 to-pink-900 backdrop-blur-sm rounded shadow-md py-2 transition-transform origin-top-right ${
                open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
              }`}
            >
              <ul className="flex flex-col">
                <li>
                  {/* ancres gérées inline ; aucun LinkP */}
                  <p
                    role="link"
                    tabIndex={0}
                    onClick={(e) => onAnchorClick(e, '/#about')}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onAnchorClick(e, '/#about'); }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 cursor-pointer"
                  >
                    <span className="bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold">À propos de moi</span>
                  </p>
                </li>
                <li>
                  <p
                    role="link"
                    tabIndex={0}
                    onClick={(e) => onAnchorClick(e, '/#contact')}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onAnchorClick(e, '/#contact'); }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 cursor-pointer"
                  >
                    <span className="bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold">Contact</span>
                  </p>
                </li>
              </ul>
            </div>
          </li>

          {/* Portfolio condensed dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => { setPortfolioOpen((s) => !s); setOpen(false); }}
              aria-expanded={portfolioOpen}
              aria-controls="portfolio-submenu"
              className="flex items-center gap-2 bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold hover:scale-105 cursor-pointer transition-transform duration-200"
            >
              Portfolio <span className="text-pink-100 text-sm">▾</span>
            </button>

            <div
              id="portfolio-submenu"
              className={`absolute mt-2 -right-2 w-44 bg-gradient-to-b from-pink-400 to-pink-900 backdrop-blur-sm rounded shadow-md py-2 transition-transform origin-top-right ${
                portfolioOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
              }`}
            >
              <ul className="flex flex-col">
                <li>
                  <Link href="/tattoo" onClick={() => setPortfolioOpen(false)}>
                    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 cursor-pointer">
                      <span className="bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold">Tattoo réalisé</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/dessin" onClick={() => setPortfolioOpen(false)}>
                    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 cursor-pointer">
                      <span className="bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold">Flash dispo</span>
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link href="/craft" className="px-1">
              <p className="bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold hover:scale-105 transition-transform duration-300 cursor-pointer">
                Craft & Brol
              </p>
            </Link>
          </li>

          <li>
            <Link href="/flash" className="px-1">
              <p className="bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold hover:scale-105 transition-transform duration-300 cursor-pointer">
                Flash dispo
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}