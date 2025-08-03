import React from 'react';
import { motion } from 'framer-motion';
import { useConfiguration } from '@/store/modules';
import translate from '@translate';
import projectsImg from '@/helpers/projects';
import classNames from 'classnames';
import { useScrollContainer } from 'react-indiana-drag-scroll';
import Link from 'next/link';
import favicon from '@/helpers/favicon';

export default function Projects() {
  const { translate: translateState } = useConfiguration();
  const isNightMode = useConfiguration((state) => state.mode === 'night');

  const {
    projects: { projects, title },
  } = translate[translateState];

  const scrollContainer = useScrollContainer();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left 
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0 min-height"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl height-850:top-12 mobileMd:text-xl mobileMd:tracking-[15px] mobileMd:top-20 mobileSm:text-lg mobileSm:tracking-[10px] mobileSm:top-24">
        {title}
      </h3>

      <div
        ref={scrollContainer.ref}
        className={classNames(
          'relative w-full flex overflow-x-scroll overflow-y-hidden z-20 cursor-grab',
          {
            'scrollbar-night': isNightMode,
            'scrollbar-day': !isNightMode,
          },
        )}
      >
        {projects.map((p) => (
          <div
            key={p.title}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center
            space-y-5items-centerjustify-center p-20 md:p-44 h-[99vh] select-none mobileMd:p-10 mobileSm:p-5"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={`${projectsImg[p.src as keyof typeof projectsImg]?.src}`}
              alt={p.title}
              draggable={false}
              className="lg:w-[800px] select-none mobileMd:w-[600px] mobileSm:w-[400px]"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl mb-5 mobileMd:space-y-6 mobileMd:px-5 mobileSm:space-y-4 mobileSm:px-2">
              <h4 className="flex items-center justify-center text-4xl font-semibold text-center mobileMd:text-3xl mobileSm:text-2xl">
                {p.favicon && (
                  <motion.img
                    className="w-8 m-2 mobileMd:w-6 mobileSm:w-5"
                    src={`${favicon[p.favicon as keyof typeof favicon]?.src}`}
                  ></motion.img>
                )}
                <span className="underline decoration-day-mode-yellow/50">{p.title}</span>
              </h4>
              <ul className="flex flex-col gap-2">
                {p.info.map((i) => (
                  <li
                    className="text-lg text-center md:text-left whitespace-pre-line mobileMd:text-base mobileSm:text-sm"
                    key={i}
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <Link className="cursor-pointer font-medium" href={p.link} target="a_blank">
              Link github
            </Link>
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
