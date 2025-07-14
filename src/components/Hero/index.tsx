import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Photo from '../../../public/photo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import translate from '@translate';
import { useConfiguration } from '@/store/modules';
import classNames from 'classnames';

export default function Hero() {
  const translateState = useConfiguration((state) => state.translate);
  const isDayMode = useConfiguration((state) => state.mode === 'day');

  const {
    hero: { sections },
  } = translate[translateState];

  const [text, _count] = useTypewriter({
    words: sections.words,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={Photo}
        alt="Profile picture"
        className={classNames('relative rounded-full h-32 w-32 mx-auto object-cover select-none', {
          'border border-night-mode-yellow': !isDayMode,
          'border border-day-mode-yellow': isDayMode,
        })}
      />
      <div className="z-20">
        <h2 className="text-sm pb-2 tracking-[15px] uppercase">{sections.title}</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 select-none">{text}</span>
          <Cursor cursorColor={isDayMode ? '#CA8C05' : '#F7AB0A'} />
        </h1>

        <div className="flex justify-center pt-5 gap-2">
          <Link href="#about">
            <button className="heroButton">{sections.about}</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">{sections.experience}</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">{sections.skills}</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">{sections.project}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
