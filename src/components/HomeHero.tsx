import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import HeroMarquee from './HeroMarquee';

export default function HomeHero() {
  return (
    <section className='relative w-full overflow-hidden'>
      <div
        className='
          relative
          min-h-[720px]
          flex
          items-center
          justify-center
        '
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster='/hero-poster.jpg'
          className='
            absolute
            inset-0
            h-full
            w-full
            object-cover
          '
          aria-hidden='true'
        >
          <source src='/hero_video.mov' type='video/mp4' />
        </video>

        <div
          className='
            absolute
            inset-0
            bg-gradient-to-b
            from-[#2b170d]/60
            via-[#2b170d]/35
            to-[#2b170d]/70
          '
        />

        <div
          className='
            relative
            z-10
            mx-auto
            max-w-5xl
            px-6
            text-center
          '
        >
          <div
            className='
              flex
              flex-col
              items-center
            '
          >
            <span
              className='
                mb-6
                inline-flex
                rounded-full
                border
                border-white/40
                px-5
                py-2
                text-xs
                uppercase
                tracking-[0.35em]
                text-white/90
              '
            >
              Naz Kaker
            </span>

            <h1
              className='
                max-w-4xl
                text-white
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                leading-[0.95]
                drop-shadow-lg
              '
              style={{
                fontFamily: "'Rouge Script', cursive",
              }}
            >
              Håndlagde desserter
              <br />
              bakt med kjærlighet
            </h1>

            <p
              className='
                mt-8
                max-w-xl
                text-base
                sm:text-lg
                text-white/90
                leading-relaxed
              '
            >
              Unike kaker og søte øyeblikk, laget med lidenskap og de beste
              råvarene.
            </p>

            <div
              className='
                mt-10
                flex
                flex-col
                sm:flex-row
                gap-5
              '
            >
              <Button
                component={Link}
                to='/contact'
                size='md'
                radius='xl'
                color='var(--color-pink-600)'
                className='
                  px-10
                  shadow-xl
                '
              >
                Bestill nå
              </Button>

              <Button
                component='a'
                href='#tilbud'
                size='md'
                radius='xl'
                variant='outline'
                className='
                  px-10
                  !border-white
                  !text-white
                  hover:!bg-white
                  hover:!text-[#4b2a1b]
                '
              >
                Se tilbud
              </Button>
            </div>
          </div>
        </div>
      </div>

      <HeroMarquee />
    </section>
  );
}
