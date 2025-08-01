import React from 'react';
import ExperienceCard from './Card';
import { motion } from 'framer-motion';
import { useConfiguration } from '@/store/modules';
import translate from '@translate';
import classNames from 'classnames';

type Props = {};

const WorkExperience = (props: Props) => {
  const translateState = useConfiguration((state) => state.translate);
  const isNightMode = useConfiguration((state) => state.mode === 'night');

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
      min-height
    "
    >
      <h3 className="absolute top-16 text-center uppercase tracking-[20px] text-2xl z-50 w-max height-850:top-8 mb-5 ">
        {translate[translateState].experience.title}
      </h3>
      <div
        className={classNames(
          'w-full flex space-x-5 overflow-x-auto p-10 snap-x snap-mandatory [@media(max-height:1200px)]:h-[80%] justify-center overflow-y-hidden',
          {
            'scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-night-mode-yellow/80':
              isNightMode,
            'scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-day-mode-yellow/80':
              !isNightMode,
          },
        )}
      >
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
