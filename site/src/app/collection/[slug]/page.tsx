import {notFound} from 'next/navigation'
import {getCollectionBySlug, getSiteSettings, getActiveOffer} from '@/sanity'
import CollectionDetailClient from '@/components/CollectionDetailClient'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import OfferBar from '@/components/OfferBar'

export const dynamic = 'force-dynamic'

export default async function CollectionPage({
  params,
}: {
  params: Promise<{slug: string}>
}) {
  const {slug} = await params
  const [collection, settings, offer] = await Promise.all([
    getCollectionBySlug(decodeURIComponent(slug)),
    getSiteSettings(),
    getActiveOffer(),
  ])

  if (!collection) {
    notFound()
  }

  return (
    <main className="min-h-screen" style={{backgroundColor: 'var(--bg)'}}>
      <OfferBar barEn={settings?.offerBarEn} barSi={settings?.offerBarSi} />
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-[var(--margin)] py-10 sm:py-16">
        <CollectionDetailClient collection={collection} offer={offer} />
      </section>
      <SiteFooter />
    </main>
  )
}
