import { useConfiguration } from '@/store/modules';
import translate from '@translate';
import { motion } from 'framer-motion';
import React from 'react';

function Skills() {
  const translateState = useConfiguration((s) => s.translate);
  return (
    <motion.div
      className="
          h-screen
          flex
          relative
          flex-col
          text-center
          md:text-left
          xl:flex-row
          max-w-[2000px]
          xl:px-10
          min-h-screen
          justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 text-center uppercase tracking-[20px] text-2xl">
        {translate[translateState].skills.title}
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-sm">
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-4"></div>
    </motion.div>
  );
}

export default Skills;
