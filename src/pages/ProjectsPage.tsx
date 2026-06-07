import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, ExternalLink, Cpu, Flame, Droplets, Music, ClipboardList } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

// ─── Data ────────────────────────────────────────────────────────────────────

interface Project {
  title: string
  description: string
  tags: string[]
  icon: React.ElementType
  highlight?: string
  span?: 'wide' | 'normal'
}

const PROJECTS: Project[] = [
  {
    title: 'Mini HL-LHC Event Classifier',
    description:
      'A GNN-based pipeline for classifying High-Luminosity LHC collision events. Achieves 100% F1-score on benchmark collision data through optimized graph construction and message-passing architectures.',
    tags: ['Python', 'PyTorch Geometric', 'GNNs', 'HEP'],
    icon: Cpu,
    highlight: '100% F1',
    span: 'wide',
  },
  {
    title: 'Real-Time Groundwater Evaluation',
    description:
      'Smart India Hackathon 2025 winning entry. A comprehensive system for real-time groundwater quality and level evaluation leveraging DWLR telemetry, sensor data fusion, and machine learning classification.',
    tags: ['Python', 'ML', 'IoT', 'Data Engineering'],
    icon: Droplets,
    highlight: 'SIH Winner',
    span: 'normal',
  },
  {
    title: 'Rustling Leaves (2026)',
    description:
      'AI-powered forest fire detection system featuring real-time data pipelines and a companion mobile application for instant alerts. Built with C++ for edge inference and Python for cloud analytics.',
    tags: ['C++', 'Python', 'Mobile App', 'Pipelines'],
    icon: Flame,
    span: 'normal',
  },
  {
    title: 'msvify',
    description:
      'A high-fidelity Spotify clone web application featuring real-time music streaming, responsive audio playback control, custom playlist curation, and a sleek modern user interface.',
    tags: ['React', 'Web Audio API', 'Node.js', 'CSS'],
    icon: Music,
    span: 'normal',
  },
  {
    title: 'Smart Food Inventory Management',
    description:
      'Official web system for managing food inventory. Tracks inventory levels, calculates shelf-life, and triggers automated notifications to optimize supply chain efficiency and reduce food wastage.',
    tags: ['React', 'Node.js', 'MongoDB', 'Web App'],
    icon: ClipboardList,
    span: 'normal',
  },
]

// ─── Animated Card Wrapper ───────────────────────────────────────────────────

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
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Project Card ────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon

  return (
    <AnimCard
      index={index}
      className={project.span === 'wide' ? 'md:col-span-2' : ''}
    >
      <div
        className="group relative rounded-2xl p-6 sm:p-8 h-full flex flex-col transition-all duration-300 overflow-hidden"
        style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(222,219,200,0.14)'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(222,219,200,0.06)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Subtle glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(222,219,200,0.03) 0%, transparent 70%)',
          }}
        />

        {/* Top row */}
        <div className="relative z-10 flex items-start justify-between gap-3 mb-5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(222,219,200,0.06)' }}
          >
            <Icon size={20} color="#DEDBC8" strokeWidth={1.5} />
          </div>
          {project.highlight && (
            <span
              className="text-[10px] font-medium px-2.5 py-1 rounded-full"
              style={{
                background: 'rgba(222,219,200,0.08)',
                color: '#DEDBC8',
                border: '1px solid rgba(222,219,200,0.12)',
              }}
            >
              {project.highlight}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="relative z-10 flex-grow">
          <h3 className="text-base sm:text-lg font-medium m-0 mb-3 leading-snug" style={{ color: '#E1E0CC' }}>
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 m-0 mb-5 leading-relaxed">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="relative z-10 flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
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

        {/* Links */}
        <div className="relative z-10 flex items-center gap-4">
          <a
            href="https://github.com/shashankckotagi"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-1.5 text-xs no-underline bg-transparent border-0 cursor-pointer p-0 transition-all duration-200"
            style={{ color: '#DEDBC8' }}
          >
            <Globe size={13} strokeWidth={1.5} />
            <span>Source</span>
          </a>
          <button
            className="group/btn inline-flex items-center gap-1.5 text-xs bg-transparent border-0 cursor-pointer p-0 transition-all duration-200"
            style={{ color: 'rgba(222,219,200,0.5)' }}
          >
            <ExternalLink size={12} strokeWidth={1.5} />
            <span>Live demo</span>
          </button>
        </div>
      </div>
    </AnimCard>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
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
              'radial-gradient(ellipse 50% 50% at 20% 50%, rgba(222,219,200,0.04) 0%, transparent 70%)',
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
            Projects
          </motion.p>

          <div
            className="font-normal leading-tight max-w-5xl"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: '#E1E0CC' }}
          >
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Production-ready systems.', className: 'font-normal' },
                { text: 'Built with purpose.', className: 'font-serif italic' },
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
            From particle physics classifiers to AI-powered hackathon winners — each project represents a deep dive into
            solving real-world problems with cutting-edge technology.
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

      {/* ───── Bento Grid ───── */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimCard index={0}>
            <div className="flex items-center justify-between mb-8">
              <p
                className="text-[10px] tracking-[0.2em] uppercase m-0"
                style={{ color: 'rgba(222,219,200,0.4)' }}
              >
                Featured Work
              </p>
              <p className="text-xs text-gray-600 m-0 font-mono">{PROJECTS.length} projects</p>
            </div>
          </AnimCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-12 md:py-16 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimCard index={0}>
            <div
              className="rounded-2xl p-8 sm:p-10 text-center"
              style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
            >
              <p className="text-base sm:text-lg font-medium m-0 mb-2" style={{ color: '#E1E0CC' }}>
                Want to collaborate?
              </p>
              <p className="text-xs sm:text-sm text-gray-500 m-0 mb-6">
                I'm always open to working on interesting problems.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium no-underline transition-all duration-200"
                style={{ background: '#DEDBC8', color: '#000' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#f0edd8')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#DEDBC8')}
              >
                <span>Get in touch</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </AnimCard>
        </div>
      </section>
    </div>
  )
}
