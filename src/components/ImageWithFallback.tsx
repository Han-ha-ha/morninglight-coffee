import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
}

const defaultFallback =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI0Y1RTZEMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM4QjVFMzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7lkJ/lkI/mnKxkwqvph43pnZE8L3RleHQ+PC9zdmc+';

export default function ImageWithFallback({
  src,
  alt,
  fallback = defaultFallback,
  className,
  loading = 'lazy',
  onClick,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallback);
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={cn(className)}
      onError={handleError}
      loading={loading}
      onClick={onClick}
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
    />
  );
}
