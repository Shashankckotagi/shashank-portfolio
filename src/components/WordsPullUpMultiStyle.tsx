import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  containerClassName?: string
  delay?: number
}

export default function WordsPullUpMultiStyle({
  segments,
  containerClassName = '',
  delay = 0,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Flatten all words with their className
  const allWords: { word: string; className: string; isLastInSegment: boolean }[] = []
  segments.forEach((seg) => {
    const words = seg.text.split(' ').filter(Boolean)
    words.forEach((word, wi) => {
      allWords.push({
        word,
        className: seg.className || '',
        isLastInSegment: wi === words.length - 1,
      })
    })
  })

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${containerClassName}`}
    >
      {allWords.map((item, i) => (
        <span
          key={i}
          style={{ overflow: 'hidden', display: 'inline-block' }}
          className={item.className}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item.word}
          </motion.span>
          {!(i === allWords.length - 1) && (
            <span style={{ display: 'inline-block' }}>&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  )
}
