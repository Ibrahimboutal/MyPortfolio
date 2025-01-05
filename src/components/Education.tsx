import React from 'react';
import Section from './layout/Section';
import SectionHeader from './common/SectionHeader';

const Education = () => {
  return (
    <Section id="education" className="bg-white dark:bg-gray-800">
      <SectionHeader title="Education" />
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            Bachelor's Degree in Computer Science
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Expected July 2025</p>
          <p className="text-lg font-medium mt-2 dark:text-gray-200">
            Dalian Polytechnic University, China
          </p>
          
          <div className="mt-6">
            <h4 className="font-semibold mb-2 dark:text-gray-200">Notable Courses:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                'Data Structures',
                'Algorithms',
                'Artificial Intelligence',
                'Computer Networks',
                'Cryptography'
              ].map((course) => (
                <li key={course} className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Education;