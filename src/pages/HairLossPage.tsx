import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/HairLossPageHero'
import TrustMarkers from '../components/sections/TrustMarkers'
import ScienceBreakdown from '../components/sections/ScienceBreakdown'
import RootCauses from '../components/sections/RootCauses'
import WhatWeOffer from '../components/sections/WhatWeOffer'
import HealthRisks from '../components/sections/HealthRisks'
import MedicalTeam from '../components/sections/MedicalTeam'
import FAQ from '../components/sections/FAQ'
import Testimonials from '../components/sections/Testimonials'
import KnowledgeArticles from '../components/sections/KnowledgeArticles'
import { ArrowRight, Check } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const HAIR_LOSS_IDS = ['finasteride', 'minoxidil-foam']

const HairLossPage = () => {
  const hairLossProducts = products.filter((p) => HAIR_LOSS_IDS.includes(p.id))

  return (
    <main>
      <Hero />
      <TrustMarkers />

      {/* Hair Loss Products Section */}
      <section id="hair-loss-products" className="bg-[#f4f4f4] py-20 px-6 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <span className="inline-block bg-[#e5e5e5] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider mb-5 rounded-sm">
              HAIR LOSS TREATMENTS
            </span>
            <h2 className="text-[32px] md:text-[38px] font-semibold text-black mb-3 max-w-2xl">
              Clinically proven hair loss solutions
            </h2>
            <p className="text-[17px] text-[#4a4a4a]">
              All treatments are prescribed by UK-registered doctors and delivered discreetly to your door.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hairLossProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <ScienceBreakdown />
      <RootCauses />
      <WhatWeOffer />
      <HealthRisks />
      <Testimonials />
      <MedicalTeam />
      <FAQ />
      <KnowledgeArticles />
    </main>
  )
}

export default HairLossPage
