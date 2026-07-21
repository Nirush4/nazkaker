import { Button } from '@mantine/core';

import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollToSection';

const aboutImage =
  'https://images.unsplash.com/photo-1687102626222-cc819882b295?q=80&w=987';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='
        bg-[#faf7f1]
        py-24
        px-6
        overflow-hidden
      '
    >
      <div
        className='
          max-w-7xl
          mx-auto
          grid
          gap-16
          lg:grid-cols-2
          items-center
        '
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='
            relative
            overflow-hidden
            rounded-[40px]
            shadow-xl
          '
        >
          <img
            src={aboutImage}
            alt="Naz's Kaker håndlagde kaker og cookies"
            className='
              w-full
              h-[500px]
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            '
          />

          <div
            className='
              absolute
              bottom-6
              left-6
              bg-white/90
              backdrop-blur
              rounded-2xl
              px-6
              py-4
              shadow-lg
            '
          >
            <p className='text-sm uppercase tracking-[0.3em] text-soft-tan'>
              Naz's Kaker
            </p>

            <p className='mt-2 font-serif text-xl text-chocolate'>
              Laget med kjærlighet
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className='
              text-sm
              uppercase
              tracking-[0.35em]
              text-soft-tan
              mb-5
            '
          >
            Om oss
          </p>

          <h2
            className='
              font-serif
              text-4xl
              md:text-5xl
              text-chocolate
              leading-tight
            '
          >
            Vi lager kaker
            <br />
            som skaper minner
          </h2>

          <div
            className='
              mt-8
              space-y-5
              text-warm-brown
              leading-8
            '
          >
            <p>
              Hos Naz's Kaker lager vi håndlagde spesialkaker og cookies
              designet for dine viktigste øyeblikk.
            </p>

            <p>
              Hver bestilling blir laget med stor kjærlighet, kreativitet og
              fokus på detaljer. Vi kombinerer vakre design med gode smaker for
              å skape noe helt unikt.
            </p>

            <p>
              Enten det er bryllup, bursdag, dåp eller en annen spesiell
              anledning, hjelper vi deg med å lage en søt opplevelse som
              gjestene vil huske.
            </p>
          </div>

          {/* Values */}
          <div
            className='
              mt-10
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-6
            '
          >
            <div>
              <h3 className='font-serif text-xl text-chocolate'>Håndlaget</h3>
              <p className='mt-2 text-sm text-warm-brown'>
                Hver kake og cookie lages med omtanke.
              </p>
            </div>

            <div>
              <h3 className='font-serif text-xl text-chocolate'>
                Unikt design
              </h3>
              <p className='mt-2 text-sm text-warm-brown'>
                Personlige kreasjoner til hver kunde.
              </p>
            </div>

            <div>
              <h3 className='font-serif text-xl text-chocolate'>Kvalitet</h3>
              <p className='mt-2 text-sm text-warm-brown'>
                Gode ingredienser og fokus på smak.
              </p>
            </div>
          </div>

          <Button
            onClick={() => scrollToSection('contact')}
            radius='xl'
            size='md'
            className='
              mt-10
              bg-chocolate
              px-10
              hover:bg-chocolate/90
            '
          >
            Bestill din kake
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
