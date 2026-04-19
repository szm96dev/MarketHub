import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PageContainer from '../components/common/PageContainer';
import { showToast } from '../utils/toast';
import { clearCart } from '../store/actions/cartActions';
import localData from '../utils/localData';
import { initialValues, shippingDetailsSchema } from '../schemas';
import CheckoutHeader from '../components/Checkout/CheckoutHeader';
import CheckoutSteps from '../components/Checkout/CheckoutSteps';
import CheckoutSuccess from '../components/Checkout/CheckoutSuccess';
import ShippingStep from '../components/Checkout/ShippingStep';
import PaymentStep from '../components/Checkout/PaymentStep';
import ReviewStep from '../components/Checkout/ReviewStep';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [latestOrder, setLatestOrder] = useState(null);
  const [shippingErrors, setShippingErrors] = useState({});
  const [shippingTouched, setShippingTouched] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('Card');
  const { items, total, itemCount } = useSelector((state) => state.cart);
  const userId = user?.id || 'guest';
  const tax = useMemo(() => total * 0.08, [total]);
  const shippingFee = useMemo(() => (total > 75 ? 0 : 9.99), [total]);
  const discount = useMemo(() => (paymentMethod === 'PayPal' ? 5 : 0), [paymentMethod]);
  const grandTotal = useMemo(() => Math.max(0, total + tax + shippingFee - discount), [discount, shippingFee, tax, total]);
  const [shippingForm, setShippingForm] = useState({
    ...initialValues.shipping,
    fullName: user ? `${user?.name?.firstname || ''} ${user?.name?.lastname || ''}`.trim() : initialValues.shipping.fullName,
    email: user?.email || initialValues.shipping.email,
    phone: user?.phone || initialValues.shipping.phone,
  });

  useEffect(() => {
    setSavedAddresses(localData.getSavedAddresses(userId));
  }, [userId]);

  const applySavedAddress = (address) => {
    setShippingForm({
      ...initialValues.shipping,
      ...address,
    });
    setShippingErrors({});
    setShippingTouched({});
    setCurrentStep(2);
  };

  const validateShippingForm = useCallback((values = shippingForm) => {
    try {
      shippingDetailsSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      const nextErrors = {};
      error.inner?.forEach((item) => {
        if (item.path && !nextErrors[item.path]) {
          nextErrors[item.path] = item.message;
        }
      });
      return nextErrors;
    }
  }, [shippingForm]);

  const handleShippingChange = (field, value) => {
    setShippingForm((prev) => {
      const nextValues = { ...prev, [field]: value };
      setShippingErrors(validateShippingForm(nextValues));
      return nextValues;
    });
  };

  const handleShippingBlur = (field) => {
    setShippingTouched((prev) => ({ ...prev, [field]: true }));
    setShippingErrors(validateShippingForm());
  };

  const isShippingComplete = useMemo(() => (
    Object.keys(validateShippingForm()).length === 0
  ), [validateShippingForm]);

  const continueToPayment = () => {
    const nextErrors = validateShippingForm();
    setShippingErrors(nextErrors);
    setShippingTouched({
      fullName: true,
      email: true,
      phone: true,
      street: true,
      apartment: true,
      city: true,
      state: true,
      postalCode: true,
      country: true,
    });

    if (Object.keys(nextErrors).length > 0) {
      showToast.warning('Please fix the shipping form errors before continuing.');
      return;
    }

    setCurrentStep(2);
  };

  const handleProcessCheckout = () => {
    if (items.length === 0) {
      showToast.warning('Add items to cart before checking out.');
      return;
    }

    const nextErrors = validateShippingForm();
    setShippingErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      showToast.warning('Please complete your shipping details first.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const nextAddresses = localData.saveAddress(userId, shippingForm);
      const order = {
        items,
        itemCount,
        subtotal: total,
        tax,
        shippingFee,
        discount,
        total: grandTotal,
        shippingAddress: shippingForm,
        paymentMethod,
      };

      const nextOrders = localData.saveOrder(userId, order);
      setSavedAddresses(nextAddresses);
      setLatestOrder(nextOrders[0]);
      setCheckoutComplete(true);
      setCurrentStep(3);
      setIsSubmitting(false);
      showToast.success('Purchase successful! Thank you for your order.');
      dispatch(clearCart());
    }, 2000);
  };

  const checkoutSteps = [
    { id: 1, label: 'Shipping' },
    { id: 2, label: 'Payment' },
    { id: 3, label: 'Review' },
  ];

  return (
    <PageContainer>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CheckoutHeader checkoutComplete={checkoutComplete} />

        {checkoutComplete ? (
          <CheckoutSuccess
            latestOrder={latestOrder}
            onContinueShopping={() => navigate('/products')}
          />
        ) : (
          <div className="bg-bg-card dark:bg-dark-bg-card rounded-3xl shadow-2xl p-8">
            <CheckoutSteps
              steps={checkoutSteps}
              currentStep={currentStep}
              isShippingComplete={isShippingComplete}
              onStepChange={setCurrentStep}
            />

            <div className="space-y-6">
              {currentStep === 1 && (
                <ShippingStep
                  savedAddresses={savedAddresses}
                  shippingForm={shippingForm}
                  shippingTouched={shippingTouched}
                  shippingErrors={shippingErrors}
                  onApplySavedAddress={applySavedAddress}
                  onShippingChange={handleShippingChange}
                  onShippingBlur={handleShippingBlur}
                  onContinue={continueToPayment}
                />
              )}

              {currentStep === 2 && (
                <PaymentStep
                  paymentMethod={paymentMethod}
                  onPaymentMethodChange={setPaymentMethod}
                  onBack={() => setCurrentStep(1)}
                  onContinue={() => setCurrentStep(3)}
                />
              )}

              {currentStep === 3 && (
                <ReviewStep
                  shippingForm={shippingForm}
                  paymentMethod={paymentMethod}
                  items={items}
                  itemCount={itemCount}
                  total={total}
                  tax={tax}
                  shippingFee={shippingFee}
                  discount={discount}
                  grandTotal={grandTotal}
                  isSubmitting={isSubmitting}
                  onBack={() => setCurrentStep(2)}
                  onPlaceOrder={handleProcessCheckout}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default Checkout;
