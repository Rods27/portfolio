import React from 'react';
import ExperienceCard from './Card';
import { motion } from 'framer-motion';
import { useConfiguration } from '@/store/modules';
import translate from '@translate';

type Props = {};

const WorkExperience = (props: Props) => {
  const translateState = useConfiguration((state) => state.translate);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
      h-screen
      flex
      flex-col
      relative
      overflow-hidden
      text-left
      md:flex-row
      max-w-full
      px-10
      justify-evenly
      mx-auto
      items-center
    "
    >
      <h3 className="absolute top-24 text-center uppercase tracking-[20px] text-2xl z-50 min mb-5">
        {translate[translateState].experience.title}
      </h3>
      <div className="w-full flex space-x-5 overflow-x-auto p-10 snap-x snap-mandatory [@media(max-height:1200px)]:h-[80%]">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
