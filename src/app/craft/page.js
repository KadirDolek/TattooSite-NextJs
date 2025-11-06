import Footer from '../components/Footer';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';


export default function Craft () {
  return (
    <main className="flex justify-center flex-col">
      <section className="relative w-full h-[100vh] overflow-hidden">
              <div>
                <h1 className="text-3xl font-semibold text-center mt-12">Craft & Brol</h1>
              </div>
                <div style={{ width: '100vw', height: '100vh' }}>
                  <ScrollStack>
                    <ScrollStackItem>
                      <h2>Card 1</h2>
                      <p>This is the first card in the stack</p>
                    </ScrollStackItem>
                    <ScrollStackItem>
                      <h2>Card 2</h2>
                      <p>This is the second card in the stack</p>
                    </ScrollStackItem>
                    <ScrollStackItem>
                      <h2>Card 3</h2>
                      <p>This is the third card in the stack</p>
                    </ScrollStackItem>
                  </ScrollStack>
                </div>
            </section>
            <Footer />
    </main>
  )
}