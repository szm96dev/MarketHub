import React from 'react';

const FloatingOrbs = ({
  count = 5,
  colors = [
    'bg-brand-primary/20',
    'bg-brand-secondary/20',
    'bg-interactive-primary/20',
    'bg-accent-primary/20',
    'bg-accent-secondary/20'
  ],
  sizes = [4, 6, 3, 5, 4],
  positions = [
    { top: 'top-20', left: 'right-20', animationDelay: '0s' },
    { top: 'top-40', left: 'left-20', animationDelay: '1s' },
    { top: 'bottom-40', left: 'right-20', animationDelay: '2s' },
    { top: 'bottom-20', left: 'left-10', animationDelay: '0.5s' },
  ]
}) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`absolute ${positions[index]?.top || 'top-20'} ${positions[index]?.left || 'right-20'} w-${sizes[index] || 4} h-${sizes[index] || 4} ${colors[index] || 'bg-brand-primary/20'} rounded-full animate-bounce-slow`}
          style={{ animationDelay: positions[index]?.animationDelay || '0s' }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;