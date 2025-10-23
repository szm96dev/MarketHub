import React from 'react';

const TrustStrip = ({ badges = [] }) => {
  const defaultBadges = [
    {
      icon: (
        <svg className="w-8 h-8 text-status-success dark:text-dark-status-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Secure Checkout",
      description: "SSL encrypted payments"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-brand-primary dark:text-dark-interactive-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      text: "Free Shipping",
      description: "On orders over $50"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-brand-secondary dark:text-dark-interactive-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      text: "24/7 Support",
      description: "Always here to help"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-status-warning dark:text-dark-status-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Fast Delivery",
      description: "Same day shipping"
    }
  ];

  const displayBadges = badges.length > 0 ? badges : defaultBadges;

  return (
    <section className="py-8 bg-bg-secondary dark:bg-dark-bg-secondary border-y border-border-primary dark:border-dark-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-bg-primary dark:bg-dark-bg-primary rounded-lg border border-border-primary dark:border-dark-border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0">
                {badge.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                  {badge.text}
                </h3>
                <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;