import React from 'react';
import { ArrowLeft } from 'lucide-react';
import ReadingProgress from './ReadingProgress';
import { cn } from '../../utils/classNames';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  onBack: () => void;
}

const BlogPost = ({ title, date, content, onBack }: BlogPostProps) => {
  return (
    <article className="py-16 bg-white dark:bg-gray-800">
      <ReadingProgress />
      <div className="container mx-auto px-4 max-w-3xl">
        <button
          onClick={onBack}
          className={cn(
            "flex items-center mb-8 group",
            "text-blue-600 hover:text-blue-700",
            "dark:text-blue-400 dark:hover:text-blue-300"
          )}
        >
          <ArrowLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </button>
        <h1 className="text-4xl font-bold mb-4 dark:text-white">{title}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">{date}</p>
        <div className="prose dark:prose-invert max-w-none">
          {content.split('\n').map((paragraph, index) => (
            <p key={index} className={cn(
              "mb-4 leading-relaxed",
              "text-gray-600 dark:text-gray-300"
            )}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};
export default BlogPost;