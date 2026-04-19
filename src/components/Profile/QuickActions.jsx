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
