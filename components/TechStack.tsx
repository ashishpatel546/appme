import React from 'react'

/**
 * The tooling we work in, grouped by the practice that uses it. The three
 * syllables of AppMeSoft are the three practices, in the logo's colours.
 * Text only — no borrowed logos.
 */
const practices = [
  {
    syllable: 'App',
    label: 'Product engineering',
    stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    tile: 'bg-brand-blue/10 text-brand-blue ring-brand-blue/20',
    chip: 'group-hover:border-brand-blue/30 group-hover:text-brand-blue',
  },
  {
    syllable: 'Me',
    label: 'Consulting & DevOps',
    stack: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    tile: 'bg-brand-green/10 text-brand-green-dark ring-brand-green/20',
    chip: 'group-hover:border-brand-green/30 group-hover:text-brand-green-dark',
  },
  {
    syllable: 'Soft',
    label: 'Cloud, data & AI',
    stack: ['AWS', 'Azure', 'Python', 'TensorFlow', 'Spark'],
    tile: 'bg-brand-saffron/10 text-brand-saffron-dark ring-brand-saffron/20',
    chip: 'group-hover:border-brand-saffron/30 group-hover:text-brand-saffron-dark',
  },
]

const TechStack = () => {
  return (
    <section className="border-b border-ink/[0.07] bg-white" aria-labelledby="stack-title">
      <div className="container-x py-10 mdl:py-12">
        <div className="grid gap-8 lgl:grid-cols-[13rem_1fr] lgl:items-center lgl:gap-10">
          <div>
            <h2 id="stack-title" className="font-display text-lg font-bold text-ink">
              What we build with
            </h2>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink/60">
              Our everyday tools, grouped by the part of the name that uses them.
            </p>
          </div>

          <ul className="grid divide-y divide-ink/[0.07] border-y border-ink/[0.07] mdl:grid-cols-3 mdl:divide-x mdl:divide-y-0 mdl:border-y-0">
            {practices.map((p) => (
              <li key={p.syllable} className="group py-5 mdl:px-6 mdl:py-1 mdl:first:pl-0">
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-12 shrink-0 place-items-center rounded-lg font-display text-[14px] font-extrabold ring-1 ${p.tile}`}
                  >
                    {p.syllable}
                  </span>
                  <span className="font-display text-[15px] font-semibold text-ink">{p.label}</span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${p.label} tools`}>
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className={`rounded-md border border-ink/9 px-2.5 py-1 text-[13px] font-medium text-ink/70 transition-colors duration-300 ${p.chip}`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TechStack
