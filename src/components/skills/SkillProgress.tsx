import React from 'react';

interface SkillProgressProps {
  name: string;
  level: number;
}

const SkillProgress = ({ name, level }: SkillProgressProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-black-700 dark:text-gray-300">{name}</span>
        <span className="text-blue-700 dark:text-white">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillProgress;