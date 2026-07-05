import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { allCakes } from '../data/products';

type Category =
  | 'all'
  | 'bryllup'
  | 'bursdag'
  | 'konfirmasjon'
  | 'dåp'
  | 'uteksaminering'
  | 'spesielle-anledninger';

export default function Cakes() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filters = [
    { label: 'Alle', value: 'all' },
    { label: 'Bryllup', value: 'bryllup' },
    { label: 'Bursdag', value: 'bursdag' },
    { label: 'Konfirmasjon', value: 'konfirmasjon' },
    { label: 'Dåp', value: 'dåp' },
    { label: 'Uteksaminering', value: 'uteksaminering' },
    { label: 'Spesielle anledninger', value: 'spesielle-anledninger' },
  ] as const;

  const filteredCakes =
    activeFilter === 'all'
      ? allCakes
      : allCakes.filter((cake) => cake.category === activeFilter);

  return (
    <div className='py-16 md:py-24 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-14 max-w-2xl mx-auto'>
          <p className='text-soft-tan text-sm tracking-[0.2em] uppercase mb-3'>
            Vårt utvalg
          </p>

          <h1 className='font-serif text-4xl md:text-5xl text-chocolate mb-4'>
            Kaker
          </h1>

          <p className='text-warm-brown leading-relaxed'>
            Skreddersydde kaker bakt på bestilling – fra intime bursdager til
            store feiringer. Hver kake lages fersk med kvalitetsingredienser og
            ditt design i fokus.
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition border
                ${
                  activeFilter === filter.value
                    ? 'bg-chocolate text-cream border-chocolate'
                    : 'bg-white text-chocolate border-beige hover:bg-beige/20'
                }
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredCakes.map((product) => (
            <div key={product.id} className='flex flex-col gap-4'>
              <ProductCard product={product} />

              {product.details && (
                <p className='text-warm-brown text-sm leading-relaxed px-1'>
                  {product.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
