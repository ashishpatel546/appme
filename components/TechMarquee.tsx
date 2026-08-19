import React from 'react'

const stack = [
  'AWS',
  'Kubernetes',
  'Terraform',
  'Next.js',
  'React',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Docker',
  'TensorFlow',
  'Spark',
  'Azure',
  'GitHub Actions',
  'Redis',
]

/**
 * A quiet band of the tooling we actually work in. Text only — no borrowed logos.
 */
const TechMarquee = () => {
  return (
    <section className="border-y border-ink/[0.07] bg-white py-8" aria-label="Technologies we work with">
      <p className="container-x mb-6 font-mono text-[10.5px] uppercase tracking-[0.24em] text-ink/60">
        Built with
      </p>

      <div className="mask-fade-x overflow-hidden">
        <ul className="flex w-max animate-marquee items-center gap-10 pr-10 mdl:gap-14 mdl:pr-14">
          {[...stack, ...stack].map((tech, i) => (
            <li
              key={`${tech}-${i}`}
              aria-hidden={i >= stack.length}
              className="whitespace-nowrap font-display text-lg font-semibold text-ink/60 transition-colors duration-300 hover:text-brand-blue mdl:text-2xl"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TechMarquee
