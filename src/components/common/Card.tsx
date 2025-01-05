import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, icon: Icon, children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${className}`}>
      {Icon && (
        <div className="flex items-center mb-4">
          <Icon className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
          <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
        </div>
      )}
      {!Icon && (
        <h3 className="text-xl font-semibold text-black dark:text-white mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
};

export default Card;
