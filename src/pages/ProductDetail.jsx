import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../store/actions/productsActions';
import { addToCart } from '../store/actions/cartActions';
import PageContainer from '../components/common/PageContainer';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ProductBreadcrumb from '../components/ProductDetail/ProductBreadcrumb';
import ProductImages from '../components/ProductDetail/ProductImages';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import ProductActions from '../components/ProductDetail/ProductActions';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentProduct, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch]);

  const handleAddToCart = () => {
    if (currentProduct) {
      dispatch(addToCart({
        productId: currentProduct.id.toString(),
        productName: currentProduct.title,
        price: currentProduct.price,
        image: currentProduct.image
      }));
    }
  };

  if (loading) {
    return (
      <PageContainer>
        <LoadingSpinner size={60} message="Loading product details..." />
      </PageContainer>
    );
  }

  if (!currentProduct) {
    return (
      <PageContainer>
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
            Product Not Found
          </h2>
          <p className="text-text-secondary dark:text-dark-text-secondary mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-brand-primary hover:bg-interactive-primary-hover text-white font-semibold rounded-lg transition-colors"
          >
            Browse Products
          </button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductBreadcrumb 
          category={currentProduct.category}
          title={currentProduct.title}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <ProductImages images={[currentProduct.image]} />
          
          <div className="space-y-6">
            <ProductInfo 
              title={currentProduct.title}
              price={currentProduct.price}
              description={currentProduct.description}
              category={currentProduct.category}
              ratings={{ average: currentProduct.rating.rate, count: currentProduct.rating.count }}
            />
            
            <ProductActions 
              onAddToCart={handleAddToCart}
              onBuyNow={() => {
                handleAddToCart();
                navigate('/cart');
              }}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProductDetail;