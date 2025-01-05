import React from 'react';

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge = ({ text, className = '' }: BadgeProps) => {
  return (
    <span className={`px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm ${className}`}>
      {text}
    </span>
  );
};

export default Badge;