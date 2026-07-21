import { Button } from '@mantine/core';
import { motion, type Variants } from 'framer-motion';
import { scrollToSection } from '../utils/scrollToSection';

const images = {
  hero: '/kake1.jpg',
  story: '/kake2.jpg',
  gallery1: '/kake3.jpg',
  gallery2: '/kake4.jpg',
  gallery3: '/kake5.jpg',
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.04,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function ImageBlock({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={imageReveal}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      className='overflow-hidden'
    >
      <img
        src={src}
        alt={alt}
        loading='lazy'
        className={`
          w-full
          object-cover
          transition-transform
          duration-1000
          hover:scale-105
          motion-reduce:transition-none
          motion-reduce:hover:scale-100
          ${className}
        `}
      />
    </motion.div>
  );
}

export default function CookiesSection() {
  return (
    <section
      id='cookies'
      aria-labelledby='cookies-title'
      className='bg-[#faf7f1] text-[#211914]'
    >
      <div className='relative'>
        <ImageBlock
          src={images.hero}
          alt="Håndlagde cookies fra Naz's Cookies"
          className='h-[55vh] md:h-[70vh]'
        />

        <div aria-hidden='true' className='absolute inset-0 bg-black/25' />

        <motion.div
          variants={fadeUp}
          initial='hidden'
          animate='visible'
          className='
            absolute
            inset-0
            flex
            items-center
            justify-center
            px-6
            text-center
          '
        >
          <div className='text-white'>
            <p
              className='
              mb-5
              text-[11px]
              uppercase
              tracking-[0.4em]
            '
            >
              Naz's Cookies
            </p>

            <h1
              id='cookies-title'
              className='
                font-serif
                text-4xl
                leading-tight
                sm:text-6xl
                md:text-7xl
              '
            >
              Cookies laget
              <br />
              for dine øyeblikk
            </h1>
          </div>
        </motion.div>
      </div>

      <div
        className='
        mx-auto
        max-w-6xl
        px-6
      '
      >
        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='
            py-16
            text-center
            md:py-24
          '
        >
          <p
            className='
            text-xs
            uppercase
            tracking-[0.35em]
            text-[#8b6f52]
          '
          >
            Håndlaget med omtanke
          </p>

          <h2
            className='
            mt-5
            font-serif
            text-3xl
            sm:text-5xl
          '
          >
            Unike cookies
            <br />
            laget spesielt for deg
          </h2>

          <p
            className='
            mx-auto
            mt-6
            max-w-2xl
            leading-8
            text-[#66594e]
          '
          >
            Hos Naz's Cookies lager vi personlige cookies til bryllup,
            bursdager, babyshowers og andre spesielle anledninger. Hver detalj
            blir laget for hånd.
          </p>
        </motion.div>

        <div
          className='
          grid
          items-center
          gap-10
          py-12
          md:grid-cols-12
          md:py-16
        '
        >
          <div className='md:col-span-7'>
            <ImageBlock
              src={images.story}
              alt="Dekorerte cookies laget hos Naz's Cookies"
              className='h-[420px] md:h-[560px]'
            />
          </div>

          <motion.div
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='md:col-span-5'
          >
            <span
              className='
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#8b6f52]
            '
            >
              Vårt håndverk
            </span>

            <h3
              className='
              mt-5
              font-serif
              text-3xl
              sm:text-4xl
            '
            >
              Små detaljer
              <br />
              som betyr mye
            </h3>

            <p
              className='
              mt-5
              leading-8
              text-[#66594e]
            '
            >
              Vi kombinerer gode råvarer, kreativitet og presisjon for å lage
              cookies som både ser vakre ut og smaker fantastisk.
            </p>
          </motion.div>
        </div>

        <div
          className='
          grid
          gap-5
          py-12
          md:grid-cols-3
        '
        >
          <ImageBlock
            src={images.gallery1}
            alt="Cookie design fra Naz's Cookies"
            className='h-[350px]'
          />

          <ImageBlock
            src={images.gallery2}
            alt='Hånddekorerte cookies'
            className='h-[420px]'
          />

          <ImageBlock
            src={images.gallery3}
            alt='Ferdige spesialdesignede cookies'
            className='h-[350px]'
          />
        </div>

        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='
            py-20
            text-center
            md:py-28
          '
        >
          <h3
            className='
            font-serif
            text-4xl
            sm:text-5xl
          '
          >
            Klar for å lage
            <br />
            noe spesielt?
          </h3>

          <p
            className='
            mx-auto
            mt-5
            max-w-xl
            leading-8
            text-[#66594e]
          '
          >
            Fortell oss om din idé, så lager vi cookies som passer perfekt til
            din feiring.
          </p>

          <Button
            onClick={() => scrollToSection('contact')}
            radius='0'
            size='lg'
            className='
    mt-8
    h-12
    bg-[#211914]
    px-10
    text-sm
    uppercase
    tracking-[0.2em]
    hover:bg-black
  '
          >
            Bestill nå
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
