import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import AnimatedParagraph from './AnimatedParagraph'

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 px-4 md:px-6"
      style={{ background: '#000' }}
    >
      <div
        className="max-w-6xl mx-auto rounded-2xl md:rounded-[2rem] p-8 sm:p-12 md:p-16 lg:p-20"
        style={{ background: '#101010' }}
      >
        {/* Label */}
        <p
          className="text-center text-[10px] sm:text-xs mb-8 md:mb-10 tracking-[0.2em] uppercase m-0"
          style={{ color: '#DEDBC8' }}
        >
          AI / ML · Quantum Computing · Full-Stack
        </p>

        {/* Main heading — multi-style pull-up */}
        <div className="text-center mb-10 md:mb-14">
          <div
            className="font-normal leading-[0.95] sm:leading-[0.9] max-w-4xl mx-auto"
            style={{
              fontSize: 'clamp(1.75rem, 4.5vw, 4rem)',
              color: '#E1E0CC',
            }}
          >
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'I am Shashank Kotagi,',
                  className: 'font-normal',
                },
                {
                  text: 'a researcher and builder.',
                  className: 'font-serif italic',
                },
                {
                  text: 'I work at the edge of quantum ML, high-energy physics, and scalable engineering.',
                  className: 'font-normal',
                },
              ]}
              containerClassName="gap-x-[0.22em] leading-[0.95]"
              delay={0}
            />
          </div>
        </div>

        {/* Scroll-linked character opacity paragraph */}
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedParagraph
            text="Over the past two years, I have published research at IEEE conferences on quantum-classical graph neural networks and cardiac digital twins, interned across data engineering and full-stack roles, and led initiatives from IEEE Computational Intelligence Society to the Harvard Aspire Leaders Program — driven by a singular hunger to solve hard problems at scale."
            className="text-xs sm:text-sm md:text-base"
            style={{ color: '#DEDBC8' }}
          />
        </div>
      </div>
    </section>
  )
}
