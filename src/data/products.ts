export type Product = {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  details?: string;
  image: string;
  images?: string[];
  category?:
    | 'bryllup'
    | 'bursdag'
    | 'konfirmasjon'
    | 'dåp'
    | 'uteksaminering'
    | 'spesielle-anledninger';
};

export const formatPrice = (amount: number) =>
  amount >= 1000 ? `${amount.toLocaleString('nb-NO')} kr` : `${amount} kr`;

export const allCakes: Product[] = [
  {
    id: 'cake-1',
    name: 'Velvet Rose-kake',
    price: formatPrice(699),
    category: 'bursdag',
    description: 'Vaniljebunner med rosekrem og friske bær.',
    details:
      'En elegant kake med tre lag myk vaniljebunn, silkebløt rosekrem og friske sesongbær.',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519869325930-281384150729?w=800&h=800&fit=crop',
    ],
  },
  {
    id: 'cake-2',
    name: 'Sjokoladedrøm',
    price: formatPrice(629),
    category: 'bursdag',
    description: 'Mørk sjokoladeganache med silkemyk sjokolademousse.',
    details: 'Rik mørk sjokolade, kremet mousse og elegant finish.',
    image:
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=800&fit=crop',
    ],
  },
  {
    id: 'cake-3',
    name: 'Sitron & Zest',
    price: formatPrice(559),
    category: 'bursdag',
    description: 'Lett sitronbunn toppet med italiensk marengs.',
    details: 'Frisk og syrlig kake med balansert sødme.',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519869325930-281384150729?w=800&h=800&fit=crop',
    ],
  },
  {
    id: 'cake-4',
    name: 'Salt Karamell Crunch',
    price: formatPrice(669),
    category: 'bursdag',
    description: 'Salt karamell med sprø praliné og nøttecrunch.',
    details: 'Karamell, crunch og perfekt balanse mellom søtt og salt.',
    image:
      'https://images.unsplash.com/photo-1586985289688-ca3cf47de1a2?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586985289688-ca3cf47de1a2?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=800&fit=crop',
    ],
  },
  {
    id: 'cake-5',
    name: 'Bærbliss',
    price: formatPrice(599),
    category: 'bursdag',
    description: 'Sesongbær på vanilje-chantilly-bunn.',
    details: 'Frisk klassiker med lette smaker.',
    image:
      'https://images.unsplash.com/photo-1464349095432-e22a31081d19?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1464349095432-e22a31081d19?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519869325930-281384150729?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=800&fit=crop',
    ],
  },
  {
    id: 'cake-6',
    name: 'Bryllupskake – 3 etasjer',
    price: formatPrice(1299),
    category: 'bryllup',
    description: 'Elegant tre-etagers design, skreddersydd til dagen din.',
    details: 'Signatur bryllupskake til spesielle øyeblikk.',
    image:
      'https://images.unsplash.com/photo-1535254973040-607b474cb70d?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1535254973040-607b474cb70d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519654793190-2b2d1d0f0f0b?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=800&fit=crop',
    ],
  },
  {
    id: 'cake-7',
    name: 'Red Velvet',
    price: formatPrice(649),
    category: 'bursdag',
    description: 'Klassisk red velvet med ostekrem.',
    details: 'Tidløs favoritt med myk tekstur.',
    image:
      'https://images.unsplash.com/photo-1587668178277-295251f9ce85?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1587668178277-295251f9ce85?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&h=800&fit=crop',
    ],
  },
  {
    id: 'cake-8',
    name: 'Pistasjkake',
    price: formatPrice(689),
    category: 'spesielle-anledninger',
    description: 'Italiensk pistasj og hvit sjokolade.',
    details: 'Sofistikert smakskombinasjon.',
    image:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=800&fit=crop',
    ],
  },
];

export const allCookies: Product[] = [
  {
    id: 'cookie-1',
    name: 'Salt Karamell-cookie',
    price: formatPrice(39),
    description: 'Smørdeig med seig karamellkjerne.',
    details: 'Bakt fersk hver dag med myk kjerne.',
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf64db51?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558961363-fa8fdf64db51?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1607922267095-5b3621737c9b?w=800&h=800&fit=crop',
    ],
  },
  {
    id: 'cookie-2',
    name: 'Dobbel Sjokolade',
    price: formatPrice(39),
    description: 'Mørk kakaodeig med hvite sjokoladebiter.',
    details: 'Intens sjokoladesmak med sprø biter.',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558961363-fa8fdf64db51?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1607922267095-5b3621737c9b?w=800&h=800&fit=crop',
    ],
  },
  {
    id: 'cookie-3',
    name: 'Mandel Biscotti',
    price: formatPrice(45),
    description: 'Sprø, dobbeltbakt – perfekt til kaffen.',
    details: 'Italiensk klassiker med mandler.',
    image:
      'https://images.unsplash.com/photo-1607922267095-5b3621737c9b?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1607922267095-5b3621737c9b?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558961363-fa8fdf64db51?w=800&h=800&fit=crop',
    ],
  },
  {
    id: 'cookie-4',
    name: 'Sitron Shortbread',
    price: formatPrice(35),
    description: 'Delikat smørdeig med frisk sitron.',
    details: 'Smelter på tungen.',
    image:
      'https://images.unsplash.com/photo-1607922267095-5b3621737c9b?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1607922267095-5b3621737c9b?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558961363-fa8fdf64db51?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=800&fit=crop',
    ],
  },
  {
    id: 'cookie-5',
    name: 'Havre & Rosin',
    price: formatPrice(35),
    description: 'Hjemmekos med havre og rosin.',
    details: 'Myk og klassisk smak.',
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf64db51?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558961363-fa8fdf64db51?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1607922267095-5b3621737c9b?w=800&h=800&fit=crop',
    ],
  },
  {
    id: 'cookie-6',
    name: 'Peanøttsmør-cookie',
    price: formatPrice(39),
    description: 'Tykk og seig med peanøttsmør.',
    details: 'Klassisk favoritt.',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558961363-fa8fdf64db51?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1607922267095-5b3621737c9b?w=800&h=800&fit=crop',
    ],
  },
];

export const featuredCakes = allCakes.slice(0, 3);
export const featuredCookies = allCookies.slice(0, 4);

export const specialOffers: Product[] = [
  {
    ...allCakes[1],
    price: formatPrice(499),
    originalPrice: formatPrice(629),
  },
  {
    ...allCakes[0],
    price: formatPrice(549),
    originalPrice: formatPrice(699),
  },
  {
    ...allCookies[0],
    price: formatPrice(29),
    originalPrice: formatPrice(39),
  },
  {
    ...allCookies[1],
    price: formatPrice(29),
    originalPrice: formatPrice(39),
  },
];

export const reviews = [
  {
    id: 'review-1',
    quote: 'Bryllupskaken var fantastisk – smakte enda bedre enn den så ut.',
    author: 'Sarah M.',
  },
  {
    id: 'review-2',
    quote: 'Naz Kaker gjorde bursdagen uforglemmelig.',
    author: 'James L.',
  },
  {
    id: 'review-3',
    quote: 'Cookies til kontoret forsvinner alltid på minutter.',
    author: 'Priya K.',
  },
];
