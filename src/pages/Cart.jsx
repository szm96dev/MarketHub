import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartQty, removeFromCart, clearCart as clearCartAction } from '../store/actions/cartActions';
import PageContainer from '../components/common/PageContainer';
import CartHeader from '../components/Cart/CartHeader';
import CartItem from '../components/Cart/CartItem';
import OrderSummary from '../components/Cart/OrderSummary';
import EmptyCart from '../components/Cart/EmptyCart';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, total, itemCount } = useSelector((state) => state.cart);
  const [isUpdating, setIsUpdating] = useState(null);

  const handleQuantityChange = async (productId, newQuantity) => {
    setIsUpdating(productId);
    try {
      dispatch(updateCartQty(productId, newQuantity));
    } finally {
      setIsUpdating(null);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCartAction());
    }
  };

  if (items.length === 0) {
    return (
      <PageContainer>
        <EmptyCart />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <CartHeader itemCount={itemCount} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item, index) => (
              <CartItem
                key={item.productId}
                item={item}
                index={index}
                isUpdating={isUpdating === item.productId}
                onQuantityChange={handleQuantityChange}
                onRemove={(id) => dispatch(removeFromCart(id))}
              />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary
              total={total}
              itemCount={itemCount}
              onCheckout={handleCheckout}
              onClearCart={handleClearCart}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Cart;