import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const getNavStyle = () => {
    if (!isHome) return 'bg-white/90 backdrop-blur-md shadow-sm py-4';
    return scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6';
  };

  const getTextColor = () => {
    if (!isHome) return 'text-slate-800';
    return scrolled ? 'text-slate-800' : 'text-white';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${getNavStyle()}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-brand-gold via-brand-lightGold to-[#FFF3CD] shadow-lg shadow-brand-gold/30 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.6)] group-hover:scale-105 transition-all duration-300">
            <div className="absolute inset-[2px] bg-brand-charcoal rounded-full flex items-center justify-center">
              <Camera size={20} className="text-brand-gold group-hover:scale-110 transition-transform duration-300 md:w-6 md:h-6" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-serif font-bold ${getTextColor()} transition-colors uppercase tracking-widest drop-shadow-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-gold`}>
              Anand Reddy
            </span>
            <span className="text-[9px] md:text-[10px] font-medium tracking-[0.3em] uppercase text-brand-gold -mt-1 ml-1 opacity-90">
              Photography & Films
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-sm uppercase tracking-widest transition-colors hover:text-brand-gold ${
                location.pathname === link.path && !isHome
                  ? 'text-brand-gold' 
                  : getTextColor()
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-8 py-3 rounded-full bg-gradient-gold text-white font-medium hover:shadow-lg hover:shadow-brand-gold/30 transition-all hover:-translate-y-0.5 uppercase text-sm tracking-widest">
            Book Now
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={`md:hidden ${getTextColor()}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-ivory shadow-xl py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-4 border-t border-brand-gold/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-medium text-lg uppercase tracking-wider ${
                location.pathname === link.path ? 'text-brand-gold' : 'text-brand-charcoal'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center mt-4">
            Book Now
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
