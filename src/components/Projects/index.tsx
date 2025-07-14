import React from 'react';
import { motion } from 'framer-motion';
import { useConfiguration } from '@/store/modules';
import translate from '@translate';
import projectsImg from '@/helpers/projects';
import classNames from 'classnames';

export default function Projects() {
  const { translate: translateState } = useConfiguration();
  const isNightMode = useConfiguration((state) => state.mode === 'night');

  const {
    projects: { projects, title },
  } = translate[translateState];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left 
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">{title}</h3>

      <div
        className={classNames(
          'relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20',
          {
            'scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-night-mode-yellow/80':
              isNightMode,
            'scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-day-mode-yellow/80':
              !isNightMode,
          },
        )}
      >
        {projects.map((p) => (
          <div
            key={p.title}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center
            space-y-5items-centerjustify-center p-20 md:p-44 h-[99vh]"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={`${projectsImg[p.src as keyof typeof projectsImg]?.src}`}
              alt={p.title}
              className="lg:w-[800px]"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-day-mode-yellow/50">{p.title}</span>
              </h4>
              <p className="text-lg text-center md:text-left">{p.info}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-full absolute top-[30%] bg-day-mode-yellow/10 left-0
        h-[500px] -skew-y-12"
      />
    </motion.div>
  );
}
