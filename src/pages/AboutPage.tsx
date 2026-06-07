import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, MapPin, Sparkles, Brain, Atom, Server } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import AnimatedParagraph from '../components/AnimatedParagraph'

// ─── Interests Data ──────────────────────────────────────────────────────────

const INTERESTS = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    desc: 'Deep learning, GNNs, and generative models for real-world applications.',
  },
  {
    icon: Atom,
    title: 'Quantum Computing',
    desc: 'Hybrid quantum-classical architectures and variational quantum circuits.',
  },
  {
    icon: Server,
    title: 'Scalable Systems',
    desc: 'Production-ready engineering with cloud infrastructure and real-time data.',
  },
]

// ─── Skills Data ─────────────────────────────────────────────────────────────

const SKILLS = [
  { group: 'Languages', tags: ['Python', 'C++', 'JavaScript', 'SQL'] },
  { group: 'AI / ML', tags: ['PyTorch', 'PyTorch Geometric', 'GNNs', 'PennyLane', 'Qiskit'] },
  { group: 'Web & Infra', tags: ['React.js', 'Node.js', 'MongoDB', 'Docker', 'AWS'] },
  { group: 'Domains', tags: ['Quantum ML', 'HEP Systems', 'Data Engineering', 'GenAI'] },
]

// ─── Stagger Card ────────────────────────────────────────────────────────────

function StaggerCard({
  index,
  children,
  className = '',
}: {
  index: number
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ['start end', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <div style={{ background: '#000' }}>
      {/* ───── Hero Banner ───── */}
      <section ref={scrollRef} className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
        {/* Gradient background */}
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 30% 40%, rgba(222,219,200,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 60%, rgba(222,219,200,0.04) 0%, transparent 70%)',
            }}
          />
        </motion.div>

        {/* Noise */}
        <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-8 pb-12 md:pb-16 pt-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-6 m-0"
            style={{ color: 'rgba(222,219,200,0.5)' }}
          >
            About Me
          </motion.p>

          <div
            className="font-normal leading-tight max-w-4xl"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)', color: '#E1E0CC' }}
          >
            <WordsPullUpMultiStyle
              segments={[
                { text: 'I am Shashank Kotagi,', className: 'font-normal' },
                { text: 'a researcher and builder.', className: 'font-serif italic' },
              ]}
              containerClassName="gap-x-[0.22em] leading-tight justify-start"
              delay={0.15}
            />
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={heroInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-px mt-10 origin-left"
            style={{ background: 'linear-gradient(90deg, rgba(222,219,200,0.2), transparent)' }}
          />
        </div>
      </section>

      {/* ───── Bio Section ───── */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left label */}
          <div className="lg:col-span-2">
            <StaggerCard index={0}>
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-4 m-0"
                style={{ color: 'rgba(222,219,200,0.4)' }}
              >
                Who I Am
              </p>
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(222,219,200,0.08)' }}
                  >
                    <GraduationCap size={18} color="#DEDBC8" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium m-0" style={{ color: '#E1E0CC' }}>
                      MS Ramaiah Institute of Technology
                    </p>
                    <p className="text-[11px] text-gray-500 m-0">B.Tech CSE (AIML) · CGPA 9.18</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(222,219,200,0.08)' }}
                  >
                    <MapPin size={18} color="#DEDBC8" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium m-0" style={{ color: '#E1E0CC' }}>
                      Bengaluru, India
                    </p>
                    <p className="text-[11px] text-gray-500 m-0">6th Semester · Expected 2027</p>
                  </div>
                </div>
              </div>
            </StaggerCard>
          </div>

          {/* Right — animated paragraph */}
          <div className="lg:col-span-3">
            <StaggerCard index={1}>
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-6 m-0"
                style={{ color: 'rgba(222,219,200,0.4)' }}
              >
                My Story
              </p>
            </StaggerCard>
            <AnimatedParagraph
              text="Over the past two years, I have published research at IEEE conferences on quantum-classical graph neural networks and cardiac digital twins, interned across data engineering and full-stack roles, and led initiatives from IEEE Computational Intelligence Society to the Harvard Aspire Leaders Program — driven by a singular hunger to solve hard problems at scale."
              className="text-sm sm:text-base md:text-lg leading-relaxed"
              style={{ color: '#DEDBC8' }}
            />
          </div>
        </div>
      </section>

      {/* ───── Interests / Focus Areas ───── */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerCard index={0}>
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-8 m-0"
              style={{ color: 'rgba(222,219,200,0.4)' }}
            >
              Focus Areas
            </p>
          </StaggerCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {INTERESTS.map((item, i) => (
              <StaggerCard key={item.title} index={i + 1}>
                <div
                  className="group rounded-2xl p-6 sm:p-8 transition-all duration-300 h-full"
                  style={{
                    background: '#101010',
                    border: '1px solid rgba(222,219,200,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(222,219,200,0.12)'
                    e.currentTarget.style.background = '#141414'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(222,219,200,0.06)'
                    e.currentTarget.style.background = '#101010'
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(222,219,200,0.06)' }}
                  >
                    <item.icon size={22} color="#DEDBC8" strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={12} color="#DEDBC8" className="opacity-50" />
                    <h3 className="text-base font-medium m-0" style={{ color: '#E1E0CC' }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 m-0 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerCard>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Skills Grid ───── */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerCard index={0}>
            <div
              className="rounded-2xl p-6 sm:p-8 md:p-10"
              style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
            >
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-8 m-0"
                style={{ color: 'rgba(222,219,200,0.5)' }}
              >
                Technical Arsenal
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {SKILLS.map(({ group, tags }) => (
                  <div key={group}>
                    <p className="text-xs text-gray-500 m-0 mb-3 font-medium">{group}</p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-1 rounded-full transition-all duration-200 cursor-default"
                          style={{
                            background: 'rgba(222,219,200,0.06)',
                            color: '#DEDBC8',
                            border: '1px solid rgba(222,219,200,0.1)',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(222,219,200,0.12)'
                            e.currentTarget.style.borderColor = 'rgba(222,219,200,0.2)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(222,219,200,0.06)'
                            e.currentTarget.style.borderColor = 'rgba(222,219,200,0.1)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerCard>
        </div>
      </section>
    </div>
  )
}
