import React from 'react'
import { Zap, Activity, Pill } from 'lucide-react'

const steps = [
  {
    icon: <Zap className="w-8 h-8 text-black" strokeWidth={1.5} />,
    title: 'Stimulation increases blood flow',
    description:
      'Arousal triggers cGMP, a molecule that boosts blood flow to the penis and helps you get an erection.',
  },
  {
    icon: <Activity className="w-8 h-8 text-black" strokeWidth={1.5} />,
    title: 'Limited blood flow stops an erection',
    description:
      'In men with ED, an enzyme called PDE5 breaks down cGMP too quickly, reducing blood flow and causing the erection to fade.',
  },
  {
    icon: <Pill className="w-8 h-8 text-black" strokeWidth={1.5} />,
    title: 'Medication promotes a firmer erection',
    description:
      'ED treatments block PDE5, helping more blood reach the penis. This leads to firmer, longer-lasting erections.',
  },
]

const ScienceBreakdown = () => (
  <section className="relative py-20 px-6 md:py-24 md:px-16 bg-[#e2f0f1]/30 overflow-hidden">
    <div className="max-w-[1280px] mx-auto">
      <div className="mb-12">
        <span className="text-[13px] font-bold tracking-widest text-[#4a4a4a] uppercase mb-4 block">
          THE SCIENCE
        </span>
        <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-3">
          How do ED treatments work?
        </h2>
        <p className="text-[18px] text-[#4a4a4a]">
          Here's the breakdown of what happens in your body to get the blood flowing again.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-[8px] border border-[#e5e5e5] shadow-soft hover:shadow-md transition-shadow"
          >
            <div className="mb-6 h-12 flex items-center">{step.icon}</div>
            <h3 className="text-[20px] font-bold text-black mb-3">{step.title}</h3>
            <p className="text-[15px] text-[#4a4a4a] leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ScienceBreakdown
