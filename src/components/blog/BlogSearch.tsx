import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '../../utils/classNames';

interface BlogSearchProps {
  value: string;
  onSearch: (query: string) => void;
}

const BlogSearch = ({ value, onSearch }: BlogSearchProps) => {
  return (
    <div className="relative mb-8">
      <input
        type="text"
        value={value}
        placeholder="Search blog posts..."
        onChange={(e) => onSearch(e.target.value)}
        className={cn(
          "w-full p-3 pl-10 rounded-lg",
          "border border-gray-300 dark:border-gray-700",
          "bg-white dark:bg-gray-800",
          "focus:ring-2 focus:ring-blue-500"
        )}
      />
      <Search className="absolute left-3 top-3 text-gray-400" size={20} />
    </div>
  );
};
export default BlogSearch;