import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../store/actions/productsActions';
import { addToCart } from '../store/actions/cartActions';
import PageContainer from '../components/common/PageContainer';
import ProductBreadcrumb from '../components/ProductDetail/ProductBreadcrumb';
import ProductImages from '../components/ProductDetail/ProductImages';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import ProductActions from '../components/ProductDetail/ProductActions';
import ProductSection from '../components/Home/ProductSection';
import ProductDetailSkeleton from '../components/ProductDetail/ProductDetailSkeleton';
import { productService } from '../services/productService';
import localData from '../utils/localData';
import { SearchOffOutlined } from '../icons';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentProduct, loading } = useSelector((state) => state.products);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [isRelatedLoading, setIsRelatedLoading] = useState(true);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (!currentProduct) {
      return;
    }

    localData.saveRecentlyViewedProduct(currentProduct);
    setRecentlyViewed(localData.getRecentlyViewedProducts().filter((item) => item.id !== currentProduct.id).slice(0, 4));
  }, [currentProduct]);

  useEffect(() => {
    let isMounted = true;

    const loadRelatedProducts = async () => {
      if (!currentProduct?.category) {
        return;
      }

      setIsRelatedLoading(true);
      try {
        const response = await productService.getProducts({
          category: currentProduct.category,
          sortBy: 'rating',
          limit: 8,
        });

        if (!isMounted) {
          return;
        }

        setRelatedProducts(response.products.filter((item) => item.id !== currentProduct.id).slice(0, 4));
      } catch (error) {
        if (isMounted) {
          setRelatedProducts([]);
        }
      } finally {
        if (isMounted) {
          setIsRelatedLoading(false);
        }
      }
    };

    loadRelatedProducts();

    return () => {
      isMounted = false;
    };
  }, [currentProduct]);

  const productImages = useMemo(() => (
    currentProduct?.image ? [currentProduct.image] : []
  ), [currentProduct]);

  const handleAddToCart = (quantity = 1) => {
    if (currentProduct) {
      dispatch(addToCart({
        productId: currentProduct.id.toString(),
        productName: currentProduct.title,
        price: currentProduct.price,
        image: currentProduct.image,
        quantity,
      }));
    }
  };

  if (loading) {
    return (
      <PageContainer>
        <ProductDetailSkeleton />
      </PageContainer>
    );
  }

  if (!currentProduct) {
    return (
      <PageContainer>
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
            <SearchOffOutlined sx={{ fontSize: 48 }} className="text-gray-400" />
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
          <ProductImages images={productImages} productName={currentProduct.title} />
          
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
              onBuyNow={(quantity) => {
                handleAddToCart(quantity);
                navigate('/cart');
              }}
            />
          </div>
        </div>

        <section className="mt-20">
          <ProductSection
            title="Related Products"
            subtitle="More picks from the same category, selected for similar style and rating."
            products={relatedProducts}
            loading={isRelatedLoading}
            skeletonCount={4}
          />
        </section>

        <section className="mt-20">
          <ProductSection
            title="Recently Viewed"
            subtitle="Jump back into products you explored earlier."
            products={recentlyViewed}
            loading={false}
            skeletonCount={4}
          />
        </section>
      </div>
    </PageContainer>
  );
};

export default ProductDetail;
