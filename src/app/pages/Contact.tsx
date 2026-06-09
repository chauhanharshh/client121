import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SEO } from "../components/SEO";
import { faqs } from "../data";
import { Mail, Phone, MapPin, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="w-16 h-16 border border-[#8F9E92] flex items-center justify-center mx-auto mb-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L19 7" stroke="#8F9E92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3
          className="text-[#2D2D2D] mb-4"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.6rem" }}
        >
          Your Story Begins Here
        </h3>
        <p
          className="text-[#2D2D2D]/55 max-w-sm mx-auto text-[14px] leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We've received your enquiry and will reach out within 24 hours to begin crafting your journey.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            className="block text-[11px] tracking-[0.2em] uppercase text-[#2D2D2D]/50 mb-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Full Name *
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-[#2D2D2D]/20 py-3 text-[14px] text-[#2D2D2D] placeholder-[#2D2D2D]/30 focus:outline-none focus:border-[#2D2D2D] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            className="block text-[11px] tracking-[0.2em] uppercase text-[#2D2D2D]/50 mb-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Email Address *
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-[#2D2D2D]/20 py-3 text-[14px] text-[#2D2D2D] placeholder-[#2D2D2D]/30 focus:outline-none focus:border-[#2D2D2D] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            className="block text-[11px] tracking-[0.2em] uppercase text-[#2D2D2D]/50 mb-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Phone Number
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-[#2D2D2D]/20 py-3 text-[14px] text-[#2D2D2D] placeholder-[#2D2D2D]/30 focus:outline-none focus:border-[#2D2D2D] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label
            className="block text-[11px] tracking-[0.2em] uppercase text-[#2D2D2D]/50 mb-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Preferred Destination
          </label>
          <select
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-[#2D2D2D]/20 py-3 text-[14px] text-[#2D2D2D] focus:outline-none focus:border-[#2D2D2D] transition-colors appearance-none"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <option value="">Select a region</option>
            <option>North India</option>
            <option>South India</option>
            <option>East India</option>
            <option>West India</option>
            <option>North-East India</option>
            <option>Pan India</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label
          className="block text-[11px] tracking-[0.2em] uppercase text-[#2D2D2D]/50 mb-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Intended Travel Date
        </label>
        <input
          name="travelDate"
          type="month"
          value={form.travelDate}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-[#2D2D2D]/20 py-3 text-[14px] text-[#2D2D2D] focus:outline-none focus:border-[#2D2D2D] transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        />
      </div>

      <div>
        <label
          className="block text-[11px] tracking-[0.2em] uppercase text-[#2D2D2D]/50 mb-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Tell Us Your Story *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-transparent border-b border-[#2D2D2D]/20 py-3 text-[14px] text-[#2D2D2D] placeholder-[#2D2D2D]/30 focus:outline-none focus:border-[#2D2D2D] transition-colors resize-none"
          style={{ fontFamily: "'Inter', sans-serif" }}
          placeholder="What kind of journey are you dreaming of? Any specific experiences, places, or feelings you want to capture?"
        />
      </div>

      <button
        type="submit"
        className="group flex items-center gap-3 bg-[#2D2D2D] text-white px-8 py-4 text-[12px] tracking-[0.25em] uppercase hover:bg-[#D8C7A1] hover:text-[#2D2D2D] transition-all duration-300 mt-4"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Send My Enquiry
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-[#2D2D2D]/10"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span
          className="text-[#2D2D2D] text-[15px] group-hover:text-[#8F9E92] transition-colors duration-200"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
        >
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`text-[#8F9E92] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="text-[#2D2D2D]/60 text-[14px] leading-relaxed pb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Reach out to Route Story and let's craft your next unforgettable journey across India."
        ogImage="https://images.unsplash.com/photo-1544015759-237f57b15e11?w=1200&h=630&fit=crop&auto=format"
      />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 lg:px-10 bg-[#FAF8F4] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&h=800&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#FAF8F4]" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.35em] uppercase text-[#8F9E92] mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Begin Your Journey
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-[#2D2D2D] max-w-2xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            Every Great Story
            <br />
            <em className="text-[#8F9E92]">Starts with a Conversation</em>
          </motion.h1>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="bg-[#FAF8F4] pb-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-[#2D2D2D] mb-10"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.8rem" }}
            >
              Plan Your Journey
            </h2>
            <ContactForm />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-10"
          >
            {/* WhatsApp CTA */}
            <div className="bg-[#2D2D2D] p-8">
              <p
                className="text-[11px] tracking-[0.3em] uppercase text-[#8F9E92] mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Prefer to chat?
              </p>
              <h3
                className="text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.3rem" }}
              >
                Reach Us on WhatsApp
              </h3>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#D8C7A1] text-[#2D2D2D] px-6 py-3 text-[12px] tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <MessageCircle size={14} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 border border-[#E8EBEC] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={14} className="text-[#8F9E92]" />
                </div>
                <div>
                  <p
                    className="text-[11px] tracking-[0.2em] uppercase text-[#8F9E92] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:hello@routestory.in"
                    className="text-[#2D2D2D] text-[15px] hover:text-[#8F9E92] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    hello@routestory.in
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 border border-[#E8EBEC] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={14} className="text-[#8F9E92]" />
                </div>
                <div>
                  <p
                    className="text-[11px] tracking-[0.2em] uppercase text-[#8F9E92] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="text-[#2D2D2D] text-[15px] hover:text-[#8F9E92] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 border border-[#E8EBEC] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#8F9E92]" />
                </div>
                <div>
                  <p
                    className="text-[11px] tracking-[0.2em] uppercase text-[#8F9E92] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Office
                  </p>
                  <p
                    className="text-[#2D2D2D] text-[14px] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Route Story, 14 Lodhi Colony<br />
                    New Delhi — 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-video bg-[#E8EBEC] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2!2d77.2300!3d28.5900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM1JzI0LjAiTiA3N8KwMTMnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(0.85) opacity(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Route Story Office Location"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#E8EBEC] py-28 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="mb-14"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-[11px] tracking-[0.35em] uppercase text-[#8F9E92] mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Frequently Asked
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-[#2D2D2D]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              }}
            >
              Questions We're Asked Often
            </motion.h2>
          </motion.div>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
