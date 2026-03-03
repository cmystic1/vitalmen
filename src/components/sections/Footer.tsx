import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  // const col1 = [
  //   'Erectile Dysfunction',
  //   'Low Testosterone',
  //   'Weight Loss',
  //   'Diagnostics',
  //   'Hair Loss',
  //   'Supplements',
  //   'Premature Ejaculation',
  //   'Bundles',
  // ]
  // const col2 = [
  //   { label: 'Help Centre', href: '#' },
  //   { label: 'Customer Care', href: '#' },
  //   { label: 'Clinical Team', href: '/about' },
  //   { label: 'Press Enquiries', href: '#' },
  // ]
  // const col3 = [
  //   { label: 'Log in', href: '#' },
  //   { label: 'Blog', href: '/blog' },
  //   { label: 'About Us', href: '/about' },
  //   { label: 'Sitemap', href: '#' },
  // ]
  // const col4 = [
  //   { label: 'Facebook', href: '#' },
  //   { label: 'Instagram', href: '#' },
  //   { label: 'Twitter / X', href: '#' },
  //   { label: 'YouTube', href: '#' },
  // ]
  const legal = [
    'Terms & conditions',
    'Terms of sale',
    'Privacy notice',
    'Cookies policy',
    'Make a complaint',
  ]

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 px-6 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 mb-14">
          {/* <div>
            <h4 className="text-[#4a4a4a] text-[11px] font-bold tracking-widest mb-5 uppercase">Treatments</h4>
            <ul className="space-y-3">
              {col1.map((l) => (
                <li key={l}>
                  <Link to="/treatments" className="text-white text-[13px] hover:text-[#00cfc1] transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          {/* <div>
            <h4 className="text-[#4a4a4a] text-[11px] font-bold tracking-widest mb-5 uppercase">Contact</h4>
            <ul className="space-y-3">
              {col2.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white text-[13px] hover:text-[#00cfc1] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
          {/* <div>
            <h4 className="text-[#4a4a4a] text-[11px] font-bold tracking-widest mb-5 uppercase">Company</h4>
            <ul className="space-y-3">
              {col3.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-white text-[13px] hover:text-[#00cfc1] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          {/* <div>
            <h4 className="text-[#4a4a4a] text-[11px] font-bold tracking-widest mb-5 uppercase">Follow</h4>
            <ul className="space-y-3">
              {col4.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white text-[13px] hover:text-[#00cfc1] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        <div className="border-t border-[#222222] pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="w-full lg:w-2/3">
              <span className="text-[48px] md:text-[72px] font-extrabold tracking-tighter text-[#1a1a1a] select-none leading-none block mb-8">
                SILVER VITALITY
              </span>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
                {legal.map((l) => (
                  <a key={l} href="#" className="text-white/60 text-[12px] hover:text-white transition-colors">
                    {l}
                  </a>
                ))}
              </div>
              <div className="space-y-3 text-[#4a4a4a] text-[12px] leading-relaxed max-w-2xl">
                <p>
                  Copyright © SilverVitality Health Limited. All rights reserved. SilverVitality is a trading name. Registered in England and Wales.
                </p>
                <p>
                  All medications are dispensed by a GPhC registered pharmacy and subject to clinical approval.
                </p>
                <p>
                  This website is intended for UK residents only. If you are experiencing a medical emergency, please call 999 immediately.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
