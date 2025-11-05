'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/**
 * LinkP
 * - href peut être "/#about", "#about" ou "/other"
 * - onClick permet de fermer un menu parent
 */
function LinkP({ href, children, onClick }) {
  const router = useRouter();

  const navigateToHash = (fullHref) => {
    // extraire path et hash
    const hashIndex = fullHref.indexOf('#');
    const path = hashIndex === -1 ? fullHref : (fullHref.slice(0, hashIndex) || '/');
    const hash = hashIndex === -1 ? '' : fullHref.slice(hashIndex + 1);

    // si chemin différent => naviguer d'abord
    if (path && path !== window.location.pathname) {
      // utiliser router.push puis scroller légèrement après le changement
      router.push(path + (hash ? `#${hash}` : ''));
      // attendre un bref délai pour que le DOM ait le temps de se rendre
      setTimeout(() => {
        if (hash) {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
      return;
    }

    // même path : scroller directement si hash présent
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // mettre à jour l'URL sans recharger
        history.replaceState(null, '', `${path === '/' ? '' : path}#${hash}`);
        return;
      }
      // si élément pas encore présent, on retente après un court délai
      let attempts = 0;
      const interval = setInterval(() => {
        attempts += 1;
        const elRetry = document.getElementById(hash);
        if (elRetry) {
          elRetry.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', `${path === '/' ? '' : path}#${hash}`);
          clearInterval(interval);
        } else if (attempts > 8) {
          clearInterval(interval);
        }
      }, 100);
      return;
    }

    // pas de hash et même path : rien à faire (ou rester sur place)
  };

  const handleNavigate = (e) => {
    e?.preventDefault();
    onClick?.();
    // si href est relatif sans leading slash (ex: "#about"), normaliser
    const normalizedHref = href.startsWith('#') ? `${window.location.pathname}${href}` : href;
    navigateToHash(normalizedHref);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigate();
    }
  };

  return (
    // On garde un <a> pour l'accessibilité ; href réel pour fallback si JS désactivé
    <a
      href={href}
      role="link"
      tabIndex={0}
      onClick={handleNavigate}
      onKeyDown={handleKey}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 cursor-pointer"
    >
      {children}
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-4 flex justify-center bg-gradient-to-b from-pink-400 to-pink-900 sticky top-0 z-50 shadow-lg shadow-pink-500/20">
      <ul className="flex gap-6 items-center">
        <li className="relative">
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="home-submenu"
            className="flex items-center gap-2 bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold hover:scale-105 transition-transform duration-200"
          >
            Home <span className="text-pink-100 text-sm">▾</span>
          </button>

          <div
            id="home-submenu"
            className={`absolute mt-2 right-0 w-44 bg-gradient-to-b from-pink-400 to-pink-900 backdrop-blur-sm rounded shadow-md py-2 transition-transform origin-top-right ${
              open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
            }`}
          >
            <ul className="flex flex-col">
              <li>
                <LinkP href="/#about" onClick={() => setOpen(false)}>
                  <span className="bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold">À propos de moi</span>
                </LinkP>
              </li>
              <li>
                <LinkP href="/#contact" onClick={() => setOpen(false)}>
                  <span className="bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold">Contact</span>
                </LinkP>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link href="/tattoo">
            <p className="bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold hover:scale-105 transition-transform duration-300 cursor-pointer">
              Portfolio tattoo
            </p>
          </Link>
        </li>

        <li>
          <Link href="/dessin">
            <p className="bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold hover:scale-105 transition-transform duration-300 cursor-pointer">
              Portfolio dessins
            </p>
          </Link>
        </li>

        <li>
          <Link href="/craft">
            <p className="bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent font-bold hover:scale-105 transition-transform duration-300 cursor-pointer">
              Craft & Brol
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}