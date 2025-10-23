import React from 'react';
import FloatingOrbs from '../common/FloatingOrbs';

const LoginBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/30 dark:bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 dark:bg-white/15 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-accent-primary/25 dark:bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Orbs */}
      <FloatingOrbs 
        count={6}
        colors={[
          'bg-brand-primary/20 dark:bg-white/20',
          'bg-brand-secondary/25 dark:bg-white/30',
          'bg-accent-primary/15 dark:bg-white/10',
          'bg-brand-primary/30 dark:bg-white/25',
          'bg-brand-secondary/20 dark:bg-white/15',
          'bg-accent-primary/25 dark:bg-white/35'
        ]}
        sizes={[4, 6, 3, 5, 4, 7]}
        positions={[
          { top: 'top-20', left: 'left-20', animationDelay: '0s' },
          { top: 'top-40', left: 'right-20', animationDelay: '1s' },
          { top: 'bottom-40', left: 'left-10', animationDelay: '2s' },
          { top: 'bottom-20', left: 'right-10', animationDelay: '0.5s' },
          { top: 'top-1/2', left: 'left-1/2', animationDelay: '1.5s' },
          { top: 'top-1/3', left: 'right-1/3', animationDelay: '2.5s' }
        ]}
      />
    </div>
  );
};

export default LoginBackground;