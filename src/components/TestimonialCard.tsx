import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';
import ImageWithFallback from './ImageWithFallback';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="bg-white p-8 md:p-10 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-500 relative"
    >
      <div className="absolute top-6 right-6 text-gold-300/20 text-6xl font-display leading-none">
        "
      </div>
      
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? 'fill-gold-400 text-gold-400'
                : 'text-coffee-200'
            }`}
          />
        ))}
      </div>
      
      <p className="text-coffee-700 leading-relaxed mb-6 font-body italic">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center gap-4">
        <ImageWithFallback
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gold-300"
          loading="lazy"
        />
        <div>
          <p className="font-display font-semibold text-coffee-900">
            {testimonial.name}
          </p>
          {testimonial.role && (
            <p className="text-sm text-coffee-400 font-body">
              {testimonial.role}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
