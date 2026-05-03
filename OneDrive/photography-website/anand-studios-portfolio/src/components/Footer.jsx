import { Link } from 'react-router-dom';
import { Camera, Instagram, Mail, Phone, MapPin, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-slate-300 pt-20 pb-10 border-t border-brand-gold/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-gradient-gold rounded-xl text-white shadow-lg shadow-brand-gold/20">
                <Camera size={24} />
              </div>
              <span className="text-2xl font-serif font-bold text-white uppercase tracking-widest">
                Anand Reddy
              </span>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-md font-light">
              We capture moments that last forever. Premium photography and cinematic videography services based in Anantapur, serving clients worldwide.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/anand_studioph" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 group border border-white/10 hover:border-brand-gold">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 group border border-white/10 hover:border-brand-gold">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 group border border-white/10 hover:border-brand-gold">
                <Youtube size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-brand-gold transition-colors flex items-center gap-2 font-light uppercase text-sm tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-5 font-light">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-brand-gold shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                <span>Anand Studio & Video, Near RTO Office, JNTU College, Bhairav Nagar, Anantapur</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="text-brand-gold shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span>+91 8309332315 <br /> 08904593141</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-brand-gold shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <a href="mailto:anandreddy@gmail.com" className="hover:text-white transition-colors">anandreddy@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-light uppercase tracking-widest">&copy; {new Date().getFullYear()} Anand Reddy Studios. All rights reserved.</p>
          <p className="text-slate-500 text-sm font-light">Crafted with <span className="text-brand-gold">♥</span> for beautiful memories.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
