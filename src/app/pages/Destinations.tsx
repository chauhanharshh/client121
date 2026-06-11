import { useState } from "react";
import { motion } from "motion/react";
import { Search, Clock, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { useCMS } from "../context/CMSContext";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const regions = [
  { key: "all", label: "All Curation" },
  { key: "north", label: "North India" },
  { key: "south", label: "South India" },
  { key: "east", label: "East India" },
  { key: "west", label: "West India" },
  { key: "northeast", label: "North-East India" },
];

function DestinationCard({ dest, index }: { dest: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32 ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-[55%] relative rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px]">
        {/* Route Badge */}
        <div className={`absolute top-6 ${isEven ? "left-6" : "right-6"} z-20`}>
          <div className="bg-[var(--color-accent-primary)] text-[var(--color-text-primary)] w-12 h-14 flex flex-col items-center justify-center rounded-sm shadow-md">
            <span className="text-[13px] font-bold leading-none">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-[8px] uppercase tracking-widest mt-1">Route</span>
          </div>
        </div>

        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />
        
        {/* Subtle Bottom Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
        
        <div className={`absolute bottom-8 ${isEven ? "left-8" : "right-8 text-right"} z-20`}>
          <p className="text-[var(--color-accent-primary)] text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            {dest.region} - {dest.tag}
          </p>
          <h3 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.5rem" }}>
            {dest.name}
          </h3>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-4 lg:px-0">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="flex items-center gap-1.5 border border-[var(--color-text-primary)]/20 text-[var(--color-text-primary)]/70 px-3 py-1.5 text-[10px] tracking-wider uppercase rounded-full" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Clock size={12} /> 6 Days / 5 Nights
          </span>
          <span className="flex items-center gap-1.5 border border-[var(--color-accent-secondary)] text-[var(--color-accent-secondary)] px-3 py-1.5 text-[10px] tracking-wider uppercase rounded-full bg-[var(--color-accent-secondary)]/10" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-secondary)]" /> Moderate
          </span>
        </div>

        <h2 className="text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 3vw, 2.5rem)", lineHeight: 1.1 }}>
          {dest.name}
        </h2>

        <p className="text-[var(--color-text-primary)]/60 text-[14px] leading-relaxed mb-10 max-w-md" style={{ fontFamily: "'Inter', sans-serif" }}>
          {dest.description}
        </p>

        {/* Footer info (Price & Buttons) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-t border-[var(--color-text-primary)]/10 pt-8 gap-6 sm:gap-0">
          <div>
            <p className="text-[var(--color-text-primary)]/50 text-[9px] uppercase tracking-[0.2em] mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
              Curation Direct Rate
            </p>
            <p className="text-[var(--color-text-primary)] flex items-baseline gap-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.6rem" }}>
              ₹18,500 <span className="text-[10px] font-normal text-[var(--color-text-primary)]/50 tracking-wider">/person</span>
            </p>
          </div>
          
          <div className="flex gap-3">
            <Link
              to="/contact"
              className="border border-[var(--color-text-primary)] text-[var(--color-text-primary)] px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] hover:bg-[var(--color-text-primary)] hover:text-white transition-colors text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Read More
            </Link>
            <Link
              to="/contact"
              className="bg-[var(--color-accent-primary)] text-[var(--color-text-primary)] px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] hover:bg-[#c4b187] transition-colors text-center font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Enquiry
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  const { content } = useCMS();
  const destinations = content.destinationsData;
  const destData = content.destinationsPage;

  const allDestinations = [
    ...destinations.north.map((d) => ({ ...d, region: "North India" })),
    ...destinations.south.map((d) => ({ ...d, region: "South India" })),
    ...destinations.east.map((d) => ({ ...d, region: "East India" })),
    ...destinations.west.map((d) => ({ ...d, region: "West India" })),
    ...destinations.northeast.map((d) => ({ ...d, region: "North-East India" })),
  ];

  const [activeRegion, setActiveRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allDestinations.filter((d) => {
    const matchesRegion = activeRegion === "all" || d.region.toLowerCase().includes(activeRegion);
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          d.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Destinations"
        description="Explore India's most extraordinary destinations — from the Himalayas to the backwaters, Rajasthan to the North-East."
        ogImage="https://images.unsplash.com/photo-1469521669194-babb45599def?w=1200&h=630&fit=crop&auto=format"
      />

      <div className="bg-[var(--color-bg)] min-h-screen">
        {/* Hero */}
        <section className="pt-40 pb-16 px-6 lg:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="max-w-7xl mx-auto"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent-primary)] font-bold mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {destData.heroSubtitle}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-[var(--color-text-primary)] max-w-3xl mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              {destData.heroTitle}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[var(--color-text-primary)]/70 max-w-2xl text-[14px] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {destData.heroDescription}
            </motion.p>
          </motion.div>
        </section>

        {/* Filter/Search Bar */}
        <section className="px-6 lg:px-10 pb-20 sticky top-[72px] z-30 bg-[var(--color-bg)]/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center border border-[var(--color-text-primary)]/10 rounded-md p-2 bg-white/50">
              
              {/* Search */}
              <div className="flex items-center gap-3 px-4 w-full lg:w-1/3">
                <Search size={16} className="text-[var(--color-text-primary)]/40" />
                <input
                  type="text"
                  placeholder="Search destinations, difficulty, season..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-[13px] w-full text-[var(--color-text-primary)] placeholder:text-[var(--color-text-primary)]/40"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto scrollbar-hide py-2 lg:py-0">
                {regions.map((r) => (
                  <button
                    key={r.key}
                    onClick={() => setActiveRegion(r.key)}
                    className={`flex-shrink-0 text-[10px] tracking-[0.15em] uppercase px-4 py-2.5 rounded-sm transition-all duration-200 ${
                      activeRegion === r.key
                        ? "bg-[var(--color-accent-primary)] text-[var(--color-text-primary)] font-medium"
                        : "border border-[var(--color-text-primary)]/10 text-[var(--color-text-primary)]/60 hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)]/30"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {r.label}
                  </button>
                ))}
                
                <div className="w-px h-6 bg-[var(--color-text-primary)]/10 mx-2 hidden lg:block" />
                
                <div className="flex items-center gap-2 px-2 flex-shrink-0">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-primary)]/50" style={{ fontFamily: "'Inter', sans-serif" }}>Sort:</span>
                  <select className="bg-transparent text-[11px] font-medium text-[var(--color-text-primary)] outline-none cursor-pointer appearance-none border border-[var(--color-text-primary)]/10 px-3 py-2 rounded-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <option>Featured Trips</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Duration: Short to Long</option>
                  </select>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* List View */}
        <section className="px-6 lg:px-10 pb-32">
          <div className="max-w-7xl mx-auto">
            {filtered.length > 0 ? (
              filtered.map((dest, i) => (
                <DestinationCard key={dest.id} dest={dest} index={i} />
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-[var(--color-text-primary)]/50" style={{ fontFamily: "'Inter', sans-serif" }}>No destinations found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[var(--color-text-primary)] py-24 px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-white mb-6"
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
              className="text-white/60 mb-10 max-w-xl mx-auto text-[15px] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our travel curators will help you find the destination that resonates with your spirit.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-[var(--color-accent-primary)] text-[var(--color-text-primary)] px-8 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Speak To A Curator
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
