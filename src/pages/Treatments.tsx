import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Filter } from 'lucide-react'
import { products, categories } from '../data/products'

const Treatments = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory)

  const allCategories = ['All', ...categories]

  return (
    <main className="bg-[#f4f4f4] min-h-screen">
      {/* Header */}
      <div className="bg-[#111111] py-20 px-6 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <span className="text-[#00cfc1] text-[12px] font-bold tracking-widest uppercase block mb-3">
            All Treatments
          </span>
          <h1 className="text-[42px] md:text-[56px] font-extrabold text-white uppercase mb-4">
            Men's Health Treatments
          </h1>
          <p className="text-[18px] text-white/70 max-w-xl">
            Clinically proven treatments for men 55+. Discreet delivery, expert support.
            From $0.69 per tablet.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-[70px] bg-white border-b border-gray-200 z-30 px-6 lg:px-16 py-4">
        <div className="max-w-[1280px] mx-auto flex items-center gap-3 overflow-x-auto no-scrollbar">
          <Filter className="w-4 h-4 text-[#4a4a4a] flex-shrink-0" />
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[13px] font-semibold border transition-colors ${
                activeCategory === cat
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-[#4a4a4a] border-gray-300 hover:border-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-12">
        <p className="text-[14px] text-[#4a4a4a] mb-6">{filtered.length} treatments</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="flex flex-col rounded-[8px] overflow-hidden hover:shadow-md transition-shadow bg-white group"
            >
              <div
                className="relative w-full h-[200px] flex items-center justify-center"
                style={{ backgroundColor: p.bgColor }}
              >
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-[#00cfc1] text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase z-10">
                    {p.badge}
                  </span>
                )}
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[11px] text-[#4a4a4a] uppercase font-semibold tracking-wider mb-1">
                  {p.category}
                </span>
                <h3 className="text-[17px] font-bold text-black mb-1">{p.name}</h3>
                <p className="text-[13px] text-[#4a4a4a] mb-3">{p.subtitle}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[15px] font-bold text-black">{p.price}</span>
                  <ArrowRight className="w-4 h-4 text-[#4a4a4a] group-hover:text-black transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Treatments
