import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    'font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-night-mode-yellow text-black hover:bg-day-mode-yellow',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline:
      'border border-night-mode-yellow text-night-mode-yellow hover:bg-night-mode-yellow hover:text-black',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      className={classNames(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
