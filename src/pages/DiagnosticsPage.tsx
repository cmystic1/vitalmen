import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/DiagnosticsPageHero'
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

const DIAGNOSTICS_IDS = ['ed-blood-test', 'testosterone-blood-test', 'heart-health-test']

const DiagnosticsPage = () => {
  const diagnosticsProducts = products.filter((p) => DIAGNOSTICS_IDS.includes(p.id))

  return (
    <main>
      <Hero />
      <TrustMarkers />

      {/* Diagnostics Products Section */}
      <section className="bg-[#f4f4f4] py-20 px-6 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <span className="inline-block bg-[#e5e5e5] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider mb-5 rounded-sm">
              BLOOD TESTS & DIAGNOSTICS
            </span>
            <h2 className="text-[32px] md:text-[38px] font-semibold text-black mb-3 max-w-2xl">
              Comprehensive health diagnostics
            </h2>
            <p className="text-[17px] text-[#4a4a4a]">
              All tests are analyzed by UK-registered medical professionals and results delivered securely to your door.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnosticsProducts.map((p) => (
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

export default DiagnosticsPage
