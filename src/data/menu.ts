export interface MenuItem {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  category: 'coffee' | 'dessert' | 'light';
  description: string;
  image: string;
  tag?: string;
  isHot?: boolean;
  isSignature?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: '晨光拿铁',
    nameEn: 'Morning Latte',
    price: 38,
    category: 'coffee',
    description: '精选埃塞俄比亚咖啡豆，搭配丝滑牛奶，清晨的第一缕温暖',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=600&fit=crop&auto=format',
    tag: '招牌',
    isHot: true,
    isSignature: true,
  },
  {
    id: 2,
    name: '手冲耶加雪菲',
    nameEn: 'Pour Over Yirgacheffe',
    price: 48,
    category: 'coffee',
    description: '埃塞俄比亚耶加雪菲，花香柑橘调，层次丰富，回甘悠长',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop&auto=format',
    tag: '精品',
    isHot: true,
  },
  {
    id: 3,
    name: '冰美式',
    nameEn: 'Iced Americano',
    price: 28,
    category: 'coffee',
    description: '双份浓缩咖啡，加入冰块与清水，清爽纯粹',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&h=600&fit=crop&auto=format',
    isHot: false,
  },
  {
    id: 4,
    name: '焦糖玛奇朵',
    nameEn: 'Caramel Macchiato',
    price: 42,
    category: 'coffee',
    description: '浓郁咖啡与香甜焦糖的完美交融，丝滑细腻',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&h=600&fit=crop&auto=format',
    isHot: true,
  },
  {
    id: 5,
    name: '抹茶拿铁',
    nameEn: 'Matcha Latte',
    price: 36,
    category: 'coffee',
    description: '宇治抹茶粉与牛奶的完美融合，清新自然',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&h=600&fit=crop&auto=format',
    tag: '新品',
    isHot: true,
  },
  {
    id: 6,
    name: '燕麦Dirty',
    nameEn: 'Oat Dirty',
    price: 40,
    category: 'coffee',
    description: '浓缩咖啡缓缓注入冰燕麦奶，层次分明，口感浓郁',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&h=600&fit=crop&auto=format',
    isHot: false,
  },
  {
    id: 7,
    name: '提拉米苏',
    nameEn: 'Tiramisu',
    price: 45,
    category: 'dessert',
    description: '经典意式甜点，马斯卡彭芝士搭配浓缩咖啡，层次丰富',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=600&fit=crop&auto=format',
    tag: '招牌',
    isSignature: true,
  },
  {
    id: 8,
    name: '纽约芝士蛋糕',
    nameEn: 'New York Cheesecake',
    price: 42,
    category: 'dessert',
    description: '浓郁芝士香，口感绵密，搭配酸甜蓝莓酱',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=600&fit=crop&auto=format',
    isHot: false,
  },
  {
    id: 9,
    name: '法式焦糖布丁',
    nameEn: 'Crème Brûlée',
    price: 38,
    category: 'dessert',
    description: '香滑奶油布丁，焦糖脆皮，经典法式风味',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=600&fit=crop&auto=format',
    isHot: false,
  },
  {
    id: 10,
    name: '巧克力熔岩蛋糕',
    nameEn: 'Chocolate Lava Cake',
    price: 48,
    category: 'dessert',
    description: '外酥内软，浓郁巧克力流心，搭配香草冰淇淋',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=600&fit=crop&auto=format',
    tag: '人气',
    isHot: true,
  },
  {
    id: 11,
    name: '可颂',
    nameEn: 'Croissant',
    price: 22,
    category: 'light',
    description: '法式经典，层层酥脆，黄油香气浓郁',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=600&fit=crop&auto=format',
    isHot: false,
  },
  {
    id: 12,
    name: '牛油果吐司',
    nameEn: 'Avocado Toast',
    price: 48,
    category: 'light',
    description: '全麦吐司搭配新鲜牛油果、水波蛋，健康美味',
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=600&h=600&fit=crop&auto=format',
    tag: '健康',
    isHot: false,
  },
  {
    id: 13,
    name: '班尼迪克蛋',
    nameEn: 'Eggs Benedict',
    price: 58,
    category: 'light',
    description: '英式松饼配火腿、水波蛋和荷兰酱，经典早午餐',
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    isHot: true,
  },
  {
    id: 14,
    name: '松饼拼盘',
    nameEn: 'Pancake Stack',
    price: 52,
    category: 'light',
    description: '蓬松松饼搭配新鲜水果、枫糖浆和黄油',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=600&fit=crop&auto=format',
    tag: '人气',
    isHot: true,
  },
];

export const getSignatureCoffees = () => {
  const signatureIds = [1, 7, 2];
  return signatureIds.map(id => menuItems.find(item => item.id === id)!).filter(Boolean);
};
export const getHotItems = () => menuItems.filter(item => item.isHot);
export const getItemsByCategory = (category: 'coffee' | 'dessert' | 'light') => 
  menuItems.filter(item => item.category === category);
