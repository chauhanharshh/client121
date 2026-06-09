import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { destinations } from "../data";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const regions = [
  { key: "all", label: "All India" },
  { key: "north", label: "North India" },
  { key: "south", label: "South India" },
  { key: "east", label: "East India" },
  { key: "west", label: "West India" },
  { key: "northeast", label: "North-East India" },
];

const allDestinations = [
  ...destinations.north.map((d) => ({ ...d, region: "North India" })),
  ...destinations.south.map((d) => ({ ...d, region: "South India" })),
  ...destinations.east.map((d) => ({ ...d, region: "East India" })),
  ...destinations.west.map((d) => ({ ...d, region: "West India" })),
  ...destinations.northeast.map((d) => ({ ...d, region: "North-East India" })),
];

function DestinationCard({ dest, index }: { dest: typeof allDestinations[0]; index: number }) {
  const tall = index % 5 === 0 || index % 5 === 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
      className={`group relative overflow-hidden cursor-pointer ${tall ? "row-span-2" : ""}`}
      style={{ minHeight: tall ? "480px" : "280px" }}
    >
      <img
        src={dest.image}
        alt={dest.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        style={{ minHeight: "inherit" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Tag */}
      <div className="absolute top-5 left-5">
        <span
          className="text-[9px] tracking-[0.25em] uppercase bg-[#D8C7A1]/90 text-[#2D2D2D] px-3 py-1"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {dest.tag}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
        <p
          className="text-[10px] tracking-[0.25em] uppercase text-[#8F9E92] mb-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {dest.region}
        </p>
        <h3
          className="text-white mb-3"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.25rem" }}
        >
          {dest.name}
        </h3>
        <p
          className="text-white/65 text-[13px] leading-relaxed mb-4 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {dest.description}
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#D8C7A1] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Explore <ArrowRight size={11} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  const [activeRegion, setActiveRegion] = useState("all");

  const filtered =
    activeRegion === "all"
      ? allDestinations
      : allDestinations.filter((d) => d.region.toLowerCase().includes(activeRegion));

  return (
    <>
      <SEO
        title="Destinations"
        description="Explore India's most extraordinary destinations — from the Himalayas to the backwaters, Rajasthan to the North-East."
        ogImage="https://images.unsplash.com/photo-1469521669194-babb45599def?w=1200&h=630&fit=crop&auto=format"
      />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 lg:px-10 bg-[#2D2D2D] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1800&h=600&fit=crop&auto=format"
            alt="India's diverse landscapes"
            className="w-full h-full object-cover opacity-30"
          />
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
            Destinations
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            Every Corner of India
            <br />
            <em className="text-[#D8C7A1]">Has a Story</em>
          </motion.h1>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="bg-[#FAF8F4] border-b border-[#E8EBEC] sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            {regions.map((r) => (
              <button
                key={r.key}
                onClick={() => setActiveRegion(r.key)}
                className={`flex-shrink-0 text-[11px] tracking-[0.2em] uppercase px-5 py-2 transition-all duration-200 ${
                  activeRegion === r.key
                    ? "bg-[#2D2D2D] text-white"
                    : "text-[#2D2D2D]/50 hover:text-[#2D2D2D]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#FAF8F4] py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[280px]">
            {filtered.map((dest, i) => (
              <DestinationCard key={dest.id} dest={dest} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8EBEC] py-24 px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-[#2D2D2D] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            }}
          >
            Not Sure Where Your Story Begins?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-[#2D2D2D]/60 mb-10 max-w-xl mx-auto text-[15px] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our travel curators will help you find the destination that resonates with your spirit.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-[#2D2D2D] text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-[#D8C7A1] hover:text-[#2D2D2D] transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Speak To A Curator
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
