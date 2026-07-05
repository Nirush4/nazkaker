import { useMemo, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import logo from '../../public/logo.jpg';

import { allCakes, allCookies } from '../data/products';
import { searchProducts } from '../utils/searchProducts';

const navLinks = [
  { to: '/', label: 'Hjem' },
  { to: '/kaker', label: 'Kaker' },
  { to: '/cookies', label: 'Cookies' },
  { to: '/about', label: 'Om oss' },
  { to: '/contact', label: 'Kontakt' },
];

export default function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const results = useMemo(() => {
    return searchProducts([...allCakes, ...allCookies], search).slice(0, 6);
  }, [search]);

  const handleSelect = (id: string) => {
    setSearch('');
    navigate(`/product/${id}`);
  };

  return (
    <header className='sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-beige'>
      <div className='max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-6'>
        <nav className='hidden md:flex items-center gap-10'>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'text-chocolate font-medium'
                    : 'text-warm-brown hover:text-chocolate'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className='relative w-full max-w-xs'>
          <TextInput
            placeholder='Søk kaker, cookies…'
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            leftSection={<IconSearch size={16} />}
            radius='xl'
            classNames={{
              input:
                'bg-white border-beige text-chocolate placeholder:text-soft-tan',
            }}
          />

          {search && results.length > 0 && (
            <div className='absolute top-full mt-2 w-full bg-white border border-beige rounded-xl shadow-lg overflow-hidden z-50'>
              {results.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className='w-full text-left px-4 py-3 hover:bg-beige/30 flex items-center gap-3 cursor-pointer'
                >
                  <img
                    src={item.image}
                    className='w-10 h-10 rounded object-cover'
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
      </div>

      <nav className='md:hidden flex justify-center gap-8 pb-3 pt-3 border-t border-beige/50'>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `text-sm ${
                isActive ? 'text-chocolate font-medium' : 'text-warm-brown'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
