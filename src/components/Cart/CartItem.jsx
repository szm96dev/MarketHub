import React, { memo, useMemo } from 'react';
import { ClearOutlined, AddOutlined, RemoveOutlined } from '../../icons';

const CartItemComponent = ({
  item,
  index,
  isUpdating,
  onQuantityChange,
  onRemove
}) => {
  const totalPrice = useMemo(() => (item.price * item.quantity).toFixed(2), [item.price, item.quantity]);
  return (
    <div 
      className="bg-bg-card dark:bg-dark-bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              src={item.image}
              alt={item.productName}
              className="w-20 h-20 object-cover rounded-xl"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary truncate">
              {item.productName}
            </h3>
            <p className="text-text-secondary dark:text-dark-text-secondary text-sm">
              ${item.price.toFixed(2)} each
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center border border-border-primary dark:border-dark-border-primary rounded-lg">
              <button
                onClick={() => onQuantityChange(item.productId, item.quantity - 1)}
                disabled={isUpdating || item.quantity <= 1}
                className="p-2 text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RemoveOutlined sx={{ fontSize: 18 }} />
              </button>
              
              <span className="px-3 py-2 text-text-primary dark:text-dark-text-primary font-medium">
                {item.quantity}
              </span>
              
              <button
                onClick={() => onQuantityChange(item.productId, item.quantity + 1)}
                disabled={isUpdating}
                className="p-2 text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <AddOutlined sx={{ fontSize: 18 }} />
              </button>
            </div>
            
            <div className="text-right">
              <p className="text-xl font-bold text-text-primary dark:text-dark-text-primary">
                ${totalPrice}
              </p>
            </div>
            
            <button
              onClick={() => onRemove(item.productId)}
              disabled={isUpdating}
              className="p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ClearOutlined sx={{ fontSize: 20 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CartItemComponent);