import { useState, useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Research', to: '/research' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHome
            ? scrolled
              ? 'translate-y-0 opacity-100'
              : 'md:-translate-y-full md:opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
        style={{
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(222, 219, 200, 0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-3.5 md:py-4">
          {/* Logo / Name */}
          <NavLink
            to="/"
            className="no-underline text-base md:text-lg font-medium tracking-tight"
            style={{ color: '#E1E0CC' }}
          >
            Shashank Kotagi<span className="text-gray-500">.</span>
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `no-underline text-[13px] px-3.5 py-2 rounded-lg transition-all duration-200 inline-block ${
                      isActive ? 'nav-link-active' : 'nav-link-idle'
                    }`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? '#E1E0CC' : 'rgba(225, 224, 204, 0.5)',
                    background: isActive ? 'rgba(222, 219, 200, 0.08)' : 'transparent',
                  })}
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.classList.contains('nav-link-active')) {
                      e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)'
                      e.currentTarget.style.background = 'rgba(222, 219, 200, 0.04)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.currentTarget.classList.contains('nav-link-active')) {
                      e.currentTarget.style.color = 'rgba(225, 224, 204, 0.5)'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden bg-transparent border-0 cursor-pointer p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} color="#E1E0CC" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60]"
              style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(4px)' }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[280px] p-6 flex flex-col"
              style={{
                background: '#0a0a0a',
                borderLeft: '1px solid rgba(222, 219, 200, 0.08)',
              }}
            >
              {/* Close */}
              <div className="flex justify-end mb-8">
                <button
                  className="bg-transparent border-0 cursor-pointer p-1"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} color="#E1E0CC" />
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col gap-1 list-none m-0 p-0">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="no-underline text-lg py-3 px-4 rounded-xl block transition-all duration-200"
                      style={({ isActive }) => ({
                        color: isActive ? '#E1E0CC' : 'rgba(225, 224, 204, 0.5)',
                        background: isActive ? 'rgba(222, 219, 200, 0.08)' : 'transparent',
                      })}
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-[10px] tracking-[0.2em] uppercase m-0" style={{ color: 'rgba(222,219,200,0.3)' }}>
                  © 2026 Shashank Kotagi
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
