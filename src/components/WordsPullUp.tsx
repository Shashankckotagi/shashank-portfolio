import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
  showAsterisk?: boolean
  delay?: number
}

export default function WordsPullUp({ text, className = '', showAsterisk = false, delay = 0 }: WordsPullUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={{ overflow: 'hidden' }}>
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {showAsterisk && i === words.length - 1 && (
              <sup
                style={{
                  position: 'absolute',
                  top: '0.65em',
                  right: '-0.3em',
                  fontSize: '0.31em',
                  lineHeight: 1,
                }}
              >
                *
              </sup>
            )}
          </motion.span>
          {i < words.length - 1 && <span style={{ display: 'inline-block' }}>&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}
