import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Stairs from '../components/animation/Stairs'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imgArray=['https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991'
    ,'https://k72.ca/images/teamMembers/Michele_640X980.jpg?w=640&h=960&s=145fe77d0a66376d9904f39939ad8891'
    ,
    'https://k72.ca/images/teamMembers/MEL_640X960.jpg?w=640&h=960&s=02d4500d30e576df52f280714e640a02'
    ,
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a'
    ,
    'https://k72.ca/images/teamMembers/MEGGIE_640X980_2.jpg?w=640&h=960&s=7d78cdb1fad347408e05a311cc4018ef',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6'
  ]
  
  

  useGSAP(function(){

    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:'top 25%',
        end:'top -110%',
        pin:true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate:(elem)=>{
          let imgIndex;
          if(elem.progress<1){
            imgIndex =Math.floor(elem.progress*imgArray.length);
          }
          else{
            imgIndex=imgArray.length-1
          }

          imageRef.current.src=imgArray[imgIndex]
          
          
        }
      }
     
    })
  })

  return (
    <div>
      
      <div className='section1 relative py-1'>
      <div ref={imageDivRef} className='h-[20vw] overflow-hidden w-[15vw] top-66 absolute left-[31vw] '>
        <img ref={imageRef} className='h-full w-full object-cover rounded-2xl' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
      <div className='relative font-[font2] text-black'>
        <div className=' mt-[55vh]'>
          <h1 className='text-[19vw] text-center uppercase leading-[17vw]'>SEVEN7Y <br />
            TWO</h1>
        </div>
        <div className='pl-[40%] '>
          <p className='text-6xl '>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We're inquisitive and
            open-minded, and we make sure
            creativity crowds out ego from
            every corner. A brand is a living
            thing, with values, a personality
            and a story. If we ignore that, we
            can achieve short-term success,
            but not influence that goes the
            distance. We bring that
            perspective to every brand story
            we help tell.</p>
        </div>
      </div>
    </div>
    <div className='section2 h-screen'>


    </div>
    </div>
  )
}

export default Agence
