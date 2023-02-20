import React from 'react'
import Button from '@/components/reusables/Button'

function Hero() {
  return (
    <main className='w-full h-screen lg:h-full text-white'>
    <section className='max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full p-5'>
        {/* Text Section */}
        <section className='text-center py-5'>
          <h1 className='text-3xl lg:text-6xl py-3'>The Concepts of Code - Written for Dummies.</h1>
          <p className='text-xl lg:text-2xl py-3 text-gray-300 lg:w-[80%] mx-auto'>Codebasics provides you with the 'training wheels' you need to ride smoothly across your journey in programming.</p>
          <Button link={`courses`} text={'Get Started'}/>
        </section>
        <img src="https://dbanks.design/static/e7effcb4288d7927346bec273a451e58/9f75f/jsx.png" alt="hero" />
    </section>
    <section className='max-w-[1240px] mx-auto'>

    </section>
</main>
  )
}

export default Hero