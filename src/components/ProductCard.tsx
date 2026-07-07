import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';

type ProductCardProps = {
  product: Product;
  compact?: boolean;
  featured?: boolean;
  showBadge?: boolean;
};

export default function ProductCard({
  product,
  compact = false,
  featured = false,
  showBadge = false,
}: ProductCardProps) {
  const isOnSale = Boolean(product.originalPrice);
  const images = product.images?.length ? product.images : [product.image];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setDirection('right');
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setDirection('left');
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <Link to={`/cakes/${product.id}`} className='block'>
      <article
        className={`group relative rounded-3xl overflow-hidden bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
          featured
            ? 'border border-chocolate/20 ring-1 ring-beige/50'
            : 'border border-beige/40'
        }`}
      >
        <div
          className={`relative overflow-hidden ${
            compact ? 'aspect-square' : 'aspect-[4/5]'
          }`}
        >
          <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-chocolate/10 via-transparent to-transparent' />

          {showBadge && isOnSale && (
            <div className='absolute top-4 left-4 z-10'>
              <span className='bg-chocolate text-cream text-[11px] tracking-widest uppercase px-3 py-1 rounded-full shadow-md'>
                Tilbud
              </span>
            </div>
          )}

          <div className='w-full h-full overflow-hidden'>
            <div
              className='flex w-full h-full transition-transform duration-700 ease-in-out'
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={product.name}
                  className='w-full h-full object-cover flex-shrink-0'
                />
              ))}
            </div>
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className='absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-chocolate w-9 h-9 cursor-pointer rounded-full shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition'
              >
                ‹
              </button>

              <button
                onClick={next}
                className='absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-chocolate w-9 h-9 cursor-pointer rounded-full shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition'
              >
                ›
              </button>

              <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5'>
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`transition-all rounded-full ${
                      i === index
                        ? 'w-4 h-1.5 bg-white'
                        : 'w-1.5 h-1.5 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          <div className='absolute bottom-4 right-4 z-10'>
            <div className='bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-beige/40 text-right'>
              {isOnSale ? (
                <>
                  <p className='text-chocolate font-semibold text-sm leading-tight'>
                    {product.price}
                  </p>

                  <p className='text-soft-tan text-[11px] line-through leading-tight'>
                    {product.originalPrice}
                  </p>
                </>
              ) : (
                <p className='text-chocolate font-semibold text-sm'>
                  {product.price}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className={`${compact ? 'p-4' : 'p-6'} space-y-3`}>
          <h3
            className={`font-serif text-chocolate leading-snug tracking-tight ${
              compact ? 'text-base' : 'text-xl'
            }`}
          >
            {product.name}
          </h3>

          <p className='text-warm-brown text-sm leading-relaxed line-clamp-2'>
            {product.description}
          </p>

          <div className='h-1.25 w-full bg-beige/40 relative overflow-hidden rounded-full'>
            <div className='absolute inset-0 w-0 group-hover:w-full bg-chocolate/30 transition-all duration-700' />
          </div>

          <div className='flex items-center justify-between pt-1'>
            <p className='text-soft-tan text-xs tracking-wide uppercase'>
              Håndlaget
            </p>

            <div className='text-chocolate text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-amber-700'>
              Se detaljer →
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
