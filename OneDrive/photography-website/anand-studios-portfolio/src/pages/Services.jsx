import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TiltCard } from '../components/TiltCard';
import ServicesPreview from '../components/ServicesPreview';
import AnimatedServicesCarousel from '../components/AnimatedServicesCarousel';
import { useRef, useState, useEffect } from 'react';

const servicesList = [
  {
    title: 'Pre Wedding-Shoot',
    description: 'Romantic, creative, and highly customized outdoor or indoor sessions designed to tell your unique love story before the big day.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    delay: 0.1,
  },
  {
    title: 'Wedding Photography',
    description: 'Cinematic coverage of your special day. We capture every emotion, ritual, and tear of joy with unparalleled elegance and precision.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    delay: 0.15,
  },
  {
    title: 'Maternity Shoot',
    description: "Elegant, ethereal portraits celebrating the beautiful journey of motherhood, shot in stunning natural or studio light.",
    image: 'https://images.unsplash.com/photo-1555243896-771a800527ea?auto=format&fit=crop&w=1200&q=80',
    delay: 0.2,
  },
  {
    title: 'Baby Shoot',
    description: "Heartwarming, highly creative newborn and baby photography using beautiful props and safe, comfortable studio environments.",
    image: 'https://images.unsplash.com/photo-1546015720-b8b30df5aa27?auto=format&fit=crop&w=1200&q=80',
    delay: 0.25,
  },
  {
    title: 'Event Photography',
    description: 'Dynamic, vibrant, and energy-filled photography capturing the absolute essence of live performances, parties, and special celebrations.',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80',
    delay: 0.3,
  },
  {
    title: 'Corporate Photography',
    description: 'High-end professional coverage for seminars, grand product launches, headshots, and luxury corporate gatherings.',
    image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=1200&q=80',
    delay: 0.35,
  },
  {
    title: 'Product Photography',
    description: 'Crisp, high-resolution product photography highlighting details, textures, and features for e-commerce, catalogs, and branding.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    delay: 0.4,
  },
  {
    title: 'Drone Photography',
    description: 'Breathtaking aerial perspectives of landscapes, wedding venues, and real estate, captured with state-of-the-art drone technology.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    delay: 0.45,
  },
  {
    title: 'Nature and Landscape Photography',
    description: 'Stunningly vivid imagery of the natural world, perfectly suited for editorial use, gallery prints, or personal collections.',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80',
    delay: 0.5,
  },
  {
    title: 'Homestays and Resorts Photography',
    description: 'Inviting and luxurious architectural and interior photography designed to showcase properties and attract premium guests.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    delay: 0.55,
  },
  {
    title: 'Dance Photography',
    description: 'Expressive, perfectly timed shots capturing the grace, emotion, and motion of dancers across various classical and contemporary styles.',
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&w=1200&q=80',
    delay: 0.6,
  },
  {
    title: 'Album Designing and Printing Services',
    description: 'Premium, custom-designed photo albums and photobooks printed on world-class archival paper to preserve your memories forever.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80',
    delay: 0.65,
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 bg-brand-ivory relative overflow-hidden"
    >
      {/* Background ornament */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto perspective-1000">
          <TiltCard className="flex flex-col items-center justify-center p-6 cursor-default">
            <span className="text-brand-darkGold font-semibold tracking-[0.2em] uppercase text-sm mb-4 block drop-shadow-md" style={{ transform: "translateZ(60px)" }}>Our Expertise</span>
            <motion.h1
              className="text-5xl md:text-6xl font-serif font-bold mb-6 text-brand-charcoal drop-shadow-xl"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              style={{ transform: "translateZ(80px)" }}
            >
              Premium <span className="text-gradient-gold italic font-medium">Services</span>
            </motion.h1>
            <motion.p
              className="text-slate-500 text-lg md:text-xl font-light leading-relaxed drop-shadow-md"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
              style={{ transform: "translateZ(40px)" }}
            >
              Discover our comprehensive range of high-end photography and videography services tailored exclusively for your grand occasions.
            </motion.p>
          </TiltCard>
        </div>
        <ServicesPreview />

        {/* Animated Services Carousel */}
        <div className="mb-24">
          <AnimatedServicesCarousel services={servicesList} />
        </div>

        {/* Exclusive Package CTA */}
        <motion.div
          className="relative rounded-[3rem] overflow-hidden shadow-2xl perspective-1000"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <TiltCard className="w-full h-full group cursor-default">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80"
                alt="Luxury Setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                style={{ transform: "translateZ(-30px)" }}
              />
              <div className="absolute inset-0 bg-brand-black/70 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 py-20 px-8 md:py-24 md:px-16 text-center flex flex-col items-center" style={{ transform: "translateZ(50px)" }}>
              <span 
                className="px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold font-semibold tracking-widest uppercase text-sm mb-6 border border-brand-gold/30 drop-shadow-md"
                style={{ transform: "translateZ(60px)" }}
              >
                Exclusive Offer
              </span>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-xl"
                style={{ transform: "translateZ(80px)" }}
              >
                Custom Luxury Packages
              </h2>
              <p 
                className="text-slate-200 text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
                style={{ transform: "translateZ(40px)" }}
              >
                Every grand event requires a unique approach. We provide highly customized, end-to-end luxury photography packages designed strictly around your vision.
              </p>
              <div 
                className="flex flex-wrap gap-4 justify-center"
                style={{ transform: "translateZ(60px)" }}
              >
                <a
                  href="https://wa.me/918309332315?text=Hi%2C%20I%20want%20to%20discuss%20a%20custom%20photography%20package"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-base px-10 py-4 hover:shadow-[0_0_20px_#C5A059]"
                >
                  Discuss Your Event
                </a>
                <Link to="/portfolio" className="btn-outline !border-white/30 !bg-white/10 !text-white hover:!bg-white hover:!text-brand-charcoal text-base px-10 py-4">
                  View Portfolio
                </Link>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
