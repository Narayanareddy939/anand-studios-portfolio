import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { TiltCard } from '../components/TiltCard';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-24 bg-brand-ivory relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto mt-8 md:mt-16 perspective-1000">
          <TiltCard className="flex flex-col items-center justify-center p-6 cursor-default">
            <span 
              className="text-brand-darkGold font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block drop-shadow-md"
              style={{ transform: "translateZ(60px)" }}
            >
              Reach Out
            </span>
            <motion.h1
              className="text-4xl md:text-7xl font-serif font-bold mb-6 text-brand-charcoal drop-shadow-xl"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              style={{ transform: "translateZ(80px)" }}
            >
              Get in <span className="text-gradient-gold italic font-medium">Touch</span>
            </motion.h1>
            <motion.p
              className="text-slate-500 text-base md:text-xl font-light leading-relaxed tracking-wide drop-shadow-md"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
              style={{ transform: "translateZ(40px)" }}
            >
              We'd be honored to be a part of your story. Reach out to discuss availability, pricing, or to book your next shoot.
            </motion.p>
          </TiltCard>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left column — info + map (on mobile: stacks above form) */}
          <motion.div
            className="w-full lg:w-5/12 space-y-6"
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          >
            {/* Studio Details Card */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-brand-gold/10">
              <h3 className="font-serif font-bold text-brand-charcoal uppercase tracking-widest text-xl mb-8">Studio Details</h3>

              <div className="space-y-7">
                {/* Address */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-slate-50 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-charcoal uppercase tracking-widest text-sm mb-1">Headquarters</h4>
                    <p className="text-slate-500 font-light leading-relaxed text-sm">
                      Anand Studio & Video,<br />
                      Near RTO Office, JNTU College,<br />
                      Bhairav Nagar, Anantapur, AP
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-slate-50 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-charcoal uppercase tracking-widest text-sm mb-1">Direct Lines</h4>
                    <a href="tel:+918309332315" className="block text-slate-500 font-light text-sm hover:text-brand-gold transition-colors">+91 8309332315</a>
                    <a href="tel:08904593141" className="block text-slate-500 font-light text-sm hover:text-brand-gold transition-colors">08904593141</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-slate-50 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-charcoal uppercase tracking-widest text-sm mb-1">Email</h4>
                    <a href="mailto:anandreddy@gmail.com" className="text-slate-500 font-light text-sm hover:text-brand-gold transition-colors">
                      anandreddy@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="pt-5 border-t border-brand-gold/10">
                  <h4 className="font-semibold text-brand-charcoal uppercase tracking-widest text-sm mb-4">Connect With Us</h4>
                  <div className="flex gap-3">
                    {[
                      { href: 'https://www.instagram.com/anand_studioph', Icon: Instagram },
                      { href: '#', Icon: Facebook },
                      { href: '#', Icon: Youtube },
                    ].map(({ href, Icon }, i) => (
                      <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full bg-slate-50 border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-sm group">
                        <Icon size={18} className="group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick CTA */}
            <a
              href="https://wa.me/918309332315?text=Hi%2C%20I%20want%20to%20book%20a%20photoshoot"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-[#128C7E] to-[#25D366] rounded-2xl shadow-lg text-white font-semibold hover:opacity-90 transition-opacity group"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </div>
              <div>
                <p className="text-sm font-light opacity-80">Quick Inquiry</p>
                <p className="text-base font-bold">Chat on WhatsApp</p>
              </div>
              <div className="ml-auto opacity-80 group-hover:translate-x-1 transition-transform">→</div>
            </a>

            {/* Google Map — shown on mobile ABOVE the booking form, before footer */}
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-lg border border-brand-gold/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.9868770851174!2d77.60741217596041!3d14.656515885836942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b005164f9c5%3A0x6b8d4bb9f39ce5!2sAnantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>
          </motion.div>

          {/* Right column — Booking Form */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
          >
            <BookingForm />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
