import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/SocialIcons'

// ─── Data ────────────────────────────────────────────────────────────────────

const CONTACT_METHODS = [
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:shashankckotagi@gmail.com',
    value: 'shashankckotagi@gmail.com',
    actionText: 'Send Email',
  },
  {
    label: 'LinkedIn',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/shashank-kotagi/',
    value: 'linkedin.com/in/shashank-kotagi',
    actionText: 'Connect',
  },
  {
    label: 'Instagram',
    icon: InstagramIcon,
    href: 'https://instagram.com/shashank.kotagi',
    value: '@shashank.kotagi',
    actionText: 'Follow',
  },
  {
    label: 'GitHub',
    icon: GithubIcon,
    href: 'https://github.com/shashankckotagi',
    value: 'github.com/shashankckotagi',
    actionText: 'View Profile',
  },
  {
    label: 'Phone',
    icon: Phone,
    href: 'tel:+919371342742',
    value: '+91 93713 42742',
    actionText: 'Call',
  },
  {
    label: 'Location',
    icon: MapPin,
    href: 'https://www.google.com/maps/search/ramaiah/@13.0215788,77.5504773,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
    value: 'Bengaluru, India',
    actionText: 'View Map',
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

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <div style={{ background: '#000' }}>
      {/* ───── Hero ───── */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(222,219,200,0.04) 0%, transparent 70%)',
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
            Contact
          </motion.p>

          <div
            className="font-normal leading-tight max-w-5xl"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: '#E1E0CC' }}
          >
            <WordsPullUpMultiStyle
              segments={[
                { text: "Let's build", className: 'font-normal' },
                { text: 'something remarkable.', className: 'font-serif italic' },
              ]}
              containerClassName="gap-x-[0.22em] leading-tight justify-start"
              delay={0.15}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm sm:text-base text-gray-500 mt-6 max-w-xl m-0 leading-relaxed"
          >
            Whether it's a research collaboration, a project inquiry, or just a conversation about GNNs and physics — feel free to reach out.
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

      {/* ───── Contact Bento Grid ───── */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimCard index={0}>
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-8 m-0"
              style={{ color: 'rgba(222,219,200,0.4)' }}
            >
              Contact Channels
            </p>
          </AnimCard>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTACT_METHODS.map((method, i) => (
              <AnimCard key={method.label} index={i + 1}>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group no-underline flex flex-col justify-between rounded-2xl p-6 h-full transition-all duration-300 min-h-[150px]"
                  style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(222,219,200,0.14)'
                    e.currentTarget.style.background = '#131313'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(222,219,200,0.06)'
                    e.currentTarget.style.background = '#101010'
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/5"
                        style={{ background: 'rgba(222,219,200,0.06)' }}
                      >
                        <method.icon size={18} color="#DEDBC8" strokeWidth={1.5} />
                      </div>
                      <span className="text-[9px] tracking-[0.15em] uppercase text-gray-500">{method.label}</span>
                    </div>
                    <p className="text-sm font-medium m-0 truncate" style={{ color: '#E1E0CC' }}>
                      {method.value}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 mt-5 text-xs text-gray-500 group-hover:text-[#DEDBC8] transition-colors duration-200">
                    <span>{method.actionText}</span>
                    <ArrowUpRight size={13} strokeWidth={1.5} />
                  </div>
                </a>
              </AnimCard>
            ))}
          </div>

          {/* Availability Status */}
          <AnimCard index={CONTACT_METHODS.length + 1}>
            <div
              className="rounded-2xl p-6 mt-6 max-w-xl mx-auto text-center"
              style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
            >
              <div className="flex items-center justify-center gap-2.5 mb-2">
                <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.4)' }} />
                <p className="text-xs font-medium m-0" style={{ color: '#E1E0CC' }}>
                  Available for opportunities
                </p>
              </div>
              <p className="text-[11px] text-gray-500 m-0 leading-relaxed">
                Currently open to research collaborations, internship roles, and interesting project ideas.
              </p>
            </div>
          </AnimCard>
        </div>
      </section>
    </div>
  )
}
