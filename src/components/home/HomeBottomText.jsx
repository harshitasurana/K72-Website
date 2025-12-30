import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (

      <div className='font-[font-2] flex items-center justify-center gap-8'>
        <div className='lg-h-30  hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase border-5 border-white rounded-full flex items-center px-10 '>
        <Link to='/projects'  className='text-[6.5vw] '>Projects</Link>
        </div>
        <div className='lg-h-30 hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase border-5 border-white rounded-full flex items-center px-10 '>

        <Link to='/agence' className='text-[6.5vw] '>Agency</Link>
        </div>
      </div>
    
  )
}

export default HomeBottomText