import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Smile, 
  MessageCircle, 
  Sparkles, 
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
      className="pt-[var(--navbar-height,80px)] bg-brand-ivory min-h-screen relative overflow-hidden font-sans"
      id="contact-page"
    >
      <SEO 
        title="Contact Us & Register For Free Trial Slots | Harmony Yoga"
        description="Connect with our Vijayawada sanctuary studio behind SV Ranga Rao Hospital in Mogalrajapuram. Register for a free therapeutic trial batch or send general inquiries to Master S. Yoga Anjaneyulu directly."
        path="/contact"
      />

      {/* Background elements */}
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-brand-sage/10 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-[#E3B777]/5 blur-3xl pointer-events-none" />

      {/* Hero Header */}
      <section className="py-16 md:py-24 px-6 text-center select-none" id="contact-hero">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[12px] font-bold tracking-[0.25em] text-[#b58552] uppercase block">
            GET IN TOUCH
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-emerald tracking-tight leading-tight">
            Connect With Harmony
          </h1>
          <div className="h-[1px] w-20 bg-[#E3B777] mx-auto my-4" />
          <p className="text-xs sm:text-sm text-brand-charcoal/70 max-w-xl mx-auto leading-relaxed">
            Reach out with queries regarding small batch offline enrollment, active live streaming licenses, or register your free trial package directly.
          </p>
        </div>
      </section>

      {/* Main Core Elements Section */}
      <section className="pb-20 px-6 sm:px-10 lg:px-16" id="contact-content-grid">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates details */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-sage/20 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-brand-emerald">Information</h3>
              
              <div className="space-y-5 text-sm">
                
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-brand-emerald/5 text-brand-emerald shrink-0 mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal text-[13px] uppercase tracking-wider">Phone</h4>
                    <p className="text-xs mt-1">
                      <a href="tel:+917036711097" className="text-brand-emerald hover:underline font-semibold block">+91 70367 11097</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-brand-emerald/5 text-brand-emerald shrink-0 mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F766E] text-[13px] uppercase tracking-wider">Email</h4>
                    <p className="text-xs mt-1">
                      <a href="mailto:contact@harmonyyoga.in" className="text-brand-emerald hover:underline font-semibold block">contact@harmonyyoga.in</a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-brand-emerald/5 text-brand-emerald shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F766E] text-[13px] uppercase tracking-wider">Location</h4>
                    <p className="text-xs text-brand-charcoal/70 leading-relaxed mt-1">
                      Mogalrajapuram, Vijayawada,<br />
                      Andhra Pradesh, India
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/w5GLUBg6vNfcboiT7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-emerald hover:underline font-semibold flex items-center gap-1 mt-1.5"
                    >
                      get directions on maps ↗
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-green-500/10 text-green-600 shrink-0 mt-0.5">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal text-[13px] uppercase tracking-wider">WhatsApp</h4>
                    <p className="text-xs text-brand-charcoal/70 leading-relaxed mt-1">
                      Chat with us instantly
                    </p>
                    <a 
                      href="https://wa.me/917036711097?text=Hello%20Harmony%20Yoga%20Center!%20I'd%20like%20to%20know%20more%20about%20your%20metabolic%20slimming%20trial%20program." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-[11px] uppercase tracking-wider shadow-2xs"
                    >
                      <MessageCircle className="h-3.5 w-3.5 fill-white" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Center Column: Interactive General Contact Form */}
          <div className="lg:col-span-4" id="general-contact-column">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-sage/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#E3B777]" />

              <h3 className="font-serif text-2xl font-bold text-brand-emerald mb-1">General Inquiry</h3>
              <p className="text-xs text-brand-charcoal/50 mb-6 font-sans">Have questions? Drop us a clinical or general administrative note.</p>

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form 
                    key="contact-msg-form"
                    onSubmit={handleContactSubmit} 
                    className="space-y-4 font-sans text-xs"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Your Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={contactData.name}
                        onChange={handleContactChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                        placeholder="Aditi Sharma"
                      />
                    </div>

                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={contactData.email}
                        onChange={handleContactChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                        placeholder="aditi@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Phone (Optional)</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={contactData.phone}
                        onChange={handleContactChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                        placeholder="+91 99999 88888"
                      />
                    </div>

                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Topic Subject</label>
                      <select 
                        name="subject"
                        value={contactData.subject}
                        onChange={handleContactChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Online Program License">Online Program License</option>
                        <option value="Billing Details">Billing Details</option>
                        <option value="Collaborations">Collaborations</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Message Payload *</label>
                      <textarea 
                        name="message" 
                        required
                        rows={3}
                        value={contactData.message}
                        onChange={handleContactChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                        placeholder="Tell us what you'd like to ask..."
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs flex items-center gap-2 font-semibold">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#0F766E] hover:bg-[#0D6962] text-white rounded-xl font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
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
                      <p className="text-xs text-brand-charcoal/60 mt-1.5 leading-relaxed">
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
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 text-white py-3.5 px-6 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_12px_rgba(34,197,94,0.2)] cursor-pointer"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Confirm Inquiry via WhatsApp
                        </a>
                      </div>
                    )}
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2 hover:bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 text-[10px] uppercase font-bold tracking-wider rounded-full transition-colors"
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
            <div className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 border border-[#CFE8D5] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-emerald" />

              <div className="flex items-center gap-1.5 text-[#B47F43] font-bold text-[10px] uppercase tracking-wider mb-1 font-sans">
                <Sparkles className="h-3.5 w-3.5" />
                Enroll for Free Training
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-emerald mb-6">Trial Registration</h3>

              <AnimatePresence mode="wait">
                {!trialFormSubmitted ? (
                  <motion.form 
                    key="trial-reg-form"
                    onSubmit={handleTrialSubmit} 
                    className="space-y-4 font-sans text-xs"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={trialData.name}
                        onChange={handleTrialChange}
                        className="w-full rounded-xl border border-[#CFE8D5] bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                        placeholder="Amit Singh"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Email Address *</label>
                        <input 
                          type="email" 
                          name="email" 
                          required
                          value={trialData.email}
                          onChange={handleTrialChange}
                          className="w-full rounded-xl border border-[#CFE8D5] bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                          placeholder="amit@gmail.com"
                        />
                      </div>
                      <div>
                        <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Active Phone *</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          required
                          value={trialData.phone}
                          onChange={handleTrialChange}
                          className="w-full rounded-xl border border-[#CFE8D5] bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                          placeholder="+91 98888 77777"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Target Batch</label>
                        <select 
                          name="batchTime"
                          value={trialData.batchTime}
                          onChange={handleTrialChange}
                          className="w-full rounded-xl border border-[#CFE8D5] bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                        >
                          <option value="Dawn Awakening (06:00 AM)">Dawn Awakening (06:00 AM)</option>
                          <option value="Metabolic Ignite (07:30 AM)">Metabolic Ignite (07:30 AM)</option>
                          <option value="Midday Restorative (11:00 AM)">Midday Restorative (11:00 AM)</option>
                          <option value="Twilight Sunset (05:30 PM)">Twilight Sunset (05:30 PM)</option>
                          <option value="Evening Stress Detox (07:00 PM)">Evening Stress Detox (07:00 PM)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Preferred Date *</label>
                        <input 
                          type="date" 
                          name="date" 
                          required
                          value={trialData.date}
                          onChange={handleTrialChange}
                          className="w-full rounded-xl border border-[#CFE8D5] bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Goals or Existing Joint Pains</label>
                      <textarea 
                        name="remarks"
                        rows={2}
                        value={trialData.remarks}
                        onChange={handleTrialChange}
                        className="w-full rounded-xl border border-[#CFE8D5] bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                        placeholder="describe e.g., lower back strains, PCOS weight curves..."
                      />
                    </div>

                    {trialErrorMessage && (
                      <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs flex items-center gap-2 font-semibold">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{trialErrorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-emerald hover:bg-brand-emerald-hover text-brand-ivory rounded-xl font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(15,118,110,0.15)]"
                    >
                      <span>Claim Free Session Pass</span>
                      <Sparkles className="h-4 w-4 text-brand-gold-bright" />
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
                      <p className="text-xs text-brand-charcoal/60 mt-1.5 leading-relaxed">
                        Your free 1-on-1 therapeutic session and baseline assessment slot is officially held. S. Yoga Anjaneyulu will review your physical remarks and contact you prior. See you soon!
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
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 text-white py-3.5 px-6 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_12px_rgba(34,197,94,0.2)] cursor-pointer"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Send Confirmation via WhatsApp
                        </a>
                      </div>
                    )}
                    <button
                      onClick={() => setTrialFormSubmitted(false)}
                      className="px-5 py-2 bg-brand-emerald/10 text-brand-emerald text-[10px] uppercase font-bold tracking-wider rounded-full hover:bg-brand-emerald/20 transition-colors"
                    >
                      Fill Another Session
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Google Maps Embed container - Full size width at bottom */}
          <div className="lg:col-span-12 w-full mt-10 bg-white rounded-3xl p-6 sm:p-8 border border-brand-sage/20 overflow-hidden shadow-2xs" id="full-width-map-container animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-5 border-b border-brand-sage/10 mb-6">
              <div>
                <span className="block text-[10px] font-bold text-[#b58552] uppercase tracking-widest pl-0.5">VIJAYAWADA SANCTUARY</span>
                <h3 className="font-serif text-2xl font-bold text-brand-emerald mt-1">Find Us On Google Maps</h3>
                <p className="text-xs text-brand-charcoal/60 mt-1 max-w-2xl leading-relaxed">
                  D.no. 39-17-10/1, behind SV Ranga Rao Hospital, Mogalrajapuram, Labbipet, Vijayawada, Andhra Pradesh — 520010
                </p>
              </div>
              <a 
                href="https://maps.app.goo.gl/w5GLUBg6vNfcboiT7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-brand-ivory font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_4px_12px_rgba(15,118,110,0.15)] shrink-0 cursor-pointer"
              >
                <span>GET DIRECTIONS ↗</span>
                <MapPin className="h-4 w-4 text-brand-gold-bright" />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-brand-sage/15 relative h-[380px] sm:h-[480px] bg-brand-sage/5">
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
            </div>
          </div>

        </div>
      </section>

    </motion.div>
  );
}
