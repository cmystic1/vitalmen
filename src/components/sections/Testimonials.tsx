import React from 'react'

const testimonials = [
  {
    name: 'Tim, 58',
    quote:
      'I was more nervous speaking to the doctor about it than telling my partner. But it was incredibly easy to get sorted discreetly. The treatment worked first time and my confidence is back.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'James, 62',
    quote:
      'Not being able to perform was affecting my relationship. Trying this treatment was the best decision I\'ve made. It works every time and delivery is completely discreet.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Andrew, 55',
    quote:
      'There are so many options available. I tried a few different plans and found that the daily treatment suited me best. Whenever the moment arises, I\'m ready.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'David, 67',
    quote:
      'I\'d put up with ED for years thinking it was just part of getting older. I wish I\'d tried this years ago. Easy ordering, fast delivery, and it just works.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&q=80',
  },
]

const Testimonials = () => (
  <section className="py-20 lg:py-24 bg-white px-6 lg:px-16">
    <div className="max-w-[1280px] mx-auto">
      <div className="mb-12">
        <span className="inline-block px-2 py-1 mb-4 text-[11px] font-bold tracking-wider uppercase bg-[#f4f4f4] text-[#4a4a4a] rounded-sm">
          REAL PEOPLE, REAL IMPACT
        </span>
        <h2 className="text-[28px] md:text-[38px] font-semibold text-black max-w-3xl">
          Over 500,000 men have come to us to enjoy better sex again
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="flex flex-col rounded-[8px] overflow-hidden border border-gray-100 shadow-soft">
            <div className="flex-grow p-7 bg-[#faf5f2] flex flex-col">
              <svg width="32" height="22" viewBox="0 0 32 22" fill="none" className="mb-4 text-black fill-current">
                <path d="M12.8 0L9.6 4.8C11.2 4.8 12.8 6.4 12.8 8.4C12.8 11.2 10.4 13.2 7.2 13.2C3.2 13.2 0 10 0 5.6C0 2.4 2.4 0 6.4 0H12.8ZM32 0L28.8 4.8C30.4 4.8 32 6.4 32 8.4C32 11.2 29.6 13.2 26.4 13.2C22.4 13.2 19.2 10 19.2 5.6C19.2 2.4 21.6 0 25.6 0H32Z" />
              </svg>
              <p className="text-[15px] leading-relaxed text-[#4a4a4a] flex-grow">{t.quote}</p>
              <p className="text-[14px] font-bold text-black mt-6">{t.name}</p>
            </div>
            <div className="h-[200px] overflow-hidden">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
