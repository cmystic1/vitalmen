import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    category: 'CHOLESTEROL',
    readTime: '3 min read',
    title: 'Cholesterol and erectile dysfunction: the inconvenient truth',
    description:
      'High cholesterol causes heart attacks and strokes — but could it also lead to erectile dysfunction? Let\'s find out.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=280&fit=crop&q=80',
    slug: 'cholesterol-and-ed',
  },
  {
    category: 'EXERCISE',
    readTime: '5 min read',
    title: '3 exercises designed to improve erectile function',
    description:
      'Exercise does more than fill you with endorphins. It can also help you get stronger erections. Here\'s the science.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=280&fit=crop&q=80',
    slug: 'exercise-and-ed',
  },
  {
    category: 'CAUSES',
    readTime: '4 min read',
    title: 'What are the most common causes of erectile dysfunction?',
    description:
      'There are many factors behind ED, from low testosterone to cardiovascular issues to stress and anxiety.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=280&fit=crop&q=80',
    slug: 'causes-of-ed',
  },
  {
    category: 'WEIGHT LOSS',
    readTime: '2 min read',
    title: '3 ways weight loss can help treat erectile dysfunction',
    description:
      'Being overweight raises estrogen, reduces testosterone, and restricts blood flow. Here\'s how losing weight can help.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=280&fit=crop&q=80',
    slug: 'weight-loss-and-ed',
  },
]

const KnowledgeArticles = () => (
  <section className="bg-[#111111] py-20 px-6 lg:px-16">
    <div className="max-w-[1280px] mx-auto">
      <div className="mb-10">
        <span className="inline-block px-2 py-1 mb-4 text-[12px] font-bold tracking-widest text-[#00cfc1] bg-[#00cfc1]/10 rounded-[4px] uppercase">
          Knowledge
        </span>
        <h2 className="text-[30px] md:text-[36px] font-semibold text-white">
          Erectile dysfunction: what you need to know
        </h2>
      </div>

      <div className="flex gap-5 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
        {articles.map((a, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[300px] md:w-[320px] bg-white rounded-[8px] overflow-hidden snap-start flex flex-col"
          >
            <div className="p-5 pb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider text-white bg-black rounded-sm uppercase">
                  {a.category}
                </span>
                <span className="text-[12px] text-[#4a4a4a]">{a.readTime}</span>
              </div>
              <h3 className="text-[17px] leading-snug font-bold text-black mb-2 line-clamp-3">
                {a.title}
              </h3>
              <p className="text-[13px] text-[#4a4a4a] leading-relaxed line-clamp-2 mb-4">
                {a.description}
              </p>
              <Link
                to={`/blog/${a.slug}`}
                className="inline-flex items-center text-[13px] font-bold text-black hover:opacity-70 transition-opacity"
              >
                Read more <ArrowRight className="ml-1 w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="mt-auto h-[180px] overflow-hidden">
              <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default KnowledgeArticles
