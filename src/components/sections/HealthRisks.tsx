import React from 'react'

const risks = [
  {
    title: 'Low Testosterone',
    description: 'Testosterone levels in men naturally begin to decline around age 30, affecting erections, libido and energy.',
    icon: '⚡',
  },
  {
    title: 'Cardiovascular Disease',
    description: 'Men with ED are 59% more likely to have heart disease — ED can be an early warning sign.',
    icon: '❤️',
  },
  {
    title: 'Stroke',
    description: 'Men with erectile dysfunction are 34% more likely to have a stroke. Early detection matters.',
    icon: '🧠',
  },
  {
    title: 'Diabetes',
    description: 'Over 65% of men with diabetes have ED. Uncontrolled blood sugar damages nerves and blood vessels.',
    icon: '🩺',
  },
]

const HealthRisks = () => (
  <section className="bg-[#f4f4f4] py-20 px-6 lg:px-16">
    <div className="max-w-[1280px] mx-auto">
      <div className="max-w-3xl mb-12">
        <h2 className="text-[32px] md:text-[40px] font-semibold text-black mb-4">
          Detect potential health risks
        </h2>
        <p className="text-[17px] text-[#4a4a4a]">
          Around 40% of men with erectile dysfunction have an underlying health issue that may be contributing to their symptoms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {risks.map((risk, i) => (
          <div
            key={i}
            className="bg-white p-7 rounded-[8px] flex flex-col min-h-[260px] shadow-soft hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-[36px] mb-6">{risk.icon}</div>
            <h3 className="text-[20px] font-semibold text-black mb-3">{risk.title}</h3>
            <p className="text-[14px] text-[#4a4a4a] leading-relaxed mt-auto">{risk.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default HealthRisks
