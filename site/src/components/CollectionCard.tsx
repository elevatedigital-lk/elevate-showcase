'use client'

import Link from 'next/link'
import {Collection, localized} from '@/sanity'
import {useLanguage} from './LanguageProvider'

export default function CollectionCard({collection}: {collection: Collection}) {
  const {lang} = useLanguage()

  const collectionName = localized(collection, lang)
  const productCount = collection.products?.length || 0

  return (
    <Link
      href={`/collection/${collection.slug}`}
      className="group relative overflow-hidden rounded-lg border transition-all hover:shadow-lg"
      style={{borderColor: 'var(--border)'}}
    >
      {/* Background color from products in collection */}
      <div
        className="aspect-square flex flex-col items-center justify-center p-6 text-center"
        style={{backgroundColor: 'var(--surface)'}}
      >
        <h3 className="text-xl font-semibold transition-colors group-hover:text-blue-600" style={{color: 'var(--ink)'}}>
          {collectionName}
        </h3>
        <p className="mt-2 text-sm" style={{color: 'var(--ink-secondary)'}}>
          {productCount} {productCount === 1 ? 'product' : 'products'}
        </p>
      </div>
    </Link>
  )
}
