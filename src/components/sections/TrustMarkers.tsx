import React from 'react'
import { Clock, Lightbulb, Star, ShieldCheck, CheckCircle2, Truck } from 'lucide-react'

const trustMarkers = [
  {
    icon: <Clock className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Pause or cancel any time',
    description: 'You\'re always in control of your treatment.',
  },
  {
    icon: <Lightbulb className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Innovative treatments',
    description: 'Advanced, clinically-proven medications.',
  },
  {
    icon: <Star className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Rated Excellent',
    description: '4.5★ from over 32,000 reviews.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Fully regulated',
    description: 'Regulated by the CQC.',
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} />,
    title: 'UK licensed',
    description: 'All medications & clinicians.',
  },
  {
    icon: <Truck className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Free discreet delivery',
    description: 'No names, no logos, no delivery fee.',
  },
]

const TrustMarkers = () => (
  <section className="w-full bg-[#f4f4f4] py-12 md:py-14 overflow-hidden">
    <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
      <div className="flex overflow-x-auto pb-3 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 no-scrollbar">
        {trustMarkers.map((m, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[230px] md:w-auto bg-white border border-[#e5e5e5] p-5 rounded-[8px] flex flex-col gap-3 min-h-[130px]"
          >
            <div className="text-black">{m.icon}</div>
            <div>
              <h3 className="text-[15px] font-semibold text-black leading-tight">{m.title}</h3>
              <p className="text-[13px] text-[#4a4a4a] mt-1">{m.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TrustMarkers
