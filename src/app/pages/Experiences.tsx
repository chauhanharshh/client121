import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { experiences } from "../data";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const categories = ["All", "Adventure", "Heritage", "Wildlife", "Luxury Escapes", "Pilgrimage", "Road Trips", "Honeymoon", "Family Tours"];

export default function Experiences() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === "All" ? experiences : experiences.filter((e) => e.category === active);

  return (
    <>
      <SEO
        title="Experiences"
        description="From high-altitude adventures to palace stays, sacred pilgrimages to honeymoon escapes — discover curated experiences across India with Route Story."
        ogImage="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=630&fit=crop&auto=format"
      />

      {/* Hero */}
      <section className="relative pt-40 pb-32 px-6 lg:px-10 overflow-hidden bg-[#FAF8F4]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-7xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.35em] uppercase text-[#8F9E92] mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            What We Offer
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-[#2D2D2D] max-w-3xl mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            Experiences That
            <br />
            <em className="text-[#8F9E92]">Leave a Mark</em>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-[#2D2D2D]/60 max-w-xl text-[15px] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We design journeys around what moves you — not around what's convenient for us to sell.
          </motion.p>
        </motion.div>
      </section>

      {/* Category Pills */}
      <section className="bg-[#FAF8F4] border-b border-[#E8EBEC] sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`flex-shrink-0 text-[11px] tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-200 ${
                  active === c
                    ? "bg-[#2D2D2D] text-white border-[#2D2D2D]"
                    : "border-[#2D2D2D]/20 text-[#2D2D2D]/50 hover:text-[#2D2D2D] hover:border-[#2D2D2D]/50"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="bg-[#FAF8F4] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8EBEC]"
            >
              {filtered.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative overflow-hidden bg-[#FAF8F4] cursor-pointer"
                  style={{ minHeight: "460px" }}
                  onMouseEnter={() => setHovered(exp.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 transition-all duration-500" />
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-between p-8" style={{ minHeight: "460px" }}>
                    <div>
                      <span
                        className="text-[9px] tracking-[0.3em] uppercase border border-[#D8C7A1]/60 text-[#D8C7A1] px-3 py-1"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {exp.category}
                      </span>
                    </div>

                    <div>
                      <h3
                        className="text-white mb-4"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 700,
                          fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                        }}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className="text-white/65 text-[14px] leading-relaxed mb-6 max-w-md"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {exp.description}
                      </p>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: hovered === exp.id ? 1 : 0, y: hovered === exp.id ? 0 : 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#D8C7A1] border-b border-[#D8C7A1]/40 pb-1 hover:border-[#D8C7A1] transition-colors"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Enquire Now <ArrowRight size={11} />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bespoke Banner */}
      <section className="bg-[#2D2D2D] py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-[11px] tracking-[0.35em] uppercase text-[#8F9E92] mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Fully Bespoke
            </p>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Don't See What You're Looking For?
            </h2>
            <p
              className="text-white/50 text-[15px] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Every journey we create is unique. If your vision doesn't fit a category, that's precisely where we excel — in the space between definitions.
            </p>
          </div>
          <div className="lg:text-right">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-[#D8C7A1] text-[#2D2D2D] px-8 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Design My Experience
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
