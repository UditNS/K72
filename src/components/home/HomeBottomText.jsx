import React from 'react'
import { Link } from 'react-router'
const HomeBottomText = () => {
  return (
    <div className='font-[lausanne-500] text-[6vw] mb-3 text-white/95 flex items-center justify-center uppercase gap-10'>
      <div className='border-[3px] rounded-full leading-[4vw] pt-5 px-7 hover:text-lime-300 duration-100'>
        <Link to='/projects'>Projets</Link>
      </div>
      <div className='border-[3px] rounded-full leading-[4vw] pt-5 px-7 hover:text-lime-300 duration-100'>
        <Link to='/agence'>Agence</Link>
      </div>

    </div>
  )
}

export default HomeBottomText