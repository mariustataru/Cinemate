import React, { useEffect } from 'react'
import heart from '../assets/heart.jpg'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
export const PageNotFound = () => {

  useEffect(() => {
    document.title = `page not found / Cinemate `
  })
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl font-bold text-gray-700 my-10 dark:text-white'>404, Oops!</p>
          <div className='max-w-lg'>
            <img className='rounded ' src={heart} alt="page not found"/>
          </div>

        </div>

        <div className='flex justify-center my-4'>
          <Link to="/">
              <Button>Back to Cinemate</Button>
          </Link>  
        </div>
      </section>
    </main>
  )
}
