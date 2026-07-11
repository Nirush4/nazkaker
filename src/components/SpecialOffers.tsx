import ProductCard from './ProductCard';
import { specialOffers } from '../data/products';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function SpecialOffers() {
  return (
    <section
      id='tilbud'
      aria-labelledby='special-offers-title'
      className='
        py-24
        px-6
        bg-chocolate/5
        border-y
        border-beige
      '
    >
      <div className='max-w-7xl mx-auto'>
        <header className='text-center mb-16'>
          <span
            className='
              inline-flex
              bg-chocolate
              text-cream
              text-xs
              tracking-[0.3em]
              uppercase
              px-5
              py-2
              rounded-full
              mb-5
            '
          >
            Tilbud
          </span>

          <h2
            id='special-offers-title'
            className='
              font-serif
              text-4xl
              md:text-5xl
              text-chocolate
              mb-4
            '
          >
            Spesialtilbud
          </h2>

          <p
            className='
              text-warm-brown
              max-w-xl
              mx-auto
              leading-relaxed
            '
          >
            Utvalgte kaker og cookies laget med kjærlighet, tilgjengelig i en
            begrenset periode.
          </p>
        </header>

        <div
          className='
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          '
        >
          {specialOffers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showBadge
              featured
            />
          ))}
        </div>

        <div className='text-center mt-14'>
          <Button
            component={Link}
            to='/kaker'
            variant='outline'
            radius='xl'
            className='
              px-12
              !border-chocolate
              !text-chocolate
              hover:!bg-chocolate
              hover:!text-cream
            '
          >
            Se alle tilbud
          </Button>
        </div>
      </div>
    </section>
  );
}
