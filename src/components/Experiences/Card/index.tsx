import React from 'react';
import { motion } from 'framer-motion';
import { useConfiguration } from '@/store/modules';
import classNames from 'classnames';
import translate from '@translate';
type Props = {};

export default function ExperienceCard({}: Props) {
  const isDayMode = useConfiguration((state) => state.mode === 'day');
  const translateState = useConfiguration((state) => state.translate);

  return (
    <article
      className={classNames(
        ' flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] select-none snap-center p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden',
        {
          'bg-night-mode-card': !isDayMode,
          'bg-day-mode-card': isDayMode,
        },
      )}
    >
      {translate[translateState].experience.companies.map((e) => (
        <>
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src={e.src}
          />
          <div className="px-0 md:px-10 overflow-y-auto" key={e.companyName}>
            <h4 className="text-4xl font-light">{e.role}</h4>
            <p className="font-bold text-2xl mt-1">{e.companyName}</p>

            <div className="flex space-x-2 my-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                alt="tech-1"
              />
              <img
                className="h-10 w-10 rounded-full"
                src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                alt="tech-1"
              />
              <img
                className="h-10 w-10 rounded-full"
                src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                alt="tech-1"
              />
            </div>

            <p className="uppercase py-5">{e.start}</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
              {e.atributes.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </>
      ))}
    </article>
  );
}
