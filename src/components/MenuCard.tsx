import { motion } from 'framer-motion';
import { MenuItem } from '@/data/menu';
import ImageWithFallback from './ImageWithFallback';

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

export default function MenuCard({ item, index = 0 }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {item.tag && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gold-500 text-coffee-950 text-xs font-display tracking-widest uppercase">
            {item.tag}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-coffee-900 group-hover:text-gold-600 transition-colors duration-300">
              {item.name}
            </h3>
            <p className="font-decorative italic text-coffee-400 text-sm">
              {item.nameEn}
            </p>
          </div>
          <p className="font-display text-2xl font-semibold text-gold-500">
            ¥{item.price}
          </p>
        </div>
        <p className="text-coffee-600 text-sm leading-relaxed mt-3 line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
