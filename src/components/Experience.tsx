import React from 'react';
import { Briefcase } from 'lucide-react';
import Section from './layout/Section';
import SectionHeader from './common/SectionHeader';

const Experience = () => {
  const experiences = [
    {
      title: 'Research Assistant',
      company: 'Computer Science Department',
      period: 'Sept 2023 - Present',
      description: [
        'Assisting in research projects focused on federated learning and privacy-preserving machine learning',
        'Implementing and testing lightweight encryption algorithms for IoT devices',
        'Collaborating with faculty members on academic publications',
      ],
    },
    
    {
      title: 'Independent Designer',
      company: 'Online',
      period: 'Mar 2019 - Present',
      description: [
        'Designed and marketed over 1060 unique products including apparel, stationery, and home decor',
        'Grew an online presence and optimized product listings to increase visibility and sales',
        'Developed skills in graphic design, branding, and customer engagement',
      ],
    },
    
  ];

  return (
    <Section id="experience" className="bg-white dark:bg-gray-800">
      <SectionHeader title="Experience" />
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
              <div>
                <h3 className="text-xl font-semibold dark:text-white">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">{exp.period}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default Experience;