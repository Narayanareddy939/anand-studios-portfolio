import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TiltCard } from './TiltCard';

export default function AnimatedServicesCarousel({ services }) {
  const duplicatedServices = [...services, ...services];

  return (
    <section className="relative overflow-hidden py-10">
      {/* Section headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-10 text-center"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-brand-darkGold mb-4">Visual Storytelling</p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal max-w-3xl mx-auto">
          A cinematic journey through our most sought-after services
        </h2>
      </motion.div>

      {/* Auto-scrolling track */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 items-stretch"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 42, ease: 'linear' } }}
        >
          {duplicatedServices.map((service, index) => (
            <motion.div
              key={`${service.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: (index % services.length) * 0.08 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[24rem] sm:w-[26rem] lg:w-[28rem]"
            >
              <TiltCard className="group relative h-[28rem] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(15,15,15,0.18)] bg-brand-black/80">
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/30 to-transparent" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="backdrop-brightness-75 rounded-[2rem] bg-black/20 p-6">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight drop-shadow-lg">
                      {service.title}
                    </h3>
                    <div className="w-14 h-0.5 bg-brand-gold my-4 shadow-[0_0_12px_rgba(197,160,89,0.35)]" />
                    <p className="text-slate-200 text-sm leading-relaxed font-light mb-6 line-clamp-3">
                      {service.description}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-brand-gold font-medium uppercase tracking-widest text-xs"
                    >
                      Discover more
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 text-center">
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-sm text-slate-500"
        >
          Auto-scrolling story • Hover to pause motion
        </motion.p>
      </div>
    </section>
  );
}

