import React from 'react';

interface EmptyStateProps {
  message: string;
  className?: string;
}

const EmptyState = ({ message, className = '' }: EmptyStateProps) => (
  <p className={`text-center text-gray-600 dark:text-gray-400 mt-8 ${className}`}>
    {message}
  </p>
);

export default EmptyState;