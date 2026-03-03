import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const StickyCTA = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] bg-[#111111] border-t border-white/10 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-white font-semibold text-[16px]">
            Enjoy better sex again
            <span className="hidden sm:inline font-normal text-white/70 ml-1 text-[14px]">
              — Clinically proven treatments delivered discreetly to your door.
            </span>
          </p>
        </div>
        <Link
          to="/treatments"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00cfc1] hover:bg-[#00938c] text-black font-bold px-8 py-3 rounded-[8px] transition-colors text-[15px] min-w-[180px]"
        >
          Get started <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default StickyCTA
