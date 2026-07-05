import { Link } from 'react-router-dom';
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandPinterest,
  IconMapPin,
} from '@tabler/icons-react';
import logo from '../../public/logo.jpg';

const quickLinks = [
  { to: '/', label: 'Hjem' },
  { to: '/about', label: 'Om oss' },
  { to: '/contact', label: 'Kontakt' },
  { to: '/kaker', label: 'Kaker' },
  { to: '/cookies', label: 'Cookies' },
];

const socialLinks = [
  { href: '#', label: 'Instagram', icon: IconBrandInstagram },
  { href: '#', label: 'Facebook', icon: IconBrandFacebook },
  { href: '#', label: 'Pinterest', icon: IconBrandPinterest },
];

export default function Footer() {
  return (
    <footer className='mt-auto bg-chocolate text-beige border-t border-warm-brown/40'>
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left'>
          <div className='flex flex-col items-center md:items-start gap-4'>
            <Link to='/'>
              <img src={logo} alt='Naz Kaker' className='h-16 rounded-lg' />
            </Link>

            <p className='text-beige/90 text-sm leading-relaxed max-w-xs'>
              Håndlagde kaker og cookies på bestilling – bakt med kjærlighet til
              hver anledning.
            </p>

            <div className='flex items-center gap-2 text-beige/90 text-sm'>
              <IconMapPin size={16} stroke={1.5} className='shrink-0' />
              <span>Strømmen – Oslo</span>
            </div>
          </div>

          <div>
            <h3 className='font-serif text-lg text-cream mb-5'>Hurtiglenker</h3>

            <ul className='space-y-3'>
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className='text-beige/90 hover:text-cream transition-colors duration-300'
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h3 className='font-serif text-lg text-cream mb-5'>Følg oss</h3>

            <div className='flex gap-4'>
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className='flex h-11 w-11 items-center justify-center rounded-full bg-warm-brown/20 border border-warm-brown/40 text-beige hover:bg-soft-tan hover:text-chocolate hover:scale-110 transition-all duration-300'
                >
                  <Icon size={20} stroke={1.8} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-warm-brown/40 text-center'>
          <p className='text-sm text-beige/70'>
            © 2026 Naz Kaker. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
