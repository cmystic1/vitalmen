import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '../../data/products'

const FEATURED_IDS = [
  'sildenafil-50mg',
  'tadalafil-20mg',
  'tadalafil-daily',
  'viagra-connect',
]

const ProductGrid = () => {
  const featured = products.filter((p) => FEATURED_IDS.includes(p.id))

  return (
    <section className="bg-[#f4f4f4] py-20 px-6 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-14">
          <span className="inline-block bg-[#e5e5e5] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider mb-5 rounded-sm">
            OUR ED TREATMENTS
          </span>
          <h2 className="text-[36px] font-semibold text-black leading-tight mb-3 max-w-2xl">
            Effective treatments, trusted by over 500,000 men
          </h2>
          <p className="text-[18px] text-[#4a4a4a]">
            Find the clinically proven ED treatment that suits you best.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="flex flex-col rounded-[8px] overflow-hidden"
              style={{ backgroundColor: product.bgColor }}
            >
              <div className="flex flex-col items-center pt-8 px-6 text-center">
                {product.badge && (
                  <span className="mb-2 bg-[#00cfc1] text-black text-[11px] font-bold px-3 py-1 rounded-full uppercase">
                    {product.badge}
                  </span>
                )}
                <h3 className="text-[22px] font-semibold text-black mb-1">{product.name}</h3>
                <p className="text-[13px] text-[#4a4a4a] mb-2">{product.subtitle}</p>
                <p className="text-[17px] font-bold text-black mb-6">{product.price}</p>
              </div>

              <div className="relative w-full flex items-center justify-center px-4 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-[200px] h-[180px] object-cover rounded-[6px]"
                />
              </div>

              <div className="px-5 pb-6 mt-auto">
                <Link
                  to={`/product/${product.id}`}
                  className="flex items-center justify-center w-full py-2.5 px-4 border border-black rounded-[6px] text-[15px] font-semibold text-black transition-colors hover:bg-black hover:text-white"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 text-[16px] font-semibold text-black underline underline-offset-4 hover:text-[#00938c] transition-colors"
          >
            View all treatments <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
