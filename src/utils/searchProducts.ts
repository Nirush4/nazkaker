import type { Product } from '../data/products';

export function searchProducts(products: Product[], query: string) {
  const q = query.toLowerCase().trim();

  if (!q) return [];

  return products.filter((p) => {
    return (
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });
}
