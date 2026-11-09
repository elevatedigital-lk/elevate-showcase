'use client'

import {Collection} from '@/sanity'
import CollectionCard from './CollectionCard'
import {useLanguage} from './LanguageProvider'
import {dict} from '@/i18n'

export default function CollectionsGrid({collections}: {collections: Collection[]}) {
  const {lang} = useLanguage()

  const collectionsLabel = lang === 'si' ? dict.si.collections : dict.en.collections

  return (
    <div>
      <h2 className="mb-8 text-2xl font-bold md:text-3xl" style={{color: 'var(--ink)'}}>
        {collectionsLabel}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <CollectionCard key={collection._id} collection={collection} />
        ))}
      </div>
    </div>
  )
}
