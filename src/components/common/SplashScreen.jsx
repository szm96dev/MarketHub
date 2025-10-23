import React from 'react';
import FloatingOrbs from './FloatingOrbs';

const SplashScreen = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary via-brand-secondary to-accent-primary flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Floating Orbs */}
      <FloatingOrbs 
        count={8}
        colors={[
          'bg-white/20',
          'bg-white/30',
          'bg-white/10',
          'bg-white/25',
          'bg-white/15',
          'bg-white/35',
          'bg-white/20',
          'bg-white/30'
        ]}
        sizes={[4, 6, 3, 5, 4, 7, 3, 5]}
        positions={[
          { top: 'top-20', left: 'left-20', animationDelay: '0s' },
          { top: 'top-40', left: 'right-20', animationDelay: '1s' },
          { top: 'bottom-40', left: 'left-10', animationDelay: '2s' },
          { top: 'bottom-20', left: 'right-10', animationDelay: '0.5s' },
          { top: 'top-1/2', left: 'left-1/2', animationDelay: '1.5s' },
          { top: 'top-1/3', left: 'right-1/3', animationDelay: '2.5s' },
          { top: 'bottom-1/3', left: 'left-1/3', animationDelay: '3s' },
          { top: 'top-2/3', left: 'right-2/3', animationDelay: '0.8s' }
        ]}
      />

      {/* Main Content */}
      <div className="text-center z-10">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-white mb-4">
          {message}
        </h2>
        
        <p className="text-white/80 text-lg">
          Please wait while we prepare your experience...
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;