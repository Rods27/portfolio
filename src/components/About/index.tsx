import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../../../public/about.jpg';
import Image from 'next/image';
import { useConfiguration } from '@/store/modules';
import translate from '@translate';

type Props = {};

export default function About({}: Props) {
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
    items-center"
    >
      <h3 className="absolute top-24 text-center uppercase tracking-[20px] text-2xl">
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
            min-w-56
            min-h-56
            rounded-full
            object-cover
          "
            src={aboutImg}
            alt={'about-img'}
          />
        </motion.div>
      </motion.div>

      <div className="space-y-10 px-0 md:px-10 w-[70%]">
        <h4 className="text-4xl font-semibold">
          {about.title}{' '}
          <span className="underline decoration-[#f7AB0A]">{about.underlineTitle}</span>{' '}
          {about.secondtitle}
        </h4>
        <p className="text-base whitespace-pre-line">{about.about}</p>
      </div>
    </div>
  );
}
