import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import HeroMarquee from '../components/HeroMarquee';
import ProductCard from '../components/ProductCard';
import {
  featuredCakes,
  featuredCookies,
  specialOffers,
  reviews,
} from '../data/products';

import logo from '../../public/logo.jpg';

export default function Home() {
  return (
    <>
      <section className='relative w-full bg-cream flex flex-col items-center justify-center'>
        <div className='w-full py-16 sm:py-20 md:py-32 px-6 text-center flex items-center justify-center'>
          <div className='w-full max-w-3xl mx-auto flex flex-col items-center justify-center'>
            <img
              src={logo}
              alt='Naz Kaker'
              className='
          w-auto
          h-28 sm:h-36 md:h-56 lg:h-74
          mix-blend-multiply
          opacity-95
          mb-6 sm:mb-8
        '
            />

            <h1
              className='text-warm-brown text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 px-2 font-bold text-center'
              style={{ fontFamily: "'Rouge Script', cursive" }}
            >
              Håndlagde desserter bakt med kjærlighet
            </h1>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 w-full'>
              <Button
                component={Link}
                to='/contact'
                size='md'
                radius='xl'
                color='brown.5'
                className='w-full sm:w-auto px-8'
              >
                Bestill nå
              </Button>

              <Button
                component='a'
                href='#tilbud'
                variant='outline'
                size='md'
                radius='xl'
                color='brown.4'
                className='w-full sm:w-auto px-8'
              >
                Se tilbud
              </Button>
            </div>
          </div>
        </div>

        <HeroMarquee />
      </section>

      <section
        id='tilbud'
        className='py-20 px-6 bg-chocolate/5 border-y border-beige'
      >
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-14'>
            <span className='inline-block bg-chocolate text-cream text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-4'>
              Tilbud
            </span>
            <h2 className='font-serif text-3xl md:text-4xl text-chocolate mb-3'>
              Spesialtilbud
            </h2>
            <p className='text-warm-brown max-w-lg mx-auto'>
              Utvalgte kaker og cookies til spesialpris – kun en begrenset
              periode.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {specialOffers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showBadge
                featured
              />
            ))}
          </div>
        </div>
      </section>

      <section id='kaker' className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-14'>
            <h2 className='font-serif text-3xl md:text-4xl text-chocolate mb-3'>
              Kaker
            </h2>
            <p className='text-warm-brown max-w-lg mx-auto'>
              Våre mest populære kaker – perfekte til feiringer i alle
              størrelser.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredCakes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='text-center mt-12'>
            <Button
              component={Link}
              to='/kaker'
              variant='outline'
              radius='xl'
              color='brown.4'
              className='px-10'
            >
              Se mer
            </Button>
          </div>
        </div>
      </section>

      <section className='py-20 px-6 bg-beige/20'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-14'>
            <h2 className='font-serif text-3xl md:text-4xl text-chocolate mb-3'>
              Cookies
            </h2>
            <p className='text-warm-brown max-w-lg mx-auto'>
              Små biter av lykke – ferskbakt hver dag.
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {featuredCookies.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
          <div className='text-center mt-12'>
            <Button
              component={Link}
              to='/cookies'
              variant='outline'
              radius='xl'
              color='brown.4'
              className='px-10'
            >
              Se mer
            </Button>
          </div>
        </div>
      </section>

      <section className='py-20 px-6'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
          <div className='overflow-hidden rounded-lg aspect-[4/5]'>
            <img
              src='https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=700&h=875&fit=crop'
              alt='Konditor som dekorerer kake'
              className='w-full h-full object-cover'
            />
          </div>
          <div>
            <p className='text-soft-tan text-sm tracking-[0.2em] uppercase mb-3'>
              Vår historie
            </p>
            <h2 className='font-serif text-3xl md:text-4xl text-chocolate mb-6'>
              Bakt med lidenskap, servert med hjerte
            </h2>
            <p className='text-warm-brown leading-relaxed mb-4'>
              Naz Kaker startet i et lite hjemmekjøkken med en enkel
              overbevisning: hver feiring fortjener en kake som er like unik som
              øyeblikket. Det som begynte som bestillinger til venner og
              familie, har blitt en kjær bakeri kjent for håndverk og smak.
            </p>
            <p className='text-warm-brown leading-relaxed mb-8'>
              Vi bruker kun de fineste ingrediensene – ekte smør, ferske egg og
              sesongens frukt – for å lage desserter som smaker like godt som de
              ser ut.
            </p>
            <Button
              component={Link}
              to='/about'
              variant='subtle'
              color='brown.4'
              className='px-0'
            >
              Les hele historien →
            </Button>
          </div>
        </div>
      </section>

      <section className='py-20 px-6 bg-beige/20'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-14'>
            <h2 className='font-serif text-3xl md:text-4xl text-chocolate mb-3'>
              Det sier kundene våre
            </h2>
            <p className='text-warm-brown max-w-lg mx-auto'>
              Ekte øyeblikk, ekte glede – fra dem som smaker kjærligheten i hver
              bit.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {reviews.map((review) => (
              <blockquote
                key={review.id}
                className='bg-white p-8 rounded-lg border border-beige/60 shadow-sm'
              >
                <p className='text-warm-brown italic leading-relaxed mb-6'>
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className='text-chocolate font-medium text-sm'>
                  — {review.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
