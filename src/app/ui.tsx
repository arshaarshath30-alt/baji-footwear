import { useState, useRef, useEffect } from "react";
import { motion, useInView, useMotionValue } from "motion/react";

// ── Scroll-based parallax (avoids useScroll target position requirement) ───────
function useParallaxScroll(speed: number) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh / 2 - rect.top - rect.height / 2) / (vh + rect.height);
      y.set(progress * speed * rect.height);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [speed, y]);
  return { ref, y };
}

// ── Shared animation config ────────────────────────────────────────────────────
const ease = [0.25, 0.1, 0.25, 1] as const;

export const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease } },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
};

export const slideLeft = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const stagger = (delay = 0.1) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: delay } },
});

// ── ScrollReveal — generic wrapper ─────────────────────────────────────────────
export function ScrollReveal({
  children, variant = fadeUp, delay = 0, className = "",
}: {
  children: React.ReactNode;
  variant?: typeof fadeUp;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay } as never}
    >
      {children}
    </motion.div>
  );
}

// ── StaggerGrid — animates children in sequence ────────────────────────────────
export function StaggerGrid({
  children, className = "", delayStep = 0.1,
}: {
  children: React.ReactNode; className?: string; delayStep?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger(delayStep)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

// ── AnimatedCard — each card inside a StaggerGrid ─────────────────────────────
export function AnimatedCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

// ── Counter — counts up from 0 to target when scrolled into view ───────────────
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = value / (duration / step);
    const id = setInterval(() => {
      start += increment;
      if (start >= value) { setDisplay(value); clearInterval(id); }
      else setDisplay(Math.floor(start));
    }, step);
    return () => clearInterval(id);
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// ── ParallaxImage — image moves slower than scroll ────────────────────────────
export function ParallaxImage({
  src, alt, className = "", imgClassName = "", speed = 0.18,
}: {
  src: string; alt: string; className?: string; imgClassName?: string; speed?: number;
}) {
  const { ref, y } = useParallaxScroll(speed);
  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.img
        src={src} alt={alt}
        className={`w-full h-full object-cover ${imgClassName}`}
        style={{ y, scale: 1 + speed * 1.5 }}
      />
    </div>
  );
}

// ── ParallaxBand — full-width band whose bg drifts on scroll ──────────────────
export function ParallaxBand({
  img, children, bg = "bg-[#1C1917]", className = "", overlayOpacity = 0.55,
}: {
  img?: string; children?: React.ReactNode; bg?: string;
  className?: string; overlayOpacity?: number;
}) {
  const { ref, y } = useParallaxScroll(0.18);
  return (
    <div ref={ref} className={`relative overflow-hidden ${bg} ${className}`}>
      {img && (
        <motion.div className="absolute inset-0 w-full h-[136%] -top-[18%]" style={{ y }}>
          <img src={img} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `rgba(26,26,46,${overlayOpacity})` }} />
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────────

export function WAIcon({ size = 16, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M4.60833 11.6667C5.72167 12.2378 7.00238 12.3925 8.21968 12.1029C9.43699 11.8133 10.5108 11.0984 11.2477 10.0871C11.9846 9.07581 12.336 7.83458 12.2387 6.58709C12.1414 5.33961 11.6017 4.1679 10.7169 3.28311C9.8321 2.39833 8.66039 1.85865 7.41291 1.76133C6.16542 1.66401 4.92419 2.01544 3.9129 2.75231C2.9016 3.48918 2.18674 4.56301 1.89713 5.78032C1.60752 6.99762 1.76222 8.27833 2.33333 9.39167L1.16667 12.8333L4.60833 11.6667Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
    </svg>
  );
}

export function PinIcon({ color = "#CA8A04", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6C3.5 9 8 14.5 8 14.5C8 14.5 12.5 9 12.5 6C12.5 3.51 10.49 1.5 8 1.5Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
      <circle cx="8" cy="6" r="1.5" stroke={color} strokeWidth="1.33333"/>
    </svg>
  );
}

export function PhoneIcon({ color = "#CA8A04" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M2.67 2.67C2.67 2.3 2.97 2 3.33 2H4.77C5.2 2 5.57 2.27 5.71 2.68L6.57 5.17C6.7 5.54 6.58 5.95 6.28 6.2L5.33 6.97C6.24 9.08 7.92 10.76 10.03 11.67L10.8 10.72C11.05 10.42 11.46 10.3 11.83 10.43L14.32 11.29C14.73 11.43 15 11.8 15 12.23V13.67C15 14.03 14.7 14.33 14.33 14.33H13.33C7.44 14.33 2.67 9.56 2.67 3.67V2.67Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
    </svg>
  );
}

export function ClockIcon({ color = "#CA8A04" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="8" cy="8" r="6.5" stroke={color} strokeWidth="1.33333"/>
      <path d="M8 4.5V8L10.5 9.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
    </svg>
  );
}

export function ArrowRight({ color = "#CA8A04" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M3.33 8H12.67" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33"/>
      <path d="M8.67 5.33L12 8.67L8.67 12" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33"/>
    </svg>
  );
}

export function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path d="M7 1L8.85 5.04L13.28 5.66L10.14 8.72L10.91 13.12L7 10.9L3.09 13.12L3.86 8.72L0.72 5.66L5.15 5.04L7 1Z" fill={filled ? "#CA8A04" : "none"} stroke="#CA8A04" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17"/>
    </svg>
  );
}

export function CheckCircle() {
  return (
    <div className="w-8 h-8 rounded-full bg-[rgba(202,138,4,0.1)] flex items-center justify-center shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 8L6.5 10.5L12 5" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <path d="M19.6 10.23c0-.71-.06-1.39-.18-2.05H10v3.87h5.38a4.6 4.6 0 01-2 3.02v2.51h3.23c1.89-1.74 2.98-4.3 2.98-7.35z" fill="#4285F4"/>
      <path d="M10 20c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51c-.9.6-2.04.96-3.39.96-2.6 0-4.81-1.76-5.59-4.12H1.06v2.59A10 10 0 0010 20z" fill="#34A853"/>
      <path d="M4.41 11.9A6 6 0 014.1 10c0-.66.11-1.3.31-1.9V5.51H1.06A10 10 0 000 10c0 1.61.39 3.14 1.06 4.49L4.41 11.9z" fill="#FBBC05"/>
      <path d="M10 3.98c1.47 0 2.79.5 3.82 1.5l2.87-2.87C14.96.99 12.7 0 10 0A10 10 0 001.06 5.51l3.34 2.59C5.19 5.74 7.4 3.98 10 3.98z" fill="#EA4335"/>
    </svg>
  );
}

// ── Typography ────────────────────────────────────────────────────────────────

export function Label({ children, center = false, light = false }: { children: string; center?: boolean; light?: boolean }) {
  return (
    <motion.p
      className={`font-['Nunito_Sans',sans-serif] font-semibold text-[11px] sm:text-[12px] leading-[16px] tracking-[2.4px] uppercase ${light ? "text-[#2d2f8e]" : "text-[#CA8A04]"} ${center ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease }}
    >
      {children}
    </motion.p>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────

export function Section({ bg = "bg-white", children, className = "" }: { bg?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`${bg} w-full py-16 sm:py-20 lg:py-28 ${className}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10">{children}</div>
    </section>
  );
}

// ── Page hero ─────────────────────────────────────────────────────────────────

export function PageHero({
  label, heading, subheading, bg = "bg-[#FAFAF9]", headingColor = "text-[#e40a7a]", img,
  cta, ctaSecondary,
}: {
  label?: string; heading: string; subheading?: string; bg?: string;
  headingColor?: string; img?: string;
  cta?: { label: string; href?: string };
  ctaSecondary?: { label: string; href?: string };
}) {
  return (
    <section className={`${bg} w-full`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 pt-12 sm:pt-16 pb-16 sm:pb-20 lg:pb-24">
        <div className={`flex flex-col ${img ? "lg:flex-row lg:items-center lg:gap-16" : ""}`}>
          <div className="flex-1">
            {label && (
              <motion.p
                className="font-['Nunito_Sans',sans-serif] font-semibold text-[11px] sm:text-[12px] leading-[16px] tracking-[2.4px] uppercase text-[#CA8A04]"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
              >
                {label}
              </motion.p>
            )}
            <motion.h1
              className={`font-['Rubik',sans-serif] font-bold ${headingColor} mt-3 text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-tight`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
            >
              {heading}
            </motion.h1>
            {subheading && (
              <motion.p
                className="font-['Nunito_Sans',sans-serif] font-normal text-[15px] sm:text-[17px] leading-[1.6] text-[#44403C] mt-5 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.25 }}
              >
                {subheading}
              </motion.p>
            )}
            {(cta || ctaSecondary) && (
              <motion.div
                className="flex flex-wrap gap-3 mt-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.4 }}
              >
                {cta && (
                  <a href={cta.href ?? "#"} className="bg-[#CA8A04] text-white rounded-full px-6 py-3 inline-flex items-center gap-2 font-['Nunito_Sans',sans-serif] font-semibold text-[14px] hover:bg-[#b50967] transition-colors">
                    <WAIcon size={14} /> {cta.label}
                  </a>
                )}
                {ctaSecondary && (
                  <a href={ctaSecondary.href ?? "#"} className="border-2 border-[#1C1917] text-[#1C1917] rounded-full px-6 py-3 inline-flex items-center gap-2 font-['Nunito_Sans',sans-serif] font-semibold text-[14px] hover:bg-[#1C1917] hover:text-white transition-colors">
                    {ctaSecondary.label}
                  </a>
                )}
              </motion.div>
            )}
          </div>
          {img && (
            <motion.div
              className="mt-10 lg:mt-0 lg:w-[480px] xl:w-[560px] shrink-0 rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-[420px]"
              initial={{ opacity: 0, scale: 0.96, x: 32 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
            >
              <ParallaxImage src={img} alt="" className="w-full h-full" speed={0.14} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── WhatsApp CTA banner ───────────────────────────────────────────────────────

export function WACTABanner({ heading = "WhatsApp Us Before Visiting", body, img }: { heading?: string; body?: string; img?: string }) {
  return (
    <ParallaxBand bg="bg-[#1C1917]" img={img} className="py-14 sm:py-16" overlayOpacity={img ? 0.7 : 0}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
        <ScrollReveal>
          <h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[34px] lg:text-[40px] leading-tight text-white">{heading}</h2>
          {body && <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] text-[#a8a29e] mt-3 max-w-md mx-auto">{body}</p>}
          <motion.a
            href="https://wa.me/917708877760" target="_blank" rel="noopener noreferrer"
            className="mt-7 bg-[#25d366] text-white rounded-full px-7 py-3.5 inline-flex items-center gap-3 font-['Nunito_Sans',sans-serif] font-bold text-[15px] hover:bg-[#1da855] transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7.9 20C9.81 20.98 12 21.24 14.09 20.75C16.18 20.25 18.02 19.03 19.28 17.29C20.55 15.56 21.15 13.43 20.98 11.29C20.81 9.15 19.89 7.14 18.37 5.63C16.86 4.11 14.85 3.19 12.71 3.02C10.57 2.85 8.44 3.46 6.71 4.72C4.97 5.98 3.75 7.82 3.25 9.91C2.76 11.996 3.02 14.19 4 16.1L2 22L7.9 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Chat on WhatsApp
          </motion.a>
        </ScrollReveal>
      </div>
    </ParallaxBand>
  );
}

// ── Pricing card ──────────────────────────────────────────────────────────────

export function PricingCard({ img, label, price }: { img: string; label: string; price: string }) {
  return (
    <motion.div
      className="bg-[#242440] rounded-2xl overflow-hidden flex-shrink-0 w-32 sm:w-36 lg:w-auto"
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="h-24 sm:h-28 overflow-hidden opacity-80 relative">
        <img alt={label} className="absolute inset-0 w-full h-full object-cover" src={img} />
      </div>
      <div className="p-3">
        <p className="font-['Nunito_Sans',sans-serif] font-medium text-[11px] sm:text-[12px] leading-tight text-white">{label}</p>
        <p className="font-['Nunito_Sans',sans-serif] font-bold text-base sm:text-[17.6px] text-[#CA8A04] mt-1">{price}</p>
      </div>
    </motion.div>
  );
}

// ── Collection card ───────────────────────────────────────────────────────────

export function CollectionCard({ img, title, subtitle, price, items }: { img: string; title: string; subtitle: string; price: string; items: [string,string,string,string] }) {
  return (
    <motion.div
      className="bg-[#FAFAF9] rounded-2xl overflow-hidden flex flex-col h-full"
      variants={fadeUp}
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(26,26,46,0.12)", transition: { duration: 0.25 } }}
    >
      <div className="h-48 sm:h-56 relative overflow-hidden">
        <motion.img
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          src={img}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
        />
        <span className="absolute top-3 right-3 bg-[#CA8A04] text-white font-['Nunito_Sans',sans-serif] font-bold text-[11px] px-2.5 py-1 rounded-full">From {price}</span>
      </div>
      <div className="p-5 sm:p-6 flex flex-col gap-2 flex-1">
        <p className="font-['Rubik',sans-serif] font-bold text-[17px] sm:text-[19.2px] leading-snug text-[#1C1917]">{title}</p>
        <p className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] text-[#44403C]">{subtitle}</p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-[#CA8A04] shrink-0" />
              <span className="font-['Nunito_Sans',sans-serif] text-[11px] sm:text-[12px] text-[#44403C]">{item}</span>
            </div>
          ))}
        </div>
        <button className="flex items-center gap-1 mt-3 text-left">
          <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[13px] sm:text-[14px] text-[#CA8A04]">Ask About Availability </span>
          <ArrowRight />
        </button>
      </div>
    </motion.div>
  );
}

// ── Feature card ──────────────────────────────────────────────────────────────

export function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-5 shadow-lg shadow-black/5 flex flex-col"
      variants={fadeUp}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(26,26,46,0.1)", transition: { duration: 0.2 } }}
    >
      <div className="w-9 h-9 rounded-full bg-[rgba(202,138,4,0.1)] flex items-center justify-center shrink-0">{icon}</div>
      <p className="font-['Rubik',sans-serif] font-bold text-[14px] sm:text-[15.2px] leading-snug text-[#1C1917] mt-3">{title}</p>
      <p className="font-['Nunito_Sans',sans-serif] text-[11px] sm:text-[12px] leading-[19.5px] text-[#44403C] mt-1.5">{desc}</p>
    </motion.div>
  );
}

// ── Store photo ───────────────────────────────────────────────────────────────

export function StorePhoto({ img, label }: { img: string; label: string }) {
  const { ref, y } = useParallaxScroll(0.14);
  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden h-48 sm:h-64 lg:h-[300px]"
      variants={scaleIn}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <motion.img
        alt={label} src={img}
        className="w-full h-full object-cover"
        style={{ y, scale: 1.22 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,46,0.65)] to-transparent" />
      <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 font-['Nunito_Sans',sans-serif] font-semibold text-[11px] sm:text-[12px] text-white">{label}</p>
    </motion.div>
  );
}

// ── Review card ───────────────────────────────────────────────────────────────

export function ReviewCard({ initials, bg, name, time, text, stars }: { initials: string; bg: string; name: string; time: string; text: string; stars: number }) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg shadow-black/5 flex flex-col"
      variants={fadeUp}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(26,26,46,0.1)", transition: { duration: 0.2 } }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`${bg} w-10 h-10 rounded-full flex items-center justify-center shrink-0`}>
            <span className="font-['Nunito_Sans',sans-serif] font-bold text-[13px] text-white">{initials}</span>
          </div>
          <div>
            <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[13px] sm:text-[14px] text-[#1C1917]">{name}</p>
            <p className="font-['Nunito_Sans',sans-serif] text-[11px] sm:text-[12px] text-[#a8a29e]">{time}</p>
          </div>
        </div>
        <GoogleIcon />
      </div>
      <div className="flex gap-0.5 mt-4">{Array.from({length:5}).map((_,i)=><StarIcon key={i} filled={i<stars}/>)}</div>
      <p className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] leading-[22.75px] text-[#44403C] mt-3">{text}</p>
    </motion.div>
  );
}

// ── FAQ item ──────────────────────────────────────────────────────────────────

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border border-[#e5e5e0] rounded-[14px] overflow-hidden"
      variants={fadeUp}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      <button className="w-full flex items-center justify-between px-5 py-4 gap-4 text-left" onClick={() => setOpen(!open)}>
        <span className="font-['Nunito_Sans',sans-serif] font-medium text-[14px] sm:text-[16px] leading-snug text-[#1C1917]">{question}</span>
        <motion.svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          className="shrink-0"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <path d="M4 6L8 10L12 6" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33"/>
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-5 pb-5">
          <p className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#44403C]">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Price range row ───────────────────────────────────────────────────────────

export function PriceRow({ img, label, start, avg, premium, note }: { img: string; label: string; start: string; avg: string; premium: string; note?: string }) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row sm:items-center gap-0 bg-white rounded-2xl shadow-lg shadow-black/5 overflow-hidden"
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
    >
      <div className="w-full sm:w-20 h-32 sm:h-20 shrink-0 overflow-hidden">
        <img alt={label} className="w-full h-full object-cover" src={img} />
      </div>
      <div className="flex-1 min-w-0 px-5 py-4 sm:py-0">
        <p className="font-['Rubik',sans-serif] font-bold text-[16px] sm:text-[18px] text-[#1C1917]">{label}</p>
        {note && <p className="font-['Nunito_Sans',sans-serif] text-[11px] sm:text-[12px] text-[#a8a29e] mt-0.5">{note}</p>}
      </div>
      <div className="grid grid-cols-3 divide-x divide-[#FAFAF9] shrink-0 sm:w-72 border-t sm:border-t-0 sm:border-l border-[#FAFAF9]">
        {[["Starting", start, "text-[#2d2f8e]"], ["Average", avg, "text-[#1C1917]"], ["Premium", premium, "text-[#CA8A04]"]].map(([lbl, val, color]) => (
          <div key={lbl as string} className="text-center py-3 sm:py-5 px-2 sm:px-4">
            <p className={`font-['Rubik',sans-serif] font-black text-[16px] sm:text-[20px] ${color}`}>{val}</p>
            <p className="font-['Nunito_Sans',sans-serif] text-[9px] sm:text-[10px] text-[#a8a29e] uppercase tracking-wide mt-0.5">{lbl}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Contact row ───────────────────────────────────────────────────────────────

export function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-[rgba(202,138,4,0.1)] flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[11px] leading-[16px] tracking-[0.6px] uppercase text-[#a8a29e]">{label}</p>
        <div className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#44403C] mt-1">{value}</div>
      </div>
    </div>
  );
}

// ── Internal nav links bar ────────────────────────────────────────────────────

export function InternalLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="bg-[#FAFAF9] py-4">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 flex flex-wrap gap-x-6 gap-y-2 items-center">
        <span className="font-['Nunito_Sans',sans-serif] text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-[#a8a29e]">Also explore:</span>
        {links.map(l => (
          <a key={l.href} href={l.href} className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] text-[#CA8A04] font-medium hover:underline">{l.label}</a>
        ))}
      </div>
    </div>
  );
}
