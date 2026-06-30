import { motion } from 'framer-motion';
import { Bean, Leaf, Award, Heart, Coffee, Users, Clock, MapPin } from 'lucide-react';
import ImageWithFallback from '@/components/ImageWithFallback';

const values = [
  {
    icon: Bean,
    title: '精选豆子',
    description: '我们亲自飞往世界各地的咖啡产区，严选每一颗优质生豆，只为呈现最纯正的风味。',
  },
  {
    icon: Award,
    title: '手工烘焙',
    description: '每一批咖啡豆都由资深烘焙师手工烘焙，精准把控火候，激发豆子的最佳风味。',
  },
  {
    icon: Coffee,
    title: '专业冲煮',
    description: '我们的咖啡师均经过专业培训，精通各种冲煮方式，为你呈现完美的每一杯。',
  },
  {
    icon: Heart,
    title: '用心服务',
    description: '我们相信好咖啡需要配好服务，每一位员工都在用真心迎接每一位客人。',
  },
];

const teamMembers = [
  {
    name: '陈晨光',
    role: '创始人 / 主理人',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&auto=format',
    bio: '10年精品咖啡从业经验，曾多次获得咖啡师大赛奖项。',
  },
  {
    name: '林雨涵',
    role: '首席咖啡师',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=750&fit=crop&auto=format',
    bio: '世界咖啡师大赛中国区亚军，擅长手冲与创意咖啡。',
  },
  {
    name: '王志强',
    role: '烘焙师',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop&auto=format',
    bio: '8年咖啡烘焙经验，对每一款豆子都有独到的烘焙曲线。',
  },
];

const milestones = [
  { year: '2015', title: '品牌创立', description: '晨光咖啡在上海静安区开设了第一家门店。' },
  { year: '2017', title: '烘焙工坊', description: '建立了自己的咖啡烘焙工坊，实现从生豆到杯中的全程把控。' },
  { year: '2019', title: '获奖殊荣', description: '荣获中国精品咖啡协会颁发的年度最佳咖啡厅奖。' },
  { year: '2022', title: '持续发展', description: '不断探索咖啡的更多可能性，推出多款创意饮品。' },
  { year: '2024', title: '新的篇章', description: '继续前行，把更好的咖啡体验带给更多的人。' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-24">
      {/* Page Header */}
      <section className="relative py-20 md:py-28 bg-coffee-900 text-cream-50 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=600&fit=crop&auto=format"
            alt="关于我们背景"
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
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream-50 mb-6"
          >
            关于晨光咖啡
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
            用一杯好咖啡，温暖你的每一天
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=1000&fit=crop&auto=format"
                  alt="品牌故事"
                  className="w-full rounded-sm shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold-400/50 rounded-sm -z-0 hidden md:block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <p className="font-decorative italic text-xl md:text-2xl text-gold-500 mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-coffee-900 mb-6">
                我们的故事
              </h2>
              <div className="w-20 h-px bg-gold-400 mb-8" />
              <div className="space-y-5 text-coffee-700 font-body leading-relaxed">
                <p>
                  <span className="text-6xl font-display text-gold-500 float-left mr-3 leading-none">
                    20
                  </span>
                  15年的一个清晨，创始人陈晨光在上海的一条老弄堂里开出了第一家晨光咖啡。那时候，它只是一个小小的门面，只有几张桌子和一台咖啡机。
                </p>
                <p>
                  但对咖啡的热爱，让这个小小的空间变得不再平凡。陈晨光相信，一杯好咖啡不仅仅是饮品，更是一种生活态度，是忙碌生活中的一抹温柔。
                </p>
                <p>
                  多年来，我们坚持亲自飞往世界各地的咖啡产区，与当地的咖农建立深厚的联系，只为把最优质的咖啡豆带到你的面前。从埃塞俄比亚的高原，到哥伦比亚的山谷，每一颗豆子都承载着我们对品质的执着。
                </p>
                <p>
                  如今，晨光咖啡已经成为许多人心中温暖的存在。但我们始终不忘初心，继续用心做好每一杯咖啡，用真诚服务每一位客人。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-coffee-900 text-cream-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="font-decorative italic text-xl md:text-2xl text-gold-400 mb-4">
              Our Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-cream-50 mb-6">
              我们的理念
            </h2>
            <div className="w-20 h-px bg-gold-400 mx-auto mb-6" />
            <p className="text-cream-100/70 font-body">
              品质、用心、温暖——这是晨光咖啡始终坚守的信念
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 border-2 border-gold-400/50 rounded-full flex items-center justify-center group-hover:bg-gold-400/10 group-hover:border-gold-400 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream-50 mb-3">
                  {value.title}
                </h3>
                <p className="text-cream-100/60 text-sm font-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="font-decorative italic text-xl md:text-2xl text-gold-500 mb-4">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-coffee-900 mb-6">
              发展历程
            </h2>
            <div className="w-20 h-px bg-gold-400 mx-auto" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gold-300/50 hidden md:block" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                  }`}
                >
                  <span className="font-display text-4xl md:text-5xl font-bold text-gold-400">
                    {milestone.year}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-coffee-900 mt-2 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-coffee-600 font-body">
                    {milestone.description}
                  </p>
                </div>
                
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gold-400 rounded-full border-4 border-cream-50 hidden md:block z-10" />
                
                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-cream-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="font-decorative italic text-xl md:text-2xl text-gold-500 mb-4">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-coffee-900 mb-6">
              认识我们的团队
            </h2>
            <div className="w-20 h-px bg-gold-400 mx-auto mb-6" />
            <p className="text-coffee-600 font-body">
              每一杯好咖啡的背后，都有一群热爱咖啡的人在用心付出
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-sm mb-6">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/60 via-transparent to-transparent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-coffee-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gold-500 font-body text-sm mb-3">{member.role}</p>
                <p className="text-coffee-600 text-sm font-body">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
