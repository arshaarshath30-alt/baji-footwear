import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, useMotionValue, AnimatePresence } from "motion/react";
import {
  imgPricingMens, imgPricingWomens, imgPricingKids, imgPricingSchool,
  imgPricingTravel, imgPricingLunch, imgPricingHand, imgPricingSports,
  imgColMens, imgColWomens, imgColKids, imgColSchool, imgColLunch, imgColTravel,
  imgPop1, imgPop2, imgPop3, imgPop4,
  imgStoreMain, imgStoreTopRight, imgStoreBotRight,
  imgStoreBags, imgStoreShoeWall, imgStoreShopping,
  imgGallery1, imgGallery2, imgGallery3, imgGallery4, imgGallery5,
} from "../images";
import {
  WAIcon, Label, Section, PricingCard, CollectionCard, FeatureCard,
  StorePhoto, FaqItem, WACTABanner, ArrowRight, CheckCircle,
  ScrollReveal, StaggerGrid, AnimatedCard, Counter, fadeUp, stagger,
} from "../ui";
import { LuxuryMarquee } from "../components/LuxuryMarquee";
import brandVideo from "@/imports/BajiFootwear/yeah_the_last_is_good_add_tra.mp4";

const ease = [0.25, 0.1, 0.25, 1] as const;

// ── Hero Slider ────────────────────────────────────────────────────────────────
const SLIDES = [
  { src: imgColWomens,     label: "Women's Collection",  sub: "Elegant to everyday" },
  { src: imgStoreShoeWall, label: "Premium Footwear",    sub: "500+ styles in store" },
  { src: imgStoreBags,     label: "Handbag Collection",  sub: "From ₹399" },
  { src: imgColMens,       label: "Men's Footwear",      sub: "Formal, casual & sports" },
  { src: imgGallery1,      label: "Store Experience",    sub: "Visit us in Sivagangai" },
  { src: imgColTravel,     label: "Travel Collection",   sub: "Ready for any journey" },
];

