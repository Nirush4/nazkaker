export type Product = {
  id: string
  name: string
  price: string
  originalPrice?: string
  description: string
  details?: string
  image: string
}

export const formatPrice = (amount: number) =>
  amount >= 1000 ? `${amount.toLocaleString('nb-NO')} kr` : `${amount} kr`

export const allCakes: Product[] = [
  {
    id: 'cake-1',
    name: 'Velvet Rose-kake',
    price: formatPrice(699),
    description: 'Vaniljebunner med rosekrem og friske bær.',
    details:
      'En elegant kake med tre lag myk vaniljebunn, silkebløt rosekrem og friske sesongbær. Perfekt til bursdag, konfirmasjon eller jubileum. Kan tilpasses med navn og farger.',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop',
  },
  {
    id: 'cake-2',
    name: 'Sjokoladedrøm',
    price: formatPrice(629),
    description: 'Mørk sjokoladeganache med silkemyk sjokolademousse.',
    details:
      'For sjokoladeelskere: rik mørk sjokolade, kremet mousse og en dekorert overflate. Serveres kald for best smak. Tilgjengelig i flere størrelser.',
    image:
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=600&fit=crop',
  },
  {
    id: 'cake-3',
    name: 'Sitron & Zest',
    price: formatPrice(559),
    description: 'Lett sitronbunn toppet med italiensk marengs.',
    details:
      'Frisk og syrlig kake som balanserer søtt og syrlig. Ideell til vår- og sommerfeiringer. Dekoreres med sitronzest og edible blomster.',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop',
  },
  {
    id: 'cake-4',
    name: 'Salt Karamell Crunch',
    price: formatPrice(669),
    description: 'Salt karamell med sprø praliné og nøttecrunch.',
    details:
      'Karamellbunner, salt karamellfyll og et lag sprø praliné gir en kake med både sødme og crunch. En av våre mest etterspurte smaker.',
    image:
      'https://images.unsplash.com/photo-1586985289688-ca3cf47de1a2?w=600&h=600&fit=crop',
  },
  {
    id: 'cake-5',
    name: 'Bærbliss',
    price: formatPrice(599),
    description: 'Sesongbær på vanilje-chantilly-bunn.',
    details:
      'Lett vaniljebunn dekket med frisk chantilly og et rikt lag sesongbær. En klassiker som alltid slår an på kakebordet.',
    image:
      'https://images.unsplash.com/photo-1464349095432-e22a31081d19?w=600&h=600&fit=crop',
  },
  {
    id: 'cake-6',
    name: 'Bryllupskake – 3 etasjer',
    price: formatPrice(1299),
    description: 'Elegant tre-etagers design, skreddersydd til dagen din.',
    details:
      'Vår signatur bryllupskake med tre etasjer, pyntet etter ditt tema og fargepalett. Inkluderer smaksprøve og designmøte. Bestilles minst 4 uker i forveien.',
    image:
      'https://images.unsplash.com/photo-1535254973040-607b474cb70d?w=600&h=600&fit=crop',
  },
  {
    id: 'cake-7',
    name: 'Red Velvet',
    price: formatPrice(649),
    description: 'Klassisk red velvet med ostekrem og rød finish.',
    details:
      'Myk red velvet-bunn med tradisjonell ostekremfyll. Tidløs favoritt til bursdag og fest. Kan leveres med personlig skrift på toppen.',
    image:
      'https://images.unsplash.com/photo-1587668178277-295251f9ce85?w=600&h=600&fit=crop',
  },
  {
    id: 'cake-8',
    name: 'Pistasjkake',
    price: formatPrice(689),
    description: 'Italiensk-inspirert kake med pistasj og hvit sjokolade.',
    details:
      'Delikat pistasjfyll, hvit sjokoladeganache og et lag knuste pistasjnøtter. En sofistikert smak for den som vil noe utenom det vanlige.',
    image:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=600&fit=crop',
  },
]

export const allCookies: Product[] = [
  {
    id: 'cookie-1',
    name: 'Salt Karamell-cookie',
    price: formatPrice(39),
    description: 'Smørdeig med seig karamellkjerne.',
    details:
      'Bakt fersk hver dag. Sprø kanter, myk midte og en rik karamellkjerne som smelter i munnen. Selges enkeltvis eller i esker à 6 og 12.',
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf64db51?w=400&h=400&fit=crop',
  },
  {
    id: 'cookie-2',
    name: 'Dobbel Sjokolade',
    price: formatPrice(39),
    description: 'Mørk kakaodeig med hvite sjokoladebiter.',
    details:
      'Intens sjokoladesmak med hvite sjokoladebiter for ekstra sødme. Perfekt til kaffen eller som gave. Glutenfri variant tilgjengelig på forespørsel.',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop',
  },
  {
    id: 'cookie-3',
    name: 'Mandel Biscotti',
    price: formatPrice(45),
    description: 'Sprø, dobbeltbakt – perfekt til kaffen.',
    details:
      'Italiensk-inspirert biscotti med hele mandler. Dypper du den i cappuccino, smaker den enda bedre. Holdbarhet opptil 2 uker i tett boks.',
    image:
      'https://images.unsplash.com/photo-1607922267095-5b3621737c9b?w=400&h=400&fit=crop',
  },
  {
    id: 'cookie-4',
    name: 'Sitron Shortbread',
    price: formatPrice(35),
    description: 'Delikat smørdeig med frisk sitron.',
    details:
      'Klassisk shortbread med ekte sitronskall. Smelter på tungen. Populær i gaveesker og til afternoon tea.',
    image:
      'https://images.unsplash.com/photo-1607922267095-5b3621737c9b?w=400&h=400&fit=crop',
  },
  {
    id: 'cookie-5',
    name: 'Havre & Rosin',
    price: formatPrice(35),
    description: 'Hjemmekos med havregryn og saftige rosin.',
    details:
      'Myke havrecookies med rosiner og et dryss kanel. Et sunnere alternativ som fortsatt smaker som en skikkelig treat.',
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf64db51?w=400&h=400&fit=crop',
  },
  {
    id: 'cookie-6',
    name: 'Peanøttsmør-cookie',
    price: formatPrice(39),
    description: 'Tykk og seig med ekte peanøttsmør.',
    details:
      'Generøse cookies med kremet peanøttsmør og et dryss sjokolade. Bestselger blant barn – og voksne som innrømmer det.',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop',
  },
]

export const featuredCakes = allCakes.slice(0, 3)
export const featuredCookies = allCookies.slice(0, 4)

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
]

export const reviews = [
  {
    id: 'review-1',
    quote:
      'Bryllupskaken var rett og slett fantastisk – den smakte enda bedre enn den så ut. Alle gjestene spurte hvor vi hadde bestilt den.',
    author: 'Sarah M.',
  },
  {
    id: 'review-2',
    quote:
      'Naz Kaker gjorde datterens bursdag uforglemmelig. Designet var helt perfekt, og smakene var utrolige.',
    author: 'James L.',
  },
  {
    id: 'review-3',
    quote:
      'Vi bestiller cookies til kontoret hver måned. Alltid ferske, alltid vakre – og alltid borte på under en time.',
    author: 'Priya K.',
  },
]
