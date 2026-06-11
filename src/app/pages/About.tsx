import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { useCMS } from "../context/CMSContext";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const { content } = useCMS();
  const teamMembers = content.teamMembersData;
  const aboutData = content.aboutPage;

  return (
    <>
      <SEO
        title="About Us"
        description="Route Story was founded to bring meaningful travel back — not packages, not itineraries, but stories that change you."
        ogImage="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=630&fit=crop&auto=format"
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1800&h=900&fit=crop&auto=format"
          alt="Kerala backwaters — serene and timeless"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-text-primary)] via-black/40 to-black/20" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-40"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent-secondary)] mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {aboutData.heroSubtitle}
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
            {aboutData.heroTitle}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.9 }}
            className="text-white/80 max-w-2xl mt-6 text-lg"
          >
            {aboutData.heroDescription}
          </motion.p>
        </motion.div>
      </section>

      {/* Why We Started */}
      <section className="bg-[var(--color-text-primary)] py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent-secondary)] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {aboutData.whyWeStarted.subtitle}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-white mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                lineHeight: 1.2,
              }}
            >
              {aboutData.whyWeStarted.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-white/55 text-[15px] leading-relaxed mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {aboutData.whyWeStarted.p1}
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-white/55 text-[15px] leading-relaxed"
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
            className="relative"
          >
            <img
              src={aboutData.whyWeStarted.image}
              alt={aboutData.whyWeStarted.quoteAuthor}
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[var(--color-bg)]/95 p-5">
              <p
                className="text-[var(--color-text-primary)] text-[13px] leading-snug"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
              >
                "{aboutData.whyWeStarted.quote}"
              </p>
              <p
                className="text-[var(--color-accent-secondary)] text-[11px] tracking-wider mt-2 uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {aboutData.whyWeStarted.quoteAuthor}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[var(--color-bg)] py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-bg-light)]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[var(--color-bg)] p-12 lg:p-16"
            >
              <p
                className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent-secondary)] mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {aboutData.vision.subtitle}
              </p>
              <h2
                className="text-[var(--color-text-primary)] mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  lineHeight: 1.2,
                }}
              >
                {aboutData.vision.title}
              </h2>
              <p
                className="text-[var(--color-text-primary)]/60 text-[15px] leading-relaxed"
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
              className="bg-[var(--color-bg-light)] p-12 lg:p-16"
            >
              <p
                className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent-secondary)] mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {aboutData.mission.subtitle}
              </p>
              <h2
                className="text-[var(--color-text-primary)] mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  lineHeight: 1.2,
                }}
              >
                {aboutData.mission.title}
              </h2>
              <p
                className="text-[var(--color-text-primary)]/60 text-[15px] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {aboutData.mission.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--color-bg)] pb-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="mb-16"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent-secondary)] mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The Team
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-[var(--color-text-primary)]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Meet the Storytellers
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group"
              >
                <div className="overflow-hidden aspect-[4/5] mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p
                  className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-accent-secondary)] mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {member.role}
                </p>
                <h3
                  className="text-[var(--color-text-primary)] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.3rem" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-[var(--color-text-primary)]/55 text-[14px] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[var(--color-text-primary)] py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {aboutData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p
                className="text-white mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                }}
              >
                {stat.number}
              </p>
              <p
                className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-accent-secondary)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-bg)] py-24 px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-[var(--color-text-primary)] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            }}
          >
            Ready to Begin Your Story?
          </motion.h2>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-[var(--color-text-primary)] text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-[var(--color-accent-primary)] hover:text-[var(--color-text-primary)] transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
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
