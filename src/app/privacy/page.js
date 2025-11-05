// app/privacy/page.js
export const metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité — informations sur la collecte et le traitement des données',
};

export default function PrivacyPage() {
  const lastUpdated = 'JJ/MM/AAAA'; 
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg ring-1 ring-gray-100 overflow-hidden">
        <header className="px-6 py-8 border-b border-gray-100">
          <h1 className="text-2xl font-semibold text-gray-900">Politique de confidentialité</h1>
          <p className="mt-2 text-sm text-gray-600">
            Cette page décrit les données que nous collectons, pourquoi nous les utilisons et vos droits.
          </p>
        </header>

        <div className="px-6 py-8 prose prose-sm prose-neutral">
          <section>
            <h2 className="text-lg font-medium">Responsable</h2>
            <p>Nom / Raison sociale<br />Adresse complète<br /><a href="mailto:privacy@tonsite.com" className="text-pink-600">privacy@tonsite.com</a></p>
          </section>

          <section>
            <h2 className="text-lg font-medium">Données collectées</h2>
            <ul>
              <li><strong>Contact :</strong> nom, adresse e‑mail, message via formulaire</li>
              <li><strong>Données techniques :</strong> adresse IP, user‑agent, logs serveur</li>
              <li><strong>Cookies :</strong> cookies analytiques et trackers (si activés)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">Finalités et base juridique</h2>
            <ul>
              <li>Répondre aux demandes de contact — <strong>exécution d’une démarche précontractuelle</strong></li>
              <li>Envoyer une newsletter — <strong>consentement</strong></li>
              <li>Analytics pour améliorer le site — <strong>intérêt légitime</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">Destinataires</h2>
            <p>
              Données partagées avec : hébergeur (nom du prestataire), service d’e‑mailing (ex. SendGrid), outils analytics (ex. Google Analytics).
              Pour les transferts hors UE, des garanties appropriées (clauses contractuelles types ou équivalent) sont appliquées lorsque nécessaire.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">Durée de conservation</h2>
            <ul>
              <li>Messages de contact : <strong>2 ans</strong></li>
              <li>Données analytiques agrégées : <strong>24 mois</strong></li>
              <li>Abonnements newsletter : conservés <strong>jusqu’à désinscription</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">Vos droits</h2>
            <p>
              Vous disposez des droits d’accès, rectification, suppression, limitation, portabilité et opposition.
              Pour exercer vos droits : <a href="mailto:privacy@tonsite.com" className="text-pink-600">privacy@tonsite.com</a>.
              Vous pouvez également déposer une réclamation auprès de l’autorité de contrôle compétente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">Cookies</h2>
            <p>
              Nous utilisons des cookies pour le fonctionnement du site et des cookies analytiques pour mesurer et améliorer l’expérience.
              Vous pouvez gérer vos préférences cookies via le bandeau de consentement ou les paramètres de votre navigateur.
              <a href="/cookies" className="ml-1 text-pink-600">Gérer les cookies</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">Mise à jour</h2>
            <p>Dernière mise à jour : <strong>{lastUpdated}</strong></p>
          </section>
        </div>

        <footer className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-xs text-gray-500">
          Ce texte est un modèle à adapter à votre activité et à compléter avec vos prestataires et durées exactes.
        </footer>
      </div>
    </main>
  );
}