import React from 'react';
import { motion } from 'framer-motion';
import { useConfiguration } from '@/store/modules';
import classNames from 'classnames';

type Props = {};

export default function BackgroundCircles({}: Props) {
  const isDayMode = useConfiguration((state) => state.mode === 'day');

  const background = {
    'border border-day-mode-background-circles': isDayMode,
    'border border-night-mode-background-circles': !isDayMode,
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ['20%', '20%', '50%', '80%', '200%'],
      }}
      transition={{ duration: 1 }}
      className="relative flex justify-center items-center"
    >
      <div
        className={classNames('absolute  rounded-full h-[200px] w-[200px] mt-52 animate-ping', {
          ...background,
        })}
      />
      <div
        className={classNames('absolute  rounded-full h-[300px] w-[300px] mt-52', {
          ...background,
        })}
      />
      <div className={classNames('absolute rounded-full  h-[500px] w-[500px] mt-52', background)} />
      <div
        className={classNames(
          'absolute border rounded-full border-[#F7AB0A] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse',
          {
            'border border-day-mode-yellow': isDayMode,
            'border border-night-mode-yellow': !isDayMode,
          },
        )}
      />
      <div className={classNames('absolute rounded-full  h-[800px] w-[800px] mt-52', background)} />
    </motion.div>
  );
}
