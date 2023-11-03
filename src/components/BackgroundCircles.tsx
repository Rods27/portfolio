import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
       initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, .2, .4, .8, .1, 1],
          borderRadius: ["20%", "20%", "50%", "80%", "200%"]
        }}
        transition={{ duration: 1 }}
        className='relative flex justify-center items-center'
      >
      <div className='absolute border rounded-full border-[#333333] h-[200px] w-[200px] mt-52 animate-ping'/>
      <div className='absolute border rounded-full border-[#333333] h-[300px] w-[300px] mt-52'/>
      <div className='absolute border rounded-full border-[#333333] h-[500px] w-[500px] mt-52'/>
      <div className='absolute border rounded-full border-[#F7AB0A] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse'/>
      <div className='absolute border rounded-full border-[#333333] h-[800px] w-[800px] mt-52'/>
    </motion.div>
  )
}