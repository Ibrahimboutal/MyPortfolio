import { useState } from 'react';
import { blogPosts } from '../data/blogPosts';
import { useSearch } from './useSearch';

export const useBlogPosts = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const { 
    searchQuery, 
    setSearchQuery, 
    filteredItems: filteredPosts 
  } = useSearch(blogPosts, ['title', 'content']);

  const currentPost = selectedPost 
    ? blogPosts.find(post => post.id === selectedPost)
    : null;

  return {
    selectedPost,
    setSelectedPost,
    searchQuery,
    setSearchQuery,
    filteredPosts,
    currentPost
  };
};