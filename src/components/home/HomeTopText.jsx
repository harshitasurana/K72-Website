import React from 'react'
import Video from './Video'

const HomeTopText = () => {
    return (
        <div className='pt-5 text-center '>
            <div className='text-[9vw] flex items-center justify-center uppercase leading-[8vw] font-[font2]'>
                The spark for
            </div>
            <div className='text-[9vw] flex items-center justify-center uppercase leading-[8vw] font-[font2]'>
                all
                <div className='h-[9vw] w-[16vw] rounded-full overflow-hidden -mt-5 '>
                    <Video /></div>things
            </div>
            <div className='text-[9vw] flex items-center justify-center uppercase leading-[8vw] font-[font2]'>
                creative
            </div>

        </div>
    )
}

export default HomeTopText
