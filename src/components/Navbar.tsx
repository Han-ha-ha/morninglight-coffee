import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coffee } from 'lucide-react';

const navLinks = [
  { name: '首页', path: '/' },
  { name: '菜单', path: '/menu' },
  { name: '关于我们', path: '/about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-coffee-950/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Coffee
            className={`w-8 h-8 transition-colors duration-300 ${
              isScrolled ? 'text-gold-400' : 'text-cream-50'
            } group-hover:text-gold-400`}
          />
          <span
            className={`font-display text-xl md:text-2xl font-semibold tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-cream-50' : 'text-cream-50'
            }`}
          >
            晨光咖啡
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-display text-sm tracking-widest uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-gold-400'
                  : isScrolled
                  ? 'text-cream-50 hover:text-gold-400'
                  : 'text-cream-50/90 hover:text-gold-400'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-2 left-0 h-px bg-gold-400 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0'
                }`}
              />
            </Link>
          ))}
          <Link
            to="/menu"
            className="px-6 py-2 border border-gold-400/50 text-gold-400 font-display text-sm tracking-widest uppercase hover:bg-gold-400 hover:text-coffee-950 transition-all duration-300"
          >
            立即点单
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-cream-50 p-2"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-coffee-950/98 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-3 font-display text-lg tracking-wider ${
                      location.pathname === link.path
                        ? 'text-gold-400'
                        : 'text-cream-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  to="/menu"
                  className="block w-full text-center px-6 py-3 border border-gold-400/50 text-gold-400 font-display text-sm tracking-widest uppercase"
                >
                  立即点单
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
