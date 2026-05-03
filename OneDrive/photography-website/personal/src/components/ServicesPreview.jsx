import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const previewServices = [
  {
    title: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Pre-Wedding",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Baby Shoot",
    image: "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Maternity",
    image: "https://images.unsplash.com/photo-1555243896-771a800527ea?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Events",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Product Photography",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Corporate Shoot",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Drone Photography",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Album Design",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ServicesPreview({ onServiceClick }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      setCurrentIndex(Math.round(scrollLeft / (clientWidth / 2)));
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleClick = () => {
    if (onServiceClick) {
      onServiceClick();
    }
  };

  return (
    <section className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-brand-darkGold font-semibold tracking-[0.2em] uppercase text-sm mb-4 block drop-shadow-md">
            Sneak Peek
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-charcoal mb-3 drop-shadow-md">
            Our Most Popular <span className="text-gradient-gold italic font-medium">Services</span>
          </h2>
          <p className="text-slate-500 font-light text-lg max-w-2xl mx-auto">
            Discover our most sought-after photography services, each crafted with premium quality and artistic excellence.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-8">
          {previewServices.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                onClick={handleClick}
                className="relative block rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 h-80 bg-brand-black"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />

                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                    <h3 className="text-white font-serif font-bold text-xl md:text-2xl mb-2 drop-shadow-lg">
                      {item.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-[0_0_8px_#C5A059]" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-brand-gold/50 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-brand-gold/20"
          >
            <ChevronLeft className="w-5 h-5 text-brand-charcoal" />
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-brand-gold/20"
          >
            <ChevronRight className="w-5 h-5 text-brand-charcoal" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12 pb-4"
          >
            {previewServices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-72 group"
              >
                <div
                  onClick={handleClick}
                  className="relative block rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 h-80 bg-brand-black"
                >
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    loading="lazy"
                  />

                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                      <h3 className="text-white font-serif font-bold text-xl md:text-2xl mb-2 drop-shadow-lg">
                        {item.title}
                      </h3>
                      <div className="w-8 h-0.5 bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-[0_0_8px_#C5A059]" />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-brand-gold/50 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(previewServices.length / 2) }, (_, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-brand-gold scale-125' : 'bg-slate-300'
                }`}
                animate={i === currentIndex ? { scale: 1.25 } : { scale: 1 }}
              />
            ))}
          </div>

          {/* Swipe Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-center mt-4"
          >
            <motion.p
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-slate-500 text-sm font-light inline-flex items-center gap-2"
            >
              <span>Swipe to explore</span>
              <ChevronRight className="w-4 h-4" />
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
