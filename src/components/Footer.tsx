import { Link } from 'react-router-dom';
import { Coffee, MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-coffee-950 text-cream-100 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Coffee className="w-8 h-8 text-gold-400" />
              <span className="font-display text-2xl font-semibold text-cream-50 tracking-wider">
                晨光咖啡
              </span>
            </Link>
            <p className="text-cream-100/60 leading-relaxed mb-6 font-body">
              每一杯咖啡，都是一段温暖的故事。我们用心烘焙，只为给你带来最纯粹的咖啡体验。
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-cream-100/20 rounded-full flex items-center justify-center text-cream-100/60 hover:bg-gold-400 hover:text-coffee-950 hover:border-gold-400 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-cream-100/20 rounded-full flex items-center justify-center text-cream-100/60 hover:bg-gold-400 hover:text-coffee-950 hover:border-gold-400 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-cream-50 mb-6 tracking-wide">
              快速链接
            </h4>
            <ul className="space-y-3">
              {['首页', '菜单', '关于我们', '门店地址'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === '首页' ? '/' : item === '菜单' ? '/menu' : '/about'}
                    className="text-cream-100/60 hover:text-gold-400 transition-colors duration-300 font-body"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-cream-50 mb-6 tracking-wide">
              营业时间
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div className="font-body">
                  <p className="text-cream-100/80">周一至周五</p>
                  <p className="text-cream-100/60">08:00 - 22:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div className="font-body">
                  <p className="text-cream-100/80">周六至周日</p>
                  <p className="text-cream-100/60">09:00 - 23:00</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-cream-50 mb-6 tracking-wide">
              联系我们
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-cream-100/60 font-body">
                  上海市静安区南京西路1266号<br />
                  恒隆广场B1层 B108铺
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <p className="text-cream-100/60 font-body">021-6288 8888</p>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <p className="text-cream-100/60 font-body">hello@morninglight.cafe</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-100/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-cream-100/40 text-sm font-body">
              © 2024 晨光咖啡 Morning Light Coffee. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-cream-100/40 text-sm hover:text-gold-400 transition-colors font-body">
                隐私政策
              </a>
              <a href="#" className="text-cream-100/40 text-sm hover:text-gold-400 transition-colors font-body">
                服务条款
              </a>
            </div>
          </div>
          <div className="text-center border-t border-cream-100/5 pt-6">
            <p className="text-cream-100/30 text-xs font-body">
              Designed & Developed by{' '}
              <a
                href="mailto:13531521167@163.com"
                className="text-gold-400/60 hover:text-gold-400 transition-colors"
              >
                Han
              </a>
              {' | '}
              <a
                href="mailto:13531521167@163.com"
                className="text-cream-100/30 hover:text-gold-400 transition-colors"
              >
                13531521167@163.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
