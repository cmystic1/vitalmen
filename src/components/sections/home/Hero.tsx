import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'

const marqueeItems = [
  'Long-term weight loss', 'Sexual support*', 'Testosterone treatments',
  'Personalised blood tests', 'Enhanced supplements', 'Health coaching',
]
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative text-black overflow-hidden" style={{ minHeight: '90vh', background: '#e8edea' }}>

      {/* Main layout */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          minHeight: 'calc(100vh - 48px)',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/couple.png"
          alt="couple"
          style={{
            position: 'absolute',
            right: '-5%',
            bottom: 0,
            height: '120%',
            objectFit: 'contain',
            zIndex: 1,
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: 'relative',
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 64px',
            overflow: 'hidden',
            textAlign: 'center',

          }}
        >

          {/* TEXT CONTENT */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h1
              style={{
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-2px',
                fontSize: 'clamp(60px,8vw,120px)',
                margin: 0,
              }}
            >
              OWN YOUR HEALTH
            </h1>

            <p
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: '#4b5563',
                marginTop: 20,
              }}
            >
              For a happier, healthier, longer life.
            </p>

            <button
              style={{
                marginTop: 32,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: '#00CFC1',
                color: 'white',
                fontWeight: 600,
                fontSize: 16,
                padding: '14px 28px',
                borderRadius: 9999,
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/treatments')}
            >
              Get started <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>


    </section>
  )
}

export default HeroSection
