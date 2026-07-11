import ProductCard from './ProductCard';
import { featuredCookies } from '../data/products';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function CookiesSection() {
  return (
    <section
      aria-labelledby='cookies-title'
      className='
        py-24
        px-6
        bg-beige/20
      '
    >
      <div className='max-w-7xl mx-auto'>
        <header className='text-center mb-16'>
          <span
            className='
              inline-flex
              text-soft-tan
              uppercase
              tracking-[0.3em]
              text-xs
              mb-5
            '
          >
            Nybakt hver dag
          </span>

          <h2
            id='cookies-title'
            className='
              font-serif
              text-4xl
              md:text-5xl
              text-chocolate
              mb-4
            '
          >
            Cookies
          </h2>

          <p
            className='
              max-w-xl
              mx-auto
              text-warm-brown
              leading-relaxed
            '
          >
            Små biter av lykke – sprø på utsiden, myke på innsiden og laget med
            de beste råvarene.
          </p>
        </header>

        <div
          className='
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
          '
        >
          {featuredCookies.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>

        <div className='text-center mt-14'>
          <Button
            component={Link}
            to='/cookies'
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
            Se alle cookies
          </Button>
        </div>
      </div>
    </section>
  );
}
