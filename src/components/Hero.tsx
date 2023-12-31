import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Photo from '../../public/photo.jpg'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
  const [text, _count] = useTypewriter({
    words: [
      "Hi, The Name's Rodrigo",
      'A good team-worker',
      'Coffee.tsx',
      '<Component props={...passion}/>'
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        src={Photo}
        alt="Profile picture"
        className='relative border rounded-full border-[#F7AB0A] h-32 w-32 mx-auto object-cover'
      />
      <div className='z-20'>
        <h2 className='text-sm text-gray-500 pb-2 tracking-[15px] uppercase'>
          Frontend Developer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='red' />
        </h1>

        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Project</button>
          </Link>
        </div>
      </div>
    </div>
  )
}