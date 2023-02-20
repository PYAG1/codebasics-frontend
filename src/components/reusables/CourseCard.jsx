import Link from 'next/link'
import React from 'react'

function CourseCard({title,link}) {
  return (
    <Link href={`/courses/${link}`}>
      <main className='bg-[#eca72c] p-5 rounded'>
          <p className='text-2xl uppercase tracking-widest text-center'>{title}</p>
      </main>
    </Link>
  )
}

export default CourseCard