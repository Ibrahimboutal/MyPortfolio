import React, { useState } from 'react';
import { Monitor, Shield, Activity, Database, School } from 'lucide-react';
import ProjectCard from './projects/ProjectCard';
import ProjectFilter from './projects/ProjectFilter';
import SectionHeader from './common/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useScrollReveal();

  const categories = ['All', 'IoT', 'Security', 'ML', 'Blockchain', 'Education'];
  
  const projects = [
    {
      title: 'DevicePilot',
      description: 'An IoT Device Control Dashboard for monitoring and managing connected devices in real-time.',
      icon: Monitor,
      tech: ['Python', 'Flask', 'IoT', 'Dashboard'],
      category: 'IoT',
    },
    {
      title: 'Lightweight Encryption Library',
      description: 'Developed a Python library for secure mobile communication with optimized encryption algorithms.',
      icon: Shield,
      tech: ['Python', 'Cryptography', 'Mobile Security'],
      category: 'Security',
    },
    {
      title: 'Isolation Forest Anomaly Detection',
      description: 'Implemented a machine learning model for detecting anomalies in large datasets.',
      icon: Activity,
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      category: 'ML',
    },
    {
      title: 'Blockchain App',
      description: 'A simple blockchain application demonstrating core concepts of distributed ledger technology.',
      icon: Database,
      tech: ['Java', 'Android Studio', 'Blockchain'],
      category: 'Blockchain',
    },
    {
      title: 'School Management System',
      description: 'Comprehensive system for managing student and teacher records with a user-friendly interface.',
      icon: School,
      tech: ['Java', 'JFrame', 'SQL'],
      category: 'Education',
    },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-700">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <SectionHeader 
          title="Projects" 
          subtitle="A collection of my recent work and experiments" 
        />
        <ProjectFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;