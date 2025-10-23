import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchCategories } from '../store/actions/productsActions';
import HeroCarousel from '../components/Home/HeroCarousel';
import TrustStrip from '../components/Home/TrustStrip';
import ProductSection from '../components/Home/ProductSection';
import CategorySection from '../components/Home/CategorySection';
import NewsletterSection from '../components/Home/NewsletterSection';

const Home = () => {
  const dispatch = useDispatch();
  const { products, categories, loading } = useSelector((state) => state.products);

  useEffect(() => {
    // Fetch initial data
    dispatch(fetchProducts({ limit: 24 }));
    dispatch(fetchCategories());
  }, [dispatch]);

  // Enhanced hero slides with modern design
  const heroSlides = [
    {
      id: 1,
      title: "Discover Amazing Products",
      subtitle: "Shop the latest trends and find everything you need in one place. From electronics to fashion, we've got you covered.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      buttonText: "Start Shopping",
      buttonLink: "/products",
      gradient: "from-primary-600 to-secondary-600"
    },
    {
      id: 2,
      title: "Electronics & Tech",
      subtitle: "Explore cutting-edge technology and innovative gadgets that enhance your digital lifestyle.",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      buttonText: "Browse Electronics",
      buttonLink: "/products?category=electronics",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 3,
      title: "Fashion & Style",
      subtitle: "Express your unique personality with our curated collection of trendy and timeless fashion pieces.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      buttonText: "Shop Fashion",
      buttonLink: "/products?category=women's clothing",
      gradient: "from-pink-600 to-rose-600"
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary dark:bg-dark-bg-primary">
      {/* Hero Carousel */}
      <section className="relative">
        <HeroCarousel slides={heroSlides} />
      </section>
      
      {/* Trust Strip */}
      <section className="py-8 bg-bg-secondary dark:bg-dark-bg-secondary border-b border-border-primary dark:border-dark-border-primary">
        <TrustStrip />
      </section>
      
      {/* Categories Section */}
      <CategorySection 
        categories={categories} 
        loading={loading} 
      />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Handpicked items that our customers love
            </p>
          </div>
          <ProductSection 
            title=""
            subtitle=""
            products={products.slice(0, 8)}
            loading={loading}
            showViewAll={true}
            viewAllLink="/products"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-bg-primary dark:bg-dark-bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-brand-primary dark:text-dark-interactive-primary mb-2">
                10K+
              </div>
              <div className="text-text-secondary dark:text-dark-text-secondary">
                Happy Customers
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-brand-primary dark:text-dark-interactive-primary mb-2">
                50K+
              </div>
              <div className="text-text-secondary dark:text-dark-text-secondary">
                Products Available
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-brand-primary dark:text-dark-interactive-primary mb-2">
                99%
              </div>
              <div className="text-text-secondary dark:text-dark-text-secondary">
                Customer Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-brand-primary to-brand-secondary">
        <NewsletterSection />
      </section>
    </div>
  );
};

export default Home;