import Link from 'next/link'
import React from 'react'

function Button({link,text}) {
  return (
    <Link href={link}>
        <button className='px-4 py-2 bg-[#eca72c] hover:scale-105 ease duration-500 text-[#241023] hover:text-white'>
            <p className=''>{text}</p>
        </button>
    </Link>
  )
}

export default Button