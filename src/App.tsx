import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import BlogContainer from './components/blog/BlogContainer';
import Contact from './components/Contact';
import BackToTop from './components/common/BackToTop';
import ThemeToggle from './components/common/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <BlogContainer />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white py-8 dark:bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Brahim Boutal. All rights reserved.</p>
        </div>
      </footer>
      <BackToTop/>
      

    </div>
  );
}

export default App;