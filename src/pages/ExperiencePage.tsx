import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap, Trophy, ArrowUpRight, Calendar } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

// ─── Data ────────────────────────────────────────────────────────────────────

interface Role {
  company: string
  role: string
  period: string
  description: string
  tags: string[]
  logo?: string
  link?: string
}

const ROLES: Role[] = [
  {
    company: 'Rezorce',
    role: 'Data Engineer Intern',
    period: 'Feb 2026 – May 2026',
    description:
      'Building data pipelines and ETL workflows for scalable analytics infrastructure. Working with large-scale datasets and cloud-native data processing tools.',
    tags: ['Python', 'SQL', 'Data Pipelines', 'AWS'],
    logo: '/rezorce_logo.png',
  },
  {
    company: 'Sovely',
    role: 'Full-Stack Developer Intern',
    period: 'Mar 2026 – Jun 2026',
    description:
      'Developing full-stack web applications with modern frameworks. Implementing responsive UIs and RESTful APIs for production-grade products.',
    tags: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    link: 'https://github.com/Sovely-fresher-batch5/sovely-ecommerce',
    logo: '/sovely_logo.png',
  },
  {
    company: 'SAGE',
    role: 'Software Engineering Intern',
    period: 'Jul 2025 – Present',
    description:
      'Contributing to software engineering projects with a focus on code quality, testing, and scalable architecture. Collaborating in agile development cycles.',
    tags: ['JavaScript', 'Docker', 'CI/CD', 'Testing'],
    logo: '/sage_logo.png',
  },
]

interface Honor {
  title: string
  org: string
  year: string
  logo?: string
}

const HONORS: Honor[] = [
  {
    title: 'Treasurer — IEEE Computational Intelligence Society',
    org: 'MSRIT Chapter',
    year: '2026–27',
    logo: '/ieee_logo.png',
  },
  {
    title: 'Global Cohort Leader — Harvard Aspire Leaders Program',
    org: 'Harvard University',
    year: '2024',
    logo: '/harvard_logo.png',
  },
  {
    title: 'TechFest Head \'26',
    org: 'MSRIT',
    year: '2026',
    logo: '/techfest_logo.png',
  },
  {
    title: 'Director — Theatrix Dramatics Club',
    org: 'MSRIT',
    year: '2026',
    logo: '/theatrix_logo.png',
  },
  {
    title: 'Prize Winner — Shoutout 16.0',
    org: 'Chiraranga & Theatrix Drama Festival',
    year: '2026',
    logo: '/shoutout_logo.png',
  },
  {
    title: 'IdeaRise Innovation Challenge Winner',
    org: 'MSRIT',
    year: '2024',
    logo: '/ecell_logo.png',
  },
  {
    title: '2nd Prize Winner — SAGE Hackathon',
    org: 'SAGE',
    year: '2024',
    logo: '/sage_logo.png',
  },
]

// ─── Animated Wrapper ────────────────────────────────────────────────────────

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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Timeline Role Card ─────────────────────────────────────────────────────

