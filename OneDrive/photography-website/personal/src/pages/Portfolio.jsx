import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

const categories = ['All', 'Wedding', 'Pre-Wedding', 'Baby', 'Maternity', 'Events', 'Fashion'];

// 5+ images per category – all verified working Unsplash IDs
const portfolioImages = [
  // ── Wedding (6)
  { id: 1,  category: 'Wedding',     src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80'  },
  { id: 2,  category: 'Wedding',     src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80'  },
  { id: 3,  category: 'Wedding',     src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80'  },
  { id: 4,  category: 'Wedding',     src: 'https://images.unsplash.com/photo-1537151608804-ea2d1169af20?auto=format&fit=crop&w=900&q=80'  },
  { id: 5,  category: 'Wedding',     src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80'  },
  { id: 6,  category: 'Wedding',     src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80'  },

  // ── Pre-Wedding (5)
  { id: 7,  category: 'Pre-Wedding', src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80'  },
  { id: 8,  category: 'Pre-Wedding', src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=900&q=80'  },
  { id: 9,  category: 'Pre-Wedding', src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80'  },
  { id: 10, category: 'Pre-Wedding', src: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=900&q=80'  },
  { id: 11, category: 'Pre-Wedding', src: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?auto=format&fit=crop&w=900&q=80'  },

  // ── Baby (5)
  { id: 12, category: 'Baby',        src: 'https://images.unsplash.com/photo-1546015720-b8b30df5aa27?auto=format&fit=crop&w=900&q=80'  },
  { id: 13, category: 'Baby',        src: 'https://images.unsplash.com/photo-1522771930-78848d92871d?auto=format&fit=crop&w=900&q=80'  },
  { id: 14, category: 'Baby',        src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80'  },
  { id: 15, category: 'Baby',        src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=900&q=80'  },
  { id: 16, category: 'Baby',        src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'  },

  // ── Maternity (5)
  { id: 17, category: 'Maternity',   src: 'https://images.unsplash.com/photo-1555243896-771a800527ea?auto=format&fit=crop&w=900&q=80'  },
  { id: 18, category: 'Maternity',   src: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=900&q=80'  },
  { id: 19, category: 'Maternity',   src: 'https://images.unsplash.com/photo-1584377735880-b2657e6a16f0?auto=format&fit=crop&w=900&q=80'  },
  { id: 20, category: 'Maternity',   src: 'https://images.unsplash.com/photo-1560585959-0e74a1a6ca54?auto=format&fit=crop&w=900&q=80'  },
  { id: 21, category: 'Maternity',   src: 'https://images.unsplash.com/photo-1530490125392-b0e03f8cd1d0?auto=format&fit=crop&w=900&q=80'  },

  // ── Events (5)
  { id: 22, category: 'Events',      src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80'  },
  { id: 23, category: 'Events',      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80'  },
  { id: 24, category: 'Events',      src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80'  },
  { id: 25, category: 'Events',      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80'  },
  { id: 26, category: 'Events',      src: 'https://images.unsplash.com/photo-1519671282429-b8e0b3e72b63?auto=format&fit=crop&w=900&q=80'  },

  // ── Fashion (6)
  { id: 27, category: 'Fashion',     src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80'  },
  { id: 28, category: 'Fashion',     src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'  },
  { id: 29, category: 'Fashion',     src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80'  },
  { id: 30, category: 'Fashion',     src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80'  },
  { id: 31, category: 'Fashion',     src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80'  },
  { id: 32, category: 'Fashion',     src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80'  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'All'
    ? portfolioImages
    : portfolioImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImg = (e) => { e.stopPropagation(); setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length); };
  const nextImg = (e) => { e.stopPropagation(); setLightboxIndex((i) => (i + 1) % filtered.length); };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 bg-white min-h-screen"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto perspective-1000">
          <TiltCard className="flex flex-col items-center justify-center p-6 cursor-default">
            <motion.span
              className="text-brand-darkGold font-semibold tracking-[0.2em] uppercase text-sm mb-4 block drop-shadow-md"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              style={{ transform: "translateZ(60px)" }}
            >
              Our Portfolio
            </motion.span>
            <motion.h1
              className="text-5xl md:text-6xl font-serif font-bold mb-6 text-brand-charcoal drop-shadow-xl"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
              style={{ transform: "translateZ(80px)" }}
            >
              Masterpiece <span className="text-gradient-gold italic font-medium">Gallery</span>
            </motion.h1>
            <motion.p
              className="text-slate-500 text-lg md:text-xl font-light leading-relaxed"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
              style={{ transform: "translateZ(40px)" }}
            >
              Every photograph is a story crafted with passion. Explore our curated HD imagery.
            </motion.p>
          </TiltCard>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm uppercase tracking-wider border ${
                activeCategory === cat
                  ? 'bg-gradient-gold text-white border-transparent shadow-lg shadow-brand-gold/30 scale-105'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-brand-gold hover:text-brand-darkGold'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((img, index) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <div className="perspective-1000 w-full h-full">
                  <TiltCard className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-brand-gold/20 transition-all duration-500 w-full h-full block">
                    <div className="relative transform-style-3d w-full h-full block" onClick={() => openLightbox(index)}>
                      <img
                        src={img.src}
                        alt={img.category}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ transform: "translateZ(-10px)" }}
                        onError={(e) => { e.target.src = `https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80`; }}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end pb-6 pointer-events-none" style={{ transform: "translateZ(30px)" }}>
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center">
                          <ZoomIn className="text-brand-gold w-8 h-8 mb-2 drop-shadow-md" />
                          <span className="text-white font-medium tracking-widest uppercase text-xs drop-shadow-md">{img.category}</span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400 text-lg">No images found for this category.</div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-brand-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-md transition-all z-[101]"
              onClick={closeLightbox}
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 z-[101] transition-all"
              onClick={prevImg}
            >
              <ChevronLeft size={32} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              src={filtered[lightboxIndex]?.src}
              alt="Lightbox"
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 z-[101] transition-all"
              onClick={nextImg}
            >
              <ChevronRight size={32} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-widest">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Portfolio;
