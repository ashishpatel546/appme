interface Props{
    title: string;
    isMain?: boolean;
}

const SectionTitle = ({title, isMain = false}:Props) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
        {isMain ? (
          <h1 className='font-bodyFont text-4xl font-extrabold text-blue-900 tracking-wide text-center relative inline-block'>
              {title}
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-textGreen rounded-full"></span>
          </h1>
        ) : (
          <h2 className='font-bodyFont text-4xl font-extrabold text-blue-900 tracking-wide text-center relative inline-block'>
              {title}
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-textGreen rounded-full"></span>
          </h2>
        )}
    </div>
  )
}

export default SectionTitle