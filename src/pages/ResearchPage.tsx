import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, ExternalLink, Award, FlaskConical, Microscope } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

// ─── Data ────────────────────────────────────────────────────────────────────

interface Publication {
  year: string
  title: string
  venue: string
  abstract: string
  tags: string[]
  type: 'paper' | 'grant'
}

const PUBLICATIONS: Publication[] = [
  {
    year: '2026',
    title: 'Substrate Mapping & Cardiac Digital Twin Reconstruction Fidelity',
    venue: 'IEEE Conference Publication',
    abstract:
      'Investigating high-fidelity cardiac digital twin reconstruction using substrate mapping techniques, enabling patient-specific cardiac simulations for personalized medicine applications.',
    tags: ['Digital Twins', 'Cardiac Modeling', 'Substrate Mapping', 'Simulation'],
    type: 'paper',
  },
  {
    year: '2025',
    title: 'Hybrid Quantum-Classical GNNs for Molecular Property Prediction',
    venue: 'IEEE Conference Publication',
    abstract:
      'Proposing a hybrid quantum-classical graph neural network architecture that leverages variational quantum circuits for molecular property prediction, achieving state-of-the-art accuracy on benchmark datasets.',
    tags: ['Quantum ML', 'GNNs', 'Molecular Properties', 'VQC'],
    type: 'paper',
  },
  {
    year: '2026',
    title: 'IEEE CIS Graduate Research Grant — HL-LHC Trigger Pipelines',
    venue: 'IEEE Computational Intelligence Society · $3,500',
    abstract:
      'Grant application for developing intelligent trigger pipeline systems for the High-Luminosity Large Hadron Collider (HL-LHC), using graph neural networks to process collision event data in real-time.',
    tags: ['HEP', 'HL-LHC', 'Trigger Systems', 'Real-Time ML'],
    type: 'grant',
  },
]

const RESEARCH_AREAS = [
  {
    icon: FlaskConical,
    title: 'Quantum Machine Learning',
    desc: 'Variational quantum circuits, hybrid architectures, PennyLane & Qiskit implementations.',
  },
  {
    icon: Microscope,
    title: 'High-Energy Physics',
    desc: 'GNN-based event classification and trigger pipeline optimization for particle colliders.',
  },
  {
    icon: BookOpen,
    title: 'Biomedical Engineering',
    desc: 'Cardiac digital twins and substrate mapping for patient-specific clinical simulations.',
  },
]

// ─── Animated Card ───────────────────────────────────────────────────────────

function AnimCard({
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

// ─── Publication Card ────────────────────────────────────────────────────────

function PublicationCard({ pub, index }: { pub: Publication; index: number }) {
  return (
    <AnimCard index={index}>
      <div
        className="group rounded-2xl p-6 sm:p-8 transition-all duration-300 h-full flex flex-col"
        style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(222,219,200,0.14)'
          e.currentTarget.style.background = '#141414'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(222,219,200,0.06)'
          e.currentTarget.style.background = '#101010'
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(222,219,200,0.06)' }}
            >
              {pub.type === 'grant' ? (
                <Award size={16} color="#DEDBC8" strokeWidth={1.5} />
              ) : (
                <BookOpen size={16} color="#DEDBC8" strokeWidth={1.5} />
              )}
            </div>
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-gray-500">{pub.venue}</span>
            </div>
          </div>
          <span className="text-xs font-mono text-gray-600 flex-shrink-0">{pub.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-medium m-0 mb-3 leading-snug" style={{ color: '#E1E0CC' }}>
          {pub.title}
        </h3>

        {/* Abstract */}
        <p className="text-xs sm:text-sm text-gray-500 m-0 mb-5 leading-relaxed flex-grow">{pub.abstract}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {pub.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(222,219,200,0.06)',
                color: 'rgba(222,219,200,0.7)',
                border: '1px solid rgba(222,219,200,0.08)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          className="group/btn inline-flex items-center gap-2 text-xs bg-transparent border-0 cursor-pointer p-0 transition-all duration-200"
          style={{ color: '#DEDBC8' }}
        >
          <span>{pub.type === 'grant' ? 'View application' : 'Read paper'}</span>
          <ExternalLink
            size={12}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
          />
        </button>
      </div>
    </AnimCard>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ResearchPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <div style={{ background: '#000' }}>
      {/* ───── Hero ───── */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 70% 30%, rgba(222,219,200,0.05) 0%, transparent 70%)',
          }}
        />
        <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-8 pb-12 md:pb-16 pt-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-6 m-0"
            style={{ color: 'rgba(222,219,200,0.5)' }}
          >
            Research & Publications
          </motion.p>

          <div
            className="font-normal leading-tight max-w-5xl"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: '#E1E0CC' }}
          >
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Research-grade work.', className: 'font-normal' },
                { text: 'Peer-reviewed rigor.', className: 'font-serif italic' },
              ]}
              containerClassName="gap-x-[0.22em] leading-tight justify-start"
              delay={0.15}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm sm:text-base text-gray-500 mt-6 max-w-2xl m-0 leading-relaxed"
          >
            Published at IEEE conferences and supervised by Dr. Sumana Maradithaya at MSRIT. My research spans quantum
            machine learning, high-energy physics, and biomedical digital twins.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={heroInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-px mt-10 origin-left"
            style={{ background: 'linear-gradient(90deg, rgba(222,219,200,0.2), transparent)' }}
          />
        </div>
      </section>

      {/* ───── Publications ───── */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimCard index={0}>
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-8 m-0"
              style={{ color: 'rgba(222,219,200,0.4)' }}
            >
              Publications & Grants
            </p>
          </AnimCard>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {PUBLICATIONS.map((pub, i) => (
              <PublicationCard key={pub.title} pub={pub} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── Research Areas ───── */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimCard index={0}>
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-8 m-0"
              style={{ color: 'rgba(222,219,200,0.4)' }}
            >
              Research Interests
            </p>
          </AnimCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RESEARCH_AREAS.map((area, i) => (
              <AnimCard key={area.title} index={i + 1}>
                <div
                  className="rounded-2xl p-6 sm:p-8 h-full transition-all duration-300"
                  style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(222,219,200,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(222,219,200,0.06)'
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(222,219,200,0.06)' }}
                  >
                    <area.icon size={20} color="#DEDBC8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-medium m-0 mb-2" style={{ color: '#E1E0CC' }}>
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 m-0 leading-relaxed">{area.desc}</p>
                </div>
              </AnimCard>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Supervisor Acknowledgment ───── */}
      <section className="py-12 md:py-16 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimCard index={0}>
            <div
              className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(222,219,200,0.06)' }}
              >
                <Award size={22} color="#DEDBC8" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-medium m-0 mb-1" style={{ color: '#E1E0CC' }}>
                  Research supervised by Dr. Sumana Maradithaya
                </p>
                <p className="text-xs text-gray-500 m-0">
                  Department of Computer Science & Engineering, MS Ramaiah Institute of Technology, Bengaluru
                </p>
              </div>
            </div>
          </AnimCard>
        </div>
      </section>
    </div>
  )
}
