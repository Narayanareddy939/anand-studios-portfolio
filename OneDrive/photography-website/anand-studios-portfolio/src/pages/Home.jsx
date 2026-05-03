import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Camera, Users, Instagram, ChevronDown } from 'lucide-react';
import AutoScrollTestimonials from '../components/AutoScroll';
import BookingForm from '../components/BookingForm';
import { TiltCard } from '../components/TiltCard';
import ServicesPreview from '../components/ServicesPreview';

const heroImages = [
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=80",
];

const stats = [
  { icon: <Heart size={28} />, value: "1000+", label: "Happy Clients" },
  { icon: <Star size={28} />, value: "5+", label: "Years Experience" },
  { icon: <Users size={28} />, value: "15+", label: "Professional Team" },
  { icon: <Camera size={28} />, value: "5000+", label: "Shoots Completed" },
];

const testimonials = [
  { id: 1, name: 'Priya & Rahul', text: 'An absolute dream! They captured our wedding with such grace. The photos look like a magazine cover.', image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" },
  { id: 2, name: 'Sneha Reddy', text: 'Unparalleled elegance. The team is professional and the cinematic quality of our pre-wedding shoot was stunning.', image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
  { id: 3, name: 'Karthik M.', text: 'Truly world-class. From the lighting to direction, every detail felt premium and exclusive.', image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
];

const instagramPosts = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1555243896-771a800527ea?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=400&q=80",
];

/* ── Star Rating Review Section ─────────────────── */
const ReviewSection = () => {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  const [form, setForm] = useState({ name: '', comment: '' });
  const [reviews, setReviews] = useState([
    { name: 'Divya K.', rating: 5, comment: 'Absolutely magical experience! Every shot was perfect.' },
    { name: 'Ravi S.', rating: 5, comment: 'Professional team, stunning results. Highly recommended!' },
  ]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selected || !form.name.trim()) return;
    setReviews(prev => [{ name: form.name, rating: selected, comment: form.comment }, ...prev]);
    setForm({ name: '', comment: '' });
    setSelected(0);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 bg-white border-t border-brand-gold/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="text-brand-darkGold font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Share Your Story</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal">
            Leave a <span className="text-gradient-gold italic font-medium">Review</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Review Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="perspective-1000"
          >
            <TiltCard className="bg-brand-ivory rounded-[2rem] p-8 border border-brand-gold/10 shadow-lg cursor-default h-full w-full">
              <div className="relative transform-style-3d w-full h-full">
                <h3 className="text-xl font-serif font-bold text-brand-charcoal mb-6" style={{ transform: "translateZ(40px)" }}>Your Experience</h3>

                {/* Stars */}
                <div className="flex gap-2 mb-6" style={{ transform: "translateZ(50px)" }}>
                  {[1,2,3,4,5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHovered(star)}
                      onMouseLeave={() => setHovered(0)}
                      onClick={() => setSelected(star)}
                      className="transition-transform hover:scale-125"
                    >
                      <Star
                        size={32}
                        className="transition-colors duration-200 drop-shadow-md"
                        fill={(hovered || selected) >= star ? '#C5A059' : 'none'}
                        stroke={(hovered || selected) >= star ? '#C5A059' : '#94a3b8'}
                      />
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" style={{ transform: "translateZ(30px)" }}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                    required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold text-slate-800 shadow-inner"
                  />
                  <textarea
                    rows={3}
                    value={form.comment}
                    onChange={(e) => setForm(p => ({ ...p, comment: e.target.value }))}
                    placeholder="Tell us about your experience (optional)"
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold text-slate-800 resize-none shadow-inner"
                  />
                  <button type="submit" className="btn-primary w-full py-3 hover:shadow-[0_0_15px_#C5A059]">
                    {submitted ? '✓ Thank You!' : 'Submit Review'}
                  </button>
                </form>
              </div>
            </TiltCard>
          </motion.div>

          {/* Reviews List */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
            className="space-y-5 max-h-[420px] overflow-y-auto pr-2"
          >
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 30, scale: 0.95 },
                  visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
                }}
                className="perspective-1000"
              >
                <TiltCard className="bg-brand-ivory rounded-2xl p-6 border border-brand-gold/10 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default">
                  <div className="relative transform-style-3d">
                    <div className="flex gap-1 mb-2" style={{ transform: "translateZ(30px)" }}>
                      {[1,2,3,4,5].map(s => (
                        <Star key={s} size={14} fill={r.rating >= s ? '#C5A059' : 'none'} stroke={r.rating >= s ? '#C5A059' : '#cbd5e1'} />
                      ))}
                    </div>
                    {r.comment && <p className="text-slate-600 font-light italic text-sm mb-3 drop-shadow-sm" style={{ transform: "translateZ(40px)" }}>"{r.comment}"</p>}
                    <p className="font-semibold text-brand-charcoal text-sm uppercase tracking-wider" style={{ transform: "translateZ(50px)" }}>{r.name}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Main Home Component ─────────────────────────── */
const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const servicesRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const scrollToBooking = () => {
    document.getElementById('home-booking-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-ivory"
    >
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-brand-charcoal">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Luxury Photography"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left perspective-1000">
          <TiltCard className="max-w-4xl mt-12 md:mt-28 flex flex-col items-center md:items-start group cursor-default">
            <motion.span
              className="inline-block py-2 px-6 rounded-full bg-brand-charcoal/40 backdrop-blur-md text-brand-gold text-[10px] md:text-sm font-semibold tracking-[0.2em] mb-6 border border-brand-gold/30 shadow-lg"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              style={{ transform: "translateZ(60px)" }}
            >
              LUXURY PHOTOGRAPHY STUDIO — ANANTAPUR
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-brand-ivory drop-shadow-2xl"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              style={{ transform: "translateZ(80px)" }}
            >
              We Capture Moments<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-gold italic font-medium"> That Last Forever.</span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-xl text-slate-200 mb-10 leading-relaxed font-light max-w-2xl tracking-wide drop-shadow-md"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              style={{ transform: "translateZ(40px)" }}
            >
              World-class photography & cinematic videography tailored for the most discerning clients.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              style={{ transform: "translateZ(50px)" }}
            >
              <Link to="/portfolio" className="btn-primary shadow-lg shadow-brand-gold/20 w-full sm:w-auto hover:shadow-brand-gold/50">
                View Portfolio
              </Link>
              <button
                onClick={scrollToBooking}
                className="btn-outline !text-brand-ivory !border-brand-ivory hover:!bg-brand-ivory hover:!text-brand-charcoal w-full sm:w-auto"
              >
                Book Now
              </button>
              <button
                onClick={scrollToServices}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 hover:border-brand-gold hover:text-brand-gold transition-all duration-300 text-sm uppercase tracking-wider font-medium w-full sm:w-auto"
              >
                Discover <ChevronDown size={16} className="animate-bounce" />
              </button>
            </motion.div>
          </TiltCard>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-10">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`h-1.5 rounded-full transition-all duration-700 ${currentImage === idx ? 'w-10 bg-brand-gold' : 'w-3 bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────── */}
      <section className="py-12 bg-brand-ivory relative -mt-10 rounded-t-[3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.08)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center perspective-1000 h-full w-full"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 150, damping: 15 } }
                }}
              >
                <TiltCard className="group h-full flex flex-col items-center justify-center p-6 bg-brand-ivory rounded-3xl border border-transparent hover:border-brand-gold/20 shadow-none hover:shadow-xl transition-all duration-500 cursor-default">
                  <div className="relative transform-style-3d w-full flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full border border-brand-gold/30 bg-white flex items-center justify-center text-brand-darkGold group-hover:bg-gradient-gold group-hover:text-white transition-all duration-500 shadow-sm" style={{ transform: "translateZ(40px)" }}>
                      {stat.icon}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-serif font-bold text-brand-charcoal mb-1" style={{ transform: "translateZ(60px)" }}>{stat.value}</h3>
                    <p className="text-slate-500 font-medium tracking-widest uppercase text-xs" style={{ transform: "translateZ(20px)" }}>{stat.label}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services Preview ──────── */}
      <ServicesPreview onServiceClick={scrollToServices} />

      {/* ── Featured Services (anchor target) ──────── */}
      <section ref={servicesRef} className="py-16 bg-white scroll-mt-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-brand-darkGold font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-brand-charcoal">
              The Art of <span className="text-gradient-gold italic font-medium">Storytelling</span>
            </h2>
          </div>

          <div className="relative w-full overflow-hidden mt-12 py-8">
            <motion.div
              className="flex gap-6 px-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {[
                { title: 'Pre Wedding-Shoot', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80' },
                { title: 'Wedding Photography', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
                { title: 'Maternity Shoot', img: 'https://images.unsplash.com/photo-1555243896-771a800527ea?auto=format&fit=crop&w=800&q=80' },
                { title: 'Baby Shoot', img: 'https://images.unsplash.com/photo-1546015720-b8b30df5aa27?auto=format&fit=crop&w=800&q=80' },
                { title: 'Event Photography', img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80' },
                { title: 'Corporate Photography', img: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80' },
                { title: 'Product Photography', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' },
                { title: 'Drone Photography', img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80' },
                { title: 'Nature and Landscape', img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80' },
                { title: 'Homestays & Resorts', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80' },
                { title: 'Dance Photography', img: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&w=800&q=80' },
                { title: 'Album Designing', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80' },
                // Duplicate for seamless scroll
                { title: 'Pre Wedding-Shoot', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80' },
                { title: 'Wedding Photography', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
                { title: 'Maternity Shoot', img: 'https://images.unsplash.com/photo-1555243896-771a800527ea?auto=format&fit=crop&w=800&q=80' },
                { title: 'Baby Shoot', img: 'https://images.unsplash.com/photo-1546015720-b8b30df5aa27?auto=format&fit=crop&w=800&q=80' },
                { title: 'Event Photography', img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80' },
                { title: 'Corporate Photography', img: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80' },
                { title: 'Product Photography', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' },
                { title: 'Drone Photography', img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80' },
                { title: 'Nature and Landscape', img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80' },
                { title: 'Homestays & Resorts', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80' },
                { title: 'Dance Photography', img: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&w=800&q=80' },
                { title: 'Album Designing', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80' },
              ].map((service, index) => (
                <div key={index} className="h-[340px] w-[260px] md:h-[400px] md:w-[300px] shrink-0 perspective-1000">
                  <TiltCard className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-brand-gold/10">
                    <div className="relative w-full h-full bg-brand-black">
                      <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000" style={{ transform: "translateZ(-20px) scale(1.1)" }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent flex items-end p-8" style={{ transform: "translateZ(30px)" }}>
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                          <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3 shadow-black drop-shadow-md">{service.title}</h3>
                          <div className="w-10 h-0.5 bg-brand-gold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_#C5A059]" />
                          <Link to="/services" className="inline-flex items-center gap-2 text-brand-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-widest text-[10px] md:text-xs drop-shadow-md hover:text-white">
                            Discover More <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2 px-10 py-4 shadow-xl shadow-brand-gold/20 text-sm">
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────── */}
      <AutoScrollTestimonials />

      {/* ── Star Review Section ─────────────────────── */}
      <ReviewSection />

      {/* ── Instagram Marquee ──────────────────────── */}
      <section className="py-24 bg-brand-charcoal text-white overflow-hidden border-t border-brand-gold/20">
        <div className="container mx-auto px-6 lg:px-12 mb-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <span className="text-brand-gold font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Join Our Community</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2">
              Follow The <span className="italic font-medium text-brand-lightGold">Journey</span>
            </h2>
            <p className="text-slate-400 font-light">@anand_studioph • Be inspired by our latest creations</p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
            href="https://www.instagram.com/anand_studioph"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-brand-gold/50 text-brand-lightGold hover:bg-brand-gold hover:text-brand-charcoal hover:border-transparent transition-all duration-300"
          >
            <Instagram size={20} />
            <span className="font-medium uppercase tracking-widest text-xs">Follow Us</span>
          </motion.a>
        </div>

        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex gap-6 px-3 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {instagramPosts.map((post, index) => (
              <div key={index} className="w-[220px] h-[280px] md:w-[320px] md:h-[400px] shrink-0 perspective-1000">
                <TiltCard className="group relative w-full h-full overflow-hidden rounded-xl shadow-2xl">
                  <a
                    href="https://www.instagram.com/anand_studioph"
                    target="_blank" rel="noopener noreferrer"
                    className="block w-full h-full bg-brand-black"
                  >
                    <img src={post} alt="Instagram" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" style={{ transform: "translateZ(-10px) scale(1.1)" }} />
                    <div className="absolute inset-0 bg-brand-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center" style={{ transform: "translateZ(30px)" }}>
                      <Instagram className="text-white w-10 h-10 drop-shadow-lg" />
                    </div>
                  </a>
                </TiltCard>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA / Booking Section ────────────────────────────────────── */}
      <section id="home-booking-section" className="py-24 relative overflow-hidden bg-brand-ivory border-t border-brand-gold/10 scroll-mt-10">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* CTA Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <Camera className="text-brand-gold w-12 h-12 mb-8 mx-auto lg:mx-0" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-brand-charcoal leading-tight">
                Ready to Create <br />
                <span className="italic font-medium text-gradient-gold">Masterpieces?</span>
              </h2>
              <p className="text-slate-500 mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed md:text-xl">
                Secure your date with us and experience a luxurious approach to photography you will cherish forever. Fill out the form to instantly request a booking via WhatsApp.
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <BookingForm />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
