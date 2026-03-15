import React, { useState } from 'react'
import SectionTitle from './SectionTitle';
import journeyData from '@/public/data/journey.json';

const Journey = () => {
  const [activeYear, setActiveYear] = useState(journeyData[0].id);

  const handleYearClick = (id: string) => {
    setActiveYear(id);
  }

  const activeData = journeyData.find(data => data.id === activeYear);

  return (
    <section id='journey' className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
      <SectionTitle title='Company Journey' />
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          {journeyData.map((data) => (
            <li 
              key={data.id}
              onClick={() => handleYearClick(data.id)} 
              className={`border-l-2 text-textDark bg-transparent hover:bg-red-200 py-3 text-sm cursor-pointer duration-300 px-8 font-medium ${activeYear === data.id ? 'border-l-black active' : 'border-l-gray-300'}`}
            >
              {data.year}
            </li>
          ))}
        </ul>
        
        {activeData && (
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex-1">
            <h3 className='flex gap-1 font-bold text-2xl font-bodyFont text-blue-900 mb-4'>{activeData.title}</h3>
            {activeData.paragraphs.map((para, index) => (
              <p key={index} className={`text-gray-700 leading-relaxed ${index === activeData.paragraphs.length - 1 && !activeData.highlight ? '' : 'mb-4'}`}>
                {para}
              </p>
            ))}
            {activeData.highlight && (
              <p className='text-blue-600 font-medium'>
                {activeData.highlight}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Journey