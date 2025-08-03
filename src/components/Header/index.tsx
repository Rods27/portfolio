import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { useConfiguration } from 'src/store/modules';
import classNamesLib from 'classnames';
import brImage from '../../../public/br.jpg';
import usImage from '../../../public/us.jpg';
import dayMode from '../../../public/day-mode.png';
import nightMode from '../../../public/night-mode.png';
import Image from 'next/image';
import translate from '@translate';
import Link from 'next/link';

function Header() {
  const setTranslate = useConfiguration((state) => state.setTranslate);
  const translateState = useConfiguration((state) => state.translate);
  const isEnglish = useConfiguration((state) => state.translate === 'us');
  const setMode = useConfiguration((state) => state.setMode);
  const mode = useConfiguration((state) => state.mode);
  const isDayMode = mode === 'day';

  const isMobile = typeof window !== 'undefined' && window?.innerWidth < 600;
  const mobileStyle = isMobile ? 45 : 50;

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          target="_blank"
          url="https://github.com/Rods27"
          fgColor={isDayMode ? 'black' : '#fff'}
          bgColor="transparent"
          style={{ width: `${mobileStyle}px`, height: `${mobileStyle}px` }}
        />
        <SocialIcon
          target="_blank"
          url="https://www.linkedin.com/in/rodrigoleite27/"
          fgColor={isDayMode ? 'black' : '#fff'}
          bgColor="transparent"
          style={{ width: `${mobileStyle}px`, height: `${mobileStyle}px` }}
        />
        <motion.div
          onClick={setTranslate}
          className={classNamesLib(
            'w-[55px] h-[30px] pl-[5px] pr-[5px] pt-[2px] mt-[3px] rounded-[100px] flex items-centercursor-pointer select-none transition duration-300 cursor-pointer mobileMd:w-[45px] mobileMd:h-[25px]',
            {
              'bg-[#C5C6D0]': isDayMode,
              'bg-night-mode-text': !isDayMode,
            },
          )}
        >
          <Image
            src={isEnglish ? usImage : brImage}
            style={{ border: '0.5px solid rgba(0, 0, 0, .1)' }}
            alt="translate-country"
            className={classNamesLib(
              'w-[25px] h-[25px] rounded-[300px] bg-night-mode-background relative transition duration-300 mobileMd:w-[20px] mobileMd:h-[20px]',
              {
                'translate-x-0': isEnglish,
                'translate-x-5 mobileMd:translate-x-4': !isEnglish,
              },
            )}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center cursor cursor-pointer"
      >
        <Image
          src={isDayMode ? nightMode : dayMode}
          alt="translate-country"
          className={'w-[30px] h-[30px] mobileSm:w-[25px] mobileSm:h-[25px]'}
          onClick={() => setMode()}
        />
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor={isDayMode ? 'black' : '#fff'}
          bgColor="transparent"
          href="www.google.com.br"
          style={{ width: `${mobileStyle}px`, height: `${mobileStyle}px` }}
        />
        <Link href="#contact">
          <p
            className={classNamesLib('uppercase hidden md:inline-flex text-sm select-none', {
              'text-day-mode-text': isDayMode,
              'text-night-mode-text': !isDayMode,
            })}
          >
            {translate[translateState].header.contact}
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
