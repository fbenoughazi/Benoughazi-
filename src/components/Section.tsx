import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  className = '',
  containerClassName = 'container mx-auto px-6 lg:px-12',
  children,
}: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className={containerClassName}>
        {children}
      </div>
    </section>
  );
}
