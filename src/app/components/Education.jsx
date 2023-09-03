'use client'

import React, { useRef } from 'react'

import {motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info}) =>{

    const ref = useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-spacebetween '>

        <LiIcon reference={ref}/>
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            viewport={{once:true}}
        >
            <h3 className='capitalize font-bold text-2xl md:text-xl xs:text-[16px] text-dark dark:text-light'>{type}</h3>
            <span className='capilize md:text-[15px] xs:text-[12px] font-medium text-dark/75 dark:text-light/75'>
                {time} | {place}
            </span>
            <p className='font-medium md:text-[15px] xs:text-[12px] w-full text-dark dark:text-light'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["start end", "center start"]
    })

  return (
    <div className=' '>
     

      <div ref={ref} className='w-[75%] sm:w-[85%] xs:w-[90%] xls:w-full mx-auto relative'>

        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark'/>

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details 
             type="SSC and HSC" 
             time="2013-2020" place="New English School/JR college, Jamner"
             info="In this time period I am Taking my primary education in year 2013 I am in 5th standard."
            />
            <Details 
             type="Bachelor of Computer Aplication" 
             time="2022-Ongoing" place="GDM'A.KRN'C And MD'S College, Jamner"
             info="This is my under graduation degree period."
            />
            <Details 
             type="Online Course" 
             time="2021-2022" place="YouTube"
             info="Completed the ReactJS + NextJS 13 course through YouTube free cources from different channels."
            />
            
        </ul>
      </div>
    </div>
  )
}

export default Education
