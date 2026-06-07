import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, BookOpen, Code2, Trophy } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

// ─── Shared Card Wrapper ────────────────────────────────────────────────────

interface FeatureCardProps {
  index: number
  children: React.ReactNode
  className?: string
}

function FeatureCard({ index, children, className = '' }: FeatureCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative rounded-2xl overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  )
}

// ─── Check Item ─────────────────────────────────────────────────────────────

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <Check size={13} className="text-[#DEDBC8] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
      <span className="text-gray-400 text-xs sm:text-sm leading-snug">{text}</span>
    </li>
  )
}

// ─── Info Card (Research / Projects / Leadership) ────────────────────────────

interface InfoCardProps {
  index: number
  number: string
  title: string
  Icon: React.ElementType
  items: string[]
  learnMoreLabel?: string
  url?: string
}

function InfoCard({ index, number, title, Icon, items, learnMoreLabel = 'Explore', url }: InfoCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (url) {
      if (url.startsWith('http')) {
        window.open(url, '_blank', 'noopener,noreferrer')
      } else {
        navigate(url)
      }
    }
  }

  return (
    <FeatureCard
      index={index}
      className="bg-[#212121] flex flex-col justify-between p-5 sm:p-6 lg:h-[480px]"
    >
      <div className="flex flex-col gap-4">
        {/* Icon badge */}
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(222, 219, 200, 0.08)' }}
        >
          <Icon size={20} color="#DEDBC8" strokeWidth={1.5} />
        </div>

        {/* Title + number */}
        <div className="flex items-baseline justify-between gap-2">
          <h3
            className="text-base sm:text-lg font-medium m-0 leading-tight"
            style={{ color: '#E1E0CC' }}
          >
            {title}
          </h3>
          <span className="text-gray-600 text-xs font-mono flex-shrink-0">{number}</span>
        </div>

        {/* Bullet list */}
        <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
          {items.map((item, i) => (
            <CheckItem key={i} text={item} />
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <button
          onClick={handleClick}
          className="group inline-flex items-center gap-2 text-xs text-[#DEDBC8] bg-transparent border-0 cursor-pointer p-0 hover:gap-3 transition-all duration-200"
        >
          <span>{learnMoreLabel}</span>
          <ArrowRight
            size={13}
            style={{ transform: 'rotate(-45deg)', display: 'inline-block' }}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </button>
      </div>
    </FeatureCard>
  )
}

// ─── Hero Card — Internship experience with stat overlay ─────────────────────

function ExperienceHeroCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const roles = [
    { company: 'Rezorce', role: 'Data Engineer Intern', period: 'Feb 2026 – Present' },
    { company: 'Sovely', role: 'Full-Stack Developer Intern', period: 'Early 2026 – Present' },
    { company: 'SAGE', role: 'Software Engineering Intern', period: 'Jul 2025 – Present' },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden lg:h-[480px] min-h-[320px]"
      style={{ background: '#101010' }}
    >
      {/* Subtle radial gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 110%, rgba(222,219,200,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6">
        {/* Top — label + stat */}
        <div className="flex items-start justify-between">
          <div>
            <p
              className="text-[10px] tracking-[0.18em] uppercase m-0 mb-1"
              style={{ color: 'rgba(222,219,200,0.5)' }}
            >
              Experience
            </p>
            <p className="text-[10px] sm:text-xs text-gray-500 m-0">3 concurrent roles</p>
          </div>
          <div className="text-right">
            <p
              className="text-3xl sm:text-4xl font-medium m-0 leading-none tracking-tight"
              style={{ color: '#E1E0CC' }}
            >
              9.18
            </p>
            <p className="text-[10px] text-gray-500 m-0 mt-0.5">CGPA / 10</p>
          </div>
        </div>

        {/* Middle — role list */}
        <div className="flex flex-col gap-3 my-4">
          {roles.map((r, i) => (
            <div key={i} className="flex items-start justify-between gap-3 py-3 border-b border-white/5">
              <div>
                <p className="text-sm font-medium m-0" style={{ color: '#E1E0CC' }}>
                  {r.company}
                </p>
                <p className="text-xs text-gray-500 m-0 mt-0.5">{r.role}</p>
              </div>
              <span className="text-[10px] text-gray-600 whitespace-nowrap mt-0.5">{r.period}</span>
            </div>
          ))}
        </div>

        {/* Bottom — institute tag */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium m-0" style={{ color: '#E1E0CC' }}>
              MS Ramaiah Institute of Technology
            </p>
            <p className="text-[10px] text-gray-500 m-0 mt-0.5">B.Tech CSE (AIML) · 6th Semester · Bengaluru</p>
          </div>
          <button className="group inline-flex items-center gap-1.5 text-[10px] text-[#DEDBC8] bg-transparent border-0 cursor-pointer p-0 hover:gap-2.5 transition-all duration-200">
            <span>Full CV</span>
            <ArrowRight
              size={11}
              style={{ transform: 'rotate(-45deg)' }}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Data for the three info cards ──────────────────────────────────────────

const INFO_CARDS: InfoCardProps[] = [
  {
    index: 1,
    number: '01',
    title: 'Research & Publications.',
    Icon: BookOpen,
    learnMoreLabel: 'Read papers',
    url: 'https://ieeexplore.ieee.org/author/947462954820407',
    items: [
      'IEEE 2026 — Substrate Mapping & Cardiac Digital Twin Reconstruction Fidelity',
      'IEEE 2025 — Hybrid Quantum-Classical GNNs for Molecular Property Prediction',
      'Supervised by Dr. Sumana Maradithaya, MSRIT',
    ],
  },
  {
    index: 2,
    number: '02',
    title: 'Key Projects.',
    Icon: Code2,
    learnMoreLabel: 'See all projects',
    url: 'https://github.com/shashankckotagi',
    items: [
      'Mini HL-LHC Event Classifier — GNN pipeline, 100% F1-score on collision data',
      'Rustling Leaves — AI forest fire detection with IoT sensor streams, 2026 (C++/Python)',
      'Real-Time Groundwater Evaluation — Smart India Hackathon winning entry, 2025',
      'RIT TechFest \'26 official site + AI Interview Training System',
    ],
  },
  {
    index: 3,
    number: '03',
    title: 'Leadership & Honors.',
    Icon: Trophy,
    learnMoreLabel: 'Learn more',
    url: '/experience',
    items: [
      'Treasurer — IEEE Computational Intelligence Society, MSRIT Chapter',
      'Global Cohort Leader — Harvard Aspire Leaders Program 2025',
      'TechFest Head \'26 & Director, Theatrix Dramatics Club',
      'IdeaRise Innovation Challenge winner · 2nd Prize SAGE Hackathon 2024',
    ],
  },
]

// ─── Section ─────────────────────────────────────────────────────────────────

export default function Features() {
  return (
    <section
      id="experience"
      className="min-h-screen py-16 md:py-24 lg:py-32 px-4 md:px-6 relative"
      style={{ background: '#000' }}
    >
      {/* Noise bg */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">

        {/* Section header */}
        <div id="research" className="text-center max-w-4xl mx-auto">
          <h2
            className="font-normal m-0 leading-tight"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 2.25rem)' }}
          >
            <WordsPullUpMultiStyle
              segments={[{ text: 'Research-grade work. Production-ready systems.', className: 'text-[#DEDBC8]' }]}
              delay={0}
            />
          </h2>
          <h3
            className="font-normal m-0 mt-2 leading-tight"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 2.25rem)' }}
          >
            <WordsPullUpMultiStyle
              segments={[{ text: 'Built with rigor. Driven by curiosity.', className: 'text-gray-500' }]}
              delay={0.2}
            />
          </h3>
        </div>

        {/* 4-column card grid */}
        <div
          id="projects"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          <ExperienceHeroCard />
          {INFO_CARDS.map((card) => (
            <InfoCard key={card.number} {...card} />
          ))}
        </div>

        {/* Skills strip */}
        <SkillsStrip />
      </div>
    </section>
  )
}

// ─── Skills Strip ────────────────────────────────────────────────────────────

const SKILLS = [
  { group: 'Languages', tags: ['Python', 'C++', 'JavaScript', 'SQL'] },
  { group: 'AI / ML', tags: ['PyTorch', 'PyTorch Geometric', 'GNNs', 'PennyLane', 'Qiskit'] },
  { group: 'Web & Infra', tags: ['React.js', 'Node.js', 'MongoDB', 'Docker', 'AWS'] },
  { group: 'Domains', tags: ['Quantum ML', 'HEP Systems', 'Data Engineering', 'GenAI'] },
]

function SkillsStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl p-6 sm:p-8 md:p-10"
      id="contact"
      style={{ background: '#101010' }}
    >
      <p
        className="text-[10px] tracking-[0.2em] uppercase mb-6 m-0"
        style={{ color: 'rgba(222,219,200,0.5)' }}
      >
        Technical Arsenal
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {SKILLS.map(({ group, tags }) => (
          <div key={group}>
            <p className="text-xs text-gray-500 m-0 mb-3 font-medium">{group}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(222,219,200,0.06)',
                    color: '#DEDBC8',
                    border: '1px solid rgba(222,219,200,0.1)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
