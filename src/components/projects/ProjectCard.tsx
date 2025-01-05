import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tech: string[];
}

const ProjectCard = ({ title, description, icon, tech }: ProjectCardProps) => {
  return (
    <Card
      title={title}
      icon={icon}
      className="h-full flex flex-col bg-white dark:bg-gray-800 text-black dark:text-white"
    >
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <Badge key={t} text={t} />
        ))}
      </div>
    </Card>
  );
};

export default ProjectCard;
