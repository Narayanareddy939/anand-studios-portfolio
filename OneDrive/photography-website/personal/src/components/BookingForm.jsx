import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, ShieldCheck, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

// Generate a random 6-digit OTP (mock)
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const SERVICES = [
  'Wedding Photography',
  'Pre-Wedding Shoot',
  'Baby Shoot',
  'Maternity Shoot',
  'Corporate / Events',
  'Fashion Portfolio',
];

// Valid hour/minute ranges
const HOURS = Array.from({ length: 14 }, (_, i) => i + 8); // 08:00 – 21:00
const MINUTES = ['00', '15', '30', '45'];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0],
    date: '',
    hour: '',
    minute: '',
    message: '',
  });

  const [otp, setOtp] = useState({ code: '', input: '', sent: false, verified: false, error: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /* ── helpers ─────────────────────────────────── */
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  /* ── OTP flow ─────────────────────────────────── */
  const handleSendOTP = () => {
    const phone = formData.phone.trim();
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) {
      setErrors((prev) => ({ ...prev, phone: 'Enter a valid 10-digit Indian mobile number.' }));
      return;
    }
    const code = generateOTP();
    setOtp({ code, input: '', sent: true, verified: false, error: '' });
    // In production replace this alert with a real SMS API call
    alert(`[DEMO] Your OTP is: ${code}\n(In production this would be sent via SMS)`);
  };

  const handleVerifyOTP = () => {
    if (otp.input === otp.code) {
      setOtp((prev) => ({ ...prev, verified: true, error: '' }));
    } else {
      setOtp((prev) => ({ ...prev, error: 'Incorrect OTP. Please try again.' }));
    }
  };

  /* ── validation ───────────────────────────────── */
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!otp.verified) newErrors.phone = 'Please verify your phone number with OTP.';
    if (!formData.date) {
      newErrors.date = 'Please select a date.';
    } else if (formData.date < today) {
      newErrors.date = 'Date cannot be in the past.';
    }
    if (!formData.hour || !formData.minute) newErrors.time = 'Please select a preferred time.';
    return newErrors;
  };

  /* ── submit ───────────────────────────────────── */
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    const time = `${String(formData.hour).padStart(2, '0')}:${formData.minute}`;
    const text =
      `Hi, I want to book a photoshoot\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.service}\n` +
      `Date: ${formData.date}\n` +
      `Time: ${time}\n` +
      (formData.message ? `Message: ${formData.message}` : '');

    window.open(`https://wa.me/918309332315?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2rem] p-10 shadow-xl border border-brand-gold/10 flex flex-col items-center justify-center gap-6 min-h-[400px] text-center"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-gold to-brand-darkGold flex items-center justify-center shadow-lg">
          <CheckCircle2 className="text-white" size={40} />
        </div>
        <h3 className="text-3xl font-serif font-bold text-brand-charcoal">Booking Sent!</h3>
        <p className="text-slate-500 font-light max-w-sm">
          Your booking request has been sent via WhatsApp. We'll confirm your session shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); setOtp({ code: '', input: '', sent: false, verified: false, error: '' }); setFormData({ name: '', phone: '', service: SERVICES[0], date: '', hour: '', minute: '', message: '' }); }}
          className="btn-primary mt-2"
        >
          Book Another Session
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl border border-brand-gold/10 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-10 rounded-full blur-[80px] -z-10 transform translate-x-1/2 -translate-y-1/2" />

      <div className="mb-8 text-center">
        <h3 className="text-2xl md:text-4xl font-serif font-bold mb-3 text-brand-charcoal">Book Your Session</h3>
        <p className="text-slate-500 font-light text-sm md:text-base">
          Fill out the details and we'll confirm your booking instantly via WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name */}
        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2 ml-1">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-slate-50 transition-all text-slate-800 ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
            placeholder="E.g. Priya Sharma"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1 ml-1 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
        </div>

        {/* Phone + OTP */}
        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2 ml-1">
            Phone Number <span className="text-red-400">*</span>
          </label>

          <div className="flex gap-3">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={otp.verified}
              className={`flex-1 px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-slate-50 transition-all text-slate-800 ${errors.phone ? 'border-red-400' : 'border-slate-200'} disabled:opacity-60`}
              placeholder="+91 98765 43210"
            />
            {!otp.verified && (
              <button
                type="button"
                onClick={handleSendOTP}
                className="shrink-0 px-5 py-3 rounded-xl bg-gradient-to-br from-brand-gold to-brand-darkGold text-white font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2 shadow-md"
              >
                <Phone size={16} />
                {otp.sent ? 'Resend' : 'Get OTP'}
              </button>
            )}
            {otp.verified && (
              <div className="flex items-center gap-2 text-emerald-500 font-semibold shrink-0 px-3">
                <ShieldCheck size={22} /> Verified
              </div>
            )}
          </div>

          {/* OTP Input */}
          <AnimatePresence>
            {otp.sent && !otp.verified && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 overflow-hidden"
              >
                <div className="flex gap-3">
                  <input
                    type="text"
                    maxLength={6}
                    value={otp.input}
                    onChange={(e) => setOtp((prev) => ({ ...prev, input: e.target.value.replace(/\D/g, ''), error: '' }))}
                    className="flex-1 px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-slate-50 text-slate-800 tracking-widest text-center font-semibold text-lg"
                    placeholder="Enter 6-digit OTP"
                  />
                  <button
                    type="button"
                    onClick={handleVerifyOTP}
                    className="shrink-0 px-5 py-3 rounded-xl bg-brand-charcoal text-white font-semibold text-sm uppercase tracking-wider hover:bg-brand-gold transition-colors"
                  >
                    Verify
                  </button>
                </div>
                {otp.error && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1 flex items-center gap-1">
                    <AlertCircle size={12} />{otp.error}
                  </p>
                )}
                <p className="text-slate-400 text-xs mt-1.5 ml-1">
                  Check the popup alert for your demo OTP code.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {errors.phone && !otp.sent && (
            <p className="text-red-400 text-xs mt-1 ml-1 flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>
          )}
          {errors.phone && otp.sent && !otp.verified && (
            <p className="text-red-400 text-xs mt-1 ml-1 flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>
          )}
        </div>

        {/* Service */}
        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2 ml-1">
            Service Required
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-slate-50 text-slate-800 font-medium cursor-pointer"
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date */}
          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2 ml-1">
              Preferred Date <span className="text-red-400">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              min={today}
              onChange={handleChange}
              className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-slate-50 transition-all text-slate-800 cursor-pointer ${errors.date ? 'border-red-400' : 'border-slate-200'}`}
            />
            {errors.date && <p className="text-red-400 text-xs mt-1 ml-1 flex items-center gap-1"><AlertCircle size={12} />{errors.date}</p>}
          </div>

          {/* Time – custom dropdowns for valid HH:MM */}
          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2 ml-1">
              Preferred Time <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <select
                  name="hour"
                  value={formData.hour}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-slate-50 text-slate-800 cursor-pointer appearance-none ${errors.time ? 'border-red-400' : 'border-slate-200'}`}
                >
                  <option value="">HH</option>
                  {HOURS.map((h) => (
                    <option key={h} value={h}>{String(h).padStart(2, '0')}</option>
                  ))}
                </select>
                <Clock size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
              <span className="flex items-center text-2xl font-bold text-slate-400">:</span>
              <div className="relative flex-1">
                <select
                  name="minute"
                  value={formData.minute}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-slate-50 text-slate-800 cursor-pointer appearance-none ${errors.time ? 'border-red-400' : 'border-slate-200'}`}
                >
                  <option value="">MM</option>
                  {MINUTES.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>
            {errors.time && <p className="text-red-400 text-xs mt-1 ml-1 flex items-center gap-1"><AlertCircle size={12} />{errors.time}</p>}
            <p className="text-slate-400 text-xs mt-1 ml-1">Studio hours: 08:00 – 21:00</p>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2 ml-1">
            Additional Details <span className="text-slate-400 font-normal normal-case tracking-normal">(Optional)</span>
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-slate-50 transition-all resize-none text-slate-800"
            placeholder="Tell us about your event location, theme, or special requests..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full btn-primary py-4 text-lg mt-2 flex items-center justify-center gap-2 group"
        >
          <span>Book via WhatsApp</span>
          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

        <p className="text-center text-slate-400 text-xs">
          🔒 Your information is private and will only be used for booking confirmation.
        </p>
      </form>
    </motion.div>
  );
};

export default BookingForm;
