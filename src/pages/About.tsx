import React from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

const About = () => (
  <main className="bg-white min-h-screen">
    {/* Hero */}
    <section className="bg-[#111111] py-24 px-6 lg:px-16">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#00cfc1] text-[12px] font-bold tracking-widest uppercase block mb-4">
            About VitalMen
          </span>
          <h1 className="text-[42px] md:text-[56px] font-extrabold text-white uppercase mb-6 leading-tight">
            Men's Health Done Right
          </h1>
          <p className="text-[18px] text-white/70 mb-8">
            We're a team of doctors, pharmacists, and men's health specialists dedicated to making
            effective, evidence-based treatments accessible and affordable to every man who needs them.
          </p>
          <Link
            to="/treatments"
            className="inline-flex items-center justify-center bg-[#00cfc1] hover:bg-[#00938c] text-black font-bold px-8 py-4 rounded-[8px] transition-colors text-[16px]"
          >
            Explore treatments →
          </Link>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=500&fit=crop&q=85"
            alt="Medical team"
            className="w-full h-[420px] object-cover rounded-[12px]"
          />
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 px-6 lg:px-16 bg-[#f4f4f4]">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-6">Our mission</h2>
          <p className="text-[18px] text-[#4a4a4a] leading-relaxed">
            Erectile dysfunction affects millions of men, yet most never seek help due to embarrassment
            or lack of awareness. We're changing that. Our mission is to provide discreet, affordable,
            clinically proven treatments to men who deserve to live life to the fullest — at any age.
          </p>
        </div>
      </div>
    </section>

    {/* Why choose us */}
    <section className="py-20 px-6 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[32px] md:text-[38px] font-bold text-black mb-10 text-center">
          Why men choose VitalMen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Expert medical team',
              desc: 'All treatments are reviewed by UK-registered doctors and pharmacists. No shortcuts, no compromises.',
              img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=280&fit=crop',
            },
            {
              title: 'Affordable pricing',
              desc: 'Clinically proven generic medications at a fraction of the branded price. From $0.69 per tablet.',
              img: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=280&fit=crop',
            },
            {
              title: 'Completely discreet',
              desc: 'No logos on packaging. No company name on your bank statement. Just plain, secure delivery.',
              img: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=400&h=280&fit=crop',
            },
            {
              title: 'Root cause approach',
              desc: 'We don\'t just treat symptoms. Our blood tests identify the underlying cause of your ED.',
              img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=280&fit=crop',
            },
            {
              title: 'Ongoing clinical support',
              desc: 'Access to our team of clinicians whenever you need adjustments or have questions.',
              img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=280&fit=crop',
            },
            {
              title: 'Free discreet delivery',
              desc: 'Fast, free delivery with plain packaging to your door. Pause or cancel anytime.',
              img: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=400&h=280&fit=crop',
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#f4f4f4] rounded-[8px] overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-[180px] object-cover" />
              <div className="p-6">
                <h3 className="text-[18px] font-bold text-black mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#4a4a4a] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-[#00cfc1] py-16 px-6 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: '500,000+', label: 'Men treated' },
            { stat: '4.5★', label: 'Trustpilot rating' },
            { stat: '95%', label: 'Satisfaction rate' },
            { stat: '24/7', label: 'Clinical support' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-[40px] font-extrabold text-black">{s.stat}</div>
              <div className="text-[14px] font-semibold text-black/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20 px-6 lg:px-16">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="text-[32px] md:text-[38px] font-bold text-black mb-4">Our clinical team</h2>
        <p className="text-[17px] text-[#4a4a4a] mb-10 max-w-xl mx-auto">
          UK-registered doctors and pharmacists who specialise in men's sexual health.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Dr. James Mitchell', role: "Medical Lead", img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop&q=80' },
            { name: 'Dr. Sarah Patel', role: 'Head of Clinical Product', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop&q=80' },
            { name: 'Dr. Robert Clarke', role: "Men's Health Doctor", img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=400&fit=crop&q=80' },
            { name: 'Dr. Michael Harris', role: 'Senior Clinician', img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=400&fit=crop&q=80' },
          ].map((doc, i) => (
            <div key={i} className="bg-[#e2f0f1] rounded-[8px] overflow-hidden">
              <img src={doc.img} alt={doc.name} className="w-full h-[240px] object-cover object-top" />
              <div className="p-4">
                <h3 className="text-[15px] font-bold text-black">{doc.name}</h3>
                <p className="text-[12px] text-[#4a4a4a]">{doc.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-[#111111] py-16 px-6 lg:px-16 text-center">
      <h2 className="text-[32px] font-bold text-white mb-4">Ready to take control?</h2>
      <p className="text-[17px] text-white/70 mb-8 max-w-lg mx-auto">
        Place an order through our secure checkout and we'll process your treatment as soon as payment is confirmed.
      </p>
      <Link
        to="/treatments"
        className="inline-flex items-center justify-center bg-[#00cfc1] hover:bg-[#00938c] text-black font-bold px-10 py-4 rounded-[8px] transition-colors text-[16px]"
      >
        Get started today →
      </Link>
    </section>
  </main>
)

export default About
