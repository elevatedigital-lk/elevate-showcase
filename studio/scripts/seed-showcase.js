#!/usr/bin/env node
/**
 * Seed script for Elevate Showcase catalog
 * Creates 30+ sample products across Clothing, Footwear, and Accessories
 * with 5-6 collections and realistic LKR pricing
 *
 * Usage: SANITY_TOKEN=<token> node studio/scripts/seed-showcase.js
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.SANITY_DATASET || 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const unsplashImg = (query, id) => ({
  _type: 'image',
  asset: {
    _type: 'reference',
    _ref: `image-${query}-${id}-${Math.random().toString(36).substr(2, 9)}`,
  },
  alt: query,
})

const products = [
  // Clothing (12)
  {name: 'Premium Cotton T-Shirt', nameSi: 'හොඳ තත්ත්ව කාර්බන් ටී-ශර්ට්', code: 'ECS-001', price: 1290, category: 'Clothing', type: 'Casual'},
  {name: 'Formal White Shirt', nameSi: 'ඩිජිටල් සුදු ශර්ට්', code: 'ECS-002', price: 2490, category: 'Clothing', type: 'Office'},
  {name: 'Blue Denim Jacket', nameSi: 'නිල් ඩෙනිම් ජැකට්', code: 'ECS-003', price: 3990, category: 'Clothing', type: 'Casual'},
  {name: 'Women\'s Summer Dress', nameSi: 'කාන්තා ගිම්හාන පිළිවෙසිය', code: 'ECS-004', price: 2890, category: 'Clothing', type: 'Casual'},
  {name: 'Black Polo Shirt', nameSi: 'කළු පෝලෝ ශර්ට්', code: 'ECS-005', price: 1690, category: 'Clothing', type: 'Office'},
  {name: 'Striped Casual Shirt', nameSi: 'ඉරි ගිණු ශර්ට්', code: 'ECS-006', price: 1490, category: 'Clothing', type: 'Casual'},
  {name: 'Women\'s Blazer', nameSi: 'කාන්තා Blazer', code: 'ECS-007', price: 4290, category: 'Clothing', type: 'Office'},
  {name: 'Cotton Joggers', nameSi: 'කාර්බන් Joggers', code: 'ECS-008', price: 1890, category: 'Clothing', type: 'Casual'},
  {name: 'Waterproof Jacket', nameSi: 'ජල-විරෝධී ජැකට්', code: 'ECS-009', price: 4590, category: 'Clothing', type: 'Casual'},
  {name: 'Silk Evening Dress', nameSi: 'දේශිය සන්ධ්‍යා ඇඟට', code: 'ECS-010', price: 5490, category: 'Clothing', type: 'Office'},
  {name: 'Wool Sweater', nameSi: 'ගිනි දෙයි', code: 'ECS-011', price: 2190, category: 'Clothing', type: 'Casual'},
  {name: 'Linen Summer Shirt', nameSi: 'Linen ගිම්හාන ශර්ට්', code: 'ECS-012', price: 1590, category: 'Clothing', type: 'Casual'},

  // Footwear (10)
  {name: 'Classic Leather Oxford', nameSi: 'සම්ප්‍රදායික ඡපත් Oxford', code: 'ECS-F01', price: 4990, category: 'Footwear', type: 'Office'},
  {name: 'Running Sneakers Pro', nameSi: 'දුවමින් Sneakers Pro', code: 'ECS-F02', price: 6490, category: 'Footwear', type: 'Sports'},
  {name: 'Casual Canvas Shoes', nameSi: 'අවිශ්වාසර Canvas බූට', code: 'ECS-F03', price: 1890, category: 'Footwear', type: 'Casual'},
  {name: 'Desert Boot Tan', nameSi: 'වැනගිඩු Boot Tan', code: 'ECS-F04', price: 3890, category: 'Footwear', type: 'Casual'},
  {name: 'Athletic Shorts Shoe', nameSi: 'ක්‍රීඩා කෙටි බූට', code: 'ECS-F05', price: 3290, category: 'Footwear', type: 'Sports'},
  {name: 'Comfortable Sandals', nameSi: 'සුවපහසු Sandals', code: 'ECS-F06', price: 890, category: 'Footwear', type: 'Casual'},
  {name: 'Leather Loafers', nameSi: 'ඡපත් Loafers', code: 'ECS-F07', price: 3490, category: 'Footwear', type: 'Office'},
  {name: 'Waterproof Hiking Boot', nameSi: 'ජල-විරෝධී නැරඹුම් Boot', code: 'ECS-F08', price: 5890, category: 'Footwear', type: 'Sports'},
  {name: 'Casual Slip-On Shoe', nameSi: 'අවිශ්වාසර Slip-On බූට', code: 'ECS-F09', price: 2190, category: 'Footwear', type: 'Casual'},
  {name: 'Smart Formal Pump', nameSi: 'ස්මාර්ට් විධිමත් Pump', code: 'ECS-F10', price: 4290, category: 'Footwear', type: 'Office'},

  // Accessories (8)
  {name: 'Premium Leather Belt', nameSi: 'ඉහළ සම්පත් ඡපත් තුණ', code: 'ECS-A01', price: 1290, category: 'Accessories', type: 'Casual'},
  {name: 'Canvas Messenger Bag', nameSi: 'Canvas දූතවරු බෑග්', code: 'ECS-A02', price: 2490, category: 'Accessories', type: 'Casual'},
  {name: 'Wool Winter Cap', nameSi: 'ගිනි ශීත Cap', code: 'ECS-A03', price: 890, category: 'Accessories', type: 'Casual'},
  {name: 'Classic Wrist Watch', nameSi: 'සම්ප්‍රදායික Wrist Watch', code: 'ECS-A04', price: 6990, category: 'Accessories', type: 'Office'},
  {name: 'Sunglasses UV Protection', nameSi: 'සූර්ය-පද UV ආරක්ෂණ', code: 'ECS-A05', price: 2190, category: 'Accessories', type: 'Casual'},
  {name: 'Leather Card Wallet', nameSi: 'ඡපත් කාඩ් Wallet', code: 'ECS-A06', price: 1890, category: 'Accessories', type: 'Office'},
  {name: 'Canvas Backpack', nameSi: 'Canvas පිටුපසින් Pack', code: 'ECS-A07', price: 3490, category: 'Accessories', type: 'Casual'},
  {name: 'Silk Necktie Collection', nameSi: 'දේශිය Necktie කිරුණ', code: 'ECS-A08', price: 1690, category: 'Accessories', type: 'Office'},
]

const categories = [
  {_type: 'category', name: 'Clothing', nameSi: 'ඇඟට'},
  {_type: 'category', name: 'Footwear', nameSi: 'බූට'},
  {_type: 'category', name: 'Accessories', nameSi: 'ඇටවිතුරු'},
]

const types = [
  {_type: 'productType', name: 'Casual', nameSi: 'අවිශ්වාසර'},
  {_type: 'productType', name: 'Office', nameSi: 'කාර්යාලය'},
  {_type: 'productType', name: 'Sports', nameSi: 'ක්‍රීඩා'},
]

const collections = [
  {
    _type: 'collection',
    name: 'Men\'s Collection',
    nameSi: 'පිරිමි කිරුණ',
    slug: 'mens-collection',
    description: 'Curated collection of men\'s clothing, footwear, and accessories.',
    descriptionSi: 'පිරිමි ඇඟට, බූට, සහ ඇටවිතුරු පිරිසිදු කිරුණ।',
    order: 1,
  },
  {
    _type: 'collection',
    name: 'Women\'s Collection',
    nameSi: 'කාන්තා කිරුණ',
    slug: 'womens-collection',
    description: 'Elegantly curated collection for women.',
    descriptionSi: 'කාන්තා සඳහා නිවිඩ ගතුකරණ කිරුණ।',
    order: 2,
  },
  {
    _type: 'collection',
    name: 'Best Sellers',
    nameSi: 'ඉතා විකුණු',
    slug: 'best-sellers',
    description: 'Our top-selling, customer-favorite products.',
    descriptionSi: 'අපගේ ඉතා විකුණු, ගෙවතුරු ප්‍රිය නිෂ්පාදන।',
    order: 3,
  },
  {
    _type: 'collection',
    name: 'New Arrivals',
    nameSi: 'නව ඇවිත්තු',
    slug: 'new-arrivals',
    description: 'Latest products just added to our catalog.',
    descriptionSi: 'සිටින නිෂ්පාදන අපගේ ප්‍රසිද්ධිපතට එකතු කරන ලදී।',
    order: 4,
  },
  {
    _type: 'collection',
    name: 'Sale Items',
    nameSi: 'විකිණීමේ නිෂ්පාදන',
    slug: 'sale-items',
    description: 'Limited-time discounted products.',
    descriptionSi: 'සීමිත-කාල ඉවතුම් ගිණු නිෂ්පාදන।',
    order: 5,
  },
  {
    _type: 'collection',
    name: 'Trending',
    nameSi: 'ප්‍රවණතා',
    slug: 'trending',
    description: 'What\'s hot right now.',
    descriptionSi: 'එනම් දුස්සු දැනටමත්.',
    order: 6,
  },
]

const offer = {
  _type: 'offer',
  title: 'Black Friday Sale',
  titleSi: 'කළු සිකුරාදා විකිණුම',
  bannerTextEn: '🎉 20% OFF on selected items',
  bannerTextSi: '🎉 තෝරාගත් නිෂ්පාදනවල 20% OFF',
  discount: 20,
  startDate: new Date().toISOString().split('T')[0],
  endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  products: [],
}

async function seed() {
  try {
    console.log('Creating categories...')
    const createdCategories = await Promise.all(categories.map(cat => client.create(cat)))
    const categoryMap = Object.fromEntries(createdCategories.map(cat => [cat.name, cat._id]))

    console.log('Creating types...')
    const createdTypes = await Promise.all(types.map(t => client.create(t)))
    const typeMap = Object.fromEntries(createdTypes.map(t => [t.name, t._id]))

    console.log('Creating products...')
    const createdProducts = await Promise.all(
      products.map(p =>
        client.create({
          _type: 'product',
          name: p.name,
          nameSi: p.nameSi,
          code: p.code,
          price: p.price,
          category: {_type: 'reference', _ref: categoryMap[p.category]},
          productType: {_type: 'reference', _ref: typeMap[p.type]},
          inStock: true,
          images: [
            {
              _type: 'image',
              asset: {_type: 'reference', _ref: 'image-product-1'},
              alt: p.name,
            },
          ],
        }),
      ),
    )

    console.log('Creating collections with products...')
    const updatedCollections = collections.map(coll => ({
      ...coll,
      products: createdProducts
        .filter((_, i) => {
          if (coll.slug === 'mens-collection') return i % 3 === 0
          if (coll.slug === 'womens-collection') return i % 3 === 1
          if (coll.slug === 'best-sellers') return i % 2 === 0
          if (coll.slug === 'new-arrivals') return i < 8
          if (coll.slug === 'sale-items') return i % 4 === 2
          if (coll.slug === 'trending') return i < 12
          return false
        })
        .map(p => ({_type: 'reference', _ref: p._id})),
    }))

    const createdCollections = await Promise.all(
      updatedCollections.map(coll => client.create(coll)),
    )

    console.log('Creating offer...')
    const offerWithProducts = {
      ...offer,
      products: createdProducts.slice(0, 5).map(p => ({_type: 'reference', _ref: p._id})),
    }
    const createdOffer = await client.create(offerWithProducts)

    console.log('\n✅ Seeding complete!')
    console.log(`Created ${createdProducts.length} products`)
    console.log(`Created ${createdCategories.length} categories`)
    console.log(`Created ${createdTypes.length} types`)
    console.log(`Created ${createdCollections.length} collections`)
    console.log(`Created 1 offer`)
  } catch (error) {
    console.error('Seed failed:', error)
    process.exit(1)
  }
}

seed()
