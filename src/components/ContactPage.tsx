import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Smile, 
  MessageCircle, 
  AlertCircle,
  CheckCircle2,
  Calendar,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from './SEO';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [trialFormSubmitted, setTrialFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [trialErrorMessage, setTrialErrorMessage] = useState('');
  const [lastSubmittedContact, setLastSubmittedContact] = useState<any>(null);
  const [lastSubmittedTrial, setLastSubmittedTrial] = useState<any>(null);

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [trialData, setTrialData] = useState({
    name: '',
    email: '',
    phone: '',
    batchTime: 'Metabolic Ignite (07:30 AM)',
    date: '',
    remarks: ''
  });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleTrialChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTrialData(prev => ({ ...prev, [name]: value }));
    if (trialErrorMessage) setTrialErrorMessage('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email || !contactData.message) {
      setErrorMessage("Please fill in all requested fields to securely register your inquiry.");
      return;
    }
    setErrorMessage('');
    const submittedInfo = { ...contactData };
    setLastSubmittedContact(submittedInfo);
    setFormSubmitted(true);

    // Auto redirect to WhatsApp
    const text = `Hello Harmony Yoga Center! I have submitted an inquiry.\n\n📝 *My Details*:\n• *Name*: ${submittedInfo.name}\n• *Email*: ${submittedInfo.email}\n• *Phone*: ${submittedInfo.phone || 'N/A'}\n• *Subject*: ${submittedInfo.subject}\n• *Message*: ${submittedInfo.message}`;
    const waUrl = `https://wa.me/917036711097?text=${encodeURIComponent(text)}`;
    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.error('Auto redirect blocked:', err);
    }

    setContactData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  };

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trialData.name || !trialData.email || !trialData.phone) {
      setTrialErrorMessage("Please fill in your name, email and contact phone to reserve your slot.");
      return;
    }
    setTrialErrorMessage('');
    const submittedTrial = { ...trialData };
    setLastSubmittedTrial(submittedTrial);
    setTrialFormSubmitted(true);

    // Auto redirect to WhatsApp
    const text = `Hello Harmony Yoga Center! I have submitted a free trial request.\n\n📝 *My Details*:\n• *Name*: ${submittedTrial.name}\n• *Phone*: ${submittedTrial.phone}\n• *Email*: ${submittedTrial.email}\n• *Target Batch*: ${submittedTrial.batchTime}\n• *Date*: ${submittedTrial.date}\n• *Remarks/Goals*: ${submittedTrial.remarks || 'None'}\n\nPlease confirm my slot!`;
    const waUrl = `https://wa.me/917036711097?text=${encodeURIComponent(text)}`;
    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.error('Auto redirect blocked:', err);
    }

    setTrialData({ name: '', email: '', phone: '', batchTime: 'Metabolic Ignite (07:30 AM)', date: '', remarks: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-[var(--navbar-height,80px)] bg-luxury-glow-a min-h-screen relative overflow-hidden font-sans"
      id="contact-page"
    >
      <SEO 
        title="Contact Us & Register For Free Trial Slots | Harmony Yoga"
        description="Connect with our Vijayawada sanctuary studio behind SV Ranga Rao Hospital in Mogalrajapuram. Register for a free therapeutic trial batch or send general inquiries to Master S. Anjaneyulu directly."
        path="/contact"
      />

      {/* Background elements */}
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-brand-sage/20 filter blur-3xl pointer-events-none ambient-glow-1" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-brand-gold-bright/10 filter blur-3xl pointer-events-none ambient-glow-2" />

      {/* Hero Header */}
      <section className="py-20 md:py-28 px-6 text-center select-none" id="contact-hero">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#b58552] uppercase block">
            GET IN TOUCH
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-emerald tracking-tight leading-tight">
            Connect With <span className="italic text-[#065F5B]">Harmony</span>
          </h1>
          <div className="h-[2px] w-12 bg-brand-gold mx-auto my-5 rounded-full" />
          <p className="text-base sm:text-lg md:text-xl text-brand-charcoal/75 max-w-2xl mx-auto leading-relaxed mt-2 font-sans">
            Reach out with queries regarding small batch offline enrollment, active live streaming licenses, or register your free trial package directly.
          </p>
        </div>
      </section>

      {/* Main Core Elements Section */}
      <section className="pb-20 px-6 sm:px-10 lg:px-16" id="contact-content-grid">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates details */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-brand-sage/40 space-y-6 shadow-[0_12px_40px_-12px_rgba(15,118,110,0.06)] relative overflow-hidden">
              <h3 className="font-serif text-2xl font-bold text-[#0F766E]">Information</h3>
              <div className="space-y-4 text-sm sm:text-base">
                
                {/* Phone */}
                <motion.div 
                  whileHover={{ y: -4, borderColor: '#0F766E', boxShadow: '0 8px 20px -8px rgba(15,118,110,0.15)' }}
                  className="flex gap-4 items-start p-3 rounded-2xl border border-brand-sage/10 hover:bg-white transition-all duration-300 cursor-pointer"
                >
                  <div className="p-2.5 rounded-lg bg-brand-emerald/5 text-brand-emerald shrink-0 mt-0.5 transition-shadow duration-300 hover:shadow-[0_0_12px_#0F766E]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal text-sm uppercase tracking-wider">Phone</h4>
                    <p className="text-sm mt-1">
                      <a href="tel:+917036711097" className="text-brand-emerald hover:underline font-semibold block">+91 70367 11097</a>
                    </p>
                  </div>
                </motion.div>
 
                {/* Email */}
                <motion.div 
                  whileHover={{ y: -4, borderColor: '#0F766E', boxShadow: '0 8px 20px -8px rgba(15,118,110,0.15)' }}
                  className="flex gap-4 items-start p-3 rounded-2xl border border-brand-sage/10 hover:bg-white transition-all duration-300 cursor-pointer"
                >
                  <div className="p-2.5 rounded-lg bg-brand-emerald/5 text-brand-emerald shrink-0 mt-0.5 transition-shadow duration-300 hover:shadow-[0_0_12px_#0F766E]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F766E] text-sm uppercase tracking-wider">Email</h4>
                    <p className="text-sm mt-1">
                      <a href="mailto:harmonyyogacenter11@gmail.com" className="text-brand-emerald hover:underline font-semibold block">harmonyyogacenter11@gmail.com</a>
                    </p>
                  </div>
                </motion.div>
 
                {/* Location */}
                <motion.div 
                  whileHover={{ y: -4, borderColor: '#0F766E', boxShadow: '0 8px 20px -8px rgba(15,118,110,0.15)' }}
                  className="flex gap-4 items-start p-3 rounded-2xl border border-brand-sage/10 hover:bg-white transition-all duration-300 cursor-pointer"
                >
                  <div className="p-2.5 rounded-lg bg-brand-emerald/5 text-brand-emerald shrink-0 mt-0.5 transition-shadow duration-300 hover:shadow-[0_0_12px_#0F766E]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F766E] text-sm uppercase tracking-wider">Location</h4>
                    <p className="text-sm text-brand-charcoal/70 leading-relaxed mt-1">
                      Mogalrajapuram, Vijayawada,<br />
                      Andhra Pradesh, India
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/w5GLUBg6vNfcboiT7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-emerald hover:underline font-semibold flex items-center gap-1 mt-1.5 text-sm"
                    >
                      get directions on maps ↗
                    </a>
                  </div>
                </motion.div>
 
                {/* WhatsApp */}
                <motion.div 
                  whileHover={{ y: -4, borderColor: '#22C55E', boxShadow: '0 8px 20px -8px rgba(34,197,94,0.15)' }}
                  className="flex gap-4 items-start p-3 rounded-2xl border border-brand-sage/10 hover:bg-white transition-all duration-300 cursor-pointer"
                >
                  <div className="p-2.5 rounded-lg bg-green-500/10 text-green-600 shrink-0 mt-0.5">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal text-sm uppercase tracking-wider">WhatsApp</h4>
                    <p className="text-sm text-brand-charcoal/70 leading-relaxed mt-1">
                      Chat with us instantly
                    </p>
                    <motion.a 
                      href="https://wa.me/917036711097?text=Hello%20Harmony%20Yoga%20Center!%20I'd%20like%20to%20know%20more%20about%20your%20metabolic%20slimming%20trial%20program." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          '0 2px 4px rgba(34,197,94,0.2)',
                          '0 2px 12px 4px rgba(34,197,94,0.35)',
                          '0 2px 4px rgba(34,197,94,0.2)'
                        ]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: 1.07 }}
                      className="inline-flex items-center gap-1.5 mt-2.5 px-4 py-2.5 rounded-full bg-[#22C55E] hover:bg-green-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xs cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4 fill-white" />
                      Chat on WhatsApp
                    </motion.a>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

          {/* Center Column: Interactive General Contact Form */}
          <div className="lg:col-span-4" id="general-contact-column">
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-brand-sage/40 relative overflow-hidden shadow-[0_12px_40px_-12px_rgba(15,118,110,0.06)]">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#D4A373]" />

              <h3 className="font-serif text-2xl font-bold text-[#0F766E] mb-1">General Inquiry</h3>
              <p className="text-sm sm:text-base text-brand-charcoal/60 mb-6 font-sans">Have questions? Drop us a clinical or general administrative note.</p>

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form 
                    key="contact-msg-form"
                    onSubmit={handleContactSubmit} 
                    className="space-y-4 font-sans text-xs sm:text-sm"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-xs">Your Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={contactData.name}
                        onChange={handleContactChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm sm:text-base focus:border-brand-emerald focus:outline-hidden font-sans"
                        placeholder="Aditi Sharma"
                      />
                    </div>

                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-xs">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={contactData.email}
                        onChange={handleContactChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm sm:text-base focus:border-brand-emerald focus:outline-hidden font-sans"
                        placeholder="aditi@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-xs">Phone (Optional)</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={contactData.phone}
                        onChange={handleContactChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm sm:text-base focus:border-brand-emerald focus:outline-hidden font-sans"
                        placeholder="+91 99999 88888"
                      />
                    </div>

                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-xs">Topic Subject</label>
                      <select 
                        name="subject"
                        value={contactData.subject}
                        onChange={handleContactChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm sm:text-base focus:border-brand-emerald focus:outline-hidden font-sans cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Online Program License">Online Program License</option>
                        <option value="Billing Details">Billing Details</option>
                        <option value="Collaborations">Collaborations</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-xs">Message Payload *</label>
                      <textarea 
                        name="message" 
                        required
                        rows={3}
                        value={contactData.message}
                        onChange={handleContactChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm sm:text-base focus:border-brand-emerald focus:outline-hidden font-sans"
                        placeholder="Tell us what you'd like to ask..."
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs sm:text-sm flex items-center gap-2 font-semibold">
                        <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full h-[52px] rounded-full bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory text-sm sm:text-base font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_4px_12px_rgba(15,118,110,0.15)] hover:shadow-[0_8px_24px_rgba(15,118,110,0.25)] hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="h-4.5 w-4.5 text-brand-gold" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-4 font-sans"
                  >
                    <div className="h-12 w-12 rounded-full bg-brand-emerald/10 text-brand-emerald mx-auto flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-brand-emerald">Message Sent Successfully</h4>
                      <p className="text-sm sm:text-base text-brand-charcoal/70 mt-1.5 leading-relaxed font-sans">
                        Thank you for reaching out. A client support coordinator will respond to your queries to the registered email shortly.
                      </p>
                    </div>
                    {lastSubmittedContact && (
                      <div className="pt-1 pb-2">
                        <a
                          href={`https://wa.me/917036711097?text=${encodeURIComponent(
                            `Hello Harmony Yoga Center! I have submitted an inquiry.\n\n📝 *My Details*:\n• *Name*: ${lastSubmittedContact.name}\n• *Email*: ${lastSubmittedContact.email}\n• *Phone*: ${lastSubmittedContact.phone || 'N/A'}\n• *Subject*: ${lastSubmittedContact.subject}\n• *Message*: ${lastSubmittedContact.message}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 text-white py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_12px_rgba(34,197,94,0.2)] cursor-pointer"
                        >
                          <MessageCircle className="h-5 w-5" />
                          Confirm Inquiry via WhatsApp
                        </a>
                      </div>
                    )}
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2.5 hover:bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 text-xs font-bold uppercase tracking-wider rounded-full transition-colors"
                    >
                      Send New Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Free Trial Registration Form */}
          <div className="lg:col-span-4" id="trial-registration-column">
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-brand-sage/40 relative overflow-hidden shadow-[0_12px_40px_-12px_rgba(15,118,110,0.06)]">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#0F766E]" />

              <div className="flex items-center gap-1.5 text-[#b58552] font-bold text-xs sm:text-sm uppercase tracking-widest mb-1 font-sans">
                <Calendar className="h-3.5 w-3.5 text-brand-gold" />
                Enroll for Free Training
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F766E] mb-6">Trial Registration</h3>

              <AnimatePresence mode="wait">
                {!trialFormSubmitted ? (
                  <motion.form 
                    key="trial-reg-form"
                    onSubmit={handleTrialSubmit} 
                    className="space-y-4 font-sans text-xs sm:text-sm"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-xs">Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={trialData.name}
                        onChange={handleTrialChange}
                        className="w-full rounded-xl border border-[#CFE8D5] bg-white p-3 text-sm sm:text-base focus:border-brand-emerald focus:outline-hidden font-sans"
                        placeholder="Amit Singh"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-xs font-sans">Email Address *</label>
                        <input 
                          type="email" 
                          name="email" 
                          required
                          value={trialData.email}
                          onChange={handleTrialChange}
                          className="w-full rounded-xl border border-[#CFE8D5] bg-white p-3 text-sm sm:text-base focus:border-brand-emerald focus:outline-hidden font-sans"
                          placeholder="amit@gmail.com"
                        />
                      </div>
                      <div>
                        <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-xs font-sans">Active Phone *</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          required
                          value={trialData.phone}
                          onChange={handleTrialChange}
                          className="w-full rounded-xl border border-[#CFE8D5] bg-white p-3 text-sm sm:text-base focus:border-brand-emerald focus:outline-hidden font-sans"
                          placeholder="+91 98888 77777"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-xs font-sans">Target Batch</label>
                        <select 
                          name="batchTime"
                          value={trialData.batchTime}
                          onChange={handleTrialChange}
                          className="w-full rounded-xl border border-[#CFE8D5] bg-white p-3 text-sm sm:text-base focus:border-brand-emerald focus:outline-hidden font-sans cursor-pointer"
                        >
                          <option value="Dawn Awakening (06:00 AM)">Dawn Awakening (06:00 AM)</option>
                          <option value="Metabolic Ignite (07:30 AM)">Metabolic Ignite (07:30 AM)</option>
                          <option value="Midday Restorative (11:00 AM)">Midday Restorative (11:00 AM)</option>
                          <option value="Twilight Sunset (05:30 PM)">Twilight Sunset (05:30 PM)</option>
                          <option value="Evening Stress Detox (07:00 PM)">Evening Stress Detox (07:00 PM)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-xs font-sans">Preferred Date *</label>
                        <input 
                          type="date" 
                          name="date" 
                          required
                          value={trialData.date}
                          onChange={handleTrialChange}
                          className="w-full rounded-xl border border-[#CFE8D5] bg-white p-3 text-sm sm:text-base focus:border-brand-emerald focus:outline-hidden font-sans cursor-pointer"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-xs font-sans">Goals or Existing Joint Pains</label>
                      <textarea 
                        name="remarks"
                        rows={2}
                        value={trialData.remarks}
                        onChange={handleTrialChange}
                        className="w-full rounded-xl border border-[#CFE8D5] bg-white p-3 text-sm sm:text-base focus:border-brand-emerald focus:outline-hidden font-sans"
                        placeholder="describe e.g., lower back strains, PCOS weight curves..."
                      />
                    </div>

                    {trialErrorMessage && (
                      <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs sm:text-sm flex items-center gap-2 font-semibold">
                        <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                        <span>{trialErrorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full h-[52px] rounded-full bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory text-sm sm:text-base font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_4px_12px_rgba(15,118,110,0.15)] hover:shadow-[0_8px_24px_rgba(15,118,110,0.25)] hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>Claim Free Session Pass</span>
                      <CheckCircle2 className="h-4.5 w-4.5 text-brand-gold animate-pulse" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="trial-reg-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-4 font-sans"
                  >
                    <div className="h-12 w-12 rounded-full bg-brand-emerald/10 text-brand-emerald mx-auto flex items-center justify-center">
                      <Check className="h-6 w-6 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-brand-emerald">Trial Registration Confirmed</h4>
                      <p className="text-sm sm:text-base text-brand-charcoal/70 mt-1.5 leading-relaxed font-sans">
                        Your free 1-on-1 therapeutic session and baseline assessment slot is officially held. S. Anjaneyulu will review your physical remarks and contact you prior. See you soon!
                      </p>
                    </div>
                    {lastSubmittedTrial && (
                      <div className="pt-1 pb-2">
                        <a
                          href={`https://wa.me/917036711097?text=${encodeURIComponent(
                            `Hello Harmony Yoga Center! I have submitted a free trial request.\n\n📝 *My Details*:\n• *Name*: ${lastSubmittedTrial.name}\n• *Phone*: ${lastSubmittedTrial.phone}\n• *Email*: ${lastSubmittedTrial.email}\n• *Target Batch*: ${lastSubmittedTrial.batchTime}\n• *Date*: ${lastSubmittedTrial.date}\n• *Remarks/Goals*: ${lastSubmittedTrial.remarks || 'None'}\n\nPlease confirm my slot!`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2.5 rounded-full h-[52px] bg-green-500 hover:bg-green-600 text-white px-6 text-sm sm:text-base font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_4px_12px_rgba(34,197,94,0.25)] hover:shadow-[0_8px_24px_rgba(34,197,94,0.35)] hover:-translate-y-0.5 cursor-pointer"
                        >
                          <MessageCircle className="h-5 w-5 text-white" />
                          <span>Send Confirmation via WhatsApp</span>
                        </a>
                      </div>
                    )}
                    <button
                      onClick={() => setTrialFormSubmitted(false)}
                      className="px-5 py-2.5 bg-brand-emerald/10 text-brand-emerald text-xs font-bold uppercase tracking-wider rounded-full hover:bg-brand-emerald/20 transition-colors"
                    >
                      Fill Another Session
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Google Maps Embed container - Full size width at bottom */}
          <div className="lg:col-span-12 w-full mt-10 bg-white rounded-[32px] p-6 sm:p-8 border border-brand-sage/40 overflow-hidden shadow-[0_12px_40px_-12px_rgba(15,118,110,0.06)]" id="full-width-map-container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-5 border-b border-brand-sage/20 mb-6">
              <div>
                <span className="block text-xs sm:text-sm font-bold text-[#b58552] uppercase tracking-widest pl-0.5 font-sans">✦ VIJAYAWADA SANCTUARY ✦</span>
                <h3 className="font-serif text-2xl font-bold text-[#0F766E] mt-1">Find Us On Google Maps</h3>
                <p className="text-sm sm:text-base text-brand-charcoal/70 mt-1.5 max-w-3xl leading-relaxed font-sans">
                  D.no. 39-17-10/1, behind SV Ranga Rao Hospital, Mogalrajapuram, Labbipet, Vijayawada, Andhra Pradesh — 520010
                </p>
              </div>
              <a 
                href="https://maps.app.goo.gl/w5GLUBg6vNfcboiT7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 h-[48px] rounded-full bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_4px_12px_rgba(15,118,110,0.15)] shrink-0 cursor-pointer"
              >
                <span>GET DIRECTIONS ↗</span>
                <MapPin className="h-4 w-4 text-brand-gold animate-bounce-slow" />
              </a>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden border border-brand-sage/15 relative h-[380px] sm:h-[480px] bg-brand-sage/5"
            >
              {/* Embedded standard Google Maps iframe centered at Vijayawada Mogalrajapuram */}
              <iframe 
                title="Harmony Yoga Center Vijayawada Mogalrajapuram Map Location"
                src="https://maps.google.com/maps?q=Harmony%20Yoga%20Center,%20Mogalrajapuram,%20Vijayawada&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>

        </div>
      </section>

    </motion.div>
  );
}
