import React from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[85vh] overflow-hidden bg-[#111111]">
      <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[85vh]">
        {/* Left: Hero Image */}
        <div className="relative w-full lg:w-1/2 h-[380px] lg:h-auto overflow-hidden">
          <img
            src="https://biorestorehealth.com/wp-content/uploads/2025/08/low-testosterone.jpg"
            alt="Confident couple"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent lg:hidden" />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-start px-6 py-12 lg:px-16 lg:py-0 bg-[#111111]">
          <div className="max-w-[540px] w-full space-y-7">
            <div className="space-y-2">
              <span className="text-[12px] font-bold tracking-[0.1em] text-[#00cfc1] uppercase">
                Low Testosterone
              </span>
              <h1 className="text-[38px] md:text-[52px] lg:text-[58px] leading-[1.05] font-extrabold text-white uppercase tracking-tight">
                Tackle Low Testosterone<br />Symptoms
              </h1>
              <p className="text-[18px] text-[#f4f4f4]/80 font-medium mt-3">
                Clinically-proven treatments for low testosterone, discreetly delivered to your door.
              </p>
            </div>

            <div className="flex items-baseline gap-2 text-white">
              <span className="text-[18px] font-normal">From</span>
              <span className="text-[28px] font-extrabold text-[#00cfc1]">$7.69</span>
              <span className="text-[18px] font-normal">/ tablet</span>
            </div>

            <ul className="space-y-4">
              {[
                'Clinically proven treatments, discreetly delivered',
                '50% off your first month — save up to $35',
                'Access to leading UK men\'s health experts',
                'Free discreet delivery, no logos on packaging',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded bg-[#00cfc1]/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#00cfc1]" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] text-white/90 leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                to="/treatments"
                className="inline-flex items-center justify-center w-full sm:w-auto min-w-[280px] h-[56px] px-8 bg-[#00cfc1] hover:bg-[#00938c] transition-colors rounded-[8px] text-[16px] font-bold text-black uppercase tracking-wide text-center"
              >
                Get started today
              </Link>
            </div>

            {/* Trustpilot row */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-white text-[14px] font-semibold">Excellent</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                ))}
              </div>
              <span className="text-white/60 text-[12px]">32,277 reviews on</span>
              <span className="text-white font-bold text-[14px]">Trustpilot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
