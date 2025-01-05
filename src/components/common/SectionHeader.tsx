import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2 text-black dark:text-white">{title}</h2>
      {subtitle && (
        <p className="text-blue-600 dark:text-blue-400">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionHeader;
