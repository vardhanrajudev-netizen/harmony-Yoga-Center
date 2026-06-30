import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Calendar, MapPin, Globe, Sparkles, AlertCircle } from 'lucide-react';
import { BookingDetails } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgram?: string;
}

export default function BookingModal({ isOpen, onClose, selectedProgram = 'Weight Loss Programs' }: BookingModalProps) {
  const [formData, setFormData] = useState<BookingDetails>({
    name: '',
    email: '',
    phone: '',
    programType: selectedProgram,
    sessionType: 'online',
    consent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const programs = [
    'Weight Loss Programs',
    'Personalized Yoga Sessions',
    'Nutrition Guidance & Yoga Combination',
    '30-Min High-Efficiency Daily Charge',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Custom client-side validation
    if (!formData.name.trim()) {
      setError('Please enter your absolute name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setError('Please provide a valid Indian or international phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API call matching state constraints
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Auto redirect to WhatsApp
      const text = `Hello Harmony Yoga Center! I have successfully registered for a free trial voucher.\n\n📝 *My Details*:\n• *Name*: ${formData.name}\n• *Phone*: ${formData.phone}\n• *Email*: ${formData.email}\n• *Program Selected*: ${formData.programType}\n• *Session Mode*: ${formData.sessionType === 'online' ? 'Online Live Class' : 'At Vijayawada Studio'}\n\nPlease confirm my slot!`;
      const waUrl = `https://wa.me/917036711097?text=${encodeURIComponent(text)}`;
      try {
        window.open(waUrl, '_blank');
      } catch (err) {
        console.error('Auto redirect blocked:', err);
      }

      // Save to localStorage so they can see historic conversions dynamically if they wish
      try {
        const currentBookings = JSON.parse(localStorage.getItem('harmony_bookings') || '[]');
        currentBookings.push({
          ...formData,
          id: Date.now().toString(),
          timestamp: new Date().toLocaleString(),
        });
        localStorage.setItem('harmony_bookings', JSON.stringify(currentBookings));
      } catch (err) {
        console.error('Local persistence failed gently:', err);
      }
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      programType: selectedProgram,
      sessionType: 'online',
      consent: true,
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Glass background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            id="modal-box"
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-brand-ivory border border-brand-sage/40 shadow-2xl z-10"
          >
            {/* Top decorative gradient bar */}
            <div className="h-2 w-full bg-linear-to-r from-brand-emerald via-brand-gold to-brand-emerald" />

            {/* Header */}
            <div className="px-6 py-5 flex items-center justify-between border-b border-brand-sage/20 bg-[#fbfbfa]">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-gold" />
                <h3 className="font-serif text-xl font-bold text-brand-emerald">
                  {isSubmitted ? 'Reservation Confirmed' : 'Book Luxury Free Trial'}
                </h3>
              </div>
              <button
                type="button"
                id="close-modal-btn"
                onClick={onClose}
                className="rounded-full p-1.5 text-brand-charcoal/65 hover:bg-brand-sage/30 hover:text-brand-emerald transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6">
              {!isSubmitted ? (
                <form id="booking-form" onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-sm text-brand-charcoal/80">
                    Experience a bespoke wellness session crafted exactly for you. Choose online or in-studio classes. No commitment required.
                  </p>

                  {error && (
                    <div id="booking-error" className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700 border border-red-100">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priyanjali Sharma"
                      className="w-full rounded-lg border border-brand-sage bg-white px-4 py-2 text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:border-brand-emerald focus:outline-hidden focus:ring-1 focus:ring-brand-emerald transition-all"
                    />
                  </div>

                  {/* Contact Group */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full rounded-lg border border-brand-sage bg-white px-4 py-2 text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:border-brand-emerald focus:outline-hidden focus:ring-1 focus:ring-brand-emerald transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                        WhatsApp/Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 70367 11097"
                        className="w-full rounded-lg border border-brand-sage bg-white px-4 py-2 text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:border-brand-emerald focus:outline-hidden focus:ring-1 focus:ring-brand-emerald transition-all"
                      />
                    </div>
                  </div>

                  {/* Program Select */}
                  <div>
                    <label htmlFor="program" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                      Preferred Studio Program
                    </label>
                    <select
                      id="program"
                      value={formData.programType}
                      onChange={(e) => setFormData({ ...formData, programType: e.target.value })}
                      className="w-full rounded-lg border border-brand-sage bg-white px-4 py-2.5 text-sm text-brand-charcoal focus:border-brand-emerald focus:outline-hidden focus:ring-1 focus:ring-brand-emerald transition-all"
                    >
                      {programs.map((prog) => (
                        <option key={prog} value={prog}>
                          {prog}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Session Type Pickers (Custom Premium Radio Pill Buttons) */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal/70 mb-2">
                      Studio Experience Mode
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        id="select-online-benefit"
                        onClick={() => setFormData({ ...formData, sessionType: 'online' })}
                        className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 text-sm font-medium transition-all ${
                          formData.sessionType === 'online'
                            ? 'border-brand-emerald bg-brand-emerald/5 text-brand-emerald shadow-xs'
                            : 'border-brand-sage bg-white text-brand-charcoal/80 hover:bg-brand-sage/10'
                        }`}
                      >
                        <Globe className="h-4 w-4" />
                        <span>Online Live Class</span>
                      </button>

                      <button
                        type="button"
                        id="select-offline-benefit"
                        onClick={() => setFormData({ ...formData, sessionType: 'offline' })}
                        className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 text-sm font-medium transition-all ${
                          formData.sessionType === 'offline'
                            ? 'border-brand-emerald bg-brand-emerald/5 text-brand-emerald shadow-xs'
                            : 'border-brand-sage bg-white text-brand-charcoal/80 hover:bg-brand-sage/10'
                        }`}
                      >
                        <MapPin className="h-4 w-4" />
                        <span>At Vijayawada Studio</span>
                      </button>
                    </div>
                  </div>

                  {/* Verification Checkmark */}
                  <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded border-brand-sage text-brand-emerald focus:ring-brand-emerald"
                    />
                    <span className="text-xs text-brand-charcoal/75 leading-relaxed">
                      I agree to receive weight loss tips, routine reminders, and class details over WhatsApp. (No spam, 100% private).
                    </span>
                  </label>

                  {/* Submission CTA */}
                  <button
                    type="submit"
                    id="submit-booking-form"
                    disabled={isSubmitting || !formData.consent}
                    className="group relative w-full overflow-hidden rounded-lg bg-brand-emerald py-3 px-6 text-center text-sm font-medium text-brand-ivory transition-all hover:bg-brand-emerald-hover focus:outline-hidden disabled:bg-brand-emerald/50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Securing Your Luxury Seat...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-1.5 font-display text-sm font-semibold tracking-wide">
                        Activate Free 3-Day Passes <Sparkles className="h-4 w-4 text-brand-gold animate-bounce" />
                      </span>
                    )}
                  </button>
                </form>
              ) : (
                /* Beautiful animated conversion success state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  id="booking-success"
                  className="py-6 text-center space-y-5"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-sage/40 text-brand-emerald">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                    >
                      <Check className="h-8 w-8 text-brand-emerald stroke-[2.5]" />
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display text-2xl font-bold text-brand-emerald">Breathe & Relax, {formData.name.split(' ')[0]}!</h4>
                    <p className="text-sm text-brand-charcoal/85 max-w-sm mx-auto leading-relaxed">
                      Your VIP passes are now active! S. Anjaneyulu and team will message you on <span className="font-semibold text-brand-emerald">{formData.phone}</span> in the next 15 minutes to coordinate your initial session.
                    </p>
                  </div>

                  <div className="rounded-xl bg-brand-emerald/5 p-4 border border-brand-sage/30 text-left max-w-sm mx-auto space-y-3">
                    <span className="text-[11px] font-bold text-brand-emerald uppercase tracking-wider block">Your Transformation Itinerary:</span>
                    <ul className="space-y-2 text-xs text-brand-charcoal/80">
                      <li className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-brand-gold" />
                        <span>Initial 30-Min Consultation: <span className="font-semibold">Pending coordinates</span></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="h-3.5 w-3.5 text-brand-gold" />
                        <span>Selected Track: <span className="font-semibold">{formData.programType}</span></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-brand-gold" />
                        <span>Standard Mode: <span className="font-semibold uppercase">{formData.sessionType}</span></span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 max-w-sm mx-auto">
                    <a
                      href={`https://wa.me/917036711097?text=${encodeURIComponent(
                        `Hello Harmony Yoga Center! I have successfully registered for a free trial voucher.\n\n📝 *My Details*:\n• *Name*: ${formData.name}\n• *Phone*: ${formData.phone}\n• *Email*: ${formData.email}\n• *Program Selected*: ${formData.programType}\n• *Session Mode*: ${formData.sessionType === 'online' ? 'Online Live Class' : 'At Vijayawada Studio'}\n\nPlease confirm my slot!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 text-white py-3.5 px-6 text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_15px_rgba(34,197,94,0.3)] cursor-pointer"
                    >
                      <svg className="h-4 w-4 fill-white shrink-0" viewBox="0 0 24 24">
                        <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.46 3.473 1.332 4.977l-1.356 4.98 5.105-1.338c1.442.784 3.06 1.198 4.707 1.202h.005c5.505 0 9.986-4.482 9.986-9.988 0-2.67-1.037-5.18-2.92-7.062C17.009 2.924 14.613 2 12.012 2zm5.72 13.905c-.244.688-1.42 1.254-1.954 1.332-.465.068-.905.102-3.048-.785-2.738-1.135-4.512-3.92-4.648-4.103-.137-.183-1.11-1.48-1.11-2.824 0-1.343.702-2.003.947-2.277.243-.274.53-.343.708-.343.177 0 .354.001.507.008.163.007.382-.061.597.458.22.533.754 1.838.82 1.974.066.137.11.297.02.48-.09.183-.135.297-.267.452-.132.155-.278.347-.386.467-.12.13-.243.272-.104.512.138.24.61.99 1.31 1.614.9.8 1.66 1.05 1.895 1.17.235.115.372.097.512-.063.14-.16.597-.697.757-.937.16-.24.32-.2.535-.12.215.08 1.365.644 1.6.76.236.115.393.172.45.27.057.1.057.579-.187 1.267z"/>
                      </svg>
                      Confirm booking on WhatsApp
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-lg border border-brand-emerald text-brand-emerald px-6 py-2 text-xs font-semibold hover:bg-brand-emerald hover:text-brand-ivory transition-all duration-300"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
