import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import logo from '../assets/logo.svg'

const navLinks = [
  { to: '/', label: 'Hjem' },
  { to: '/about', label: 'Om oss' },
  { to: '/contact', label: 'Kontakt' },
]

export default function Navbar() {
  const [search, setSearch] = useState('')

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-beige">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Naz Kaker" className="h-8 md:h-10" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors duration-200 ${
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

        <div className="flex items-center gap-4 flex-1 md:flex-none justify-end max-w-xs">
          <TextInput
            placeholder="Søk etter kaker, cookies…"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            leftSection={<IconSearch size={16} stroke={1.5} className="text-warm-brown" />}
            size="sm"
            radius="xl"
            classNames={{
              input: 'bg-white border-beige text-chocolate placeholder:text-soft-tan',
            }}
            aria-label="Søk etter produkter"
          />
        </div>
      </div>

      <nav className="md:hidden flex items-center justify-center gap-8 pb-3 border-t border-beige/50 pt-3">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `text-sm tracking-wide transition-colors duration-200 ${
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
    </header>
  )
}
