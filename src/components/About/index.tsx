import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../../../public/about.jpg';
import Image from 'next/image';
import { useConfiguration } from '@/store/modules';
import translate from '@translate';

export default function About() {
  const translateState = useConfiguration((state) => state.translate);
  const { about } = translate[translateState];

  return (
    <div
      className="
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
    items-center
    md:min-height
    mobileMd:justify-center
    mobileMd:grid
    mobileMd:grid-rows-[10%,25%,65%]
    mobileSm:grid-rows-[8%,22%,70%]
    mobileMd:items-center
    mobileMd:place-items-center
    mobileMd:px-4
    mobileSm:items-center
    mobileSm:place-items-center
    mobileSm:px-4
    "
    >
      <h3
        className="absolute
        top-24
        text-center
        uppercase
        tracking-[20px]
        text-2xl
        height-850:top-8
        mobileMd:top-12
        mobileMd:relative
        mobileMd:text-xl
        mobileMd:tracking-[15px]
        mobileSm:top-[3%]
        mobileSm:text-lg
        mobileSm:tracking-[10px]
      "
      >
        {about.pageTitle}
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Image
            className="
            -mb-20
            md:mb-0
            md:rounded-lg
            md:w-64
            md:h-96
            xl:min-w-[400px]
            xl:min-h-[500px]
            flex-shrink-0
            rounded-full
            object-cover
            w-56
            h-56
            mobileMd:w-[150px]
            mobileMd:h-[150px]
            mobileSm:w-[120px]
            mobileSm:h-[120px]
          "
            src={aboutImg}
            alt={'about-img'}
          />
        </motion.div>
      </motion.div>

      <div
        className="space-y-10 px-0 md:px-10 w-[70%]
        mobileMd:space-y-3
        mobileMd:w-[85%]
        mobileMd:h-[85%]
        mobileMd:p-[8px]
        mobileMd:flex
        mobileMd:flex-col
        mobileSm:space-y-2
        mobileSm:w-[90%]
        mobileSm:h-[80%]
        mobileSm:p-[4px]
        mobileSm:flex
        mobileSm:flex-col"
      >
        <h4 className="text-4xl font-semibold mobileMd:text-xl mobileSm:text-lg">
          {about.title}{' '}
          <span className="underline decoration-[#f7AB0A]">{about.underlineTitle}</span>{' '}
          {about.secondtitle}
        </h4>
        <p className="text-base whitespace-pre-line mobileMd:overflow-scroll mobileMd:h-[100%] mobileMd:px-2 mobileMd:text-sm mobileSm:overflow-scroll mobileSm:h-[100%] mobileSm:px-1 mobileSm:text-xs scrollbar">
          {about.about}
        </p>
      </div>
    </div>
  );
}
