import React from 'react'
import Video from "./Video"

const HomeHeroText = () => {
  return (
    <div className='font-[lausanne-300] text-white w-full pt-2.5 text-center'>
      <div className='text-[9.5vw] uppercase leading-[8.5vw] flex items-center justify-center'>L'étincelle</div>
      <div className='text-[9.5vw] uppercase leading-[8.5vw] flex items-center justify-center gap-2'>
        qui
        <div className='w-[16vw] h-[7vw] -mt-7 rounded-full overflow-hidden'>
          <Video className="w-full h-full" />
        </div>
        génère
      </div>
      <div className='text-[9.5vw] uppercase leading-[8.5vw] flex items-center justify-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText