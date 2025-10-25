import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div>
      {/* Fixed background video */}
      <div className='w-screen h-screen fixed top-0 left-0 z-0'> 
        <Video className="w-full h-full" />
      </div>
      
      {/* Scrollable content on top */}
      <div className='relative min-h-screen w-full z-10'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home