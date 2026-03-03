import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = () => (
  <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#f4f4f4]">
    <h1 className="text-[32px] font-bold text-black mb-4">Thank you for your order!</h1>
    <p className="text-[17px] text-[#4a4a4a] mb-6">
      We've received your details and will process your payment shortly. You'll receive a confirmation email soon.
    </p>
    <Link to="/" className="text-[#00cfc1] font-semibold hover:underline">
      Back to home
    </Link>
  </main>
)

export default ThankYou
