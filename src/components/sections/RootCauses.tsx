import React from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

const causes = [
  {
    id: 'low-t',
    title: 'Low Testosterone',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80',
    points: [
      '1 in 3 men with ED have low testosterone',
      'Low-T impacts erections, libido and energy',
      'If untreated, raises risk of stroke and heart attacks',
    ],
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop&q=80',
    points: [
      '62% of men with heart disease have ED',
      'Clogs arteries and restricts blood flow',
      'Untreated vascular problems can be fatal',
    ],
  },
  {
    id: 'diabetes',
    title: 'Diabetes',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop&q=80',
    points: [
      '65% of men with diabetes have ED',
      '80-85% of type 2 diabetes patients are overweight',
      'Untreated diabetes leads to serious complications',
    ],
  },
]

const RootCauses = () => (
  <section className="py-20 md:py-28 bg-white px-6 lg:px-16">
    <div className="max-w-[1280px] mx-auto">
      <div className="mb-12">
        <span className="text-[13px] font-bold uppercase tracking-wider text-black block mb-4">
          Get to the root
        </span>
        <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-4">
          What causes erectile dysfunction?
        </h2>
        <p className="text-[17px] text-[#4a4a4a] max-w-2xl mb-8">
          Treat the symptoms with ED medication, and investigate the underlying cause with our blood tests.
        </p>
        <Link
          to="/treatments"
          className="inline-block px-6 py-3 border border-black rounded-[8px] text-[15px] font-semibold hover:bg-black hover:text-white transition-colors"
        >
          Start your ED treatment journey
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {causes.map((cause) => (
          <div key={cause.id} className="flex flex-col rounded-[8px] overflow-hidden shadow-soft bg-[#f4f4f4]">
            <div className="relative h-[220px] w-full overflow-hidden">
              <img
                src={cause.image}
                alt={cause.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex flex-col flex-grow">
              <h3 className="text-[22px] font-bold text-black mb-5">{cause.title}</h3>
              <ul className="space-y-4">
                {cause.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#00cfc1] flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] font-medium text-black leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default RootCauses
