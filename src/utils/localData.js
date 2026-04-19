const RECENTLY_VIEWED_KEY = 'markethub_recently_viewed';

const getStorageItem = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
};

const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Ignore storage failures in frontend-only mode.
  }
};

const getScopedKey = (baseKey, userId = 'guest') => `${baseKey}_${userId}`;

export const getRecentlyViewedProducts = () => getStorageItem(RECENTLY_VIEWED_KEY, []);

export const saveRecentlyViewedProduct = (product) => {
  if (!product?.id) {
    return;
  }

  const currentProducts = getRecentlyViewedProducts().filter((item) => item.id !== product.id);
  const nextProducts = [
    {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      rating: product.rating,
      description: product.description,
    },
    ...currentProducts,
  ].slice(0, 8);

  setStorageItem(RECENTLY_VIEWED_KEY, nextProducts);
};

export const getSavedAddresses = (userId) =>
  getStorageItem(getScopedKey('markethub_saved_addresses', userId), []);

export const saveAddress = (userId, address) => {
  const addresses = getSavedAddresses(userId);
  const nextAddresses = [
    {
      id: address.id || Date.now().toString(),
      fullName: address.fullName,
      email: address.email,
      phone: address.phone,
      street: address.street,
      apartment: address.apartment || '',
      city: address.city,
      state: address.state || '',
      postalCode: address.postalCode,
      country: address.country,
    },
    ...addresses.filter((item) =>
      item.street !== address.street ||
      item.city !== address.city ||
      item.postalCode !== address.postalCode
    ),
  ].slice(0, 5);

  setStorageItem(getScopedKey('markethub_saved_addresses', userId), nextAddresses);
  return nextAddresses;
};

export const getOrderHistory = (userId) =>
  getStorageItem(getScopedKey('markethub_order_history', userId), []).map((order) => ({
    id: order?.id || `ORD-${Date.now()}`,
    createdAt: order?.createdAt || new Date().toISOString(),
    items: Array.isArray(order?.items)
      ? order.items.map((item) => ({
          productId: item?.productId || '',
          productName: item?.productName || 'Product',
          price: Number(item?.price) || 0,
          quantity: Number(item?.quantity) || 1,
          image: item?.image || '',
          lineTotal:
            Number(item?.lineTotal) ||
            (Number(item?.price) || 0) * (Number(item?.quantity) || 1),
        }))
      : [],
    itemCount: Number(order?.itemCount) || 0,
    subtotal: Number(order?.subtotal) || 0,
    tax: Number(order?.tax) || 0,
    shippingFee: Number(order?.shippingFee) || 0,
    discount: Number(order?.discount) || 0,
    total: Number(order?.total) || 0,
    shippingAddress: order?.shippingAddress
      ? {
          fullName: order.shippingAddress.fullName || '',
          email: order.shippingAddress.email || '',
          phone: order.shippingAddress.phone || '',
          street: order.shippingAddress.street || '',
          apartment: order.shippingAddress.apartment || '',
          city: order.shippingAddress.city || '',
          state: order.shippingAddress.state || '',
          postalCode: order.shippingAddress.postalCode || '',
          country: order.shippingAddress.country || '',
        }
      : null,
    paymentMethod: order?.paymentMethod || 'Card',
    status: order?.status || 'Confirmed',
    customer: order?.customer
      ? {
          userId: order.customer.userId || userId,
          email: order.customer.email || '',
          fullName: order.customer.fullName || '',
        }
      : {
          userId,
          email: order?.shippingAddress?.email || '',
          fullName: order?.shippingAddress?.fullName || '',
        },
  }));

export const saveOrder = (userId, order) => {
  const orders = getOrderHistory(userId);
  const normalizedItems = (order.items || []).map((item) => ({
    productId: item.productId,
    productName: item.productName,
    price: Number(item.price) || 0,
    quantity: Number(item.quantity) || 1,
    image: item.image || '',
    lineTotal: (Number(item.price) || 0) * (Number(item.quantity) || 1),
  }));

  const shippingAddress = order.shippingAddress
    ? {
        fullName: order.shippingAddress.fullName || '',
        email: order.shippingAddress.email || '',
        phone: order.shippingAddress.phone || '',
        street: order.shippingAddress.street || '',
        apartment: order.shippingAddress.apartment || '',
        city: order.shippingAddress.city || '',
        state: order.shippingAddress.state || '',
        postalCode: order.shippingAddress.postalCode || '',
        country: order.shippingAddress.country || '',
      }
    : null;

  const nextOrders = [
    {
      id: order.id || `ORD-${Date.now()}`,
      createdAt: order.createdAt || new Date().toISOString(),
      items: normalizedItems,
      itemCount: order.itemCount || normalizedItems.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: Number(order.subtotal) || normalizedItems.reduce((sum, item) => sum + item.lineTotal, 0),
      tax: Number(order.tax) || 0,
      shippingFee: Number(order.shippingFee) || 0,
      discount: Number(order.discount) || 0,
      total: Number(order.total) || 0,
      shippingAddress,
      paymentMethod: order.paymentMethod || 'Card',
      status: order.status || 'Confirmed',
      customer: {
        userId,
        email: shippingAddress?.email || '',
        fullName: shippingAddress?.fullName || '',
      },
    },
    ...orders,
  ].slice(0, 10);

  setStorageItem(getScopedKey('markethub_order_history', userId), nextOrders);
  return nextOrders;
};

const localData = {
  getRecentlyViewedProducts,
  saveRecentlyViewedProduct,
  getSavedAddresses,
  saveAddress,
  getOrderHistory,
  saveOrder,
};

export default localData;
