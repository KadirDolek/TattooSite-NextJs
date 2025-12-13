
export const metadata = {
  title: 'FAQ',
  description: 'Frequently Asked Questions — portfolio, orders, contact',
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <div className="max-w-4xl mx-auto print:max-w-full">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">FAQ</h1>
          <p className="text-sm text-gray-600 mt-1">Frequently Asked Questions — portfolio, orders and contact</p>
        </header>

        <article className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">General</h2>
            <dl className="space-y-2 text-gray-800">
              <div>
                <dt className="font-medium">What does this site showcase?</dt>
                <dd>A portfolio featuring the artist's tattoos, drawings and handmade creations, with galleries, contact information and ordering options.</dd>
              </div>
              <div>
                <dt className="font-medium">How do I get in touch?</dt>
                <dd>Use the contact form on the site or the email address provided in the footer. Requests are typically processed within 48–72 hours.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Orders and Bookings</h2>
            <dl className="space-y-2 text-gray-800">
              <div>
                <dt className="font-medium">Tattoo Appointment</dt>
                <dd>Yes — submit a request via the form specifying style, estimated size, placement and reference photos. An exchange will help estimate price and availability.</dd>
              </div>
              <div>
                <dt className="font-medium">Custom Artwork</dt>
                <dd>Describe the idea, format, timeframe and budget via the form. A quote and deadline will be provided.</dd>
              </div>
              <div>
                <dt className="font-medium">Deposit</dt>
                <dd>A deposit is required to reserve the date or start production; the amount will be specified in the quote.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Pricing, Payments and Shipping</h2>
            <dl className="space-y-2 text-gray-800">
              <div>
                <dt className="font-medium">How are prices determined?</dt>
                <dd>Prices depend on format, complexity, estimated time and materials. A detailed quote is provided before acceptance.</dd>
              </div>
              <div>
                <dt className="font-medium">Payment Methods</dt>
                <dd>Card, bank transfer, cash or PayPal may be offered depending on context; options will be indicated at payment time.</dd>
              </div>
              <div>
                <dt className="font-medium">Delivery Times</dt>
                <dd>Depends on the type of item: production time + shipping. An estimate is provided when you order.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Copyright and Usage</h2>
            <dl className="space-y-2 text-gray-800">
              <div>
                <dt className="font-medium">Using Portfolio Images</dt>
                <dd>Request permission via the form. Private use may be granted; commercial use requires a written license and may be paid.</dd>
              </div>
              <div>
                <dt className="font-medium">Tattoos and Copyright</dt>
                <dd>Original designs are protected. For public or commercial reproduction, permission/license may be required.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Preparation and Support</h2>
            <dl className="space-y-2 text-gray-800">
              <div>
                <dt className="font-medium">Appointment Preparation</dt>
                <dd>Bring reference photos, ID if necessary and any relevant medical information. Arrive rested and hydrated.</dd>
              </div>
              <div>
                <dt className="font-medium">No Response Received</dt>
                <dd>Check your spam folder then resend a message via the form specifying the date of your first request. If needed, contact the public email on the site.</dd>
              </div>
            </dl>
          </section>
        </article>

        <footer className="mt-10 text-sm text-gray-600">
          <p>For any questions not covered here, use the contact form or the email address in the footer.</p>
        </footer>
      </div>
    </main>
  );
}