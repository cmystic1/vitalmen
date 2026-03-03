import React from 'react'
import { Link } from 'react-router-dom'

const offerItems = [
  {
    badge: 'MEDICAL TREATMENT',
    title: 'Stronger erections, better sex',
    description:
      'Reclaim your confidence in the bedroom with clinically proven ED treatments delivered discreetly to your door.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop&q=80',
  },
  {
    badge: 'DIAGNOSTICS',
    title: 'Investigate the root issue',
    description:
      'Take a simple at-home blood test to uncover what\'s really behind your ED — testosterone, heart health, diabetes and more.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&q=80',
  },
  {
    badge: 'ONGOING SUPPORT',
    title: 'Tackle the underlying cause',
    description:
      'Speak with our UK-registered men\'s health experts to build a personalised plan that addresses the root cause, not just the symptoms.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&q=80',
  },
]

const WhatWeOffer = () => (
  <section className="bg-[#111111] py-20 px-6 lg:px-16">
    <div className="max-w-[1280px] mx-auto">
      <div className="mb-12">
        <span className="inline-block bg-[#00cfc1] text-black text-[11px] font-bold px-3 py-1 rounded-sm mb-4 tracking-wider uppercase">
          WHY CHOOSE US
        </span>
        <h2 className="text-white text-[36px] md:text-[40px] font-semibold">What we offer</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {offerItems.map((item, i) => (
          <div key={i} className="flex flex-col gap-6">
            <span className="text-[#00cfc1] text-[11px] font-bold tracking-widest border-l-2 border-[#00cfc1] pl-3 uppercase">
              {item.badge}
            </span>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[220px] object-cover rounded-[8px]"
            />
            <h3 className="text-white text-[22px] font-semibold">{item.title}</h3>
            <p className="text-[#999999] text-[16px] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 mt-16 pt-8 border-t border-white/5">
        <Link
          to="/treatments"
          className="inline-flex items-center justify-center bg-[#00cfc1] hover:bg-[#00938c] text-black font-bold text-[16px] px-10 py-4 rounded-[8px] transition-colors"
        >
          Get started from just $13 / pack →
        </Link>
        <p className="text-white/50 text-[13px]">Pause or cancel any time</p>
      </div>
    </div>
  </section>
)

export default WhatWeOffer
