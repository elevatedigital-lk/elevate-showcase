export type Lang = 'en' | 'si'

export type Dict = {
  siteTitle: string
  tagline: string
  inquireButton: string
  category: string
  type: string
  minPrice: string
  maxPrice: string
  inStockOnly: string
  clearFilters: string
  outOfStock: string
  noProductsYet: string
  noProductsMatch: string
  code: string
  footer: string
  all: string
  showing: (count: number, total: number) => string
  whatsappMessage: (name: string, code: string, price: string, inStock: boolean) => string
  whatsappMessageDetailed: (
    name: string,
    code: string,
    price: string,
    color: string,
    size: string,
    inStock: boolean,
  ) => string
  chooseLanguage: string
  languageNameEn: string
  languageNameSi: string
  moreFilters: string
  priceRange: string
  done: string
  filtersActive: (count: number) => string
  viewDetails: string
  backToCatalog: string
  howToOrder: string
  description: string
  sizesAvailable: string
  sizeChart: string
  orderPolicy: string
  stepsToOrder: string
  homeLink: string
  color: string
  size: string
  selectColor: string
  selectSize: string
  selectBothToInquire: string
  nudgeTitle: string
  nudgeBody: string
  nudgeDismiss: string
  heroHeadlineLine1: string
  heroHeadlineLine2: string
  heroSubtext: string
  heroKicker: string
  heroCta: string
  craftHeading: string
  craftBody: string
  craftFact: string
  sortBy: string
  sortNewest: string
  sortPriceLow: string
  sortPriceHigh: string
  offPercent: (percent: number) => string
  offerBadge: string
  msrp: string
  offerPrice: string
  pageLabel: (page: number, total: number) => string
  collections: string
  backToCollections: string
}

