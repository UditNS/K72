import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
const Home = () => {
  return (
    <div>
      {/* This component is fixed even when i scroll */}
      <div className='w-screen min-h-screen fixed'> 
          <Video />
      </div>
      {/* This component sits on top of the video component and its scrollable while the video is fixed */}
      <div className='relative min-h-screen w-full'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
    
  )
}

export default Home