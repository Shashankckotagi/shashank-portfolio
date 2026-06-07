import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedParagraphProps {
  text: string
  className?: string
  style?: CSSProperties
}

interface AnimatedLetterProps {
  char: string
  index: number
  total: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}

function AnimatedLetter({ char, index, total, scrollYProgress }: AnimatedLetterProps) {
  const charProgress = index / total
  const opacity = useTransform(
    scrollYProgress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.15, 1]
  )

  return (
    <motion.span style={{ opacity, display: 'inline' }}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}

export default function AnimatedParagraph({ text, className = '', style }: AnimatedParagraphProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')
  const total = chars.length

  return (
    <p ref={ref} className={className} style={{ lineHeight: 1.6, ...style }}>
      {chars.map((char, i) => (
        <AnimatedLetter
          key={i}
          char={char}
          index={i}
          total={total}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  )
}
