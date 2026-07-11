import { useMemo, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { TextInput } from '@mantine/core';
import { IconSearch, IconMenu2, IconX } from '@tabler/icons-react';

import { allCakes, allCookies } from '../data/products';
import { searchProducts } from '../utils/searchProducts';

const logo = '/logo.jpg';

const navLinks = [
  { to: '/', label: 'Hjem' },
  { to: '/kaker', label: 'Kaker' },
  { to: '/cookies', label: 'Cookies' },
  { to: '/about', label: 'Om oss' },
  { to: '/contact', label: 'Kontakt' },
];

export default function Navbar() {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const results = useMemo(() => {
    return searchProducts([...allCakes, ...allCookies], search).slice(0, 6);
  }, [search]);

  const handleSelect = (id: string) => {
    setSearch('');

    navigate(`/product/${id}`);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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

        <NavLink
          to='/'
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
        </NavLink>

        {/* Desktop Navigation */}

        <nav
          className='
            hidden
            lg:flex

            items-center

            gap-10
          '
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `
                text-sm

                tracking-wide

                transition-colors

                ${
                  isActive
                    ? 'text-pink-950 font-bold'
                    : 'text-pink-700 hover:text-pink-950'
                }

                `
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Search */}

        <div
          className='
            hidden
            sm:block

            relative

            w-full

            max-w-xs
          '
        >
          <TextInput
            placeholder='Søk kaker, cookies…'
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            leftSection={<IconSearch size={16} />}
            radius='xl'
            classNames={{
              input: `
              bg-white

              border-beige

              text-chocolate

              placeholder:text-soft-tan
              `,
            }}
          />

          {search && results.length > 0 && (
            <div
              className='
                absolute
                top-full

                mt-2

                w-full

                bg-white

                rounded-xl

                shadow-xl

                overflow-hidden

                border

                border-beige

                z-50
              '
            >
              {results.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className='
                    w-full

                    px-4
                    py-3

                    flex

                    gap-3

                    text-left

                    hover:bg-beige/30
                  '
                >
                  <img
                    src={item.image}
                    alt=''
                    className='
                      h-10
                      w-10

                      rounded

                      object-cover
                    '
                  />

                  <div>
                    <p className='text-sm text-chocolate'>{item.name}</p>

                    <p className='text-xs text-warm-brown'>{item.price}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

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
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `
                  text-base

                  ${isActive ? 'text-pink-700 font-bold' : 'text-warm-brown'}
                  `
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
