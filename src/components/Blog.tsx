import React from 'react';
import BlogList from './blog/BlogList';
import SectionHeader from './common/SectionHeader';
import BlogPost from './blog/BlogPost';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {removeEventListener
  const sectionRef = useScrollReveal();
  const [selectedPost, setSelectedPost] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <SectionHeader 
          title="Blog" 
          subtitle="Thoughts and insights on technology and development" 
        />
        {selectedPost ? (
          <BlogPost
            title={blogPosts.find((post) => post.id === selectedPost)?.title || ''}
            date={blogPosts.find((post) => post.id === selectedPost)?.date || ''}
            content={blogPosts.find((post) => post.id === selectedPost)?.content || ''}
            onBack={() => setSelectedPost(null)}
          />
        ) : (
          <BlogList
            selectedPost={selectedPost}
            setSelectedPost={setSelectedPost}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredPosts={filteredPosts}
            currentPost={null}
          />
        )}
      </div>
    </section>
  );
};

export default Blog;
