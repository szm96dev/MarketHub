import React from 'react';
import {
  AccessTimeOutlined,
  CheckCircleOutlined,
  LocalShippingOutlined,
} from '../../icons';

const TrustStrip = ({ badges = [] }) => {
  const defaultBadges = [
    {
      icon: (
        <CheckCircleOutlined sx={{ fontSize: 32 }} className="text-status-success dark:text-dark-status-success" />
      ),
      text: "Secure Checkout",
      description: "SSL encrypted payments"
    },
    {
      icon: (
        <LocalShippingOutlined sx={{ fontSize: 32 }} className="text-brand-primary dark:text-dark-interactive-primary" />
      ),
      text: "Free Shipping",
      description: "On orders over $50"
    },
    {
      icon: (
        <AccessTimeOutlined sx={{ fontSize: 32 }} className="text-status-warning dark:text-dark-status-warning" />
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
