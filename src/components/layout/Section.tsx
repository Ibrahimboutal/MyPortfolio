import React from 'react';
import { cn } from '../../utils/classNames';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ id, className, children }: SectionProps) => (
  <section 
    id={id}
    className={cn(
      "py-16",
      className
    )}
  >
    <div className="container mx-auto px-4">
      {children}
    </div>
  </section>
);

export default Section;