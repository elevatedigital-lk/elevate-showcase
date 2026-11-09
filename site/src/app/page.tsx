import {getProducts, getCategories, getProductTypes, getSiteSettings, getActiveOffer, getCollections} from '@/sanity'
import CatalogClient from '@/components/CatalogClient'
import CollectionsGrid from '@/components/CollectionsGrid'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import HeroSlider from '@/components/HeroSlider'
import OfferBar from '@/components/OfferBar'
import OfferBanner from '@/components/OfferBanner'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const [products, categories, types, settings, offer, collections] = await Promise.all([
    getProducts(),
    getCategories(),
    getProductTypes(),
    getSiteSettings(),
    getActiveOffer(),
    getCollections(),
  ])

  return (
    <main className="min-h-screen" style={{backgroundColor: 'var(--bg)'}}>
      <OfferBar barEn={settings?.offerBarEn} barSi={settings?.offerBarSi} />
      <SiteHeader />
      <HeroSlider slides={settings?.heroSlides || []} />

      {offer && (
        <div className="mx-auto max-w-6xl px-[var(--margin)] pb-10">
          <OfferBanner offer={offer} />
        </div>
      )}

      {/* Collections section */}
      {collections && collections.length > 0 && (
        <section
          id="collections"
          className="mx-auto max-w-6xl scroll-mt-20 px-[var(--margin)] py-10 sm:py-16"
        >
          <CollectionsGrid collections={collections} />
        </section>
      )}

      {/* Main catalog section */}
      <section
        id="catalog"
        className="mx-auto max-w-6xl scroll-mt-20 px-[var(--margin)] py-10 sm:py-16"
      >
        <CatalogClient products={products} categories={categories} types={types} offer={offer} />
      </section>

      <SiteFooter />
    </main>
  )
}
