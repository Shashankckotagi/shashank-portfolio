import { Link } from 'react-router-dom'
import { Globe, ExternalLink, Mail, ArrowUpRight } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Research', to: '/research' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

const SOCIAL_LINKS = [
  { label: 'GitHub', icon: Globe, href: 'https://github.com/shashankckotagi' },
  { label: 'LinkedIn', icon: ExternalLink, href: 'https://linkedin.com/in/shashankckotagi' },
  { label: 'Email', icon: Mail, href: 'mailto:shashank@example.com' },
]

export default function Footer() {
  return (
    <footer
      className="relative px-4 md:px-6 pt-16 pb-8"
      style={{ background: '#000' }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(222,219,200,0.15) 30%, rgba(222,219,200,0.15) 70%, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="no-underline text-xl font-medium tracking-tight" style={{ color: '#E1E0CC' }}>
              Shashank Kotagi<span className="text-gray-600">.</span>
            </Link>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed max-w-xs m-0">
              AI/ML Researcher & Full-Stack Engineer. Building at the intersection of quantum computing, high-energy
              physics, and scalable systems.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-4 m-0"
              style={{ color: 'rgba(222,219,200,0.4)' }}
            >
              Navigation
            </p>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="no-underline text-sm transition-colors duration-200"
                    style={{ color: 'rgba(225,224,204,0.5)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225,224,204,0.5)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-4 m-0"
              style={{ color: 'rgba(222,219,200,0.4)' }}
            >
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 no-underline text-sm transition-colors duration-200"
                  style={{ color: 'rgba(225,224,204,0.5)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225,224,204,0.5)')}
                >
                  <s.icon size={15} strokeWidth={1.5} />
                  <span>{s.label}</span>
                  <ArrowUpRight
                    size={11}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid rgba(222,219,200,0.06)' }}
        >
          <p className="text-[11px] text-gray-600 m-0">© 2026 Shashank Kotagi. All rights reserved.</p>
          <p className="text-[11px] text-gray-700 m-0">Built with React + Vite</p>
        </div>
      </div>
    </footer>
  )
}
