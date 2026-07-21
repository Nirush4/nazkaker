import { Button } from '@mantine/core';

import { scrollToSection } from '../utils/scrollToSection';

const images = [
  {
    src: '/kake4.jpg',
    alt: 'Elegant håndlaget bryllupskake dekorert med blomster',
  },
  {
    src: '/kake2.jpg',
    alt: 'Håndlagde cupcakes med krem og dekor',
  },
  {
    src: '/kake3.jpg',
    alt: 'Spesialdesignet bursdagskake med moderne dekor',
  },
  {
    src: '/kake6.jpg',
    alt: 'Utvalg av håndlagde kaker og søtsaker',
  },
  {
    src: '/kake5.jpg',
    alt: 'Elegant spesialkake laget av Naz’s Kaker',
  },
];

export default function CustomCakes() {
  return (
    <section
      id='kaker'
      aria-labelledby='custom-cakes-title'
      className='bg-white py-24 px-6 overflow-hidden'
    >
      <div className='mx-auto max-w-7xl grid gap-20 lg:grid-cols-2 items-center'>
        <div aria-label='Bildegalleri av spesialkaker' className='space-y-4'>
          {/* Hero */}
          <figure className='group relative overflow-hidden rounded-[32px] h-[300px] sm:h-[420px] lg:h-[460px] bg-[#F8F4F0] shadow-md hover:shadow-2xl transition-all duration-500'>
            <img
              src={images[0].src}
              alt={images[0].alt}
              loading='lazy'
              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
            />

            <div
              aria-hidden='true'
              className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition'
            />
          </figure>

          {/* Bottom images */}
          <div className='grid grid-cols-2 gap-4'>
            {images.slice(1).map((image) => (
              <figure
                key={image.src}
                className='group relative overflow-hidden rounded-[28px] h-[220px] sm:h-[260px] lg:h-[290px] bg-[#F8F4F0] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500'
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading='lazy'
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />

                <div
                  aria-hidden='true'
                  className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition'
                />
              </figure>
            ))}
          </div>
        </div>

        {/* ================= Content ================= */}
        <div className='relative max-w-xl'>
          {/* Decorative Shapes */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -top-12 -left-10 h-[330px] w-[230px] rounded-t-full bg-[#F8F4F0] -z-20'
          />

          <div
            aria-hidden='true'
            className='pointer-events-none absolute top-12 right-0 h-[340px] w-[340px] rounded-full bg-soft-tan/10 blur-3xl -z-30'
          />

          <div
            aria-hidden='true'
            className='pointer-events-none absolute bottom-4 right-8 h-28 w-28 rounded-full border border-soft-tan/25 -z-20'
          />

          <div
            aria-hidden='true'
            className='pointer-events-none absolute top-44 -left-6 h-5 w-5 rounded-full bg-soft-tan/40 -z-20'
          />

          <div
            aria-hidden='true'
            className='pointer-events-none absolute bottom-24 left-10 h-3 w-3 rounded-full bg-chocolate/10 -z-20'
          />

          {/* Section Label */}
          <p className='mb-5 text-sm uppercase tracking-[0.3em] font-medium text-soft-tan'>
            Custom kaker
          </p>

          {/* Heading */}
          <h2
            id='custom-cakes-title'
            className='font-serif text-4xl md:text-5xl text-chocolate leading-tight mb-8'
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Utforsk vårt
            <br />
            utvalg av kaker
          </h2>

          {/* Text */}
          <div className='space-y-6 text-warm-brown leading-8'>
            <p>
              Velkommen til en søt verden hos Naz's Kaker, hvor hver kake og
              cupcake blir laget med kjærlighet, kreativitet og et elegant
              uttrykk.
            </p>

            <p>
              Vi lager unike kaker og cupcakes til alle typer anledninger –
              bursdager, bryllup, dåp og andre spesielle øyeblikk som fortjener
              noe ekstra.
            </p>

            <p>
              Alle våre produkter lages for hånd i vårt eget kakestudio med nøye
              utvalgte ingredienser av høy kvalitet. Hver kake bakes fra bunnen
              av med fokus på smak, detaljer og et vakkert design.
            </p>

            <p>
              Hos Naz's Kaker ønsker vi å skape søte minner gjennom håndlagde
              kreasjoner som gjør enhver anledning enda mer spesiell.
            </p>
          </div>

          {/* Button */}
          <Button
            onClick={() => scrollToSection('contact')}
            radius='xl'
            size='md'
            aria-label='Gå til kontaktsiden for å bestille spesialkake'
            className='mt-10 bg-chocolate px-10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-chocolate/90 focus-visible:ring-4 focus-visible:ring-soft-tan'
          >
            Bestill spesialkake
          </Button>
        </div>
      </div>
    </section>
  );
}
