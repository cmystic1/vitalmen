import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Product } from '../data/products'
import { useCart } from '../context/CartContext'

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div
      className="flex flex-col rounded-[8px] overflow-hidden"
      style={{ backgroundColor: product.bgColor }}
    >
      <div className="pt-7 px-5 text-center">
        {product.badge && (
          <span className="inline-block mb-2 bg-[#00cfc1] text-black text-[10px] font-bold px-3 py-0.5 rounded-full uppercase">
            {product.badge}
          </span>
        )}
        <h3 className="text-[20px] font-bold text-black">{product.name}</h3>
        <p className="text-[12px] text-[#4a4a4a] mt-1">{product.subtitle}</p>
        <p className="text-[15px] font-bold text-black mt-2 mb-4">{product.price}</p>
      </div>
      <div className="h-[160px] overflow-hidden mx-4 rounded-[6px]">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <Link
          to={`/product/${product.id}`}
          className="flex items-center justify-center w-full py-2 border border-black rounded-[6px] text-[14px] font-semibold hover:bg-black hover:text-white transition-colors"
        >
          Learn more <ArrowRight className="ml-2 w-3.5 h-3.5" />
        </Link>
        <button
          onClick={() => addToCart(product)}
          className="w-full py-2 bg-[#00cfc1] text-black font-semibold rounded-[6px] hover:bg-[#00b8ac] transition-colors"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
