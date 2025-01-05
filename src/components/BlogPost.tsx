import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  onBack: () => void;
}

const BlogPost = ({ title, date, content, onBack }: BlogPostProps) => {
  return (
    <article className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </button>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-500 mb-8">{date}</p>
        <div className="prose max-w-none">
          {content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;