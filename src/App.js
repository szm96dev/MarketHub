import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './contexts/ThemeContext';
import MuiThemeProvider from './contexts/MuiThemeProvider';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from './store/actions/authActions';
import { ErrorBoundaryComponent, SplashScreenComponent, Layout, ProtectedRouteComponent } from './components/common';
import './App.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Favorites = lazy(() => import('./pages/Favorites'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token && !isAuthenticated) {
      dispatch(getProfile());
    }
  }, [token, isAuthenticated, dispatch]);

  return (
    <ErrorBoundaryComponent>
      <ThemeProvider>
        <MuiThemeProvider>
          <Router>
          <Suspense fallback={<SplashScreenComponent message="Loading your amazing experience..." />}>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route 
                  path="/checkout" 
                  element={
                    <ProtectedRouteComponent>
                      <Checkout />
                    </ProtectedRouteComponent>
                  } 
                />
                <Route 
                  path="/login" 
                  element={<Login />} 
                />
                <Route 
                  path="/register" 
                  element={<Register />} 
                />
                <Route 
                  path="/favorites" 
                  element={
                    <ProtectedRouteComponent>
                      <Favorites />
                    </ProtectedRouteComponent>
                  } 
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Suspense>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            aria-label="Notifications"
          />
          </Router>
        </MuiThemeProvider>
      </ThemeProvider>
    </ErrorBoundaryComponent>
  );
}

export default App;