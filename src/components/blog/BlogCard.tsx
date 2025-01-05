import React from 'react';
import { BookOpen } from 'lucide-react';
import Card from '../common/Card';
import { cn } from '../../utils/classNames';

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  onReadMore: () => void;
}

const BlogCard = ({ title, date, excerpt, readTime, onReadMore }: BlogCardProps) => {
  return (
    <Card title={title} icon={BookOpen} className="h-full flex flex-col">
      <div className="flex-1">
        <span className={cn(
          "text-sm mb-4 block",
          "text-gray-500 dark:text-gray-400"
        )}>{date}</span>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">{readTime}</span>
        <button
          onClick={onReadMore}
          className={cn(
            "text-blue-600 hover:text-blue-700",
            "dark:text-blue-400 dark:hover:text-blue-300",
            "font-medium group flex items-center"
          )}
        >
          Read More
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </Card>
  );
};
export default BlogCard;