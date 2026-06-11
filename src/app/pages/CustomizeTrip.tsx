import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SEO } from "../components/SEO";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// ── Step data ──────────────────────────────────────────────────────────────

const regionOptions = [
  { value: "north", label: "North India", desc: "Rajasthan, Delhi, Agra, Varanasi, Himachal", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop&auto=format" },
  { value: "south", label: "South India", desc: "Kerala, Karnataka, Tamil Nadu, Andhra", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop&auto=format" },
  { value: "east", label: "East India", desc: "Darjeeling, Odisha, Kolkata, Bihar", image: "https://images.unsplash.com/photo-1544015759-237f57b15e11?w=600&h=400&fit=crop&auto=format" },
  { value: "west", label: "West India", desc: "Goa, Gujarat, Maharashtra, Rann of Kutch", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop&auto=format" },
  { value: "northeast", label: "North-East India", desc: "Meghalaya, Assam, Sikkim, Arunachal", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&h=400&fit=crop&auto=format" },
  { value: "pan", label: "Pan India", desc: "A journey across multiple regions", image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=600&h=400&fit=crop&auto=format" },
];

const experienceOptions = [
  { value: "adventure", label: "Adventure & Trekking", icon: "⛰️" },
  { value: "heritage", label: "Heritage & Culture", icon: "🏛️" },
  { value: "wildlife", label: "Wildlife & Nature", icon: "🐅" },
  { value: "luxury", label: "Luxury Escapes", icon: "✨" },
  { value: "spiritual", label: "Spiritual & Pilgrimage", icon: "🕌" },
  { value: "roadtrip", label: "Road Trips", icon: "🛣️" },
  { value: "honeymoon", label: "Honeymoon & Romance", icon: "🌹" },
  { value: "family", label: "Family Journeys", icon: "👨‍👩‍👧" },
  { value: "culinary", label: "Food & Culinary", icon: "🍛" },
  { value: "photography", label: "Photography Tours", icon: "📷" },
];

const durationOptions = [
  { value: "3-5", label: "3 – 5 Days", desc: "A short, focused escape" },
  { value: "6-8", label: "6 – 8 Days", desc: "The ideal week-long journey" },
  { value: "9-12", label: "9 – 12 Days", desc: "A deeply immersive experience" },
  { value: "13+", label: "13+ Days", desc: "A grand, unhurried expedition" },
];

const budgetOptions = [
  { value: "comfort", label: "Comfort", desc: "₹50,000 – ₹1,00,000 per person", sub: "Well-chosen hotels, curated experiences" },
  { value: "premium", label: "Premium", desc: "₹1,00,000 – ₹2,50,000 per person", sub: "Boutique stays, private guides" },
  { value: "luxury", label: "Luxury", desc: "₹2,50,000 – ₹5,00,000 per person", sub: "Heritage hotels, exclusive access" },
  { value: "ultra", label: "Ultra Luxury", desc: "₹5,00,000+ per person", sub: "Palace suites, private aircraft, bespoke everything" },
];

const travellerOptions = [
  { value: "solo", label: "Solo", icon: "🧍" },
  { value: "couple", label: "Couple", icon: "👫" },
  { value: "family", label: "Family", icon: "👨‍👩‍👧‍👦" },
  { value: "group", label: "Group of Friends", icon: "👯" },
  { value: "corporate", label: "Corporate / Offsite", icon: "💼" },
];

const steps = ["Destination", "Experiences", "Duration", "Budget", "Travellers", "Details"];

// ── Reusable card selector ─────────────────────────────────────────────────

function SelectCard({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative text-left w-full border transition-all duration-300 cursor-pointer ${
        selected
          ? "border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white"
          : "border-[var(--color-bg-light)] bg-white hover:border-[var(--color-text-primary)]/40"
      }`}
    >
      {selected && (
        <div className="absolute top-3 right-3 w-5 h-5 bg-[var(--color-accent-primary)] flex items-center justify-center">
          <Check size={11} className="text-[var(--color-text-primary)]" strokeWidth={2.5} />
        </div>
      )}
      {children}
    </button>
  );
}

// ── Step components ────────────────────────────────────────────────────────

function StepDestination({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {regionOptions.map((opt) => (
        <SelectCard key={opt.value} selected={value === opt.value} onClick={() => onChange(opt.value)}>
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={opt.image}
              alt={opt.label}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                value === opt.value ? "scale-105 brightness-75" : "group-hover:scale-105"
              }`}
            />
          </div>
          <div className="p-4">
            <p
              className={`text-[13px] mb-1 ${value === opt.value ? "text-white" : "text-[var(--color-text-primary)]"}`}
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              {opt.label}
            </p>
            <p
              className={`text-[11px] leading-relaxed ${value === opt.value ? "text-white/60" : "text-[var(--color-text-primary)]/50"}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {opt.desc}
            </p>
          </div>
        </SelectCard>
      ))}
    </div>
  );
}

function StepExperiences({
  value,
  onChange,
}: {
  value: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (v: string) => {
    onChange(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);
  };
  return (
    <div>
      <p
        className="text-[12px] text-[var(--color-accent-secondary)] mb-6 tracking-wide"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Select all that resonate — you can choose multiple.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {experienceOptions.map((opt) => {
          const sel = value.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggle(opt.value)}
              className={`flex flex-col items-center gap-3 py-6 px-4 border transition-all duration-300 ${
                sel
                  ? "border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white"
                  : "border-[var(--color-bg-light)] bg-white text-[var(--color-text-primary)]/70 hover:border-[var(--color-text-primary)]/40 hover:text-[var(--color-text-primary)]"
              }`}
            >
              <span className="text-2xl">{opt.icon}</span>
              <span
                className="text-[11px] tracking-wide text-center leading-snug"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {opt.label}
              </span>
              {sel && (
                <div className="w-4 h-4 bg-[var(--color-accent-primary)] flex items-center justify-center">
                  <Check size={9} className="text-[var(--color-text-primary)]" strokeWidth={3} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepDuration({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
      {durationOptions.map((opt) => (
        <SelectCard key={opt.value} selected={value === opt.value} onClick={() => onChange(opt.value)}>
          <div className="p-7">
            <p
              className={`mb-1 ${value === opt.value ? "text-white" : "text-[var(--color-text-primary)]"}`}
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.6rem" }}
            >
              {opt.label}
            </p>
            <p
              className={`text-[12px] ${value === opt.value ? "text-white/60" : "text-[var(--color-text-primary)]/50"}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {opt.desc}
            </p>
          </div>
        </SelectCard>
      ))}
    </div>
  );
}

function StepBudget({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {budgetOptions.map((opt) => (
        <SelectCard key={opt.value} selected={value === opt.value} onClick={() => onChange(opt.value)}>
          <div className="p-7">
            <p
              className={`text-[11px] tracking-[0.25em] uppercase mb-3 ${value === opt.value ? "text-[var(--color-accent-primary)]" : "text-[var(--color-accent-secondary)]"}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {opt.label}
            </p>
            <p
              className={`mb-2 ${value === opt.value ? "text-white" : "text-[var(--color-text-primary)]"}`}
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.1rem" }}
            >
              {opt.desc}
            </p>
            <p
              className={`text-[12px] ${value === opt.value ? "text-white/55" : "text-[var(--color-text-primary)]/45"}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {opt.sub}
            </p>
          </div>
        </SelectCard>
      ))}
    </div>
  );
}

function StepTravellers({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {travellerOptions.map((opt) => (
        <SelectCard key={opt.value} selected={value === opt.value} onClick={() => onChange(opt.value)}>
          <div className="flex flex-col items-center gap-4 py-8 px-4">
            <span className="text-3xl">{opt.icon}</span>
            <span
              className={`text-[12px] tracking-wide text-center ${value === opt.value ? "text-white" : "text-[var(--color-text-primary)]/70"}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {opt.label}
            </span>
          </div>
        </SelectCard>
      ))}
    </div>
  );
}

function StepDetails({
  value,
  onChange,
}: {
  value: { name: string; email: string; phone: string; month: string; notes: string };
  onChange: (v: typeof value) => void;
}) {
  const set = (key: string, val: string) => onChange({ ...value, [key]: val });
  const inputClass =
    "w-full bg-transparent border-b border-[var(--color-text-primary)]/20 py-3 text-[14px] text-[var(--color-text-primary)] placeholder-[var(--color-text-primary)]/30 focus:outline-none focus:border-[var(--color-text-primary)] transition-colors";
  const labelClass = "block text-[11px] tracking-[0.2em] uppercase text-[var(--color-text-primary)]/50 mb-2";

  return (
    <div className="max-w-2xl space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className={labelClass} style={{ fontFamily: "'Inter', sans-serif" }}>
            Full Name *
          </label>
          <input
            value={value.name}
            onChange={(e) => set("name", e.target.value)}
            required
            placeholder="Your name"
            className={inputClass}
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>
        <div>
          <label className={labelClass} style={{ fontFamily: "'Inter', sans-serif" }}>
            Email Address *
          </label>
          <input
            type="email"
            value={value.email}
            onChange={(e) => set("email", e.target.value)}
            required
            placeholder="your@email.com"
            className={inputClass}
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className={labelClass} style={{ fontFamily: "'Inter', sans-serif" }}>
            Phone Number
          </label>
          <input
            value={value.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+91 98765 43210"
            className={inputClass}
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>
        <div>
          <label className={labelClass} style={{ fontFamily: "'Inter', sans-serif" }}>
            Preferred Travel Month
          </label>
          <input
            type="month"
            value={value.month}
            onChange={(e) => set("month", e.target.value)}
            className={inputClass}
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>
      </div>
      <div>
        <label className={labelClass} style={{ fontFamily: "'Inter', sans-serif" }}>
          Anything else you'd like us to know?
        </label>
        <textarea
          value={value.notes}
          onChange={(e) => set("notes", e.target.value)}
          rows={4}
          placeholder="Special requests, accessibility needs, dream moments you want us to create..."
          className={`${inputClass} resize-none`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        />
      </div>
    </div>
  );
}

// ── Summary sidebar ────────────────────────────────────────────────────────

function Summary({
  region,
  experiences,
  duration,
  budget,
  traveller,
}: {
  region: string;
  experiences: string[];
  duration: string;
  budget: string;
  traveller: string;
}) {
  const regionLabel = regionOptions.find((r) => r.value === region)?.label;
  const budgetLabel = budgetOptions.find((b) => b.value === budget)?.label;
  const travellerLabel = travellerOptions.find((t) => t.value === traveller)?.label;
  const expLabels = experienceOptions.filter((e) => experiences.includes(e.value)).map((e) => e.label);

  const rows = [
    { label: "Region", value: regionLabel },
    { label: "Experiences", value: expLabels.length ? expLabels.join(", ") : null },
    { label: "Duration", value: duration ? `${duration} Days` : null },
    { label: "Budget", value: budgetLabel },
    { label: "Travelling As", value: travellerLabel },
  ].filter((r) => r.value);

  if (!rows.length) return null;

  return (
    <div className="bg-[var(--color-text-primary)] p-6 sticky top-28">
      <p
        className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent-secondary)] mb-5"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Your Journey So Far
      </p>
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.label}>
            <p
              className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {r.label}
            </p>
            <p
              className="text-white text-[13px] leading-snug"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {r.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Success screen ─────────────────────────────────────────────────────────

function SuccessScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="w-20 h-20 border border-[var(--color-accent-secondary)] flex items-center justify-center mx-auto mb-10"
      >
        <Check size={28} className="text-[var(--color-accent-secondary)]" strokeWidth={1.5} />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-[var(--color-text-primary)] mb-4"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
        }}
      >
        Your Story Has Begun
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className="text-[var(--color-text-primary)]/55 max-w-md mx-auto text-[15px] leading-relaxed mb-10"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        We've received your preferences and will reach out within 24 hours with a hand-crafted journey proposal — just for you.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-3 bg-[var(--color-text-primary)] text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-[var(--color-accent-primary)] hover:text-[var(--color-text-primary)] transition-all duration-300"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Back to Home
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </motion.div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────

export default function CustomizeTrip() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);

  const [region, setRegion] = useState("");
  const [selectedExperiences, setExperiences] = useState<string[]>([]);
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [traveller, setTraveller] = useState("");
  const [details, setDetails] = useState({ name: "", email: "", phone: "", month: "", notes: "" });

  const canNext = [
    !!region,
    selectedExperiences.length > 0,
    !!duration,
    !!budget,
    !!traveller,
    !!(details.name && details.email),
  ];

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setStep((s) => s + dir);
  };

  const handleSubmit = () => setSubmitted(true);

  const stepContent = [
    <StepDestination value={region} onChange={setRegion} />,
    <StepExperiences value={selectedExperiences} onChange={setExperiences} />,
    <StepDuration value={duration} onChange={setDuration} />,
    <StepBudget value={budget} onChange={setBudget} />,
    <StepTravellers value={traveller} onChange={setTraveller} />,
    <StepDetails value={details} onChange={setDetails} />,
  ];

  if (submitted) return <SuccessScreen />;

  return (
    <>
      <SEO
        title="Customize Your Trip"
        description="Design your perfect journey across India with Route Story. Tell us your preferences and we'll craft a bespoke itinerary just for you."
        ogImage="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=630&fit=crop&auto=format"
      />

      {/* Hero strip */}
      <section className="relative pt-28 pb-14 px-6 lg:px-10 bg-[var(--color-text-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1469521669194-babb45599def?w=1800&h=400&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent-secondary)] mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Bespoke Journeys
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-white max-w-2xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              lineHeight: 1.1,
            }}
          >
            Design Your Perfect
            <br />
            <em className="text-[var(--color-accent-primary)]">Indian Journey</em>
          </motion.h1>
        </motion.div>
      </section>

      {/* Progress bar */}
      <div className="bg-[var(--color-bg)] border-b border-[var(--color-bg-light)] sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide py-4">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center flex-shrink-0">
                <button
                  onClick={() => i < step && (setDirection(-1), setStep(i))}
                  className={`flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 ${
                    i === step
                      ? "text-[var(--color-text-primary)]"
                      : i < step
                      ? "text-[var(--color-accent-secondary)] hover:text-[var(--color-text-primary)] cursor-pointer"
                      : "text-[var(--color-text-primary)]/25 cursor-default"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  disabled={i > step}
                >
                  <span
                    className={`w-5 h-5 flex items-center justify-center text-[10px] transition-colors duration-200 ${
                      i < step
                        ? "bg-[var(--color-accent-secondary)] text-white"
                        : i === step
                        ? "bg-[var(--color-text-primary)] text-white"
                        : "border border-[var(--color-text-primary)]/20 text-[var(--color-text-primary)]/30"
                    }`}
                  >
                    {i < step ? <Check size={9} strokeWidth={3} /> : i + 1}
                  </span>
                  {s}
                </button>
                {i < steps.length - 1 && (
                  <div className="w-6 h-px bg-[var(--color-bg-light)] mx-3 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
          {/* Thin progress line */}
          <div className="h-px bg-[var(--color-bg-light)] -mt-1">
            <motion.div
              className="h-full bg-[var(--color-text-primary)]"
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="bg-[var(--color-bg)] py-16 px-6 lg:px-10 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
            {/* Step content */}
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                className="mb-10"
              >
                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-accent-secondary)] mb-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Step {step + 1} of {steps.length}
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="text-[var(--color-text-primary)]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  }}
                >
                  {
                    [
                      "Where should your story unfold?",
                      "What kind of experiences call to you?",
                      "How long is your journey?",
                      "What is your travel budget?",
                      "Who are you travelling with?",
                      "A few final details",
                    ][step]
                  }
                </motion.h2>
              </motion.div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                  transition={{ duration: 0.35 }}
                >
                  {stepContent[step]}
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-[var(--color-bg-light)]">
                <button
                  onClick={() => go(-1)}
                  disabled={step === 0}
                  className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--color-text-primary)]/40 hover:text-[var(--color-text-primary)] transition-colors disabled:opacity-0 disabled:pointer-events-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <ArrowLeft size={13} />
                  Previous
                </button>

                {step < steps.length - 1 ? (
                  <button
                    onClick={() => go(1)}
                    disabled={!canNext[step]}
                    className="group flex items-center gap-3 bg-[var(--color-text-primary)] text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-[var(--color-accent-primary)] hover:text-[var(--color-text-primary)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[var(--color-text-primary)] disabled:hover:text-white"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Continue
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canNext[step]}
                    className="group flex items-center gap-3 bg-[var(--color-accent-primary)] text-[var(--color-text-primary)] px-8 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-[var(--color-text-primary)] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Submit My Journey
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            </div>

            {/* Summary sidebar */}
            <div className="hidden lg:block">
              <Summary
                region={region}
                experiences={selectedExperiences}
                duration={duration}
                budget={budget}
                traveller={traveller}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
