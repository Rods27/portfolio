import React from 'react'
import { motion } from 'framer-motion'
import aboutImg from '../../public/about.jpg' 
import Image from 'next/image'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='
    flex
    flex-col
    relative
    h-screen
    text-center
    md:text-left
    md:flex-row
    max-w-7xl
    px-10
    justify-evenly
    mx-auto
    items-center'
    >
      <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image className='
          -mb-20
          md:mb-0
          md:rounded-lg
          md:w-64
          md:h-96
          xl:w-[400px]
          xl:h-[500px]
          flex-shrink-0
          w-56
          h-56
          rounded-full
          object-cover
        '
          src={aboutImg}
          alt={'about-img'}
        />
      </motion.div>

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className="text-4xl font-semibold">
          Here is a
          {" "}
          <span className='underline decoration-[#f7AB0A]'>little</span>
          {" "}
          background
        </h4>
        <p className='text-base'>

        </p>
      </div>
    </div>
  )
}