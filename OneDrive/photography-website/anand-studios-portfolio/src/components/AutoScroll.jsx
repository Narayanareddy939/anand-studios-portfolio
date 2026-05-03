import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TiltCard } from './TiltCard';

const testimonials = [
  { id: 1, name: 'Priya & Rahul', text: 'An absolute dream! They captured our wedding with such grace. The photos look like a magazine cover.', image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" },
  { id: 2, name: 'Sneha Reddy', text: 'Unparalleled elegance. The team is professional and the cinematic quality of our pre-wedding shoot was stunning.', image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
  { id: 3, name: 'Karthik M.', text: 'Truly world-class. From the lighting to direction, every detail felt premium and exclusive.', image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
  { id: 4, name: 'Divya & Arjun', text: 'Our maternity shoot was magical. Every frame told our story beautifully. Highly recommended!', image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" },
  { id: 5, name: 'Ravi S.', text: 'Professional team, stunning results. The fashion portfolio they created opened new doors for my career.', image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
];

const AutoScrollTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(p => (p + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => { setDirection(-1); setCurrent(p => (p - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setDirection(1); setCurrent(p => (p + 1) % testimonials.length); };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="py-24 bg-brand-ivory relative overflow-hidden border-y border-brand-gold/10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.span className="text-brand-darkGold font-semibold tracking-[0.2em] uppercase text-sm mb-4 block"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Client Experiences
          </motion.span>
          <motion.h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            A Legacy of <span className="text-gradient-gold italic font-medium">Excellence</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto relative perspective-1000 mt-8">
          <div className="overflow-visible relative h-[380px] md:h-[300px] flex items-center justify-center w-full">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="w-full absolute"
              >
                <TiltCard className="bg-white rounded-3xl p-10 shadow-2xl border border-brand-gold/10 w-full group cursor-grab active:cursor-grabbing">
                  <div className="relative transform-style-3d">
                    <div className="flex gap-1 text-brand-gold mb-6" style={{ transform: "translateZ(40px)" }}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <p className="text-brand-charcoal/80 text-xl italic leading-relaxed font-serif mb-8 drop-shadow-sm" style={{ transform: "translateZ(60px)" }}>
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4 border-t border-brand-gold/10 pt-6" style={{ transform: "translateZ(30px)" }}>
                      <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold/30 shadow-md" style={{ transform: "translateZ(50px)" }} />
                      <div>
                        <h4 className="font-bold text-brand-charcoal uppercase tracking-wide text-sm">{t.name}</h4>
                        <span className="text-xs text-brand-darkGold tracking-widest uppercase">Verified Client</span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-darkGold hover:bg-brand-gold hover:text-white transition-all duration-300">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-500 ${i === current ? 'w-8 h-2 bg-brand-gold' : 'w-2 h-2 bg-brand-gold/30'}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-darkGold hover:bg-brand-gold hover:text-white transition-all duration-300">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoScrollTestimonials;
