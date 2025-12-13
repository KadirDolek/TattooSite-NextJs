// app/privacy/page.js
export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy — information about data collection and processing',
};

export default function PrivacyPage() {
  const lastUpdated = 'JJ/MM/AAAA'; 
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg ring-1 ring-gray-100 overflow-hidden">
        <header className="px-6 py-8 border-b border-gray-100">
          <h1 className="text-2xl font-semibold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-600">
            This page describes the data we collect, why we use it, and your rights.
          </p>
        </header>

        <div className="px-6 py-8 prose prose-sm prose-neutral">
          <section>
            <h2 className="text-lg font-medium">Controller</h2>
            <p>Name / Business Name<br />Full Address<br /><a href="mailto:privacy@tonsite.com" className="text-pink-600">privacy@tonsite.com</a></p>
          </section>

          <section>
            <h2 className="text-lg font-medium">Data Collected</h2>
            <ul>
              <li><strong>Contact:</strong> name, email address, message via form</li>
              <li><strong>Technical Data:</strong> IP address, user-agent, server logs</li>
              <li><strong>Cookies:</strong> analytical cookies and trackers (if enabled)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">Purposes and Legal Basis</h2>
            <ul>
              <li>Responding to contact requests — <strong>pre-contractual performance</strong></li>
              <li>Sending newsletters — <strong>consent</strong></li>
              <li>Analytics to improve the site — <strong>legitimate interest</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">Recipients</h2>
            <p>
              Data shared with: hosting provider (service provider name), email service (e.g. SendGrid), analytics tools (e.g. Google Analytics).
              For transfers outside the EU, appropriate safeguards (standard contractual clauses or equivalent) are applied where necessary.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">Retention Period</h2>
            <ul>
              <li>Contact messages: <strong>2 years</strong></li>
              <li>Aggregate analytics data: <strong>24 months</strong></li>
              <li>Newsletter subscriptions: retained <strong>until unsubscribe</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">Your Rights</h2>
            <p>
              You have the rights of access, correction, deletion, restriction, portability and objection.
              To exercise your rights: <a href="mailto:privacy@tonsite.com" className="text-pink-600">privacy@tonsite.com</a>.
              You may also lodge a complaint with the competent supervisory authority.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">Cookies</h2>
            <p>
              We use cookies for site functionality and analytical cookies to measure and improve experience.
              You can manage your cookie preferences via the consent banner or your browser settings.
              <a href="/cookies" className="ml-1 text-pink-600">Manage cookies</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">Update</h2>
            <p>Last updated: <strong>{lastUpdated}</strong></p>
          </section>
        </div>

        <footer className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-xs text-gray-500">
          This text is a template to be adapted to your activity and completed with your service providers and exact retention periods.
        </footer>
      </div>
    </main>
  );
}