function HeroSlider({ sliderY }: { sliderY: ReturnType<typeof useMotionValue<number>> }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(0);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 4000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) => setCurrent(c => (c + dir + SLIDES.length) % SLIDES.length);

  return (
    <motion.div
      className="relative select-none"
      style={{ y: sliderY }}
      initial={{ opacity: 0, x: 48 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease, delay: 0.35 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        const diff = touchX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 44) go(diff > 0 ? 1 : -1);
      }}
    >
      {/* Glow rings */}
      <div className="absolute -inset-6 sm:-inset-10 pointer-events-none">
        <div className="absolute inset-0 rounded-[40px] blur-3xl opacity-20"
          style={{ background: "radial-gradient(ellipse at 25% 60%, #E6007E, transparent 55%)" }} />
        <div className="absolute inset-0 rounded-[40px] blur-3xl opacity-15"
          style={{ background: "radial-gradient(ellipse at 75% 40%, #2D5BFF, transparent 55%)" }} />
      </div>

      {/* Image card */}
      <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(26,26,46,0.22)] h-[340px] sm:h-[420px] lg:h-[500px] xl:h-[540px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            {/* Zooming image */}
            <motion.img
              src={SLIDES[current].src}
              alt={SLIDES[current].label}
              className="w-full h-full object-cover"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5, ease: "linear" }}
            />
            {/* Bottom gradient + caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,8,20,0.62)] via-[rgba(10,8,20,0.08)] to-transparent" />
            <motion.div
              className="absolute bottom-0 left-0 right-0 px-5 pb-5 sm:px-7 sm:pb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.2 }}
            >
              <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[10px] sm:text-[11px] tracking-[2.5px] uppercase text-[#E6007E]">{SLIDES[current].sub}</p>
              <p className="font-['Rubik',sans-serif] font-bold text-[18px] sm:text-[22px] text-white mt-0.5 leading-tight">{SLIDES[current].label}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Arrow buttons */}
        {["prev","next"].map((dir, i) => (
          <button
            key={dir}
            onClick={() => go(i === 0 ? -1 : 1)}
            className={`absolute top-1/2 -translate-y-1/2 ${i === 0 ? "left-3 sm:left-4" : "right-3 sm:right-4"} w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:bg-[#2D5BFF]/40 hover:border-[#2D5BFF]/60 hover:scale-105`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={i === 0 ? "M10 3L6 8L10 13" : "M6 3L10 8L6 13"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ))}

        {/* Slide counter top-right */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="font-['Nunito_Sans',sans-serif] text-[11px] font-semibold text-white/80">{String(current + 1).padStart(2,"0")}</span>
          <span className="font-['Nunito_Sans',sans-serif] text-[11px] text-white/40 mx-1">/</span>
          <span className="font-['Nunito_Sans',sans-serif] text-[11px] text-white/40">{String(SLIDES.length).padStart(2,"0")}</span>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setPaused(false); }}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-[#E6007E]" : "w-2 h-2 bg-[#1C1917]/25 hover:bg-[#2D5BFF]/50"}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ── Cinematic Brand Story Section ─────────────────────────────────────────────

function BrandStorySection() {
  const ref = useRef<HTMLElement>(null);
  const videoScale = useMotionValue(1);

  // Scroll-driven zoom on the cinematic frame
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
      videoScale.set(1 + progress * 0.09);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [videoScale]);

  return (
    <section ref={ref} className="bg-white w-full py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Centered text block */}
      <motion.div
        className="text-center px-4 sm:px-8 lg:px-10 max-w-[650px] mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease }}
      >
        <motion.p
          className="font-['Nunito_Sans',sans-serif] font-semibold text-[10px] sm:text-[12px] tracking-[3px] uppercase text-[#2d2f8e]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          Our Vision
        </motion.p>
        <motion.h2
          className="font-['Rubik',sans-serif] font-bold text-[28px] sm:text-[44px] lg:text-[64px] leading-[1.1] tracking-tight text-[#1C1917] mt-4 sm:mt-5"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease, delay: 0.1 }}
        >
          Sivagangai's Most Trusted Footwear Destination
        </motion.h2>
        <motion.p
          className="font-['Nunito_Sans',sans-serif] font-normal text-[14px] sm:text-[18px] leading-[1.7] sm:leading-[1.75] text-[#44403C] mt-5 sm:mt-6 max-w-[580px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.22 }}
        >
          We combine a wide selection, honest pricing, and knowledgeable service to deliver a better shopping experience for families, students, professionals, and travellers across Sivagangai.
        </motion.p>
      </motion.div>

      {/* Cinematic full-width frame with parallax zoom */}
      <motion.div
        className="mt-16 sm:mt-20 lg:mt-24 w-full overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[16/7]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease, delay: 0.3 }}
      >
        <motion.div className="w-full h-full" style={{ scale: videoScale }}>
          <div className="relative w-full h-full">
            <video
              src={brandVideo}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,46,0.18)] via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,26,46,0.08)] via-transparent to-[rgba(26,26,46,0.08)] pointer-events-none" />
          </div>
        </motion.div>
      </motion.div>

      {/* Below-video stat strip */}
      <motion.div
        className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease, delay: 0.15 }}
      >
        {[
          ["500+", "Products in stock"],
          ["7",    "Days open weekly"],
          ["10+",  "Years of trust"],
          ["₹149", "Prices starting from"],
        ].map(([val, label]) => (
          <div key={label} className="text-center">
            <p className="font-['Rubik',sans-serif] font-black text-[24px] sm:text-[40px] leading-none text-[#CA8A04]">{val}</p>
            <p className="font-['Nunito_Sans',sans-serif] text-[10px] sm:text-[13px] text-[#a8a29e] mt-1.5 uppercase tracking-wider">{label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function PopItem({ num, bg, title, sub, img }: { num: string; bg: string; title: string; sub: string; img: string }) {
  return (
    <motion.div
      className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl shadow-lg shadow-black/5 p-4 sm:p-5 flex items-center gap-4 sm:gap-5"
      variants={fadeUp}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
    >
      <div className={`${bg} rounded-[14px] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0`}>
        <span className="font-['Rubik',sans-serif] font-black text-[18px] sm:text-[22px] text-white">{num}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-['Rubik',sans-serif] font-semibold text-[15px] sm:text-[16.8px] text-[#1C1917]">{title}</p>
        <p className="font-['Nunito_Sans',sans-serif] text-[11px] sm:text-[12px] text-[#a8a29e] mt-0.5 truncate">{sub}</p>
      </div>
      <div className="w-14 h-14 rounded-[14px] overflow-hidden shrink-0">
        <img alt={title} className="w-full h-full object-cover" src={img} />
      </div>
    </motion.div>
  );
}

function QualityPoint({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div className="flex gap-3 sm:gap-4 items-start" variants={fadeUp}>
      <CheckCircle />
      <div>
        <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[13px] sm:text-[14px] text-[#1C1917]">{title}</p>
        <p className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#44403C] mt-0.5">{desc}</p>
      </div>
    </motion.div>
  );
}

function StatBadge({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <motion.div
      className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl shadow-lg shadow-black/5 p-4 sm:p-6 shadow-lg shadow-black/5 text-center"
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <p className="font-['Rubik',sans-serif] font-black text-[24px] sm:text-[36px] lg:text-[40px] leading-tight text-[#CA8A04]">
        <Counter value={value} suffix={suffix} />
      </p>
      <p className="font-['Nunito_Sans',sans-serif] text-[10px] sm:text-[13px] text-[#44403C] mt-1">{label}</p>
    </motion.div>
  );
}

export default function Home() {
  const heroRef  = useRef<HTMLElement>(null);
  const titleY       = useMotionValue(0);
  const titleOpacity = useMotionValue(1);
  const bgY          = useMotionValue(0);
  const sliderY      = useMotionValue(0);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const h = rect.height || 1;
      const progress = Math.max(0, Math.min(1, -rect.top / h));
      titleY.set(progress * h * 0.28);
      titleOpacity.set(Math.max(0, 1 - progress / 0.65));
      bgY.set(progress * h * 0.1);
      sliderY.set(progress * h * 0.14); // slider moves slightly more = depth parallax
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [titleY, titleOpacity, bgY, sliderY]);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative bg-[#FAFAF9] w-full overflow-hidden">
        {/* Parallax warm gradient bg */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: bgY, background: "linear-gradient(135deg, #FAFAF9 0%, #FAFAF9 55%, #fce8f3 100%)" }}
        />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 sm:pt-12 pb-12 sm:pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12 xl:gap-16">

            {/* ── LEFT: Typography ──────────────────────────────────── */}
            <div className="flex-1 min-w-0">
              <motion.p
                className="font-['Nunito_Sans',sans-serif] font-semibold text-[11px] sm:text-[12.8px] tracking-[2.56px] uppercase text-[#2d2f8e]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                Sivagangai, Tamil Nadu
              </motion.p>

              {/* Parallax title */}
              <motion.div style={{ y: titleY, opacity: titleOpacity }}>
                <motion.h1
                  className="font-['Rubik',sans-serif] font-black leading-[0.9] tracking-[-0.03em] text-[#e40a7a] mt-3 sm:mt-4 text-[clamp(52px,8vw,130px)]"
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.1 }}
                >
                  <div>Baji</div>
                  <div>Footwear</div>
                </motion.h1>
              </motion.div>

              <motion.p
                className="font-['Rubik',sans-serif] font-semibold text-[14px] sm:text-[17px] leading-snug text-[#1C1917] mt-5 max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.3 }}
              >
                {"Sivagangai's Trusted Destination for Footwear & Bags"}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 mt-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.45 }}
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/visit-us" className="bg-[#E6007E] text-white rounded-full px-5 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 font-['Nunito_Sans',sans-serif] font-semibold text-[13px] sm:text-[14px] hover:bg-[#b50060] transition-colors shadow-[0_4px_20px_rgba(230,0,126,0.35)]">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6C3.5 9 8 14.5 8 14.5C8 14.5 12.5 9 12.5 6C12.5 3.51 10.49 1.5 8 1.5Z" stroke="white" strokeWidth="1.33" strokeLinecap="round"/><circle cx="8" cy="6" r="1.5" stroke="white" strokeWidth="1.33"/></svg>
                    Visit Our Store
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <a href="#" className="border-2 border-[#2D5BFF] text-[#2D5BFF] rounded-full px-5 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 font-['Nunito_Sans',sans-serif] font-semibold text-[13px] sm:text-[14px] hover:bg-[#2D5BFF] hover:text-white transition-colors">
                    <WAIcon size={13} color="currentColor" /> WhatsApp Us
                  </a>
                </motion.div>
              </motion.div>

              {/* Mini stats below CTAs */}
              <motion.div
                className="flex gap-6 mt-8 sm:mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease, delay: 0.65 }}
              >
                {[["500+", "Products"], ["7", "Days Open"], ["₹149", "From"]].map(([v, l]) => (
                  <div key={l}>
                    <p className="font-['Rubik',sans-serif] font-black text-[20px] sm:text-[24px] text-[#1C1917] leading-none">{v}</p>
                    <p className="font-['Nunito_Sans',sans-serif] text-[10px] sm:text-[11px] text-[#a8a29e] uppercase tracking-wider mt-1">{l}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT: Image Slider ───────────────────────────────── */}
            <div className="w-full lg:w-[440px] xl:w-[500px] shrink-0">
              <HeroSlider sliderY={sliderY} />
            </div>

          </div>
        </div>
      </section>

      <LuxuryMarquee />

      <BrandStorySection />

      {/* ── COLLECTIONS STARTING FROM ──────────────────────────────────── */}
      <section className="bg-[#1C1917] w-full py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <Label>Transparent Pricing</Label>
                <h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-white mt-2">Collections Starting From</h2>
              </div>
              <p className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] text-[#a8a29e] max-w-xs sm:text-right">No hidden costs. Visit the store to see the full range.</p>
            </div>
          </ScrollReveal>
          <StaggerGrid className="mt-8 flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-8" delayStep={0.07}>
            <PricingCard img={imgPricingMens}   label="Men's Footwear"  price="₹299" />
            <PricingCard img={imgPricingWomens} label="Women's Footwear" price="₹249" />
            <PricingCard img={imgPricingKids}   label="Kids Footwear"   price="₹199" />
            <PricingCard img={imgPricingSchool} label="School Bags"     price="₹349" />
            <PricingCard img={imgPricingTravel} label="Travel Bags"     price="₹799" />
            <PricingCard img={imgPricingLunch}  label="Lunch Bags"      price="₹149" />
            <PricingCard img={imgPricingHand}   label="Hand Bags"       price="₹399" />
            <PricingCard img={imgPricingSports} label="Sports Shoes"    price="₹499" />
          </StaggerGrid>
          <ScrollReveal className="mt-6 flex justify-center" delay={0.2}>
            <Link to="/price-guide" className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] text-[#CA8A04] font-semibold flex items-center gap-1 hover:underline">
              See full price guide <ArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── EXPLORE COLLECTIONS ────────────────────────────────────────── */}
      <Section bg="bg-white">
        <Label light>What We Carry</Label>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-3">
          <ScrollReveal>
            <h2 className="font-['Rubik',sans-serif] font-bold text-[30px] sm:text-[44px] lg:text-[56px] leading-tight text-[#e40a7a]">Explore Our Collections</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link to="/collections" className="font-['Nunito_Sans',sans-serif] text-[14px] text-[#CA8A04] font-semibold flex items-center gap-1 shrink-0 hover:underline">View all <ArrowRight /></Link>
          </ScrollReveal>
        </div>
        <StaggerGrid className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" delayStep={0.1}>
          <CollectionCard img={imgColMens}   title="Men's Footwear"   subtitle="Formal, casual, sports & sandals"  price="₹299" items={["Formal shoes","Casual shoes","Sports shoes","Sandals & slippers"]} />
          <CollectionCard img={imgColWomens} title="Women's Footwear" subtitle="Elegant to everyday"                price="₹249" items={["Heels & wedges","Flats","Sandals","Ethnic footwear"]} />
          <CollectionCard img={imgColKids}   title="Kids Footwear"    subtitle="Durable and fun for every age"      price="₹199" items={["School shoes","Sneakers","Party shoes","Sandals"]} />
          <CollectionCard img={imgColSchool} title="School Bags"      subtitle="Built to last the whole year"       price="₹349" items={["Primary school","Middle school","High school","Laptop bags"]} />
          <CollectionCard img={imgColLunch}  title="Lunch Bags"       subtitle="Insulated, easy to clean"           price="₹149" items={["Insulated bags","Kids lunch bags","Office bags","Tote style"]} />
          <CollectionCard img={imgColTravel} title="Travel Bags"      subtitle="Ready for any journey"              price="₹799" items={["Cabin bags","Duffel bags","Backpacks","Trolley bags"]} />
        </StaggerGrid>
      </Section>

      {/* ── WHY CHOOSE BAJI ────────────────────────────────────────────── */}
      <Section bg="bg-[#FAFAF9]">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
          <motion.div
            className="lg:w-[480px] shrink-0"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <Label light>The Baji Difference</Label>
            <h2 className="font-['Rubik',sans-serif] font-bold text-[28px] sm:text-[38px] lg:text-[48px] leading-tight text-[#e40a7a] mt-3">Why Customers Choose Baji</h2>
            <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] leading-[27px] text-[#44403C] mt-5 mb-7">{"Sivagangai has plenty of shops. What makes Baji Footwear the one families return to year after year?"}</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link to="/about" className="bg-[#CA8A04] text-white rounded-full px-6 py-3 inline-flex items-center gap-2 font-['Nunito_Sans',sans-serif] font-semibold text-[14px] hover:bg-[#b50967] transition-colors">
                Our Story
              </Link>
            </motion.div>
          </motion.div>
          <StaggerGrid className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4" delayStep={0.08}>
            {[
              { t: "500+ Products", d: "One of the largest footwear and bag selections in Sivagangai." },
              { t: "Honest Quality", d: "We only stock products we'd recommend to our own family." },
              { t: "Prices From ₹149", d: "Fair value for every budget. No pressure, no overpricing." },
              { t: "New Arrivals Monthly", d: "Fresh stock every season so there's always something new." },
              { t: "Expert Staff", d: "Guidance on the right size, fit and style — not the priciest option." },
              { t: "Open 7 Days", d: "9 AM–9 PM weekdays. 10 AM–8 PM Sundays." },
            ].map(({ t, d }) => (
              <FeatureCard key={t} icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 9L7.5 11.5L13 6" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="9" r="7.25" stroke="#CA8A04" strokeWidth="1.5"/></svg>} title={t} desc={d} />
            ))}
          </StaggerGrid>
        </div>
      </Section>

      {/* ── POPULAR ────────────────────────────────────────────────────── */}
      <Section bg="bg-[#FAFAF9]">
        <Label light>Customer Favourites</Label>
        <ScrollReveal>
          <h2 className="font-['Rubik',sans-serif] font-bold text-[30px] sm:text-[44px] lg:text-[56px] leading-tight text-[#e40a7a] mt-3">Popular in Sivagangai</h2>
        </ScrollReveal>
        <StaggerGrid className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5" delayStep={0.1}>
          <PopItem num="01" bg="bg-[#CA8A04]" title="School Bags"        sub="Most bought before every term"              img={imgPop1} />
          <PopItem num="02" bg="bg-[#1C1917]" title="Kids Footwear"      sub="Top pick for growing families"              img={imgPop2} />
          <PopItem num="03" bg="bg-[#1C1917]" title="Men's Formal Shoes" sub="Office & wedding season favourite"          img={imgPop3} />
          <PopItem num="04" bg="bg-[#1C1917]" title="Travel Bags"        sub="High demand before pilgrimages & festivals" img={imgPop4} />
        </StaggerGrid>
      </Section>

      {/* ── QUALITY PROMISE ────────────────────────────────────────────── */}
      <Section bg="bg-white">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          {/* Photos */}
          <motion.div
            className="hidden lg:flex gap-4 shrink-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="w-[260px] xl:w-[280px] h-[580px] rounded-2xl overflow-hidden">
              <motion.img
                alt="Store" className="w-full h-full object-cover" src={imgStoreMain}
                initial={{ scale: 1.1 }} whileInView={{ scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 1.2, ease }}
              />
            </div>
            <div className="flex flex-col gap-4 w-[260px] xl:w-[280px]">
              <div className="h-[180px] rounded-2xl overflow-hidden">
                <motion.img alt="" className="w-full h-full object-cover" src={imgStoreTopRight}
                  initial={{ scale: 1.1 }} whileInView={{ scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 1.2, ease, delay: 0.1 }}
                />
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden">
                <motion.img alt="" className="w-full h-full object-cover" src={imgStoreBotRight}
                  initial={{ scale: 1.1 }} whileInView={{ scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 1.2, ease, delay: 0.2 }}
                />
              </div>
            </div>
          </motion.div>
          <div className="lg:hidden w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
            <img alt="Store" className="w-full h-full object-cover" src={imgStoreMain} />
          </div>
          <div className="flex-1">
            <Label light>Our Standards</Label>
            <ScrollReveal>
              <h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[36px] lg:text-[48px] leading-tight text-[#e40a7a] mt-3">The Quality Promise</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] leading-[27px] text-[#44403C] mt-5">{"We visit suppliers in person to inspect materials. If it wouldn't last a Sivagangai school year, it doesn't reach our shelves."}</p>
            </ScrollReveal>
            <StaggerGrid className="mt-7 flex flex-col gap-5" delayStep={0.1}>
              <QualityPoint title="Strong Stitching" desc="Every bag tested for stitch quality — holds through daily school and travel use." />
              <QualityPoint title="Comfortable Fit" desc="Padded insoles, correct arch support, and proper sizing guidance." />
              <QualityPoint title="Weather-Ready Materials" desc={"Water-resistant bag fabrics and durable soles suited to Tamil Nadu's climate."} />
              <QualityPoint title="Practical Design" desc="Multiple compartments, secure zippers. Function before fashion." />
            </StaggerGrid>
          </div>
        </div>
      </Section>

      {/* ── STORE EXPERIENCE ───────────────────────────────────────────── */}
      <Section bg="bg-[#FAFAF9]">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <ScrollReveal>
            <Label light>Inside The Store</Label>
            <h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[38px] lg:text-[52px] leading-tight text-[#1C1917] mt-3">The Store Experience</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link to="/gallery" className="font-['Nunito_Sans',sans-serif] text-[14px] text-[#CA8A04] font-semibold flex items-center gap-1 shrink-0 hover:underline">See gallery <ArrowRight /></Link>
          </ScrollReveal>
        </div>
        <StaggerGrid className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" delayStep={0.1}>
          <StorePhoto img={imgStoreMain}     label="Footwear Section" />
          <StorePhoto img={imgStoreBags}     label="Bags Section" />
          <StorePhoto img={imgStoreShoeWall} label="Shoe Wall" />
          <StorePhoto img={imgStoreShopping} label="Shopping Experience" />
        </StaggerGrid>
        {/* Stats with counter animation */}
        <StaggerGrid className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-sm sm:max-w-none" delayStep={0.15}>
          <StatBadge value={500} suffix="+" label="Products in stock" />
          <StatBadge value={7} label="Days open weekly" />
          <StatBadge value={4.8} suffix="★" label="Google rating" />
        </StaggerGrid>
      </Section>

      {/* ── GALLERY PREVIEW ────────────────────────────────────────────── */}
      <Section bg="bg-white">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <ScrollReveal>
            <Label light>Store Gallery</Label>
            <h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[38px] lg:text-[52px] leading-tight text-[#1C1917] mt-3">From Our Store</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link to="/gallery" className="font-['Nunito_Sans',sans-serif] text-[14px] text-[#CA8A04] font-semibold flex items-center gap-1 shrink-0 hover:underline">Full gallery <ArrowRight /></Link>
          </ScrollReveal>
        </div>
        {/* Mobile: simple 2-col */}
        <StaggerGrid className="grid grid-cols-2 gap-3 lg:hidden" delayStep={0.08}>
          {[imgGallery1,imgGallery2,imgGallery3,imgGallery4].map((img,i) => (
            <AnimatedCard key={i}>
              <motion.div className="rounded-2xl overflow-hidden h-40 sm:h-52" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <img alt="" className="w-full h-full object-cover" src={img}/>
              </motion.div>
            </AnimatedCard>
          ))}
        </StaggerGrid>
        {/* Desktop: masonry */}
        <div className="hidden lg:grid grid-cols-3 gap-4">
          <motion.div
            className="row-span-2 rounded-2xl overflow-hidden h-[480px]"
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.img alt="" className="w-full h-full object-cover" src={imgGallery1}
              initial={{ scale: 1.08 }} whileInView={{ scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 1.2, ease }}
            />
          </motion.div>
          {[imgGallery2,imgGallery3,imgGallery4,imgGallery5].map((img,i) => (
            <motion.div key={i} className="rounded-2xl overflow-hidden h-[220px]"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img alt="" className="w-full h-full object-cover" src={img}/>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <Section bg="bg-white">
        <ScrollReveal>
          <div className="text-center mb-10">
            <Label center light>Frequently Asked Questions</Label>
            <h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#1C1917] mt-3">Common Questions Answered</h2>
          </div>
        </ScrollReveal>
        <div className="max-w-[700px] mx-auto flex flex-col gap-2">
          <FaqItem question="What is the price range for your products?" answer="Our products start from ₹149 for lunch bags up to ₹799+ for premium travel bags. Footwear starts from ₹199 for kids and ₹299 for adults." />
          <FaqItem question="Do you have bags for all school age groups?" answer="Yes! We carry bags for primary school, middle school, high school and college students. Our staff will help you find the right size." />
          <FaqItem question="Can I enquire about availability before visiting?" answer="Absolutely. WhatsApp us with the category and approximate budget and we'll confirm availability before you make the trip." />
          <FaqItem question="Do you offer home delivery or online shopping?" answer="We are a physical store focused on in-person service. WhatsApp us for special arrangements." />
          <FaqItem question="What are your store hours?" answer="Monday to Saturday: 9:00 AM – 9:00 PM. Sunday: 10:00 AM – 8:00 PM. We are open all 7 days including public holidays." />
        </div>
      </Section>

      {/* ── WHATSAPP CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#1C1917] w-full py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <ScrollReveal>
            <Label>Quick Enquiry</Label>
            <h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-white mt-4">What Are You Looking For?</h2>
            <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] text-[#a8a29e] mt-3 max-w-md mx-auto">{"Select a category and we'll open a WhatsApp chat with your enquiry ready to send."}</p>
          </ScrollReveal>
          <StaggerGrid className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3" delayStep={0.06}>
            {["🎒 School Bags","🧳 Travel Bags","👞 Men's Footwear","👠 Women's Footwear","👟 Kids Footwear","👜 Hand Bags","🥪 Lunch Bags","🏃 Sports Shoes"].map(item => (
              <motion.button
                key={item}
                className="border-2 border-[#2e2e4a] text-[#c0c0d0] rounded-full px-3.5 sm:px-4 py-2.5 font-['Nunito_Sans',sans-serif] font-medium text-[12px] sm:text-[14px]"
                variants={fadeUp}
                whileHover={{ borderColor: "#CA8A04", color: "#ffffff", scale: 1.04, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.96 }}
              >
                {item}
              </motion.button>
            ))}
          </StaggerGrid>
          <ScrollReveal delay={0.4}>
            <motion.a
              href="#"
              className="mt-8 bg-[#25d366] text-white rounded-full px-7 py-3.5 inline-flex items-center gap-3 font-['Nunito_Sans',sans-serif] font-bold text-[15px]"
              whileHover={{ scale: 1.05, backgroundColor: "#1da855" }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7.9 20C9.81 20.98 12 21.24 14.09 20.75C16.18 20.25 18.02 19.03 19.28 17.29C20.55 15.56 21.15 13.43 20.98 11.29C20.81 9.15 19.89 7.14 18.37 5.63C16.86 4.11 14.85 3.19 12.71 3.02C10.57 2.85 8.44 3.46 6.71 4.72C4.97 5.98 3.75 7.82 3.25 9.91C2.76 11.996 3.02 14.19 4 16.1L2 22L7.9 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Chat on WhatsApp
            </motion.a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
