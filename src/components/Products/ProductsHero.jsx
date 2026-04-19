import React from 'react';
import { Inventory2Outlined } from '../../icons';

const ProductsHero = ({ totalProducts }) => (
  <section className="relative overflow-hidden bg-gradient-to-r from-brand-primary to-brand-secondary py-20 dark:from-dark-interactive-primary dark:to-brand-secondary">
    <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-secondary/90 dark:from-dark-interactive-primary/90 dark:to-brand-secondary/90" />

    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-10 top-10 h-20 w-20 animate-pulse rounded-full bg-white/10" />
      <div className="absolute right-20 top-20 h-16 w-16 animate-pulse rounded-full bg-white/10" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 h-12 w-12 animate-pulse rounded-full bg-white/10" style={{ animationDelay: '2s' }} />
    </div>

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
          All Products
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
          Discover our complete collection of amazing products
        </p>
        <div className="flex items-center justify-center">
          <div className="flex items-center rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm">
            <Inventory2Outlined sx={{ fontSize: 20, mr: 1, color: 'white' }} />
            <span className="font-semibold text-white">{totalProducts} products available</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsHero;
