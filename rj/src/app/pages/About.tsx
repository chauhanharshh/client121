import { useRef } from "react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { useCMS } from "../context/CMSContext";
import { Link } from "react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const { content } = useCMS();
  const teamMembers = content.teamMembersData;
  const aboutData = content.aboutPage;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <>
      <SEO
        title="About Us"
        description="Route Story was founded to bring meaningful travel back — not packages, not itineraries, but stories that change you."
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center bg-[#fafafa] border-b border-black/5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-4xl mx-auto px-6 text-center pt-32 pb-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent-secondary)] mb-6 font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {aboutData.heroSubtitle}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-black mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
              lineHeight: 1.1,
            }}
          >
            {aboutData.heroTitle}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-black/60 max-w-2xl mx-auto text-[17px] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {aboutData.heroDescription}
          </motion.p>
        </motion.div>
      </section>

      {/* Why We Started */}
      <section className="bg-[#e2e4e6] py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="lg:col-span-7"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] tracking-[0.35em] uppercase text-black/60 mb-6 font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {aboutData.whyWeStarted.subtitle}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-black mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.2,
              }}
            >
              {aboutData.whyWeStarted.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-black/70 text-[16px] leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {aboutData.whyWeStarted.p1}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-black/70 text-[16px] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {aboutData.whyWeStarted.p2}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#f0f2f5] p-10 lg:p-14 border-l-4 border-black/20 shadow-2xl">
              <p
                className="text-black/90 text-[20px] leading-relaxed mb-8"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
              >
                "{aboutData.whyWeStarted.quote}"
              </p>
              <p
                className="text-black/60 text-[11px] tracking-widest uppercase font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {aboutData.whyWeStarted.quoteAuthor}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#fafafa] p-12 lg:p-16 border border-black/5 hover:border-black/10 transition-colors"
            >
              <p
                className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent-secondary)] mb-6 font-semibold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {aboutData.vision.subtitle}
              </p>
              <h2
                className="text-black mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  lineHeight: 1.2,
                }}
              >
                {aboutData.vision.title}
              </h2>
              <p
                className="text-black/60 text-[15px] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {aboutData.vision.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-[#fafafa] p-12 lg:p-16 border border-black/5 hover:border-black/10 transition-colors"
            >
              <p
                className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent-secondary)] mb-6 font-semibold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {aboutData.mission.subtitle}
              </p>
              <h2
                className="text-black mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  lineHeight: 1.2,
                }}
              >
                {aboutData.mission.title}
              </h2>
              <p
                className="text-black/60 text-[15px] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {aboutData.mission.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white pb-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="mb-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent-secondary)] mb-5 font-semibold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                The Team
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-black"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                }}
              >
                Meet the Storytellers
              </motion.h2>
            </div>

            <motion.div variants={fadeUp} className="flex gap-4 hidden md:flex">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>

          <div className="flex justify-end gap-3 mb-6 md:hidden">
              <button 
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={scrollRight}
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="flex-none w-[85vw] sm:w-[350px] md:w-[calc(33.333%-1rem)] snap-center bg-[#fafafa] p-10 border border-black/5 hover:border-black/10 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-[#f0f0f0] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0a0a0a] transition-colors duration-300">
                  <span className="text-[#0a0a0a] text-xl font-bold group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3
                  className="text-black mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.6rem" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-accent-secondary)] mb-6 font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {member.role}
                </p>
                <p
                  className="text-black/60 text-[14px] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-white py-32 px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-black mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
            }}
          >
            Ready to Begin Your Story?
          </motion.h2>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-[var(--color-accent-primary)] hover:text-black transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Get In Touch
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
