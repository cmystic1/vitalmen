import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, ChevronDown, Menu, X, ShoppingCart } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopOpen, setDesktopOpen] = useState(false)
  const cart = useCart()

  const treatments = [
    {
      name: 'Erectile Dysfunction',
      slug: 'erectile-dysfunction',
    },
    {
      name: 'Low Testosterone',
      slug: 'low-testosterone',
    },
    {
      name: 'Hair Loss',
      slug: 'hair-loss',
    },
    {
      name: 'Weight Loss',
      slug: 'weight-loss',
    },
    {
      name: 'Premature Ejaculation',
      slug: 'premature-ejaculation',
    },
    {
      name: 'Diagnostics',
      slug: 'diagnostics',
    },
    {
      name: 'Supplements',
      slug: 'supplements',
    },
    {
      name: 'Bundles',
      slug: 'bundles',
    },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex flex-col">
        <nav
          className="w-full h-[72px] flex items-center justify-between px-6 md:px-12 lg:px-16"
          style={{
            backgroundColor: '#111111',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <button
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
            onClick={() => {
              if (window.innerWidth >= 768) {
                setDesktopOpen(!desktopOpen)
              } else {
                setMobileOpen(!mobileOpen)
              }
            }}
          >
            <span className="text-[15px] md:text-[16px] font-semibold">What we treat</span>
            <ChevronDown
              className={`w-4 h-4 hidden md:block transition-transform duration-300 ${desktopOpen ? 'rotate-180' : ''}`}
            />
            {mobileOpen ? (
              <X className="w-6 h-6 md:hidden" />
            ) : (
              <Menu className="w-6 h-6 md:hidden" />
            )}
          </button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="inline-block" aria-label="VitalMen Home">
              <span className="text-white font-extrabold text-2xl md:text-3xl tracking-tight">VITALMEN</span>
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <Link
              to="/cart"
              className="relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              {cart.items.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white">
                  {cart.items.reduce((sum, i) => sum + i.quantity, 0)}
                </span>
              )}
            </Link>
            <Link
              to="/account"
              className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5 text-white" />
            </Link>
          </div>
        </nav>

        {desktopOpen && (
          <div
            className="hidden md:block absolute top-full left-0 w-full bg-black border-t border-white/10 shadow-2xl"
            onMouseLeave={() => setDesktopOpen(false)}
          >
            <div className="grid grid-cols-3 max-w-7xl mx-auto px-8 lg:px-16 py-10 gap-8">
              <div>
                <h3 className="text-white text-lg font-bold mb-5 uppercase tracking-wide">TREATMENTS</h3>
                <ul className="space-y-3">
                  {treatments.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/${item.slug}`}
                        className="text-gray-300 hover:text-[#00CFC1] text-[15px] transition-colors block py-1"
                        onClick={() => setDesktopOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        )}

        {mobileOpen && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold mb-2">TREATMENTS</h3>
            {treatments.map((item) => (
              <Link
                key={item.slug}
                to={`/${item.slug}`}
                className="text-gray-300 hover:text-[#00CFC1] text-[16px] py-2 border-b border-white/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}

          </div>
        )}
      </header>

      <div className="h-[72px]" />
    </>
  )
}

export default Navigation
