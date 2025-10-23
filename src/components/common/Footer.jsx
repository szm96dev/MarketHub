import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  LightModeOutlined,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  ArrowForwardIosOutlined,
} from '../../icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-bg-primary to-bg-secondary dark:from-dark-bg-primary dark:to-dark-bg-secondary text-text-primary dark:text-dark-text-primary border-t border-border-primary dark:border-dark-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center">
                  <LightModeOutlined sx={{ fontSize: 24, color: 'white' }} />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-dark-interactive-primary dark:to-brand-secondary bg-clip-text text-transparent">
            MarketHub
                </span>
              </div>
              <p className="text-text-secondary dark:text-dark-text-secondary mb-8 max-w-md leading-relaxed">
                From electronics to fashion, beauty to sports, home goods to pet supplies - discover quality products across all categories.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <button 
                  className="w-10 h-10 bg-bg-secondary dark:bg-dark-bg-secondary hover:bg-brand-primary dark:hover:bg-dark-interactive-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-border-primary dark:border-dark-border-primary"
                  aria-label="Twitter"
                >
                  <TwitterIcon sx={{ fontSize: 20 }} />
                </button>
                <button 
                  className="w-10 h-10 bg-bg-secondary dark:bg-dark-bg-secondary hover:bg-brand-primary dark:hover:bg-dark-interactive-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-border-primary dark:border-dark-border-primary"
                  aria-label="Facebook"
                >
                  <FacebookIcon sx={{ fontSize: 20 }} />
                </button>
                <button 
                  className="w-10 h-10 bg-bg-secondary dark:bg-dark-bg-secondary hover:bg-brand-primary dark:hover:bg-dark-interactive-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-border-primary dark:border-dark-border-primary"
                  aria-label="Instagram"
                >
                  <InstagramIcon sx={{ fontSize: 20 }} />
                </button>
                <button 
                  className="w-10 h-10 bg-bg-secondary dark:bg-dark-bg-secondary hover:bg-brand-primary dark:hover:bg-dark-interactive-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-border-primary dark:border-dark-border-primary"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon sx={{ fontSize: 20 }} />
                </button>
              </div>
            </div>

          {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-text-primary dark:text-dark-text-primary mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/products" 
                    className="text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-interactive-primary transition-colors duration-300 flex items-center group"
                  >
                    <ArrowForwardIosOutlined sx={{ fontSize: 16, mr: 1 }} />
                  Products
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/favorites" 
                    className="text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-interactive-primary transition-colors duration-300 flex items-center group"
                  >
                    <ArrowForwardIosOutlined sx={{ fontSize: 16, mr: 1 }} />
                    Favorites
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/profile" 
                    className="text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-interactive-primary transition-colors duration-300 flex items-center group"
                  >
                    <ArrowForwardIosOutlined sx={{ fontSize: 16, mr: 1 }} />
                    Profile
                  </Link>
                </li>
              </ul>
            </div>

          {/* Support */}
            <div>
              <h4 className="text-lg font-bold text-text-primary dark:text-dark-text-primary mb-6">
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => {}}
                    className="text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-interactive-primary transition-colors duration-300 flex items-center group"
                  >
                    <ArrowForwardIosOutlined sx={{ fontSize: 16, mr: 1 }} />
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {}}
                    className="text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-interactive-primary transition-colors duration-300 flex items-center group"
                  >
                    <ArrowForwardIosOutlined sx={{ fontSize: 16, mr: 1 }} />
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {}}
                    className="text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-interactive-primary transition-colors duration-300 flex items-center group"
                  >
                    <ArrowForwardIosOutlined sx={{ fontSize: 16, mr: 1 }} />
                    Terms & Privacy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-border-primary dark:border-dark-border-primary py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-2">Stay Updated</h3>
                <p className="text-text-secondary dark:text-dark-text-secondary">Get the latest products and deals delivered to your inbox.</p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-80 px-4 py-3 bg-bg-primary dark:bg-dark-bg-primary border border-border-primary dark:border-dark-border-primary rounded-l-xl text-text-primary dark:text-dark-text-primary placeholder-text-tertiary dark:placeholder-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-interactive-primary focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-interactive-primary-hover hover:to-brand-secondary text-white font-bold px-6 py-3 rounded-r-xl transition-all duration-300 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border-primary dark:border-dark-border-primary py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-text-tertiary dark:text-dark-text-tertiary mb-4 md:mb-0">
                © 2024 MarketHub. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <span className="text-text-tertiary dark:text-dark-text-tertiary text-sm">Made with ❤️ for developers</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-status-success dark:bg-dark-status-success rounded-full animate-pulse"></div>
                  <span className="text-status-success dark:text-dark-status-success text-sm font-medium">All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);