function RoleCard({ role, index }: { role: Role; index: number }) {
  return (
    <AnimCard index={index}>
      <div className="flex gap-4 sm:gap-6">
        {/* Timeline line + dot */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
            style={{
              background: '#DEDBC8',
              boxShadow: '0 0 12px rgba(222,219,200,0.3)',
            }}
          />
          <div
            className="w-px flex-grow mt-2"
            style={{ background: 'linear-gradient(to bottom, rgba(222,219,200,0.2), transparent)' }}
          />
        </div>

        {/* Card */}
        <div
          className="group rounded-2xl p-5 sm:p-6 mb-4 flex-grow transition-all duration-300"
          style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(222,219,200,0.12)'
            e.currentTarget.style.background = '#131313'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(222,219,200,0.06)'
            e.currentTarget.style.background = '#101010'
          }}
        >
          {/* Header */}
          <div className="flex items-start gap-3.5 mb-3">
            {role.logo && (
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden flex-shrink-0 border border-white/10 p-0.5">
                <img src={role.logo} alt={`${role.company} Logo`} className="w-full h-full object-contain" />
              </div>
            )}
            <div className="flex-grow min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-medium m-0 leading-snug flex items-center gap-1.5" style={{ color: '#E1E0CC' }}>
                    {role.link ? (
                      <a
                        href={role.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1.5"
                        style={{ color: '#E1E0CC', textDecoration: 'none' }}
                      >
                        {role.company}
                        <ArrowUpRight size={14} className="text-gray-500 hover:text-[#DEDBC8] flex-shrink-0" />
                      </a>
                    ) : (
                      role.company
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 m-0 mt-0.5">{role.role}</p>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <Calendar size={11} color="rgba(222,219,200,0.4)" />
                  <span className="text-[10px] sm:text-xs text-gray-600 whitespace-nowrap">{role.period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-500 m-0 mb-4 leading-relaxed">{role.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {role.tags.map((tag) => (
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
        </div>
      </div>
    </AnimCard>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ExperiencePage() {
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
              'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(222,219,200,0.04) 0%, transparent 70%)',
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
            Experience
          </motion.p>

          <div
            className="font-normal leading-tight max-w-5xl"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: '#E1E0CC' }}
          >
            <WordsPullUpMultiStyle
              segments={[
                { text: '3 professional internships.', className: 'font-normal' },
                { text: 'Relentless growth.', className: 'font-serif italic' },
              ]}
              containerClassName="gap-x-[0.22em] leading-tight justify-start"
              delay={0.15}
            />
          </div>

          {/* Stat row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-8 mt-8"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-medium m-0 leading-none" style={{ color: '#E1E0CC' }}>
                9.18
              </p>
              <p className="text-[10px] text-gray-500 m-0 mt-1 whitespace-nowrap">CGPA / 10</p>
            </div>
            <div className="w-px h-10" style={{ background: 'rgba(222,219,200,0.1)' }} />
            <div>
              <p className="text-2xl sm:text-3xl font-medium m-0 leading-none" style={{ color: '#E1E0CC' }}>
                3
              </p>
              <p className="text-[10px] text-gray-500 m-0 mt-1 whitespace-nowrap">Internships (1 active)</p>
            </div>
            <div className="w-px h-10" style={{ background: 'rgba(222,219,200,0.1)' }} />
            <div>
              <p className="text-2xl sm:text-3xl font-medium m-0 leading-none" style={{ color: '#E1E0CC' }}>
                2+
              </p>
              <p className="text-[10px] text-gray-500 m-0 mt-1 whitespace-nowrap">IEEE papers</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={heroInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-px mt-10 origin-left"
            style={{ background: 'linear-gradient(90deg, rgba(222,219,200,0.2), transparent)' }}
          />
        </div>
      </section>

      {/* ───── Timeline ───── */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimCard index={0}>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(222,219,200,0.06)' }}
              >
                <Briefcase size={16} color="#DEDBC8" strokeWidth={1.5} />
              </div>
              <p
                className="text-[10px] tracking-[0.2em] uppercase m-0"
                style={{ color: 'rgba(222,219,200,0.4)' }}
              >
                Work Experience
              </p>
            </div>
          </AnimCard>

          {ROLES.map((role, i) => (
            <RoleCard key={role.company} role={role} index={i + 1} />
          ))}
        </div>
      </section>

      {/* ───── Education ───── */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimCard index={0}>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(222,219,200,0.06)' }}
              >
                <GraduationCap size={16} color="#DEDBC8" strokeWidth={1.5} />
              </div>
              <p
                className="text-[10px] tracking-[0.2em] uppercase m-0"
                style={{ color: 'rgba(222,219,200,0.4)' }}
              >
                Education
              </p>
            </div>
          </AnimCard>

          <AnimCard index={1}>
            <div
              className="rounded-2xl p-6 sm:p-8 mb-4"
              style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
            >
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Logo */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden flex-shrink-0 border border-white/10 p-1">
                  <img src="/ramaiah_logo.png" alt="Ramaiah Logo" className="w-full h-full object-contain" />
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-medium m-0 mb-1" style={{ color: '#E1E0CC' }}>
                        MS Ramaiah Institute of Technology
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 m-0 mb-1">
                        B.Tech Computer Science & Engineering (AIML)
                      </p>
                      <p className="text-[11px] text-gray-600 m-0">6th Semester · Bengaluru, India</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-2xl font-medium m-0 leading-none" style={{ color: '#E1E0CC' }}>
                        9.18
                      </p>
                      <p className="text-[10px] text-gray-500 m-0 mt-1">CGPA</p>
                    </div>
                  </div>

                  <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(222,219,200,0.06)' }}>
                    <p className="text-xs text-gray-500 m-0 leading-relaxed">
                      Specializing in Artificial Intelligence and Machine Learning with research focus on quantum computing,
                      graph neural networks, and high-energy physics applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimCard>

          <AnimCard index={2}>
            <div
              className="rounded-2xl p-6 sm:p-8 mb-4"
              style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
            >
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Logo */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden flex-shrink-0 border border-white/10 p-1">
                  <img src="/abhishek_logo.png" alt="Abhishek College Logo" className="w-full h-full object-contain" />
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-medium m-0 mb-1" style={{ color: '#E1E0CC' }}>
                        Abhishek Arts, Science and Commerce Junior College
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 m-0 mb-1">
                        Higher Secondary Schooling (Class 11 & 12)
                      </p>
                      <p className="text-[11px] text-gray-600 m-0">2021 – 2023 · Chinchwad, Pune, India</p>
                    </div>
                  </div>

                  <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(222,219,200,0.06)' }}>
                    <p className="text-xs text-gray-500 m-0 leading-relaxed">
                      Completed higher secondary education with specialization in science, mathematics, and computer studies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimCard>

          <AnimCard index={3}>
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
            >
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Logo */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden flex-shrink-0 border border-white/10 p-1">
                  <img src="/st_andrews_logo.png" alt="St. Andrews Logo" className="w-full h-full object-contain" />
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-medium m-0 mb-1" style={{ color: '#E1E0CC' }}>
                        St. Andrews High School
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 m-0 mb-1">
                        Primary & Secondary Schooling
                      </p>
                      <p className="text-[11px] text-gray-600 m-0">2009 – 2021 · Chinchwad, Pune, India</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-2xl font-medium m-0 leading-none" style={{ color: '#E1E0CC' }}>
                        89%
                      </p>
                      <p className="text-[10px] text-gray-500 m-0 mt-1">10th Board</p>
                    </div>
                  </div>

                  <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(222,219,200,0.06)' }}>
                    <p className="text-xs text-gray-500 m-0 leading-relaxed">
                      Completed foundational secondary school studies with a primary focus on mathematics, physical sciences, and introductory computer applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimCard>
        </div>
      </section>

      {/* ───── Leadership & Honors ───── */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimCard index={0}>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(222,219,200,0.06)' }}
              >
                <Trophy size={16} color="#DEDBC8" strokeWidth={1.5} />
              </div>
              <p
                className="text-[10px] tracking-[0.2em] uppercase m-0"
                style={{ color: 'rgba(222,219,200,0.4)' }}
              >
                Leadership & Honors
              </p>
            </div>
          </AnimCard>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {HONORS.map((honor, i) => (
              <AnimCard key={honor.title} index={i + 1}>
                <div
                  className="group rounded-2xl p-5 sm:p-6 h-full transition-all duration-300"
                  style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(222,219,200,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(222,219,200,0.06)'
                  }}
                >
                  <div className="flex gap-3.5 items-start h-full">
                    {honor.logo && (
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden flex-shrink-0 border border-white/10 p-1">
                        <img src={honor.logo} alt={`${honor.title} Logo`} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <div className="flex-grow min-w-0 flex flex-col justify-between min-h-[40px]">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="text-sm font-medium m-0 leading-snug" style={{ color: '#E1E0CC' }}>
                            {honor.title}
                          </h4>
                          <ArrowUpRight
                            size={13}
                            color="rgba(222,219,200,0.3)"
                            className="flex-shrink-0 mt-0.5 group-hover:text-[#DEDBC8] transition-colors duration-200"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] text-gray-500 m-0">{honor.org}</p>
                        <span className="text-[10px] text-gray-600 font-mono">{honor.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimCard>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CV CTA ───── */}
      <section className="py-12 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimCard index={0}>
            <div
              className="rounded-2xl p-8 sm:p-10 text-center"
              style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
            >
              <p className="text-base sm:text-lg font-medium m-0 mb-2" style={{ color: '#E1E0CC' }}>
                Want the full picture?
              </p>
              <p className="text-xs sm:text-sm text-gray-500 m-0 mb-6">
                Download my complete CV for a detailed overview of my experience and skills.
              </p>
              <a
                href="https://drive.google.com/file/d/1MDi4i85SIiYC5LcE3RoB6Mv1wo-Kb_Pw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border-0 cursor-pointer transition-all duration-200 no-underline"
                style={{ background: '#DEDBC8', color: '#000' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#f0edd8')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#DEDBC8')}
              >
                <span>Download CV</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </AnimCard>
        </div>
      </section>
    </div>
  )
}
