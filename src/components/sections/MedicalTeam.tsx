import React from 'react'

const clinicians = [
  {
    name: 'Dr. James Mitchell',
    role: "Men's Health Medical Lead",
    credentials: 'MBBS MRCGP PGCERT Med Ed.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Dr. Sarah Patel',
    role: 'Head of Clinical Product',
    credentials: 'MPharm PgDip IPresc',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Dr. Robert Clarke',
    role: 'Men\'s Health Doctor',
    credentials: 'MBBS MRCGP MSC BSSM',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Dr. Michael Harris',
    role: 'Senior Clinician',
    credentials: 'MBChB BSc (Hons) MRCGP',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop&q=80',
  },
]

const MedicalTeam = () => (
  <section className="bg-white py-20 px-6 lg:px-16">
    <div className="max-w-[1280px] mx-auto">
      <div className="mb-12">
        <span className="text-[12px] font-bold tracking-widest uppercase text-black/50 block mb-2">
          UK DOCTORS AND CLINICIANS
        </span>
        <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-3">
          Your expert team
        </h2>
        <p className="text-[17px] text-[#4a4a4a]">
          Specialists in medicine, nutrition, performance, and sexual health.
        </p>
      </div>

      <div className="flex overflow-x-auto pb-6 scrollbar-hide gap-6 lg:grid lg:grid-cols-4 lg:overflow-visible">
        {clinicians.map((c, i) => (
          <div key={i} className="flex-shrink-0 w-[260px] lg:w-full flex flex-col">
            <div className="bg-[#e2f0f1] rounded-[8px] overflow-hidden">
              <div className="p-5 pb-0">
                <h3 className="text-[18px] font-extrabold text-black">{c.name}</h3>
                <p className="text-[13px] font-semibold text-[#4a4a4a] mt-0.5">{c.role}</p>
                <p className="text-[12px] text-black/50 mt-0.5">{c.credentials}</p>
              </div>
              <div className="mt-4 h-[280px] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default MedicalTeam
