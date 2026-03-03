import React from 'react'
import Hero from '../components/sections/home/Hero'
import TrustMarkers from '../components/sections/TrustMarkers'
import ProductGrid from '../components/sections/ProductGrid'
import ScienceBreakdown from '../components/sections/ScienceBreakdown'
import RootCauses from '../components/sections/RootCauses'
import WhatWeOffer from '../components/sections/WhatWeOffer'
import HealthRisks from '../components/sections/HealthRisks'
import MedicalTeam from '../components/sections/MedicalTeam'
import FAQ from '../components/sections/FAQ'
import Testimonials from '../components/sections/Testimonials'
import KnowledgeArticles from '../components/sections/KnowledgeArticles'
import StickyCTA from '../components/sections/StickyCTA'
const Home = () => (
  <main>
    <Hero />
    <TrustMarkers />
    <ProductGrid />
    <ScienceBreakdown />
    <RootCauses />
    <WhatWeOffer />
    <HealthRisks />
    <Testimonials />
    <MedicalTeam />
    <FAQ />
    <KnowledgeArticles />
    <StickyCTA />
  </main>
)

export default Home
