import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false
}: Readonly<ButtonProps>) {
  // Définir les styles de base pour chaque variante
  const baseStyles =
    'px-6 py-3 w-full rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = (() => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
      case 'secondary':
        return 'bg-white text-gray-800 hover:bg-gray-300 focus:ring-gray-400';
      case 'outline':
        return 'border border-gray-600 text-gray-600 hover:bg-gray-100 focus:ring-gray-500';
      default:
        return '';
    }
  })();

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${
        disabled ? disabledStyles : ''
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
