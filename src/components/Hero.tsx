import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'About', to: '/about' },
  { label: 'Research', to: '/research' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

function HeroTitle({ isInView }: { isInView: boolean }) {
  // "Shashank Kotagi" — each letter animates up
  const firstName = ['S', 'h', 'a', 's', 'h', 'a', 'n', 'k']
  const lastName = ['K', 'o', 't', 'a', 'g', 'i']

  const renderLetters = (letters: string[], startDelay: number, isLast: boolean) =>
    letters.map((letter, i) => (
      <span
        key={`${startDelay}-${i}`}
        style={{ overflow: 'hidden', display: 'inline-block', position: 'relative', paddingBottom: '0.15em' }}
      >
        <motion.span
          style={{ display: 'inline-block', position: 'relative' }}
          initial={{ y: '110%', opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: (startDelay + i) * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {letter}
          {isLast && i === letters.length - 1 && (
            <sup
              style={{
                position: 'absolute',
                top: '0.65em',
                right: '-0.3em',
                fontSize: '0.31em',
                lineHeight: 1,
                fontWeight: 400,
              }}
            >
              *
            </sup>
          )}
        </motion.span>
      </span>
    ))

  return (
    <h1
      className="font-medium leading-[0.85] tracking-[-0.07em] m-0 relative"
      style={{ color: '#E1E0CC' }}
    >
      <span className="block">{renderLetters(firstName, 0, false)}</span>
      <span className="block">{renderLetters(lastName, firstName.length, true)}</span>
    </h1>
  )
}

export default function Hero() {
  const contentRef = useRef(null)
  const isInView = useInView(contentRef, { once: true })

  return (
    <section
      className="h-screen p-4 md:p-6"
      style={{ background: '#000' }}
    >
      <div
        className="relative h-full rounded-2xl md:rounded-[2rem] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 40%, #16213e 70%, #0a0a0a 100%)',
        }}
      >

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.7 }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Noise overlay */}
        <div className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar — pill hanging from top (hidden on mobile, visible on desktop) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 hidden md:block">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2.5 md:px-8 md:py-3">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-12 list-none m-0 p-0">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[10px] sm:text-xs md:text-sm no-underline transition-colors duration-200 whitespace-nowrap"
                    style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#E1E0CC')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Hero content — bottom aligned */}
        <div
          ref={contentRef}
          className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-12 items-end px-4 pb-16 md:px-6 md:pb-20 gap-y-6 lg:gap-y-0"
        >
          {/* Left — giant name */}
          <div className="col-span-12 lg:col-span-8">
            <div style={{ fontSize: 'clamp(9.75vw, 12.75vw, 15vw)', lineHeight: 0.85 }}>
              <HeroTitle isInView={isInView} />
            </div>
          </div>

          {/* Right — tagline + CTA */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 lg:gap-5 pb-1 lg:pb-3">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm md:text-base m-0"
              style={{ color: 'rgba(222, 219, 200, 0.7)', lineHeight: 1.3 }}
            >
              AI/ML Researcher & Full-Stack Engineer. Building at the intersection of quantum computing, high-energy physics, and scalable systems. B.Tech CSE (AIML) · MSRIT · CGPA 9.18
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={() => window.location.href = '/projects'}
                className="group inline-flex items-center gap-2 transition-all duration-300 bg-[#DEDBC8] rounded-full pl-4 sm:pl-5 pr-1.5 py-1.5 border-0 cursor-pointer"
                style={{ color: '#000' }}
              >
                <span className="font-medium text-sm sm:text-base">View my work</span>
                <span className="group-hover:scale-110 transition-transform duration-300 bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
                  <ArrowRight size={16} color="#DEDBC8" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
