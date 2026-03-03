import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const articleContent: Record<string, {
  title: string
  category: string
  readTime: string
  date: string
  image: string
  content: React.ReactNode
}> = {
  'cholesterol-and-ed': {
    title: 'Cholesterol and erectile dysfunction: the inconvenient truth',
    category: 'Cholesterol',
    readTime: '3 min read',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=1200&h=600&fit=crop&q=80',
    content: (
      <div className="prose prose-lg max-w-none">
        <p>High cholesterol is one of the most significant risk factors for cardiovascular disease — but its impact extends further than most men realise. Emerging research shows a strong link between elevated cholesterol and erectile dysfunction.</p>
        <h2>How cholesterol affects erections</h2>
        <p>Erections depend on healthy blood flow. When cholesterol builds up in arterial walls (a condition called atherosclerosis), it narrows the blood vessels throughout your body — including those that supply blood to the penis.</p>
        <p>Men with high cholesterol are significantly more likely to experience ED. In many cases, ED can appear years before any symptoms of heart disease become apparent, making it a valuable early warning sign.</p>
        <h2>What you can do</h2>
        <p>The good news: treating high cholesterol can improve erectile function. Lifestyle changes like regular exercise, a Mediterranean-style diet, quitting smoking and reducing alcohol can help. In some cases, medications like statins may be prescribed.</p>
        <p>If you have ED and haven't had your cholesterol tested, our heart health blood test can give you a complete picture of your cardiovascular risk profile.</p>
      </div>
    ),
  },
  'ed-at-55': {
    title: 'Erectile dysfunction after 55: what you need to know',
    category: 'Men 55+',
    readTime: '4 min read',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=600&fit=crop&q=80',
    content: (
      <div className="prose prose-lg max-w-none">
        <p>ED becomes more common as men age — affecting around 40% of men at 40, and up to 70% of men over 70. But it is not an inevitable part of getting older. In most cases, it can be effectively treated.</p>
        <h2>Why ED becomes more common over 55</h2>
        <p>After 55, several physiological changes increase the likelihood of ED. Testosterone levels decline by about 1% per year after age 30. Blood pressure tends to rise. Arteries stiffen. Diabetes becomes more prevalent. All of these factors restrict blood flow and affect the nervous system.</p>
        <h2>Treatment options for men 55+</h2>
        <p>The most effective treatments are PDE5 inhibitors — Sildenafil (Viagra) and Tadalafil (Cialis). These are safe for most men over 55 and work for the vast majority of patients. For men whose ED stems from low testosterone, testosterone replacement therapy (TRT) may also be beneficial.</p>
        <p>The important thing is to act. Don't accept ED as an inevitable part of ageing — in many cases it can be treated effectively, and it may be alerting you to an underlying health issue that deserves attention.</p>
      </div>
    ),
  },
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? articleContent[slug] : null

  if (!article) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#f4f4f4] px-6">
        <h2 className="text-[28px] font-bold text-black mb-4">Article not found</h2>
        <Link to="/blog" className="text-[#00cfc1] underline">Back to blog</Link>
      </main>
    )
  }

  return (
    <main className="bg-white min-h-screen">
      <div className="h-[400px] overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-[760px] mx-auto px-6 py-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-[14px] text-[#4a4a4a] hover:text-black mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
            {article.category}
          </span>
          <span className="text-[13px] text-[#4a4a4a]">{article.readTime}</span>
          <span className="text-[13px] text-[#4a4a4a]">{article.date}</span>
        </div>

        <h1 className="text-[32px] md:text-[40px] font-extrabold text-black mb-8 leading-tight">
          {article.title}
        </h1>

        <div className="text-[17px] text-[#333] leading-relaxed space-y-6">
          {article.content}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 bg-[#00cfc1] hover:bg-[#00938c] text-black font-bold px-8 py-4 rounded-[8px] transition-colors"
          >
            Explore ED treatments <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default BlogPost
