import React from 'react';
import { Code2, Terminal, Wrench, Award } from 'lucide-react';
import Card from './common/Card';
import SkillProgress from './skills/SkillProgress';
import SectionHeader from './common/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
  const sectionRef = useScrollReveal();
  
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 75 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      title: 'Tools & Frameworks',
      icon: Wrench,
      skills: [
        { name: 'PyCharm', level: 85 },
        { name: 'IntelliJ IDEA', level: 80 },
        { name: 'Flask', level: 75 },
        { name: 'Android Studio', level: 70 },
      ],
    },
    {
      title: 'Specializations',
      icon: Terminal,
      skills: [
        { name: 'Lightweight Encryption', level: 85 },
        { name: 'Federated Learning', level: 80 },
        { name: 'IoT Device Monitoring', level: 75 },
        { name: 'Machine Learning', level: 70 },
      ],
    },
    {
      title: 'Certifications',
      icon: Award,
      skills: [
        { name: 'Coming Soon', level: 0 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <SectionHeader 
          title="Skills" 
          subtitle="Technologies and tools I work with" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {skillCategories.map((category) => (
            <Card key={category.title} title={category.title} icon={category.icon}>
              {category.skills.map((skill) => (
                <SkillProgress
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;