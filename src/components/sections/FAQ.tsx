import React, { useState } from 'react'
import { Plus } from 'lucide-react'

const faqData = [
  {
    question: 'What can I expect when I take erectile dysfunction tablets?',
    answer:
      'Most ED tablets start working within 30-60 minutes. They don\'t cause an instant erection — you still need to be sexually stimulated. The medication helps increase blood flow to the penis, making it easier to get and maintain a firm erection. Depending on the treatment, effects can last from 4 to 36 hours.',
  },
  {
    question: 'Which erectile dysfunction treatment should I use?',
    answer:
      'Choosing the right treatment depends on your lifestyle and how frequently you plan to be sexually active. Sildenafil is a classic choice for occasional use, while Tadalafil (the "weekend pill") lasts longer. Review the product details on each treatment page and select the option that best fits your needs.',
  },
  {
    question: 'Are erectile dysfunction tablets safe to use long term?',
    answer:
      'Yes, for most men ED medications are safe for long-term use when taken as prescribed and monitored by a healthcare professional. Many men successfully use these treatments for years. Regular check-ins with our clinical team ensure the treatment continues to be safe and effective.',
  },
  {
    question: 'What are the potential side effects of ED medications?',
    answer:
      'Common side effects are usually mild and may include headaches, facial flushing, indigestion, nasal congestion, or dizziness. These typically fade as the medication leaves your system. Rare but serious side effects require immediate medical attention. Our team provides full safety information with every prescription.',
  },
  {
    question: 'Why are our ED medications more affordable than branded alternatives?',
    answer:
      'We offer generic versions of popular medications like Viagra and Cialis. These contain the exact same active ingredients (Sildenafil and Tadalafil) and are held to the same safety and quality standards, but cost significantly less because you\'re not paying for the brand name.',
  },
  {
    question: 'Can I take ED tablets more than once a day?',
    answer:
      'No, most ED medications should only be taken once in a 24-hour period. Taking more than the prescribed dose can increase the risk of side effects without improving effectiveness. Always follow the specific instructions provided by our clinicians.',
  },
  {
    question: 'What doses do our ED tablets come in?',
    answer:
      'We offer a variety of dosages to ensure you get the treatment right for you. For Sildenafil: 25mg, 50mg, and 100mg. For Tadalafil: 10mg and 20mg for as-needed use, and 2.5mg or 5mg for daily use. Dosing guidance is available in the product description.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Browse treatments, add what you need to your cart, and complete the checkout form. Once payment is confirmed we’ll prepare your order and ship it to you – usually within 2-3 working days.',
  }]


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#f4f4f4] py-20 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12">
          <span className="inline-block bg-white text-[11px] font-bold tracking-widest px-2 py-0.5 rounded shadow-sm mb-4 uppercase">
            FAQs
          </span>
          <h2 className="text-[32px] md:text-[40px] font-semibold text-black">
            Your questions answered
          </h2>
        </div>

        <div className="bg-white rounded-[8px] shadow-soft overflow-hidden">
          <div className="px-6 md:px-8">
            {faqData.map((item, i) => (
              <div key={i} className="border-b border-gray-200 last:border-0">
                <button
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-[16px] md:text-[17px] font-semibold text-black leading-snug pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : 'rotate-0'}`}
                  >
                    <Plus className="w-5 h-5 text-black" strokeWidth={1.5} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[400px] pb-5' : 'max-h-0'}`}
                >
                  <p className="text-[15px] leading-relaxed text-[#4a4a4a]">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
