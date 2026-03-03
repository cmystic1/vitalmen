import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { ArrowLeft } from 'lucide-react'

const Cart = () => {
  const { items, removeFromCart, clearCart } = useCart()
  const navigate = useNavigate()

  const total = items.reduce((sum, item) => sum + item.quantity * item.product.priceFrom, 0)

  if (items.length === 0) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#f4f4f4] px-6">
        <h2 className="text-[28px] font-bold text-black mb-4">Your cart is empty</h2>
        <Link to="/treatments" className="text-[#00cfc1] underline">
          Browse treatments
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-[1280px] mx-auto px-6 lg:px-16 py-12">
      <h1 className="text-[32px] font-bold text-black mb-8">Your Cart</h1>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center gap-6">
            <div className="w-[100px] h-[100px] rounded overflow-hidden" style={{ backgroundColor: item.product.bgColor }}>
              <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-[18px] font-bold">{item.product.name}</h2>
              <p className="text-[14px] text-[#4a4a4a]">Qty: {item.quantity}</p>
              <p className="text-[16px] font-semibold text-black">{item.product.price}</p>
            </div>
            <button
              className="text-red-500 text-[14px] hover:underline"
              onClick={() => removeFromCart(item.product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-[20px] font-bold">Total: ${total.toFixed(2)}</span>
        <div className="flex gap-4">
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600"
            onClick={clearCart}
          >
            Clear cart
          </button>
          <button
            className="bg-[#00cfc1] text-black px-6 py-3 rounded-md hover:bg-[#00b8ac]"
            onClick={() => navigate('/checkout')}
          >
            Continue to payment
          </button>
        </div>
      </div>
      <div className="mt-12">
        <Link to="/treatments" className="inline-flex items-center gap-2 text-[#00cfc1] hover:underline">
          <ArrowLeft className="w-4 h-4" /> Continue browsing
        </Link>
      </div>
    </main>
  )
}

export default Cart
