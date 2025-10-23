import React from 'react';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "View Cart",
      description: "View your cart",
      icon: (
        <ShoppingCartOutlined sx={{ fontSize: 24 }} />
      ),
      gradient: "from-brand-secondary to-brand-accent",
      onClick: () => navigate('/cart')
    },
    {
      title: "Change Password",
      description: "Update your password",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      gradient: "from-accent-primary to-accent-secondary",
      onClick: () => {}
    },
    {
      title: "Order History",
      description: "View your orders",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      gradient: "from-green-500 to-green-600",
      onClick: () => {}
    },
    {
      title: "Support",
      description: "Get help",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      gradient: "from-blue-500 to-blue-600",
      onClick: () => {}
    }
  ];

  return (
    <div className="bg-bg-card dark:bg-dark-bg-card rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-6">
        Quick Actions
      </h3>
      
      <div className="grid grid-cols-1 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`p-4 rounded-xl bg-gradient-to-r ${action.gradient} text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-left`}
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {action.icon}
              </div>
              <div>
                <h4 className="font-semibold">{action.title}</h4>
                <p className="text-sm opacity-90">{action.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;