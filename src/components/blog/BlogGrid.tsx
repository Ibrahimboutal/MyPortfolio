import React from 'react';
import blogPost from "../../types/blog";
import BlogCard from './BlogCard';
import EmptyState from '../common/EmptyState';

interface BlogGridProps {
  posts: blogPost[];
  onPostSelect: (id: string) => void;
}

const BlogGrid = ({ posts, onPostSelect }: BlogGridProps) => {
  if (posts.length === 0) {
    return (
      <EmptyState 
        message="No blog posts found matching your search."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          {...post}
          onReadMore={() => onPostSelect(post.id)}
        />
      ))}
    </div>
  );
};

export default BlogGrid;