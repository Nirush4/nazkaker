import { useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { scrollToSection } from '../utils/scrollToSection';

const logo = '/logo.jpg';

const navLinks = [
  { id: 'home', label: 'Hjem' },
  { id: 'kaker', label: 'Kaker' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'about', label: 'Om oss' },
  { id: 'contact', label: 'Kontakt' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className='
        sticky
        top-0
        z-50
        bg-[var(--color-pink-300)]
        backdrop-blur-md
        border-b
        border-beige
      '
    >
      <div
        className='
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          py-3
          flex
          items-center
          justify-between
          gap-5
        '
      >
        {/* Logo */}
        <button
          type='button'
          onClick={() => scrollToSection('home')}
          className='flex items-center shrink-0'
          aria-label='Naz Kaker home'
        >
          <img
            src={logo}
            alt='Naz Kaker'
            className='
              h-14
              w-auto
              rounded-md
              object-cover
              bg-white
            '
          />
        </button>
        {/* Desktop Navigation */}
        <nav
          className='
            hidden
            lg:flex
            items-center
            gap-10
          '
        >
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              type='button'
              onClick={() => scrollToSection(id)}
              className='
              cursor-pointer
                text-sm
                tracking-wide
                text-pink-700
                transition-colors
                hover:text-pink-950
              '
            >
              {label}
            </button>
          ))}
        </nav>{' '}
        {/* Mobile menu button */}
        <button
          type='button'
          onClick={() => setMenuOpen(!menuOpen)}
          className='
            lg:hidden
            text-white
            p-2
            rounded-lg
            hover:bg-white/10
            focus:outline-none
            focus:ring-2
            focus:ring-white
          '
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <nav
          className='
            lg:hidden
            bg-white
            border-t
            border-beige
            px-6
            py-6
          '
        >
          <div
            className='
              flex
              flex-col
              gap-5
            '
          >
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                type='button'
                onClick={() => scrollToSection(id)}
                className='
                  text-left
                  text-base
                  text-warm-brown
                  hover:text-pink-700
                '
              >
                {label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
