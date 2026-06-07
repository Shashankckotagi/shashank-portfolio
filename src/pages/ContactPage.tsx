import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'

// ─── Data ────────────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  { label: 'GitHub', icon: GithubIcon, href: 'https://github.com/shashankckotagi', handle: '@shashankckotagi' },
  { label: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/shashank-kotagi/', handle: '/in/shashank-kotagi' },
  { label: 'Email', icon: Mail, href: 'mailto:shashank@example.com', handle: 'shashank@example.com' },
  { label: 'Location', icon: MapPin, href: '#', handle: 'Bengaluru, India' },
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

// ─── Contact Form ────────────────────────────────────────────────────────────

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const inputStyle = {
    background: 'rgba(222,219,200,0.04)',
    border: '1px solid rgba(222,219,200,0.08)',
    color: '#E1E0CC',
    outline: 'none',
  }

  const inputFocusStyle = {
    borderColor: 'rgba(222,219,200,0.2)',
    background: 'rgba(222,219,200,0.06)',
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[10px] tracking-[0.15em] uppercase text-gray-500 mb-2 block">Name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
        </div>
        <div>
          <label className="text-[10px] tracking-[0.15em] uppercase text-gray-500 mb-2 block">Email</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
        </div>
      </div>

      <div>
        <label className="text-[10px] tracking-[0.15em] uppercase text-gray-500 mb-2 block">Subject</label>
        <input
          type="text"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          required
          placeholder="What's this about?"
          className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
          style={inputStyle}
          onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
          onBlur={(e) => Object.assign(e.target.style, inputStyle)}
        />
      </div>

      <div>
        <label className="text-[10px] tracking-[0.15em] uppercase text-gray-500 mb-2 block">Message</label>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          placeholder="Tell me about your idea or project..."
          rows={5}
          className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 resize-none"
          style={inputStyle}
          onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
          onBlur={(e) => Object.assign(e.target.style, inputStyle)}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium border-0 cursor-pointer transition-all duration-300 mt-2 self-start"
        style={{
          background: submitted ? '#4ade80' : '#DEDBC8',
          color: submitted ? '#000' : '#000',
        }}
      >
        {submitted ? (
          <>
            <span>Message sent!</span>
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
              ✓
            </motion.span>
          </>
        ) : (
          <>
            <span>Send message</span>
            <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </>
        )}
      </motion.button>
    </form>
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
            Whether it's a research collaboration, a startup idea, or just a conversation about quantum ML — I'd love
            to hear from you.
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

      {/* ───── Form + Socials Grid ───── */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimCard index={0}>
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-6 m-0"
                style={{ color: 'rgba(222,219,200,0.4)' }}
              >
                Send a Message
              </p>
            </AnimCard>

            <AnimCard index={1}>
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  background: 'rgba(16,16,16,0.8)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(222,219,200,0.06)',
                }}
              >
                <ContactForm />
              </div>
            </AnimCard>
          </div>

          {/* Socials */}
          <div className="lg:col-span-2">
            <AnimCard index={0}>
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-6 m-0"
                style={{ color: 'rgba(222,219,200,0.4)' }}
              >
                Find Me Here
              </p>
            </AnimCard>

            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((social, i) => (
                <AnimCard key={social.label} index={i + 1}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group no-underline flex items-center gap-4 rounded-2xl p-4 sm:p-5 transition-all duration-300"
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
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(222,219,200,0.06)' }}
                    >
                      <social.icon size={18} color="#DEDBC8" strokeWidth={1.5} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-xs text-gray-500 m-0">{social.label}</p>
                      <p
                        className="text-sm font-medium m-0 mt-0.5 truncate"
                        style={{ color: '#E1E0CC' }}
                      >
                        {social.handle}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      color="#DEDBC8"
                    />
                  </a>
                </AnimCard>
              ))}
            </div>

            {/* Availability */}
            <AnimCard index={SOCIAL_LINKS.length + 1}>
              <div
                className="rounded-2xl p-5 mt-3"
                style={{ background: '#101010', border: '1px solid rgba(222,219,200,0.06)' }}
              >
                <div className="flex items-center gap-2.5 mb-2">
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
        </div>
      </section>
    </div>
  )
}
