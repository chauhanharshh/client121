import { useState } from "react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { useCMS } from "../context/CMSContext";
import { Quote, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Experiences() {
  const { content, updateContent } = useCMS();
  const reviews = content.testimonialsData;

  const [formData, setFormData] = useState({ author: "", location: "", journey: "", quote: "", rating: 5 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.author || !formData.quote) return;
    
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        const data = await res.json();
        // Optimistically update frontend context
        updateContent({
          ...content,
          testimonialsData: [data.review, ...content.testimonialsData]
        });
        setFormData({ author: "", location: "", journey: "", quote: "", rating: 5 });
      }
    } catch (err) {
      console.error("Failed to add review", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroTitle = "Traveller Stories";
  const heroSubtitle = "In Their Words";
  const heroDescription = "We don't measure our success in journeys booked, but in stories created. Here is what our travellers have to say about their time with Route Story.";

  return (
    <>
      <SEO
        title="Reviews"
        description="Read stories and reviews from our travellers."
        ogImage="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=630&fit=crop&auto=format"
      />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden bg-[var(--color-bg)]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent-secondary)] mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {heroSubtitle}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-[var(--color-text-primary)] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            {heroTitle}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[var(--color-text-primary)]/60 max-w-2xl mx-auto text-[15px] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {heroDescription}
          </motion.p>
        </motion.div>
      </section>

      {/* Two Column Layout */}
      <section className="bg-[var(--color-bg-light)] py-20 px-6 lg:px-10 min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-[var(--brand-mist)] p-8 lg:p-10 shadow-sm border border-[var(--color-text-primary)]/5 rounded-2xl"
            >
              <h2
                className="text-[var(--color-text-primary)] mb-2"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.8rem", letterSpacing: "-0.02em" }}
              >
                Share Your Story
              </h2>
              <p
                className="text-[var(--color-text-primary)]/60 mb-8 text-[13px] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We would love to hear about your experience with Route Story.
              </p>

              <form onSubmit={handleAddReview} className="space-y-6">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-primary)]/70 mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--color-text-primary)]/20 py-2 text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
                    placeholder="e.g. Priya Mehta"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-primary)]/70 mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--color-text-primary)]/20 py-2 text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
                    placeholder="e.g. Mumbai"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-primary)]/70 mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Journey</label>
                  <input
                    type="text"
                    value={formData.journey}
                    onChange={(e) => setFormData({ ...formData, journey: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--color-text-primary)]/20 py-2 text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
                    placeholder="e.g. Rajasthan Circuit"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-primary)]/70 mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Your Story *</label>
                  <textarea
                    required
                    value={formData.quote}
                    onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                    rows={4}
                    className="w-full bg-transparent border-b border-[var(--color-text-primary)]/20 py-2 text-[14px] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors resize-none"
                    placeholder="Tell us about your favourite moments..."
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-primary)]/70 mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Rating</label>
                  <div className="flex gap-1 py-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          size={20}
                          className={star <= formData.rating ? "fill-[#FFC107] text-[#FFC107]" : "text-[var(--color-text-primary)]/20"}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--color-text-primary)] text-[var(--color-bg)] px-6 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-[var(--color-accent-primary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 disabled:opacity-50 mt-4 rounded-xl"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Column: Masonry Reviews */}
          <div className="lg:col-span-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="columns-1 md:columns-2 gap-8 space-y-8"
            >
              {reviews.map((review) => (
                <motion.div
                  key={review.id}
                  variants={fadeUp}
                  className="break-inside-avoid bg-[var(--brand-mist)] p-8 relative group shadow-sm border border-[var(--color-text-primary)]/5 rounded-2xl"
                >
                  <Quote className="text-[var(--color-accent-primary)]/20 w-6 h-6 absolute top-6 right-6" />
                  
                  {/* Rating Display */}
                  {(review.rating || 5) && (
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#FFC107] text-[#FFC107]" />
                      ))}
                    </div>
                  )}

                  <p
                    className="text-[var(--color-text-primary)]/80 text-[15px] leading-relaxed mb-8 relative z-10"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    "{review.quote}"
                  </p>
                  <div className="border-t border-[var(--color-text-primary)]/10 pt-6">
                    <p
                      className="text-[var(--color-text-primary)] font-semibold text-[13px] tracking-wide mb-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {review.author}
                    </p>
                    <p
                      className="text-[var(--color-text-primary)]/50 text-[11px] tracking-wider uppercase mb-4"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {review.location}
                    </p>
                    <div className="inline-block bg-[var(--color-bg)] px-4 py-2 rounded-full shadow-sm">
                      <p
                        className="text-[var(--color-accent-primary)] text-[10px] tracking-[0.2em] uppercase font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {review.journey}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
