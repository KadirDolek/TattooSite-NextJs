# Système d'Authentification et CRUD - BaabyAlish

## Vue d'ensemble

Ce projet Next.js intègre un système complet d'authentification admin avec CRUD pour gérer les tattoos et dessins.

## Fonctionnalités

### Authentification
- Connexion admin sécurisée avec JWT
- Cookies HTTP-Only pour la sécurité
- Protection des routes admin

### CRUD Tattoos et Dessins
- **Lecture (GET)** : Publique pour tous les visiteurs
- **Création (POST)** : Réservée aux admins
- **Modification (PUT)** : Réservée aux admins
- **Suppression (DELETE)** : Réservée aux admins

## Structure du Projet

```
src/
├── app/
│   ├── admin/
│   │   └── page.js          # Dashboard admin avec CRUD
│   ├── login/
│   │   └── page.js          # Page de connexion
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/       # POST - Connexion
│   │   │   ├── logout/      # POST - Déconnexion
│   │   │   └── me/          # GET - Utilisateur actuel
│   │   ├── tattoos/
│   │   │   ├── route.js     # GET, POST tattoos
│   │   │   └── [id]/        # PUT, DELETE tattoo
│   │   └── dessins/
│   │       ├── route.js     # GET, POST dessins
│   │       └── [id]/        # PUT, DELETE dessin
│   ├── tattoo/
│   │   └── page.js          # Page publique tattoos
│   └── dessin/
│       └── page.js          # Page publique dessins
└── lib/
    ├── auth.js              # Fonctions d'authentification JWT
    ├── db.js                # Gestion des données (JSON files)
    └── middleware.js        # Protection des routes admin

data/                        # Dossier créé automatiquement
├── users.json              # Utilisateurs (gitignored)
├── tattoos.json            # Tattoos (gitignored)
└── dessins.json            # Dessins (gitignored)
```

## Compte Admin par Défaut

```
Email: admin@baabyalish.com
Mot de passe: admin123
```

**IMPORTANT** : Changez ce mot de passe en production !

## Installation

```bash
npm install
```

## Développement

```bash
# Utiliser webpack (recommandé pour l'instant)
npm run dev -- --webpack

# Ou utiliser Turbopack (peut avoir des problèmes)
npm run dev
```

Le serveur démarre sur [http://localhost:3000](http://localhost:3000)

## Routes Principales

### Pages Publiques
- `/` - Page d'accueil
- `/tattoo` - Portfolio tattoos (données dynamiques)
- `/dessin` - Portfolio dessins/flash (données dynamiques)
- `/login` - Page de connexion admin

### Pages Admin
- `/admin` - Dashboard admin (protégé)

### API Endpoints

#### Authentification
- `POST /api/auth/login` - Connexion
- `POST /api/auth/logout` - Déconnexion
- `GET /api/auth/me` - Informations utilisateur

#### Tattoos
- `GET /api/tattoos` - Liste tous les tattoos (public)
- `POST /api/tattoos` - Ajouter un tattoo (admin)
- `PUT /api/tattoos/[id]` - Modifier un tattoo (admin)
- `DELETE /api/tattoos/[id]` - Supprimer un tattoo (admin)

#### Dessins
- `GET /api/dessins` - Liste tous les dessins (public)
- `POST /api/dessins` - Ajouter un dessin (admin)
- `PUT /api/dessins/[id]` - Modifier un dessin (admin)
- `DELETE /api/dessins/[id]` - Supprimer un dessin (admin)

## Utilisation du Dashboard Admin

1. Accédez à `/login`
2. Connectez-vous avec les identifiants admin
3. Vous êtes redirigé vers `/admin`
4. Utilisez les onglets pour basculer entre Tattoos et Dessins
5. Cliquez sur "Ajouter" pour créer un nouvel élément
6. Utilisez "Modifier" ou "Supprimer" sur chaque carte

## Stockage des Données

Les données sont stockées dans des fichiers JSON dans le dossier `/data`:
- Compatible Vercel (fichiers créés au premier démarrage)
- Les fichiers sont dans `.gitignore` pour la sécurité
- Les images restent dans `/public`

## Variables d'Environnement

Créez un fichier `.env.local` :

```env
# JWT Secret (CHANGEZ EN PRODUCTION!)
JWT_SECRET=baabyalish-super-secret-key-change-me-in-production-2024

# Configuration SendGrid (existante)
SENDGRID_API_KEY=your_key
CONTACT_TO=your_email
CONTACT_FROM=verified_sender
```

## Déploiement Vercel

1. Pushez votre code sur GitHub
2. Connectez votre repo à Vercel
3. Ajoutez `JWT_SECRET` dans les variables d'environnement Vercel
4. Déployez

⚠️ **Note** : Le système de fichiers JSON fonctionne en développement mais pour la production Vercel, il est recommandé d'utiliser une base de données (Vercel Postgres, MongoDB Atlas, etc.) car le système de fichiers est éphémère.

## Sécurité

- Les mots de passe sont hashés avec bcrypt
- Les tokens JWT ont une expiration de 7 jours
- Les cookies sont HTTP-Only
- Protection CSRF avec SameSite
- Middleware de vérification admin sur toutes les routes protégées

## Prochaines Étapes Recommandées

1. **Migration vers une vraie base de données** pour la production
2. **Upload d'images** : Ajouter un système d'upload (Cloudinary, Vercel Blob, etc.)
3. **Changement de mot de passe** : Interface admin pour modifier le mot de passe
4. **Gestion multi-utilisateurs** : Ajouter/supprimer des admins
5. **Pagination** : Pour les grandes collections d'images
6. **Recherche et filtres** : Dans le dashboard admin

## Dépendances Principales

- `next` - Framework React
- `bcryptjs` - Hashage des mots de passe
- `jose` - Gestion JWT
- `tailwindcss` - Styles
- `@use-gesture/react` - Galerie interactive

## Support

Pour toute question, consultez la documentation Next.js ou créez une issue.
