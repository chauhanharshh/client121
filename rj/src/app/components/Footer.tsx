import { Link } from "react-router";
import { Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react";
import { useState } from "react";
import { useCMS } from "../context/CMSContext";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { content } = useCMS();
  const globalData = content.global;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Top Bar */}
      <div className="border-b border-white/10 py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span
                className="text-xl tracking-widest uppercase text-white"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                {globalData.logoText}
              </span>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent-secondary)] mt-1">
                {globalData.logoSubtext}
              </p>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mt-5 max-w-xs">
              {globalData.footerDescription}
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-all duration-300"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-accent-secondary)] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Story", href: "/about" },
                { label: "The Team", href: "/about" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4
              className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-accent-secondary)] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Destinations
            </h4>
            <ul className="space-y-3">
              {["North India", "South India", "East India", "West India", "North-East India"].map((d) => (
                <li key={d}>
                  <Link
                    to="/destinations"
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {d}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-accent-secondary)] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Stay Inspired
            </h4>
            <p className="text-sm text-white/50 mb-5 leading-relaxed">
              Travel stories, seasonal guides, and curated ideas — direct to your inbox.
            </p>
            {subscribed ? (
              <p className="text-sm text-[var(--color-accent-secondary)]">Thank you for subscribing.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--color-accent-primary)] hover:text-white transition-colors"
                >
                  <Mail size={13} />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 lg:px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 tracking-wider">
            © {new Date().getFullYear()} Route Story. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <button key={item} className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
