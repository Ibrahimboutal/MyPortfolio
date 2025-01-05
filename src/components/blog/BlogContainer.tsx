import React from 'react';
import Section from '../layout/Section';
import SectionHeader from '../common/SectionHeader';
import BlogList from './BlogList';
import { useBlogPosts } from '../../hooks/useBlogPosts';

const BlogContainer = () => {
  const { 
    selectedPost,
    setSelectedPost,
    searchQuery,
    setSearchQuery,
    filteredPosts,
    currentPost 
  } = useBlogPosts();

  return (
    <Section id="blog" className="bg-gray-50 dark:bg-gray-900">
      <SectionHeader 
        title="Blog" 
        subtitle="Thoughts and insights on technology and development" 
      />
      <BlogList
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredPosts={filteredPosts}
        currentPost={currentPost ?? null} // Convert undefined to null
      />
    </Section>
  );
};

export default BlogContainer;
