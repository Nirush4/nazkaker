export default function About() {
  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-soft-tan text-sm tracking-[0.2em] uppercase mb-4 text-center">
          Om oss
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-chocolate text-center mb-16">
          Historien om Naz Kaker
        </h1>

        <div className="mb-16 overflow-hidden rounded-lg aspect-[16/9]">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&h=506&fit=crop"
            alt="Bakeri-kjøkken"
            className="w-full h-full object-cover"
          />
        </div>

        <section className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl text-chocolate mb-6">Hvordan det startet</h2>
          <p className="text-warm-brown leading-relaxed mb-4">
            Naz Kaker ble til av en livslang kjærlighet for baking og et ønske om å spre glede
            i livets viktigste øyeblikk. Grunnlagt av Naz, en selvlært konditor med øye for
            detaljer, har bakeriet blitt et sted for dem som mener dessert skal være en opplevelse
            – ikke en ettertanke.
          </p>
          <p className="text-warm-brown leading-relaxed">
            Fra intime bursdagsfeiringer til storslåtte bryllup – hver bestilling behandles med
            samme omsorg og kreativitet. Vi lytter, vi designer, og vi baker – og gjør visjonen
            din til noe uforglemmelig.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl text-chocolate mb-6">
            Vår bakefilosofi
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl text-chocolate mb-2">Kvalitet først</h3>
              <p className="text-warm-brown leading-relaxed">
                Vi tar ingen snarveier. Hver kake starter med premium ingredienser – europeisk
                smør, frittgående egg og ekte vanilje – fordi god smak begynner ved kilden.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-chocolate mb-2">Laget på bestilling</h3>
              <p className="text-warm-brown leading-relaxed">
                Ingenting står på hylla og venter. Hver kreasjon bakes fersk til ditt arrangement,
                slik at smaken er på topp og presentasjonen blir akkurat som du forestilte deg.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-chocolate mb-2">Håndverk i hver detalj</h3>
              <p className="text-warm-brown leading-relaxed">
                Vi mener dessert er spiselig kunst. Fra håndpipede blomster til skreddersydde
                fargepaletter – hvert element lages med omhu for å gjenspeile din historie.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 border-t border-beige">
          <p className="font-serif text-xl text-chocolate italic">
            &ldquo;Hver kake forteller en historie. La oss hjelpe deg med å fortelle din.&rdquo;
          </p>
          <p className="text-warm-brown mt-4">— Naz, grunnlegger</p>
        </section>
      </div>
    </div>
  )
}
