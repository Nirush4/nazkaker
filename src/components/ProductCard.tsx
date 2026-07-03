import type { Product } from '../data/products'

type ProductCardProps = {
  product: Product
  compact?: boolean
  featured?: boolean
  showBadge?: boolean
}

export default function ProductCard({
  product,
  compact = false,
  featured = false,
  showBadge = false,
}: ProductCardProps) {
  const isOnSale = Boolean(product.originalPrice)

  return (
    <article
      className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
        featured
          ? 'border-2 border-chocolate/20 ring-1 ring-beige'
          : 'border border-beige/60'
      }`}
    >
      <div className={`relative overflow-hidden ${compact ? 'aspect-square' : 'aspect-[4/5]'}`}>
        {showBadge && isOnSale && (
          <span className="absolute top-3 left-3 z-10 bg-chocolate text-cream text-xs font-medium tracking-wide uppercase px-3 py-1 rounded-full">
            Tilbud
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
      <div className={compact ? 'p-4' : 'p-5'}>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className={`font-serif text-chocolate leading-snug ${
              compact ? 'text-base' : 'text-lg'
            }`}
          >
            {product.name}
          </h3>
          <div className="text-right shrink-0">
            {isOnSale ? (
              <>
                <span className="block text-chocolate font-semibold text-sm">{product.price}</span>
                <span className="block text-soft-tan text-xs line-through">
                  {product.originalPrice}
                </span>
              </>
            ) : (
              <span className="text-warm-brown font-medium text-sm">{product.price}</span>
            )}
          </div>
        </div>
        <p className="text-warm-brown text-sm leading-relaxed">{product.description}</p>
      </div>
    </article>
  )
}
