import React from 'react'
import Video from '../components/home/Video'
import HomeTopText from '../components/home/HomeTopText'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeBetweenText from '../components/home/HomeBetweenText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed '>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 flex flex-col justify-between'>
        <HomeTopText />
        <HomeBetweenText />
        <HomeBottomText />

      </div>
    </div>
  )
}

export default Home
