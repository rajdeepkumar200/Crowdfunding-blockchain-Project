import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'bordered';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default'
}) => {
  const baseStyles = 'bg-white rounded-lg p-6';
  
  const variantStyles = {
    default: 'shadow-md',
    hover: 'shadow-md hover:shadow-lg transition-shadow duration-300',
    bordered: 'border border-gray-200'
  };
  
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;