import React from 'react';
import { BookOpen, Trophy } from 'lucide-react';
import Section from './layout/Section';
import SectionHeader from './common/SectionHeader';

const Research = () => {
  return (
    <Section id="research" className="bg-gray-50 dark:bg-gray-900">
      <SectionHeader title="Research & Achievements" />
      <div className="max-w-4xl mx-auto grid gap-8">
        {/* Research Topics */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <BookOpen className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
            <h3 className="text-2xl font-semibold dark:text-white">Research Topics</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                Federated Learning for Privacy-Preserving Machine Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Investigating distributed machine learning approaches that preserve data privacy
                while maintaining model performance. Focus on optimization techniques and
                communication efficiency.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                Evaluating Lightweight Encryption Algorithms
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Comparative analysis of various lightweight encryption algorithms for resource-constrained
                devices, with emphasis on performance metrics and security guarantees.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Trophy className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
            <h3 className="text-2xl font-semibold dark:text-white">Key Achievements</h3>
          </div>
          <ul className="space-y-4">
            {[
              'Research Assistant in the University\'s Computer Science Department, contributing to projects in machine learning and cybersecurity.',
              'Published research findings on lightweight encryption algorithms in the university\'s technical journal.',
              'Presented work on IoT device monitoring at student research symposium.'
            ].map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2"></span>
                <p className="text-gray-600 dark:text-gray-300">{achievement}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
export default Research;