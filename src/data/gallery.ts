export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  span?: 'tall' | 'wide' | 'normal';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=600&fit=crop&auto=format',
    alt: '咖啡厅主厅',
    span: 'wide',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=600&fit=crop&auto=format',
    alt: '阅读角落',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=600&fit=crop&auto=format',
    alt: '精品咖啡豆',
  },
];