import { useState, useEffect } from "react";
import { Outlet, NavLink, Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import Lenis from "lenis";
import { imgLogo } from "./images";
import { WAIcon } from "./ui";

const waPath = "M7.9 20C9.81 20.98 12 21.24 14.09 20.75C16.18 20.25 18.02 19.03 19.28 17.29C20.55 15.56 21.15 13.43 20.98 11.29C20.81 9.15 19.89 7.14 18.37 5.63C16.86 4.11 14.85 3.19 12.71 3.02C10.57 2.85 8.44 3.46 6.71 4.72C4.97 5.98 3.75 7.82 3.25 9.91C2.76 11.996 3.02 14.19 4 16.1L2 22L7.9 20Z";

const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About" },
  { to: "/collections", label: "Collections" },
  { to: "/price-guide", label: "Price Guide" },
  { to: "/gallery", label: "Gallery" },
  { to: "/visit-us", label: "Visit Us" },
];

const footerCollections = [
  { label: "Men's Footwear",   to: "/footwear-shop-sivagangai" },
  { label: "Women's Footwear", to: "/footwear-shop-sivagangai" },
  { label: "Kids Footwear",    to: "/kids-collection" },
  { label: "School Bags",      to: "/school-bags-sivagangai" },
  { label: "Travel Bags",      to: "/travel-bags-sivagangai" },
  { label: "All Collections",  to: "/collections" },
];

const footerLinks = [
  { label: "About Us",    to: "/about" },
  { label: "Collections", to: "/collections" },
  { label: "Price Guide", to: "/price-guide" },
  { label: "Gallery",     to: "/gallery" },
  { label: "Visit Us",    to: "/visit-us" },
];

