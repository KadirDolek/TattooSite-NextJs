
export const metadata = {
  title: 'FAQ',
  description: 'Foire aux questions — portfolio, commandes, contact',
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <div className="max-w-4xl mx-auto print:max-w-full">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">FAQ</h1>
          <p className="text-sm text-gray-600 mt-1">Questions fréquentes — portfolio, commandes et contact</p>
        </header>

        <article className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">Général</h2>
            <dl className="space-y-2 text-gray-800">
              <div>
                <dt className="font-medium">Qu’est‑ce que ce site présente ?</dt>
                <dd>Un portfolio présentant tatouages, dessins et créations artisanales de l’artiste, avec galeries, infos contact et possibilité de commande.</dd>
              </div>
              <div>
                <dt className="font-medium">Comment prendre contact ?</dt>
                <dd>Utilise le formulaire de contact sur le site ou l’adresse e‑mail indiquée dans le footer. Les demandes sont traitées sous 48–72 heures en général.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Commandes et réservations</h2>
            <dl className="space-y-2 text-gray-800">
              <div>
                <dt className="font-medium">Rendez‑vous pour tatouage</dt>
                <dd>Oui — envoie une demande via le formulaire en précisant style, taille estimée, emplacement et photos de référence. Un échange permettra d’estimer prix et disponibilité.</dd>
              </div>
              <div>
                <dt className="font-medium">Oeuvres personnalisées</dt>
                <dd>Décris l’idée, format, délai et budget via le formulaire. Un devis et un délai seront proposés ensuite.</dd>
              </div>
              <div>
                <dt className="font-medium">Acompte</dt>
                <dd>Un acompte est demandé pour réserver la date ou lancer la production ; le montant sera précisé dans le devis.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Tarifs, paiements et livraisons</h2>
            <dl className="space-y-2 text-gray-800">
              <div>
                <dt className="font-medium">Comment sont déterminés les prix ?</dt>
                <dd>Les prix dépendent du format, complexité, temps estimé et matériaux. Un devis détaillé est fourni avant acceptation.</dd>
              </div>
              <div>
                <dt className="font-medium">Moyens de paiement</dt>
                <dd>Carte, virement, espèces ou PayPal peuvent être proposés selon le contexte ; les options seront indiquées au moment du paiement.</dd>
              </div>
              <div>
                <dt className="font-medium">Délais de livraison</dt>
                <dd>Dépend du type d’objet : délai de production + expédition. Une estimation est fournie lors de la commande.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Droits d’auteur et usage</h2>
            <dl className="space-y-2 text-gray-800">
              <div>
                <dt className="font-medium">Utilisation d’images du portfolio</dt>
                <dd>Demande l’autorisation via le formulaire. L’usage privé peut être accordé ; l’usage commercial nécessite une licence écrite et peut être rémunéré.</dd>
              </div>
              <div>
                <dt className="font-medium">Tatouages et droits d’auteur</dt>
                <dd>Les dessins originaux sont protégés. Pour reproduction publique ou commerciale, une autorisation/licence peut être nécessaire.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Préparation et support</h2>
            <dl className="space-y-2 text-gray-800">
              <div>
                <dt className="font-medium">Préparation au rendez‑vous</dt>
                <dd>Apporte photos de référence, pièce d’identité si nécessaire et toute information médicale utile. Arrive reposé et hydraté.</dd>
              </div>
              <div>
                <dt className="font-medium">Pas de réponse reçue</dt>
                <dd>Vérifie le dossier spam puis renvoie un message via le formulaire en précisant la date de la première demande. Si besoin, contacte l’adresse mail publique du site.</dd>
              </div>
            </dl>
          </section>
        </article>

        <footer className="mt-10 text-sm text-gray-600">
          <p>Pour toute question non couverte ici, utilise le formulaire de contact ou l’adresse e‑mail dans le footer.</p>
        </footer>
      </div>
    </main>
  );
}