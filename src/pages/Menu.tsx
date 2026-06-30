import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Cake, Sandwich } from 'lucide-react';
import MenuCard from '@/components/MenuCard';
import { menuItems } from '@/data/menu';

type Category = 'all' | 'coffee' | 'dessert' | 'light';

const categories = [
  { id: 'all' as Category, name: '全部', icon: null },
  { id: 'coffee' as Category, name: '咖啡', icon: Coffee },
  { id: 'dessert' as Category, name: '甜点', icon: Cake },
  { id: 'light' as Category, name: '轻食', icon: Sandwich },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream-50 pt-24">
      {/* Page Header */}
      <section className="relative py-20 md:py-28 bg-coffee-900 text-cream-50 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=600&fit=crop&auto=format"
            alt="菜单背景"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/80 to-coffee-900/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-decorative italic text-xl md:text-2xl text-gold-400 mb-4"
          >
            Our Menu
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream-50 mb-6"
          >
            精选菜单
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-gold-400 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-cream-100/70 max-w-2xl mx-auto font-body"
          >
            从香醇的手冲咖啡到精致的甜点轻食，每一款都是我们用心制作的美味
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-40 bg-cream-50/95 backdrop-blur-md border-b border-coffee-200/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center gap-2 md:gap-8 py-6 overflow-x-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative flex items-center gap-2 px-4 md:px-6 py-3 font-display text-sm md:text-base tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'text-coffee-900'
                      : 'text-coffee-500 hover:text-coffee-700'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5" />}
                  {category.name}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <MenuCard key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
