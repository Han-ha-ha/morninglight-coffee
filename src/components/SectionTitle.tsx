import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = light ? 'text-cream-50' : 'text-coffee-900';
  const descColor = light ? 'text-cream-100/70' : 'text-coffee-600';
  const subtitleColor = light ? 'text-gold-400' : 'text-gold-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`max-w-2xl mb-16 ${alignClass}`}
    >
      {subtitle && (
        <p
          className={`font-decorative text-xl md:text-2xl italic mb-3 ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-semibold ${titleColor} mb-6`}
      >
        {title}
      </h2>
      <div className={`gold-divider ${align === 'center' ? '' : 'mx-0'} mb-6`} />
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
