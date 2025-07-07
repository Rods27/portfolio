import { useConfiguration } from '@/store/modules';
import translate from '@translate';
import { motion } from 'framer-motion';
import React from 'react';
import SkillItem from './SkillItem';
import images from '@/helpers/images';

function Skills() {
  const translateState = useConfiguration((s) => s.translate);
  const { skills } = translate[translateState];

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
        {skills.title}
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-sm ">{skills.info}</h3>
      <div className="grid grid-cols-5 gap-7 lg:grid-cols-6 xl:grid-cols-7 min-w-[600px]">
        {skills.stacks.map((s) => (
          <SkillItem
            key={s.skill}
            skillInfo={{ skill: s.skill, proficiency: s.proficiency }}
            src={images[s.skill as keyof typeof images]}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
