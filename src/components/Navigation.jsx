import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiBarChart3, FiTool, FiUsers } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { name: 'About', href: '#about', external: false },
    { name: 'Services', href: '#services', external: false },
    { name: 'Tools', href: '#tools', external: false, icon: FiTool },
    { name: 'Testimonials', href: '/testimonials', external: true, icon: FiUsers },
    { name: 'Contact', href: '#contact', external: false },
    { name: 'Analytics', href: '/analytics', external: true, icon: FiBarChart3 }
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (item.external) {
      // Handle routing to different pages
      navigate(item.href);
    } else {
      // Handle section scrolling within the same page
      if (location.pathname !== '/') {
        // If we're not on the home page, navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(item.href.replace('#', ''));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // We're on the home page, just scroll
        scrollToSection(e, item.href);
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <a
              href="/"
              onClick={handleLogoClick}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Next-Gen SEO and AIO
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.icon && <SafeIcon icon={item.icon} />}
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-800">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="flex items-center gap-2 text-slate-300 hover:text-white block px-3 py-2 text-base font-medium"
                >
                  {item.icon && <SafeIcon icon={item.icon} />}
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;