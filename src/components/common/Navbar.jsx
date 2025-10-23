import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingCartOutlined,
  LightModeOutlined,
  DarkModeOutlined,
  HomeOutlined,
  StorefrontOutlined,
  FavoriteOutlined,
  MenuOutlined,
  ExpandMoreOutlined,
  LogoutOutlined,
} from '../../icons';
import { useSelector, useDispatch } from 'react-redux';
import { logout as logoutAction } from '../../store/actions/authActions';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { itemCount } = useSelector((state) => state.cart);
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleLogout = () => {
    dispatch(logoutAction());
    setIsUserMenuOpen(false);
  };

  const isActive = useCallback((path) => location.pathname === path, [location.pathname]);

  const userInitial = useMemo(() => user?.name?.firstname?.charAt(0) || 'U', [user]);
  const userName = useMemo(() => user?.name?.firstname || 'User', [user]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-bg-primary/95 dark:bg-dark-bg-primary/95 backdrop-blur-md shadow-xl border-b border-border-primary dark:border-dark-border-primary' 
        : 'bg-bg-primary/80 dark:bg-dark-bg-primary/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
        
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <LightModeOutlined sx={{ fontSize: 28, color: 'white' }} />
              </div>
              <span className={`font-bold text-3xl bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent transition-all duration-300 ${scrolled ? 'text-2xl' : 'text-3xl'}`}>
                MarketHub
              </span>
            </Link>
          </div>
          
          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className={`text-base font-medium transition-all duration-300 px-4 py-2.5 rounded-xl ${
                isActive('/') 
                  ? 'text-brand-primary dark:text-dark-interactive-primary bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 dark:from-brand-primary/20 dark:to-brand-secondary/20 shadow-md' 
                  : 'text-text-primary dark:text-dark-text-primary hover:text-brand-primary dark:hover:text-dark-interactive-primary hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-base font-medium transition-all duration-300 px-4 py-2.5 rounded-xl ${
                isActive('/products') 
                  ? 'text-brand-primary dark:text-dark-interactive-primary bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 dark:from-brand-primary/20 dark:to-brand-secondary/20 shadow-md' 
                  : 'text-text-primary dark:text-dark-text-primary hover:text-brand-primary dark:hover:text-dark-interactive-primary hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary'
              }`}
            >
              Products
            </Link>
            {isAuthenticated && (
              <Link
                to="/favorites"
                className={`text-base font-medium transition-all duration-300 px-4 py-2.5 rounded-xl ${
                  isActive('/favorites') 
                    ? 'text-brand-primary dark:text-dark-interactive-primary bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 dark:from-brand-primary/20 dark:to-brand-secondary/20 shadow-md' 
                    : 'text-text-primary dark:text-dark-text-primary hover:text-brand-primary dark:hover:text-dark-interactive-primary hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary'
                }`}
              >
                Favorites
              </Link>
            )}
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 text-text-primary dark:text-dark-text-primary hover:text-brand-primary dark:hover:text-dark-interactive-primary transition-all duration-300 hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary rounded-xl"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <LightModeOutlined sx={{ fontSize: 24 }} />
              ) : (
                <DarkModeOutlined sx={{ fontSize: 24 }} />
              )}
            </button>
            
            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-3 text-text-primary dark:text-dark-text-primary hover:text-brand-primary dark:hover:text-dark-interactive-primary transition-all duration-300 hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary rounded-xl"
            >
              <ShoppingCartOutlined sx={{ fontSize: 24 }} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
                  {itemCount}
                </span>
              )}
            </Link>
            
            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-3 p-2 text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-all duration-300 hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary rounded-xl"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {userInitial}
                  </div>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                      {userName}
                    </div>
                    <div className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
                      {user?.email}
                    </div>
                  </div>
                  <ExpandMoreOutlined sx={{ fontSize: 16 }} />
                </button>
                
                {/* Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-bg-card dark:bg-dark-bg-card rounded-2xl shadow-2xl border border-border-primary dark:border-dark-border-primary py-2 animate-scale-in">
                    <div className="px-4 py-3 border-b border-border-primary dark:border-dark-border-primary">
                      <div className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                        {user?.name?.firstname} {user?.name?.lastname}
                      </div>
                      <div className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
                        {user?.email}
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-3 text-sm text-status-error dark:text-dark-status-error hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary transition-colors"
                    >
                      <LogoutOutlined sx={{ fontSize: 16, mr: 1 }} />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-sm font-semibold text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors px-4 py-2 rounded-lg hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary rounded-lg"
            >
              <MenuOutlined sx={{ fontSize: 24 }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-bg-card dark:bg-dark-bg-card border-t border-border-primary dark:border-dark-border-primary animate-slide-in">
            <div className="px-4 pt-6 pb-6 space-y-2">
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center w-full px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 text-text-primary dark:text-dark-text-primary hover:text-brand-primary dark:hover:text-dark-interactive-primary hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary"
              >
                {isDark ? (
                  <LightModeOutlined sx={{ fontSize: 20, mr: 1 }} />
                ) : (
                  <DarkModeOutlined sx={{ fontSize: 20, mr: 1 }} />
                )}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>

              {/* Mobile Navigation Links */}
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                  isActive('/') 
                    ? 'text-brand-primary dark:text-dark-interactive-primary bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 dark:from-brand-primary/20 dark:to-brand-secondary/20 shadow-md' 
                    : 'text-text-primary dark:text-dark-text-primary hover:text-brand-primary dark:hover:text-dark-interactive-primary hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary'
                }`}
              >
                <HomeOutlined sx={{ fontSize: 20, mr: 1 }} />
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                  isActive('/products') 
                    ? 'text-brand-primary dark:text-dark-interactive-primary bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 dark:from-brand-primary/20 dark:to-brand-secondary/20 shadow-md' 
                    : 'text-text-primary dark:text-dark-text-primary hover:text-brand-primary dark:hover:text-dark-interactive-primary hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary'
                }`}
              >
                <StorefrontOutlined sx={{ fontSize: 20, mr: 1 }} />
                Products
              </Link>
              {isAuthenticated && (
                <Link
                  to="/favorites"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                    isActive('/favorites') 
                      ? 'text-brand-primary dark:text-dark-interactive-primary bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 dark:from-brand-primary/20 dark:to-brand-secondary/20 shadow-md' 
                      : 'text-text-primary dark:text-dark-text-primary hover:text-brand-primary dark:hover:text-dark-interactive-primary hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary'
                  }`}
                >
                  <FavoriteOutlined sx={{ fontSize: 20, mr: 1 }} />
                  Favorites
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;