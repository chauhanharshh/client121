import { useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { featuredJourneys, testimonials } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Parallax Image */}
      <motion.div className="absolute inset-0" style={{ y: yImg }}>
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1800&h=1200&fit=crop&auto=format"
          alt="India — Himalayas, Rajasthan, Kerala and beyond"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-[11px] tracking-[0.35em] uppercase text-[#D8C7A1] mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Premium Travel Experiences · India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-white max-w-5xl leading-tight mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
            lineHeight: 1.1,
          }}
        >
          Discover India Through
          <br />
          <em className="not-italic text-[#D8C7A1]">Stories</em>, Not Just Destinations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)" }}
        >
          Curated journeys across mountains, deserts, forests, beaches, heritage cities,
          sacred destinations, and hidden gems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            to="/customize"
            className="group flex items-center gap-3 bg-white text-[#2D2D2D] px-8 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-[#D8C7A1] transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Customize My Trip
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-3 border border-white/50 text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Talk To An Expert
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function WhySection() {
  const cards = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" stroke="#8F9E92" strokeWidth="1.5" fill="none"/>
          <path d="M16 10v6l4 2" stroke="#8F9E92" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Curated Experiences",
      description: "Handpicked journeys designed around meaningful experiences rather than generic itineraries. Every stop earns its place in your story.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="11" r="5" stroke="#8F9E92" strokeWidth="1.5" fill="none"/>
          <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#8F9E92" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      ),
      title: "Local Experts",
      description: "Insights from people who truly know every destination — not just the famous landmarks, but the lanes, the flavours, the people behind the place.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="5" y="8" width="22" height="16" rx="2" stroke="#8F9E92" strokeWidth="1.5" fill="none"/>
          <path d="M11 8V6M21 8V6M5 14h22" stroke="#8F9E92" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Seamless Planning",
      description: "From the first conversation to the final farewell, every logistical detail is handled with quiet precision so your mind stays free.",
    },
  ];

  return (
    <section className="bg-[#FAF8F4] py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.35em] uppercase text-[#8F9E92] mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Why Route Story
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-[#2D2D2D] max-w-2xl mx-auto"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Travel Designed Around You, Not a Catalogue
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8EBEC]"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="group bg-[#FAF8F4] p-10 hover:bg-[#2D2D2D] transition-all duration-500 cursor-default"
            >
              <div className="mb-8 group-hover:[&_path]:stroke-[#D8C7A1] group-hover:[&_circle]:stroke-[#D8C7A1] group-hover:[&_rect]:stroke-[#D8C7A1] transition-colors duration-500">
                {card.icon}
              </div>
              <h3
                className="text-[#2D2D2D] group-hover:text-white mb-4 transition-colors duration-500"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.3rem" }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm text-[#2D2D2D]/60 group-hover:text-white/60 leading-relaxed transition-colors duration-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedJourneys() {
  return (
    <section className="bg-[#E8EBEC] py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-[11px] tracking-[0.35em] uppercase text-[#8F9E92] mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Featured Journeys
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-[#2D2D2D]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Stories Worth Living
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <Link
              to="/experiences"
              className="group flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#2D2D2D]/60 hover:text-[#2D2D2D] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              View All Journeys
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          {featuredJourneys.map((j, i) => (
            <motion.div
              key={j.id}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className={`group relative overflow-hidden cursor-pointer ${
                i === 0 || i === 3 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
              }`}
              style={{ minHeight: i === 0 || i === 3 ? "400px" : "200px" }}
            >
              <img
                src={j.image}
                alt={j.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase text-[#D8C7A1] mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {j.category} · {j.duration}
                </p>
                <h3
                  className="text-white"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.1rem" }}
                >
                  {j.title}
                </h3>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-white/20 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function OurStorySection() {
  return (
    <section className="bg-[#FAF8F4] py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative overflow-hidden aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800&h=1000&fit=crop&auto=format"
              alt="Varanasi ghats at dawn"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative offset box */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D8C7A1]/30 -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#8F9E92]/30 -z-10" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.35em] uppercase text-[#8F9E92] mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our Story
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-[#2D2D2D] mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              lineHeight: 1.15,
            }}
          >
            Travel Is Not a Transaction.
            <br />
            <em>It Is a Transformation.</em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-[#2D2D2D]/65 leading-relaxed mb-6 text-[15px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We started Route Story because we believed the travel industry had forgotten something essential — that the point of a journey is not to arrive somewhere new, but to return home changed.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-[#2D2D2D]/65 leading-relaxed mb-10 text-[15px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            India has an extraordinary gift for transformation. Its mountains silence you. Its deserts humble you. Its ancient cities remind you how briefly you exist. Our job is simply to make space for that encounter.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase text-[#2D2D2D] border-b border-[#2D2D2D]/30 pb-1 hover:border-[#2D2D2D] transition-colors duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Read Our Full Story
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section className="bg-[#2D2D2D] py-28 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.35em] uppercase text-[#8F9E92] text-center mb-16"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Traveller Stories
        </motion.p>

        <div className="relative min-h-[260px] flex items-center">
          <AnimatedTestimonial testimonial={testimonials[current]} key={current} />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-16">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 ${
                  i === current
                    ? "w-8 h-px bg-[#D8C7A1]"
                    : "w-4 h-px bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedTestimonial({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <p
        className="text-white/90 mb-10"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
          lineHeight: 1.5,
        }}
      >
        "{testimonial.quote}"
      </p>
      <p
        className="text-[#D8C7A1] text-[13px] tracking-wider"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {testimonial.author}
      </p>
      <p
        className="text-white/35 text-[11px] tracking-[0.2em] uppercase mt-1"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {testimonial.location} · {testimonial.journey}
      </p>
    </motion.div>
  );
}

function CTASection() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1469521669194-babb45599def?w=1800&h=800&fit=crop&auto=format"
        alt="Himalayan landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#2D2D2D]/75" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.35em] uppercase text-[#D8C7A1] mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Begin Here
        </motion.p>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-white mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            lineHeight: 1.1,
          }}
        >
          Let's Create Your Next Story
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-white/60 mb-12 text-[15px] leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Tell us what you dream of — and we will craft the journey around it.
        </motion.p>
        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-[#D8C7A1] text-[#2D2D2D] px-10 py-5 text-[12px] tracking-[0.25em] uppercase hover:bg-white transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Plan My Journey
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="Premium Travel Experiences Across India"
        description="Route Story crafts immersive, handpicked journeys across India — from the Himalayas to the backwaters. Every journey has a story."
      />
      <HeroSection />
      <WhySection />
      <FeaturedJourneys />
      <OurStorySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
