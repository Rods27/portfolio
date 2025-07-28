import React from 'react';
import { motion } from 'framer-motion';
import { useConfiguration } from '@/store/modules';
import classNames from 'classnames';
import translate from '@translate';
import images from '@/helpers/images';
import Image from 'next/image';

export default function ExperienceCard() {
  const isDayMode = useConfiguration((state) => state.mode === 'day');
  const translateState = useConfiguration((state) => state.translate);

  return (
    <article
      className={classNames(
        'flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] select-none snap-center p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 max-h-[920px]',
        {
          'bg-night-mode-card': !isDayMode,
          'bg-day-mode-card': isDayMode,
        },
      )}
    >
      {translate[translateState].experience.companies.map((e) => (
        <div key={e.companyName} className="flex flex-col h-[100%]">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-28 h-28 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
            src={`${images[e.companyName as keyof typeof images].src}`}
          />
          <div className="px-0 md:px-10 overflow-y-auto capitalize h-[100%]" key={e.companyName}>
            <h4 className="text-4xl font-light">{e.role}</h4>
            <p className="font-bold text-2xl mt-1">{e.companyName}</p>

            <div className="flex space-x-2 my-2 flex-wrap gap-x-2 gap-y-1">
              {e.tecnologies.map((t) => (
                <div
                  key={t}
                  className="h-10 w-10 min-w-10 min-h-10 rounded-full bg-center bg-no-repeat bg-white"
                  title={`${t[0].toUpperCase()}${t.substring(1, t.length)}`}
                  style={{
                    backgroundImage: `url(${images[t as keyof typeof images]?.src})`,
                    backgroundSize: '110%',
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                  }}
                />
              ))}
            </div>

            <p className="uppercase py-5">{e.start}</p>

            <ul className="flex flex-col list-disc space-y-4 ml-5 text-lg">
              {e.atributes.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </article>
  );
}
