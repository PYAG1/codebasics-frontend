import Link from 'next/link'
import React from 'react'

function CourseCard({title,link,img}) {
  return (
    <Link href={`/courses/${link}`}>
      <main className='bg-[#eca72c] rounded flex items-center justify-between'>
          <img src={img} alt={title} className='w-[45%] h-[300px]'/>
          <div className='w-[50%]'>
            <p className='text-2xl uppercase tracking-widest text-center'>{title}</p>
          </div>
      </main>
    </Link>
  )
}

export default CourseCard