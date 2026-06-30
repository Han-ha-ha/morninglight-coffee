import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, MapPin, Clock, Phone } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import MenuCard from '@/components/MenuCard';
import TestimonialCard from '@/components/TestimonialCard';
import ImageWithFallback from '@/components/ImageWithFallback';
import { menuItems, getSignatureCoffees } from '@/data/menu';
import { testimonials } from '@/data/testimonials';
import { galleryImages } from '@/data/gallery';

const featuredMenuItems = menuItems.filter((item) => item.isHot || item.isSignature).slice(0, 6);
const signatureCoffees = getSignatureCoffees();

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&h=1080&fit=crop&auto=format"
            alt="咖啡厅内景"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/70 via-coffee-950/50 to-coffee-950/80" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <p className="font-decorative italic text-2xl md:text-3xl text-gold-400 mb-4">
              每一杯，都是温暖的开始
            </p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cream-50 mb-6 leading-tight text-shadow-lg"
          >
            晨光咖啡
            <span className="block text-2xl md:text-3xl lg:text-4xl font-decorative font-normal italic mt-2 text-gold-300">
              Morning Light Coffee
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            className="text-lg md:text-xl text-cream-100/80 max-w-2xl mx-auto mb-10 font-body"
          >
            精选世界各地优质咖啡豆，由资深咖啡师手工冲煮，
            为你带来每一杯都值得细细品味的咖啡时光
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/menu" className="btn-primary">
              浏览菜单
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-cream-50 font-display tracking-wider text-sm uppercase border border-cream-50/50 rounded-sm transition-all duration-300 hover:bg-cream-50 hover:text-coffee-950"
            >
              了解更多
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream-50"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* Signature Coffee Section */}
      <section className="section-padding bg-cream-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            subtitle="Our Signature"
            title="招牌咖啡"
            description="每一款招牌都是我们的匠心之作，精选优质咖啡豆，只为呈现最完美的风味"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {signatureCoffees.map((coffee, index) => (
              <motion.div
                key={coffee.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-sm mb-6">
                  <ImageWithFallback
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <p className="font-decorative italic text-gold-400 mb-2">
                      {coffee.nameEn}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-cream-50 mb-2">
                      {coffee.name}
                    </h3>
                    <p className="text-cream-100/80 text-sm">¥{coffee.price}</p>
                  </div>
                </div>
                <p className="text-center text-coffee-600 font-body leading-relaxed">
                  {coffee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section-padding bg-coffee-900 text-cream-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="font-decorative italic text-xl md:text-2xl text-gold-400 mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-cream-50 mb-6">
                关于晨光咖啡的故事
              </h2>
              <div className="w-20 h-px bg-gold-400 mb-8" />
              <div className="space-y-5 text-cream-100/80 font-body leading-relaxed">
                <p>
                  晨光咖啡诞生于2015年的上海，源于创始人对精品咖啡的热爱与执着。我们相信，一杯好咖啡，能够点亮一整天的好心情。
                </p>
                <p>
                  我们亲自飞往世界各地的咖啡产区，精选每一颗优质咖啡豆。从埃塞俄比亚的耶加雪菲，到哥伦比亚的薇拉，再到印尼的曼特宁，只为把最纯正的咖啡风味带到你的面前。
                </p>
                <p>
                  在这里，你不仅能品尝到专业级的咖啡，更能感受到家一般的温暖。无论是清晨的第一杯拿铁，还是下午的手冲时光，晨光咖啡都将陪伴你度过每一个美好时刻。
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-gold-400 font-display tracking-wider text-sm uppercase hover:gap-4 transition-all duration-300"
              >
                了解更多
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=1000&fit=crop&auto=format"
                  alt="咖啡师制作咖啡"
                  className="w-full rounded-sm shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-gold-400/50 rounded-sm -z-0 hidden md:block" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-gold-400/30 rounded-sm -z-0 hidden md:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="section-padding bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            subtitle="Our Menu"
            title="精选美味"
            description="从香醇咖啡到精致甜点，每一款都是我们用心制作的美味佳品"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMenuItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/menu" className="btn-secondary">
              查看完整菜单
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-coffee-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle
            subtitle="Our Space"
            title="门店环境"
            description="温馨舒适的空间，为你打造最理想的咖啡时光"
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="relative overflow-hidden group rounded-sm aspect-square"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-coffee-950/40 group-hover:bg-coffee-950/20 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 right-4 text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-display text-lg">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            subtitle="Testimonials"
            title="顾客心声"
            description="听听我们的顾客怎么说，每一条评价都是我们前进的动力"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-coffee-900 text-cream-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="font-decorative italic text-xl md:text-2xl text-gold-400 mb-4">
                Visit Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-cream-50 mb-6">
                来店里坐一坐
              </h2>
              <div className="w-20 h-px bg-gold-400 mb-10" />

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-gold-400/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-cream-50 mb-1">门店地址</h4>
                    <p className="text-cream-100/70 font-body">
                      上海市静安区南京西路1266号<br />
                      恒隆广场B1层 B108铺
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-gold-400/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-cream-50 mb-1">营业时间</h4>
                    <p className="text-cream-100/70 font-body">
                      周一至周五: 08:00 - 22:00<br />
                      周六至周日: 09:00 - 23:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-gold-400/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-cream-50 mb-1">联系电话</h4>
                    <p className="text-cream-100/70 font-body">021-6288 8888</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full bg-coffee-800 rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0">
                    <img
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=800&fit=crop&auto=format"
                      alt="地图位置"
                      className="w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/90 to-transparent" />
                  </div>
                  <div className="relative z-10 text-center px-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-400 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-coffee-950" />
                    </div>
                    <p className="font-display text-xl text-cream-50 mb-2">
                      晨光咖啡
                    </p>
                    <p className="text-cream-100/60 text-sm">
                      恒隆广场店
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
