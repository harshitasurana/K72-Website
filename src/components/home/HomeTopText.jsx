import React from 'react'
import Video from './Video'

const HomeTopText = () => {
    return (
        <div className='pt-25 text-center '>
            <div className='text-[9vw] flex items-center justify-center uppercase leading-[8vw] font-[font2]'>
                The spark for
            </div>
            <div className='text-[9vw] flex items-center justify-center uppercase leading-[8vw] font-[font2]'>
                all&nbsp;
                <div className='h-[9vw] w-[16vw] rounded-full overflow-hidden -mt-5 '>
                    <Video /></div>&nbsp;things
            </div>
            <div className='text-[9vw] flex items-center justify-center uppercase leading-[8vw] font-[font2]'>
                creative
            </div>

        </div>
    )
}

export default HomeTopText
