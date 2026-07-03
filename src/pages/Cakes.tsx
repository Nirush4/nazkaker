import ProductCard from '../components/ProductCard'
import { allCakes } from '../data/products'

export default function Cakes() {
  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-soft-tan text-sm tracking-[0.2em] uppercase mb-3">Vårt utvalg</p>
          <h1 className="font-serif text-4xl md:text-5xl text-chocolate mb-4">Kaker</h1>
          <p className="text-warm-brown leading-relaxed">
            Skreddersydde kaker bakt på bestilling – fra intime bursdager til store feiringer.
            Hver kake lages fersk med kvalitetsingredienser og ditt design i fokus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCakes.map((product) => (
            <div key={product.id} className="flex flex-col gap-4">
              <ProductCard product={product} />
              {product.details && (
                <p className="text-warm-brown text-sm leading-relaxed px-1">{product.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
