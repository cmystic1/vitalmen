import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    slug: 'cholesterol-and-ed',
    category: 'Cholesterol',
    readTime: '3 min read',
    title: 'Cholesterol and erectile dysfunction: the inconvenient truth',
    excerpt:
      'High cholesterol can cause heart attacks and strokes — but could it also contribute to erectile dysfunction? Here\'s what the science says.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=380&fit=crop&q=80',
    date: 'January 2026',
  },
  {
    slug: 'exercise-and-ed',
    category: 'Erections',
    readTime: '5 min read',
    title: '3 exercises designed to help improve erectile function',
    excerpt:
      'Exercise does more than fill you with a feeling of wellbeing. It can also help you achieve stronger, longer-lasting erections.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=380&fit=crop&q=80',
    date: 'February 2026',
  },
  {
    slug: 'causes-of-ed',
    category: 'Education',
    readTime: '4 min read',
    title: 'What are the most common causes of erectile dysfunction?',
    excerpt:
      'There are many factors behind ED — from low testosterone and cardiovascular issues to stress, anxiety, and lifestyle choices.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=380&fit=crop&q=80',
    date: 'January 2026',
  },
  {
    slug: 'weight-loss-and-ed',
    category: 'Weight Loss',
    readTime: '2 min read',
    title: '3 ways weight loss can treat erectile dysfunction',
    excerpt:
      'Being overweight raises estrogen, reduces testosterone, and restricts blood flow. Here\'s how losing weight can significantly improve ED.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=380&fit=crop&q=80',
    date: 'December 2025',
  },
  {
    slug: 'ed-at-55',
    category: 'Men 55+',
    readTime: '4 min read',
    title: 'Erectile dysfunction after 55: what you need to know',
    excerpt:
      'ED becomes more common as men age, but it\'s not inevitable. Here\'s everything men over 55 should know about prevention and treatment.',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=380&fit=crop&q=80',
    date: 'February 2026',
  },
  {
    slug: 'sildenafil-vs-tadalafil',
    category: 'Treatments',
    readTime: '6 min read',
    title: 'Sildenafil vs Tadalafil: which ED treatment is right for you?',
    excerpt:
      'Both are clinically proven to treat ED, but they work differently and suit different lifestyles. Here\'s a detailed comparison.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=380&fit=crop&q=80',
    date: 'March 2026',
  },
]

const Blog = () => (
  <main className="bg-[#f4f4f4] min-h-screen">
    <div className="bg-[#111111] py-20 px-6 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <span className="text-[#00cfc1] text-[12px] font-bold tracking-widest uppercase block mb-3">
          Knowledge
        </span>
        <h1 className="text-[42px] md:text-[56px] font-extrabold text-white uppercase mb-4">
          Men's Health Blog
        </h1>
        <p className="text-[18px] text-white/70 max-w-xl">
          Expert-reviewed articles on erectile dysfunction, testosterone, sexual health and wellbeing for men 55+.
        </p>
      </div>
    </div>

    <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((a) => (
          <Link
            key={a.slug}
            to={`/blog/${a.slug}`}
            className="flex flex-col bg-white rounded-[8px] overflow-hidden shadow-soft hover:shadow-md transition-shadow group"
          >
            <div className="h-[220px] overflow-hidden">
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                  {a.category}
                </span>
                <span className="text-[12px] text-[#4a4a4a]">{a.readTime}</span>
              </div>
              <h2 className="text-[18px] font-bold text-black mb-2 leading-snug">{a.title}</h2>
              <p className="text-[14px] text-[#4a4a4a] leading-relaxed flex-grow">{a.excerpt}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-[12px] text-[#4a4a4a]">{a.date}</span>
                <span className="inline-flex items-center text-[13px] font-bold text-black group-hover:gap-2 gap-1 transition-all">
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </main>
)

export default Blog