export default function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Initialize Lenis for smooth parallax scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── NAV ──────────────────────────────────────────────────────── */}
      <motion.header
        className={`bg-[#faf7f2] sticky top-0 z-40 border-b transition-all duration-300 ${scrolled ? "border-[#ede5d8] shadow-[0_2px_20px_rgba(26,26,46,0.07)]" : "border-transparent"}`}
        initial={{ y: -72 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between h-16 sm:h-[72px]">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img alt="Baji Footwear" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" src={imgLogo} />
            <span className="font-['Playfair_Display',serif] font-bold text-[14px] sm:text-[16px] tracking-[-0.4px] text-[#1a1a2e]">Baji Footwear</span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map(({ to, label, exact }) => (
              <NavLink
                key={to}
                to={to}
                end={exact}
                className={({ isActive }) =>
                  `font-['Inter',sans-serif] text-[13px] lg:text-[14px] transition-colors ${isActive ? "text-[#d10b78] font-semibold" : "text-[#4a4a5c] hover:text-[#1a1a2e]"}`
                }
              >
                {label}
              </NavLink>
            ))}
            <a href="https://wa.me/917708877760" target="_blank" rel="noopener noreferrer" className="bg-[#d10b78] text-white rounded-full px-4 py-2 flex items-center gap-1.5 text-[13px] font-['Inter',sans-serif] font-medium hover:bg-[#b50967] transition-colors">
              <WAIcon size={13} /> WhatsApp
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 text-[#1a1a2e]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            }
          </button>
        </div>

      </motion.header>

        {/* Mobile drawer — slides in from the right */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-[rgba(26,26,46,0.45)] z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMenuOpen(false)}
              />
              {/* Drawer panel */}
              <motion.div
                className="fixed top-0 right-0 h-full w-[280px] bg-[#faf7f2] z-50 flex flex-col shadow-2xl md:hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-5 py-5 border-b border-[#ede5d8]">
                  <div className="flex items-center gap-2">
                    <img alt="Baji Footwear" className="w-7 h-7 object-contain" src={imgLogo} />
                    <span className="font-['Playfair_Display',serif] font-bold text-[14px] text-[#1a1a2e]">Baji Footwear</span>
                  </div>
                  <button className="p-1.5 text-[#4a4a5c] hover:text-[#1a1a2e] transition-colors" onClick={() => setMenuOpen(false)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col px-5 py-4 flex-1 overflow-y-auto">
                  {navLinks.map(({ to, label, exact }, i) => (
                    <motion.div
                      key={to}
                      initial={{ x: 24, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 + i * 0.06, duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <NavLink
                        to={to}
                        end={exact}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `font-['Inter',sans-serif] text-[16px] py-3.5 border-b border-[#ede5d8] flex items-center justify-between transition-colors ${isActive ? "text-[#d10b78] font-semibold" : "text-[#4a4a5c]"}`
                        }
                      >
                        {label}
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                {/* Bottom CTA */}
                <motion.div
                  className="px-5 py-5 border-t border-[#ede5d8]"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                >
                  <a href="https://wa.me/917708877760" target="_blank" rel="noopener noreferrer" className="w-full bg-[#d10b78] text-white rounded-full py-3 flex items-center justify-center gap-2 font-['Inter',sans-serif] font-semibold text-[14px] hover:bg-[#b50967] transition-colors">
                    <WAIcon size={14} /> WhatsApp Us
                  </a>
                  <p className="font-['Inter',sans-serif] text-[11px] text-[#8a8a9a] text-center mt-3">Open 7 days · 9AM–9PM</p>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      {/* ── PAGE CONTENT ─────────────────────────────────────────────── */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="bg-[#1a1a2e] border-t border-[#2e2e4a] w-full py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <img alt="Baji Footwear" className="w-8 h-8 object-contain" src={imgLogo} />
                <span className="font-['Playfair_Display',serif] font-bold text-[15px] text-white">Baji Footwear</span>
              </div>
              <p className="font-['Inter',sans-serif] text-[13px] leading-[22px] text-[#8a8aa8]">{"Sivagangai's trusted neighbourhood destination for quality footwear and bags since years."}</p>
              <div className="mt-4 flex gap-2">
                {["4.8★", "Google"].map((s,i) => (
                  <span key={i} className={`font-['Inter',sans-serif] text-[12px] px-2.5 py-1 rounded-full ${i===0?"bg-[#d10b78] text-white font-bold":"bg-[#2e2e4a] text-[#c0c0d0]"}`}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-['Inter',sans-serif] font-semibold text-[11px] tracking-[2px] uppercase text-[#8a8aa8] mb-4">Collections</p>
              {footerCollections.map(item => (
                <Link key={item.to+item.label} to={item.to} className="block font-['Inter',sans-serif] text-[13px] leading-[20px] text-[#c0c0d0] hover:text-white transition-colors mb-2">{item.label}</Link>
              ))}
            </div>
            <div>
              <p className="font-['Inter',sans-serif] font-semibold text-[11px] tracking-[2px] uppercase text-[#8a8aa8] mb-4">Quick Links</p>
              {footerLinks.map(item => (
                <Link key={item.to} to={item.to} className="block font-['Inter',sans-serif] text-[13px] leading-[20px] text-[#c0c0d0] hover:text-white transition-colors mb-2">{item.label}</Link>
              ))}
            </div>
            <div>
              <p className="font-['Inter',sans-serif] font-semibold text-[11px] tracking-[2px] uppercase text-[#8a8aa8] mb-4">Contact Us</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2.5 text-[#c0c0d0]">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5"><path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6C3.5 9 8 14.5 8 14.5C8 14.5 12.5 9 12.5 6C12.5 3.51 10.49 1.5 8 1.5Z" stroke="#D10B78" strokeWidth="1.33"/><circle cx="8" cy="6" r="1.5" stroke="#D10B78" strokeWidth="1.33"/></svg>
                  <span className="font-['Inter',sans-serif] text-[13px]">Sivagangai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#c0c0d0]">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0"><path d="M2.67 2.67C2.67 2.3 2.97 2 3.33 2H4.77C5.2 2 5.57 2.27 5.71 2.68L6.57 5.17C6.7 5.54 6.58 5.95 6.28 6.2L5.33 6.97C6.24 9.08 7.92 10.76 10.03 11.67L10.8 10.72C11.05 10.42 11.46 10.3 11.83 10.43L14.32 11.29C14.73 11.43 15 11.8 15 12.23V13.67C15 14.03 14.7 14.33 14.33 14.33H13.33C7.44 14.33 2.67 9.56 2.67 3.67V2.67Z" stroke="#D10B78" strokeWidth="1.33"/></svg>
                  <span className="font-['Inter',sans-serif] text-[13px]">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#c0c0d0]">
                  <WAIcon size={14} color="#D10B78" />
                  <span className="font-['Inter',sans-serif] text-[13px]">WhatsApp Us</span>
                </div>
                <div className="flex items-start gap-2.5 text-[#c0c0d0]">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5"><circle cx="8" cy="8" r="6.5" stroke="#D10B78" strokeWidth="1.33"/><path d="M8 4.5V8L10.5 9.5" stroke="#D10B78" strokeLinecap="round" strokeWidth="1.33"/></svg>
                  <span className="font-['Inter',sans-serif] text-[13px] leading-[20px]">Mon–Sat 9am–9pm<br/>Sun 10am–8pm</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2e2e4a] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-['Inter',sans-serif] text-[12px] sm:text-[13px] text-[#8a8aa8]">© 2024 Baji Footwear, Sivagangai. All rights reserved.</p>
            <div className="flex gap-4">
              {footerLinks.map(l => (
                <Link key={l.to} to={l.to} className="font-['Inter',sans-serif] text-[12px] text-[#8a8aa8] hover:text-white transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ─────────────────────────────────────────── */}
      <motion.a
        href="https://wa.me/917708877760"
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 bg-[#25d366] rounded-full p-3.5 sm:p-4 shadow-[0_8px_5px_rgba(0,0,0,0.1),0_20px_12.5px_rgba(0,0,0,0.1)] z-50 flex"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 280, damping: 20 }}
        whileHover={{ scale: 1.12, backgroundColor: "#1da855" }}
        whileTap={{ scale: 0.93 }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d={waPath} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </motion.a>
    </div>
  );
}
