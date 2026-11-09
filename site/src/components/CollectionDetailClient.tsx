'use client'

import {useLanguage} from './LanguageProvider'
import CatalogClient from './CatalogClient'
import {Collection, ActiveOffer, localized} from '@/sanity'
import {dict} from '@/i18n'
import Link from 'next/link'

export default function CollectionDetailClient({
  collection,
  offer,
}: {
  collection: Collection
  offer: ActiveOffer | null
}) {
  const {lang} = useLanguage()

  const collectionName = localized(collection, lang)
  const collectionDesc = lang === 'si' && collection.descriptionSi ? collection.descriptionSi : collection.description
  const backLabel = lang === 'si' ? dict.si.backToCatalog : dict.en.backToCatalog

  return (
    <>
      {/* Collection header */}
      <div className="mb-10">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium hover:underline"
          style={{color: 'var(--accent)'}}
        >
          {backLabel}
        </Link>
        <h1 className="text-3xl font-bold md:text-4xl" style={{color: 'var(--ink)'}}>
          {collectionName}
        </h1>
        {collectionDesc && (
          <p className="mt-4" style={{color: 'var(--ink-secondary)'}}>
            {collectionDesc}
          </p>
        )}
      </div>

      {/* Products from this collection */}
      <CatalogClient
        products={collection.products || []}
        categories={[]}
        types={[]}
        offer={offer}
      />
    </>
  )
}
