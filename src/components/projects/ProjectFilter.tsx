import React from 'react';
import Badge from '../common/Badge';

interface ProjectFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const ProjectFilter = ({ categories, selected, onSelect }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full transition-colors ${
            selected === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilter;
