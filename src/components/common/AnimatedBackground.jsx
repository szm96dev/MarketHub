import React from 'react';

const AnimatedBackground = ({
  colors = [
    'bg-gradient-to-r from-blue-400 to-purple-500',
    'bg-gradient-to-r from-pink-400 to-red-500',
    'bg-gradient-to-r from-green-400 to-blue-500',
    'bg-gradient-to-r from-yellow-400 to-orange-500',
    'bg-gradient-to-r from-purple-400 to-pink-500'
  ],
  sizes = [72, 96, 64, 80, 88],
  positions = [
    { top: 'top-20', left: 'left-10', animationDelay: '0s' },
    { top: 'top-40', left: 'right-20', animationDelay: '1s' },
    { top: 'bottom-20', left: 'right-10', animationDelay: '2s' },
    { top: 'top-1/2', left: 'left-1/2', animationDelay: '4s' },
  ]
}) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`absolute ${positions[index]?.top || 'top-20'} ${positions[index]?.left || 'left-10'} w-${sizes[index] || 72} h-${sizes[index] || 72} ${color} rounded-full blur-3xl animate-pulse-slow`}
          style={{ animationDelay: positions[index]?.animationDelay || '0s' }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;