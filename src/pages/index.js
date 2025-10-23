import { lazy } from 'react';

// Lazy load all pages
export const Home = lazy(() => import('./Home'));
export const Login = lazy(() => import('./Login'));
export const Register = lazy(() => import('./Register'));
export const Products = lazy(() => import('./Products'));
export const ProductDetail = lazy(() => import('./ProductDetail'));
export const Cart = lazy(() => import('./Cart'));
export const Checkout = lazy(() => import('./Checkout'));
export const Favorites = lazy(() => import('./Favorites'));
export const NotFound = lazy(() => import('./NotFound'));