import React from 'react';
import BlogGrid from './BlogGrid';
import BlogSearch from './BlogSearch';
import BlogPost from './BlogPost';
import blogPost from '../../types/blog'; // Import as default

interface BlogListProps {
  selectedPost: string | null;
  setSelectedPost: (id: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredPosts: blogPost[]; // Use the default export type
  currentPost: blogPost | null;
}

const BlogList: React.FC<BlogListProps> = ({
  selectedPost,
  setSelectedPost,
  searchQuery,
  setSearchQuery,
  filteredPosts,
  currentPost
}) => {
  if (currentPost) {
    return (
      <BlogPost
        {...currentPost}
        onBack={() => setSelectedPost(null)}
      />
    );
  }

  return (
    <>
      <BlogSearch value={searchQuery} onSearch={setSearchQuery} />
      <BlogGrid 
        posts={filteredPosts} 
        onPostSelect={setSelectedPost} 
      />
    </>
  );
};

export default BlogList;