export const dict: Record<Lang, Dict> = {
  en: {
    siteTitle: 'Beto',
    tagline: 'Browse our shoes below and tap "Inquire on WhatsApp" to order.',
    inquireButton: 'Inquire on WhatsApp',
    category: 'Category',
    type: 'Type',
    minPrice: 'Min price',
    maxPrice: 'Max price',
    inStockOnly: 'In stock only',
    clearFilters: 'Clear filters',
    outOfStock: 'Out of stock',
    noProductsYet: 'No products yet — check back soon!',
    noProductsMatch: 'No products match these filters.',
    code: 'Code',
    footer: 'All prices in LKR.',
    all: 'All',
    showing: (count, total) => `Showing ${count} of ${total} products`,
    whatsappMessage: (name, code, price, inStock) =>
      `Hi! I'm interested in *${name}* (Code: ${code}), priced at LKR ${price}. ${
        inStock ? 'Is it available?' : 'Will this be available soon?'
      }`,
    whatsappMessageDetailed: (name, code, price, color, size, inStock) =>
      `Hi! I'm interested in *${name}* (Code: ${code}), priced at LKR ${price}. Color: ${color}, Size: ${size}. ${
        inStock ? 'Is it available?' : 'Will this be available soon?'
      }`,
    chooseLanguage: 'Choose your language',
    languageNameEn: 'English',
    languageNameSi: 'සිංහල',
    moreFilters: 'Price & stock',
    priceRange: 'Price range',
    done: 'Done',
    filtersActive: (count) => `${count} active`,
    viewDetails: 'View details',
    backToCatalog: '← Back to catalog',
    howToOrder: 'How to Order',
    description: 'Description',
    sizesAvailable: 'Available sizes',
    sizeChart: 'Size chart',
    orderPolicy: 'Good to know',
    stepsToOrder: 'Steps to order',
    homeLink: 'Catalog',
    color: 'Color',
    size: 'Size',
    selectColor: 'Select a color',
    selectSize: 'Select a size',
    selectBothToInquire: 'Please select a color and size to inquire',
    nudgeTitle: 'New here?',
    nudgeBody: 'See how ordering works in a few quick steps.',
    nudgeDismiss: 'Close',
    heroHeadlineLine1: 'Shaped by hand',
    heroHeadlineLine2: 'not a factory.',
    heroSubtext: 'Beto designs and makes each shoe himself, in Sri Lanka — no factory line, no middleman. Pick a style and inquire on WhatsApp.',
    heroKicker: 'Handmade, start to finish',
    heroCta: 'See the shoes',
    craftHeading: 'Every pair starts on a last',
    craftBody: 'Every Beto shoe starts on a last — the wooden mould a shoemaker carves to the shape of a foot, then builds a shoe around. Beto cuts, stitches and finishes each pair himself, the way it has been done in Sri Lanka for generations. No two batches are identical, because no machine made them.',
    craftFact: 'Made to order, by hand, in Sri Lanka',
    sortBy: 'Sort',
    sortNewest: 'Newest',
    sortPriceLow: 'Price: Low to High',
    sortPriceHigh: 'Price: High to Low',
    offPercent: (percent) => `${percent}% OFF`,
    offerBadge: 'Offer',
    msrp: 'MSRP',
    offerPrice: 'Offer price',
    pageLabel: (page, total) => `Page ${page} of ${total}`,
    collections: 'Collections',
    backToCollections: '← Back to collections',
  },
  si: {
    siteTitle: 'Beto',
    tagline: "අපගේ සපත්තු එකතුව පහතින් බලන්න. නියම කරගැනීමට 'WhatsApp මගින් විමසන්න' බොත්තම ඔබන්න.",
    inquireButton: 'WhatsApp මගින් විමසන්න',
    category: 'කාණ්ඩය',
    type: 'වර්ගය',
    minPrice: 'අවම මිල',
    maxPrice: 'උපරිම මිල',
    inStockOnly: 'තොගයේ ඇති පමණක්',
    clearFilters: 'පෙරහන් ඉවත් කරන්න',
    outOfStock: 'තොගයේ නැත',
    noProductsYet: 'තවම නිෂ්පාදන නැත — නැවත පරීක්ෂා කරන්න!',
    noProductsMatch: 'මෙම පෙරහන් වලට ගැළපෙන නිෂ්පාදන නැත.',
    code: 'කේතය',
    footer: 'සියලුම මිල ගණන් රු. (LKR) වලින්.',
    all: 'සියල්ල',
    showing: (count, total) => `නිෂ්පාදන ${total} න් ${count} ක් පෙන්වමින්`,
    whatsappMessage: (name, code, price, inStock) =>
      `ආයුබෝවන්! මට *${name}* (කේතය: ${code}) ගැන උනන්දුවක් තියෙනවා. මිල: රු. ${price}. ${
        inStock ? 'මේක දැනට තියෙනවද?' : 'මේක ළඟදීම ලැබෙනවද?'
      }`,
    whatsappMessageDetailed: (name, code, price, color, size, inStock) =>
      `ආයුබෝවන්! මට *${name}* (කේතය: ${code}) ගැන උනන්දුවක් තියෙනවා. මිල: රු. ${price}. වර්ණය: ${color}, සයිස් එක: ${size}. ${
        inStock ? 'මේක දැනට තියෙනවද?' : 'මේක ළඟදීම ලැබෙනවද?'
      }`,
    chooseLanguage: 'ඔබගේ භාෂාව තෝරන්න',
    languageNameEn: 'English',
    languageNameSi: 'සිංහල',
    moreFilters: 'මිල සහ තොගය',
    priceRange: 'මිල පරාසය',
    done: 'සම්පූර්ණයි',
    filtersActive: (count) => `${count} ක් යොදා ඇත`,
    viewDetails: 'විස්තර බලන්න',
    backToCatalog: '← නිෂ්පාදන ලැයිස්තුවට',
    howToOrder: 'ඇණවුම් කරන ආකාරය',
    description: 'විස්තරය',
    sizesAvailable: 'තිබෙන සයිස්',
    sizeChart: 'සයිස් ප්‍රස්ථාරය',
    orderPolicy: 'දැනගත යුතු දේ',
    stepsToOrder: 'ඇණවුම් කරන පියවර',
    homeLink: 'නිෂ්පාදන ලැයිස්තුව',
    color: 'වර්ණය',
    size: 'සයිස් එක',
    selectColor: 'වර්ණයක් තෝරන්න',
    selectSize: 'සයිස් එකක් තෝරන්න',
    selectBothToInquire: 'විමසීමට පෙර වර්ණයක් සහ සයිස් එකක් තෝරන්න',
    nudgeTitle: 'අලුතින් පැමිණියෙක්ද?',
    nudgeBody: 'ඇණවුම් කරන ආකාරය විනාඩියකින් බලන්න.',
    nudgeDismiss: 'වසන්න',
    heroHeadlineLine1: 'අතින් සාදන ලදී,',
    heroHeadlineLine2: 'කර්මාන්තශාලාවක නොවේ.',
    heroSubtext: 'බෙටෝ විසින් සෑම සපත්තු යුගලයක්ම ශ්‍රී ලංකාවේදී තනි අතින් නිර්මාණය කර සාදනු ලැබේ — කර්මාන්ත ශාලාවක් නැත, මැදිහත්කරුවෙක් නැත. මාදිලියක් තෝරලා WhatsApp මගින් විමසන්න.',
    heroKicker: 'මුල සිට අග දක්වා අතින් සාදන ලද',
    heroCta: 'සපත්තු බලන්න',
    craftHeading: 'සෑම යුගලයක්ම ආරම්භ වන්නේ ලාස්ට් එකකින්',
    craftBody: 'සෑම බෙටෝ සපත්තුවක්ම ආරම්භ වන්නේ "ලාස්ට් එකකින්" — සපත්තු හස්ත කරුවෙකු පාදයේ හැඩයට කපන ලී සැකිල්ලෙන්, ඉන් පසු සපත්තුව ගොඩනඟනු ලැබේ. බෙටෝ සෑම යුගලයක්ම තනි අතින් කපා, මහලා, නිමකරනු ලබන්නේ පරම්පරා ගණනාවක් තිස්සේ ශ්‍රී ලංකාවේ පැවති ක්‍රමයටම ය. කිසිදු යන්ත්‍රයක් එය සෑදුවේ නැති බැවින් කිසිදු දෙකක් සමාන නැත.',
    craftFact: 'ඇණවුමට අනුව, අතින්, ශ්‍රී ලංකාවේ සාදන ලද',
    sortBy: 'පෙළගැස්ම',
    sortNewest: 'අලුත්ම',
    sortPriceLow: 'මිල: අඩුම සිට වැඩිම',
    sortPriceHigh: 'මිල: වැඩිම සිට අඩුම',
    offPercent: (percent) => `${percent}% අඩුවෙන්`,
    offerBadge: 'දීමනාව',
    msrp: 'සාමාන්‍ය මිල',
    offerPrice: 'දීමනා මිල',
    pageLabel: (page, total) => `පිටුව ${page} / ${total}`,
    collections: 'එකතුවන්',
    backToCollections: '← එකතු වලට',
  },
}
