import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

interface Props {
  title: string
  des: string
  link: string
  image: string
  index?: number
}

const accents = [
  { chip: 'bg-brand-blue/10 text-brand-blue', hover: 'group-hover:text-brand-blue', bar: 'bg-brand-blue' },
  {
    chip: 'bg-brand-green/10 text-brand-green-dark',
    hover: 'group-hover:text-brand-green-dark',
    bar: 'bg-brand-green',
  },
  {
    chip: 'bg-brand-saffron/10 text-brand-saffron-dark',
    hover: 'group-hover:text-brand-saffron-dark',
    bar: 'bg-brand-saffron',
  },
]

const ServiceCard = ({ title, des, link, image, index = 0 }: Props) => {
  const a = accents[index % accents.length]
  const isExternal = link && link !== '#'

  const inner = (
    <article className="card card-stripe group flex h-full flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-900 ease-out-expo group-hover:scale-[1.08]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"
          aria-hidden="true"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] backdrop-blur ${a.chip}`}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 mdl:p-7">
        <h3
          className={`font-display text-xl font-bold text-ink transition-colors duration-300 ${a.hover}`}
        >
          {title}
        </h3>
        <span className={`mt-3 block h-[3px] w-10 rounded-full ${a.bar}`} />
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/60">{des}</p>

        <span className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-ink/70 transition-colors duration-300 group-hover:text-brand-blue">
          {isExternal ? 'Read more' : 'Discuss this service'}
          <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  )

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="block h-full">
        {inner}
      </a>
    )
  }

  return (
    <Link href="/contact" className="block h-full">
      {inner}
    </Link>
  )
}

export default ServiceCard
