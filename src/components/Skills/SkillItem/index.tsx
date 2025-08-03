import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

type Props = {
  directionLeft?: boolean;
  src: StaticImageData;
  skillInfo: {
    skill: string;
    proficiency: number;
  };
};

export default function SkillItem({ directionLeft, src, skillInfo }: Props) {
  return (
    <div className="group relative flex cursor-pointer justify-center items-center">
      <motion.img
        initial={
          typeof window !== 'undefined' && window.innerWidth > 768
            ? {
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }
            : {}
        }
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={src?.src}
        className="
        rounded-full
        bg-night-mode-text
        border
        border-gray-500
        object-cover
        w-24
        h-24
        md:w-28
        md:h-28
        xl:w-32
        xl:h-32
        filter
        group-hover:grayscale
        transition
        duration-300
        ease-in-out
        caret-transparent
        mobileMd:w-14
        mobileMd:h-14
        mobileSm:w-12
        mobileSm:h-12
        "
      />

      <div className="absolute w-[100%] text-center text-nowrap flex justify-center">
        <p
          className="relative
          top-[-85px]
          text-3xl
          font-bold
          opacity-0
          group-hover:opacity-90
          transition
          duration-300
          ease-in-out
          capitalize
          mobileMd:text-xl
          mobileMd:top-[-45px]
          mobileSm:text-lg
          mobileSm:top-[-35px]
        "
        >
          {skillInfo.skill}
        </p>
      </div>
      <div
        className="
        absolute
        opacity-0
        group-hover:opacity-80
        transition
        duration-300
        ease-in-out
      group-hover:bg-white
        h-24
        w-24
        md:w-28
        md:h-28
        xl:w-32
        xl:h-32
        rounded-full
        z-0
        mobileMd:w-14
        mobileMd:h-14
        mobileSm:w-12
        mobileSm:h-12
        flex
        justify-center
        items-center
        "
      >
        <div className="flex items-center flex-col justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100 mobileMd:text-xl mobileSm:text-base ">
            {skillInfo.proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
}
