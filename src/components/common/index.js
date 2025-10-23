import { lazy } from 'react';

// Lazy load common components
export const FormField = lazy(() => import('./FormField'));
export const ProductCard = lazy(() => import('./ProductCard'));
export const LoadingSpinner = lazy(() => import('./LoadingSpinner'));
export const PageContainer = lazy(() => import('./PageContainer'));
export const Navbar = lazy(() => import('./Navbar'));
export const Footer = lazy(() => import('./Footer'));
export const Layout = lazy(() => import('./Layout'));
export const SplashScreen = lazy(() => import('./SplashScreen'));
// ErrorBoundary is a class component, so we don't lazy load it
export { default as ErrorBoundary } from './ErrorBoundary';
export const GradientButton = lazy(() => import('./GradientButton'));
export const StatusBadge = lazy(() => import('./StatusBadge'));
// GlassCard is a simple component, so we don't lazy load it
export { default as GlassCard } from './GlassCard';
export const FloatingOrbs = lazy(() => import('./FloatingOrbs'));
export const AnimatedBackground = lazy(() => import('./AnimatedBackground'));
export const LazyWrapper = lazy(() => import('./LazyWrapper'));
export const ProtectedRoute = lazy(() => import('./ProtectedRoute'));
export const QuickViewModal = lazy(() => import('./QuickViewModal'));
export const Button = lazy(() => import('./Button'));

// Non-lazy exports for immediate use
export { default as SplashScreenComponent } from './SplashScreen';
export { default as ErrorBoundaryComponent } from './ErrorBoundary';
export { default as LazyWrapperComponent } from './LazyWrapper';
export { default as ProtectedRouteComponent } from './ProtectedRoute';