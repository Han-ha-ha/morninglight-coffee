export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
  role?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: '林小雨',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format',
    rating: 5,
    content: '这是我喝过最棒的手冲咖啡！耶加雪菲的花香和柑橘调层次分明，回甘悠长。店内环境也非常温馨，是周末放空的好去处。',
    date: '2024年3月',
    role: '咖啡爱好者',
  },
  {
    id: 2,
    name: '陈明轩',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
    rating: 5,
    content: '作为一个设计师，我对环境要求很高。这家店的装修品味一流，音乐选得也很有格调。在这里办公一下午，灵感都变多了。',
    date: '2024年2月',
    role: '设计师',
  },
  {
    id: 3,
    name: '王诗琪',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format',
    rating: 5,
    content: '提拉米苏真的绝了！马斯卡彭芝士的口感超级绵密，咖啡酒的比例刚刚好。配上一杯手冲，完美的下午茶组合。',
    date: '2024年4月',
    role: '美食博主',
  },
  {
    id: 4,
    name: '张伟',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format',
    rating: 4,
    content: '经常来这里见客户，环境安静舒适，咖啡品质稳定。服务员都很专业，不会打扰客人。强烈推荐他们的晨光拿铁。',
    date: '2024年3月',
    role: '创业者',
  },
  {
    id: 5,
    name: '李梦瑶',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format',
    rating: 5,
    content: '每个周末都来打卡！班尼迪克蛋是我的最爱，水波蛋切开来蛋液流出来的瞬间太治愈了。咖啡师也很帅哈哈。',
    date: '2024年5月',
    role: '自由职业者',
  },
];
