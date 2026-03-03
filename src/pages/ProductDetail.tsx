import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Check, ArrowLeft, Truck, ShieldCheck, Clock } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const product = products.find((p) => p.id === id)
  const { addToCart } = useCart()

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#f4f4f4] px-6">
        <h2 className="text-[28px] font-bold text-black mb-4">Product not found</h2>
        <Link to="/treatments" className="text-[#00cfc1] underline">
          Back to all treatments
        </Link>
      </main>
    )
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#f4f4f4] px-6 lg:px-16 py-4">
        <div className="max-w-[1280px] mx-auto flex items-center gap-2 text-[13px] text-[#4a4a4a]">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link to="/treatments" className="hover:text-black">Treatments</Link>
          <span>/</span>
          <span className="text-black font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-12">
        <Link
          to="/treatments"
          className="inline-flex items-center gap-2 text-[14px] text-[#4a4a4a] hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to treatments
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div
            className="rounded-[12px] overflow-hidden flex items-center justify-center h-[420px]"
            style={{ backgroundColor: product.bgColor }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            {product.badge && (
              <span className="inline-block bg-[#00cfc1] text-black text-[11px] font-bold px-3 py-1 rounded-full uppercase mb-3">
                {product.badge}
              </span>
            )}
            <span className="text-[13px] text-[#4a4a4a] uppercase font-semibold tracking-wider block mb-2">
              {product.category}
            </span>
            <h1 className="text-[36px] md:text-[42px] font-extrabold text-black mb-2 uppercase tracking-tight">
              {product.name}
            </h1>
            <p className="text-[17px] text-[#4a4a4a] mb-6">{product.description}</p>

            <div className="mb-6">
              <span className="text-[28px] font-extrabold text-black">{product.price}</span>
            </div>

            {product.benefits && (
              <ul className="space-y-3 mb-8">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00cfc1] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] text-black">{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {product.dosages && (
              <div className="mb-8">
                <p className="text-[14px] font-semibold text-black mb-2">Available dosages:</p>
                <div className="flex gap-2 flex-wrap">
                  {product.dosages.map((d) => (
                    <span
                      key={d}
                      className="border border-black px-4 py-1.5 rounded-full text-[13px] font-semibold"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => addToCart(product)}
              className="w-full sm:w-auto inline-flex items-center justify-center h-[56px] px-10 bg-[#00cfc1] hover:bg-[#00b8ac] text-black font-bold text-[16px] rounded-[8px] transition-colors uppercase tracking-wide mb-4"
            >
              Add to cart
            </button>

            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-[13px] text-[#4a4a4a]">
                <Truck className="w-4 h-4" />
                Free discreet delivery
              </div>
              <div className="flex items-center gap-2 text-[13px] text-[#4a4a4a]">
                <ShieldCheck className="w-4 h-4" />
                UK regulated
              </div>
              <div className="flex items-center gap-2 text-[13px] text-[#4a4a4a]">
                <Clock className="w-4 h-4" />
                Pause or cancel anytime
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-[26px] font-bold text-black mb-6">Related treatments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/product/${r.id}`}
                  className="flex flex-col rounded-[8px] overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div
                    className="h-[160px] overflow-hidden"
                    style={{ backgroundColor: r.bgColor }}
                  >
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-[16px] font-bold text-black">{r.name}</h3>
                    <p className="text-[13px] text-[#4a4a4a]">{r.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default ProductDetail
