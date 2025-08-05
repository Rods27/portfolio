import classNames from 'classnames';

// Classes base para containers
export const containerClasses = {
  base: 'flex flex-col relative',
  centered: 'justify-center items-center',
  fullScreen: 'h-screen min-h-screen',
  responsive: 'mobileMd:justify-center mobileSm:justify-center',
};

// Classes para títulos
export const titleClasses = {
  base: 'absolute text-center uppercase tracking-[20px] text-2xl',
  mobile: 'mobileMd:text-xl mobileMd:tracking-[15px] mobileSm:text-lg mobileSm:tracking-[10px]',
  positions: {
    top24: 'top-24',
    top20: 'top-20',
    top16: 'top-16',
  },
};

// Classes para imagens
export const imageClasses = {
  base: 'rounded-full object-cover filter transition duration-300 ease-in-out',
  sizes: {
    small: 'w-16 h-16',
    medium: 'w-24 h-24 md:w-28 md:h-28',
    large: 'w-32 h-32 xl:w-40 xl:h-40',
  },
  mobile: {
    small: 'mobileMd:w-12 mobileMd:h-12 mobileSm:w-10 mobileSm:h-10',
    medium: 'mobileMd:w-16 mobileMd:h-16 mobileSm:w-14 mobileSm:h-14',
    large: 'mobileMd:w-20 mobileMd:h-20 mobileSm:w-18 mobileSm:h-18',
  },
};

// Classes para cards
export const cardClasses = {
  base: 'flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 select-none snap-center p-10',
  mobile: 'mobileMd:space-y-5 mobileMd:p-5 mobileSm:space-y-3 mobileSm:p-3',
  hover: 'hover:opacity-100 opacity-40 transition-opacity duration-200',
};

// Classes para scroll
export const scrollClasses = {
  base: 'overflow-x-scroll overflow-y-hidden',
  custom: 'scrollbar scrollbar-track-gray-400/20',
  day: 'scrollbar-thumb-day-mode-yellow/80',
  night: 'scrollbar-thumb-night-mode-yellow/80',
};

// Função utilitária para combinar classes
export const combineClasses = (...classes: (string | object | undefined)[]) => {
  return classNames(...classes);
};

// Função para classes responsivas
export const responsiveClasses = {
  text: {
    xs: 'text-xs mobileMd:text-xs mobileSm:text-xs',
    sm: 'text-sm mobileMd:text-sm mobileSm:text-xs',
    base: 'text-base mobileMd:text-sm mobileSm:text-xs',
    lg: 'text-lg mobileMd:text-base mobileSm:text-sm',
    xl: 'text-xl mobileMd:text-lg mobileSm:text-base',
    '2xl': 'text-2xl mobileMd:text-xl mobileSm:text-lg',
    '3xl': 'text-3xl mobileMd:text-2xl mobileSm:text-xl',
    '4xl': 'text-4xl mobileMd:text-3xl mobileSm:text-2xl',
  },
  spacing: {
    xs: 'space-y-1 mobileMd:space-y-1 mobileSm:space-y-1',
    sm: 'space-y-2 mobileMd:space-y-2 mobileSm:space-y-1',
    base: 'space-y-4 mobileMd:space-y-3 mobileSm:space-y-2',
    lg: 'space-y-6 mobileMd:space-y-4 mobileSm:space-y-3',
    xl: 'space-y-8 mobileMd:space-y-6 mobileSm:space-y-4',
  },
};
