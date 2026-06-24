import { useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, useMotionValue } from "motion/react";
import {
  imgGallery1, imgGallery2, imgGallery3, imgGallery4, imgGallery5, imgGallery6,
  imgStoreMain, imgStoreBags, imgStoreShoeWall, imgStoreShopping, imgStoreTopRight, imgStoreBotRight,
  imgColMens, imgColWomens, imgColKids, imgColSchool, imgColLunch, imgColTravel,
  imgPop1, imgPop2, imgPop3, imgPop4,
} from "../images";
import { Label, Section, WACTABanner, InternalLinks, ParallaxImage, ParallaxBand, ScrollReveal, StaggerGrid, fadeUp } from "../ui";

const ease = [0.25, 0.1, 0.25, 1] as const;

// Single gallery cell with its own parallax speed
function GalleryCell({
  src, label, className = "", speed = 0.14, delay = 0,
}: {
  src: string; label?: string; className?: string; speed?: number; delay?: number;
}) {
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
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [speed, y]);
  return (
    <motion.div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay }}
      whileHover={{ scale: 1.015, transition: { duration: 0.4 } }}
    >
      <motion.img
        src={src} alt={label ?? ""}
        className="w-full h-full object-cover"
        style={{ y, scale: 1 + speed * 1.4 }}
      />
      {label && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,46,0.7)] via-transparent to-transparent" />
          <p className="absolute bottom-3 left-3 font-['Inter',sans-serif] font-semibold text-[11px] sm:text-[12px] text-white">{label}</p>
        </>
      )}
    </motion.div>
  );
}

// Hero parallax strip – large text over a sliding background
function HeroParallax() {
  const ref = useRef<HTMLElement>(null);
  const bgY   = useMotionValue(0);
  const textY = useMotionValue(0);
  const fade  = useMotionValue(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const h = rect.height;
      // progress: 0 at top of viewport, 1 when fully scrolled past
      const progress = Math.max(0, Math.min(1, -rect.top / h));
      bgY.set(progress * 40); // 0% → 40% in percent... use px instead
      textY.set(progress * 22);
      fade.set(Math.max(0, 1 - progress / 0.8));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [bgY, textY, fade]);

  return (
    <section ref={ref} className="relative bg-[#1a1a2e] w-full overflow-hidden py-20 sm:py-28 lg:py-36">
      {/* Parallax background collage */}
      <motion.div className="absolute inset-0 w-full h-[140%] -top-[20%]" style={{ y: bgY }}>
        <div className="grid grid-cols-3 h-full gap-1 opacity-30">
          {[imgGallery1, imgGallery2, imgGallery3, imgStoreBags, imgStoreMain, imgStoreShoeWall].map((img, i) => (
            <div key={i} className="overflow-hidden">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-transparent to-[#1a1a2e]" />
      </motion.div>

      {/* Parallax text */}
      <motion.div
        className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10"
        style={{ y: textY, opacity: fade }}
      >
        <motion.p
          className="font-['Inter',sans-serif] font-semibold text-[11px] sm:text-[12px] tracking-[2.4px] uppercase text-[#d10b78]"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
        >Store Gallery</motion.p>
        <motion.h1
          className="font-['Playfair_Display',serif] font-bold text-[40px] sm:text-[56px] lg:text-[72px] leading-tight text-white mt-3"
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          Inside Baji Footwear
        </motion.h1>
        <motion.p
          className="font-['Inter',sans-serif] text-[14px] sm:text-[16px] text-[#8a8aa8] mt-4 max-w-xl"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.25 }}
        >
          A virtual tour of our store in Sivagangai. Browse collections, see the layout and feel the experience before you visit.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease, delay: 0.4 }}
        >
          <Link to="/visit-us" className="mt-8 inline-flex items-center gap-2 bg-[#d10b78] text-white rounded-full px-7 py-3.5 font-['Inter',sans-serif] font-semibold text-[14px] hover:bg-[#b50967] transition-colors">
            See It In Person
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <HeroParallax />

      <InternalLinks links={[
        { label: "Collections", href: "/collections" },
        { label: "About Us",    href: "/about" },
        { label: "Price Guide", href: "/price-guide" },
        { label: "Visit Us",    href: "/visit-us" },
      ]} />

      {/* ── STORE EXTERIOR / MAIN ─────────────────────────────────── */}
      <Section bg="bg-white">
        <ScrollReveal>
          <Label light>The Store</Label>
          <h2 className="font-['Playfair_Display',serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#1a1a2e] mt-3">Store Exterior & Main Areas</h2>
        </ScrollReveal>

        {/* Mobile grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
          {[imgGallery1,imgGallery2,imgGallery3,imgGallery4,imgGallery5,imgGallery6].map((img,i) => (
            <GalleryCell key={i} src={img} className="h-40 sm:h-52" speed={0.1 + i * 0.02} delay={i * 0.05} />
          ))}
        </div>

        {/* Desktop masonry — each column drifts at a slightly different rate */}
        <div className="mt-8 hidden lg:grid grid-cols-3 gap-5">
          {/* Col 1 — slowest parallax */}
          <div className="flex flex-col gap-5">
            <GalleryCell src={imgGallery1} className="h-[380px]" speed={0.10} delay={0} />
            <GalleryCell src={imgGallery4} className="h-[260px]" speed={0.12} delay={0.1} />
          </div>
          {/* Col 2 — medium */}
          <div className="flex flex-col gap-5 mt-12">
            <GalleryCell src={imgGallery2} className="h-[260px]" speed={0.15} delay={0.05} />
            <GalleryCell src={imgGallery5} className="h-[260px]" speed={0.13} delay={0.15} />
            <GalleryCell src={imgGallery6} className="h-[200px]" speed={0.16} delay={0.2} />
          </div>
          {/* Col 3 — fastest */}
          <div className="flex flex-col gap-5 mt-6">
            <GalleryCell src={imgGallery3} className="h-[300px]" speed={0.18} delay={0.08} />
            <GalleryCell src={imgStoreShopping} className="h-[240px]" speed={0.20} delay={0.18} />
            <GalleryCell src={imgStoreTopRight} className="h-[180px]" speed={0.16} delay={0.12} />
          </div>
        </div>
      </Section>

      {/* ── FOOTWEAR COLLECTION ──────────────────────────────────── */}
      <Section bg="bg-[#f2ede4]">
        <ScrollReveal>
          <Label light>Footwear Collection</Label>
          <h2 className="font-['Playfair_Display',serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#1a1a2e] mt-3">Footwear Displays</h2>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            [imgColMens,       "Men's Footwear",   0.12],
            [imgColWomens,     "Women's Footwear", 0.15],
            [imgColKids,       "Kids Footwear",    0.11],
            [imgStoreShoeWall, "Shoe Wall",        0.18],
            [imgStoreMain,     "Footwear Section", 0.14],
            [imgStoreShopping, "Shopping",         0.16],
            [imgStoreTopRight, "New Arrivals",     0.13],
            [imgStoreBotRight, "Store Interior",   0.17],
          ].map(([img, label, speed], i) => (
            <GalleryCell
              key={label as string}
              src={img as string}
              label={label as string}
              className="h-36 sm:h-48"
              speed={speed as number}
              delay={i * 0.04}
            />
          ))}
        </div>
      </Section>

      {/* ── SCHOOL BAGS COLLECTION ──────────────────────────────── */}
      <Section bg="bg-white">
        <ScrollReveal>
          <Label light>School Bags Collection</Label>
          <h2 className="font-['Playfair_Display',serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#1a1a2e] mt-3">Bags for Every School</h2>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          <GalleryCell src={imgColSchool} label="School Bags"      className="h-52 sm:h-64 lg:h-72" speed={0.12} delay={0} />
          <GalleryCell src={imgPop1}      label="Bag Collection"   className="h-52 sm:h-64 lg:h-72" speed={0.17} delay={0.08} />
          <GalleryCell src={imgStoreBags} label="Bags Section"     className="h-52 sm:h-64 lg:h-72" speed={0.14} delay={0.16} />
        </div>
      </Section>

      {/* ── TRAVEL BAGS ──────────────────────────────────────────── */}
      {/* Full-bleed parallax divider */}
      <ParallaxBand img={imgColTravel} className="py-20 sm:py-28" overlayOpacity={0.65}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <ScrollReveal>
            <p className="font-['Inter',sans-serif] font-semibold text-[11px] sm:text-[12px] tracking-[2.4px] uppercase text-[#d10b78]">Travel Bags Collection</p>
            <h2 className="font-['Playfair_Display',serif] font-bold text-[28px] sm:text-[40px] lg:text-[52px] leading-tight text-white mt-3">Travel Bags & Luggage</h2>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      <Section bg="bg-[#f2ede4]">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          <GalleryCell src={imgColTravel} label="Travel Bags"    className="h-44 sm:h-56 lg:h-64" speed={0.14} delay={0} />
          <GalleryCell src={imgPop4}      label="Duffel Bags"   className="h-44 sm:h-56 lg:h-64" speed={0.19} delay={0.07} />
          <GalleryCell src={imgColLunch}  label="Lunch & Bags"  className="h-44 sm:h-56 lg:h-64" speed={0.12} delay={0.14} />
        </div>
      </Section>

      {/* ── NEW ARRIVALS ─────────────────────────────────────────── */}
      <Section bg="bg-white">
        <ScrollReveal>
          <Label light>New Arrivals Gallery</Label>
          <h2 className="font-['Playfair_Display',serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#1a1a2e] mt-3">Fresh Stock</h2>
          <p className="font-['Inter',sans-serif] text-[14px] sm:text-[15px] text-[#4a4a5c] mt-3 max-w-xl">We update our stock every month. Visit the store regularly to see what's new.</p>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <GalleryCell src={imgPop2}      className="h-40 sm:h-52" speed={0.13} delay={0} />
          <GalleryCell src={imgPop3}      className="h-40 sm:h-52" speed={0.17} delay={0.06} />
          <GalleryCell src={imgGallery6}  className="h-40 sm:h-52" speed={0.11} delay={0.12} />
          <GalleryCell src={imgStoreBotRight} className="h-40 sm:h-52" speed={0.20} delay={0.18} />
        </div>
      </Section>

      {/* ── CUSTOMER MOMENTS ─────────────────────────────────────── */}
      {/* Another full-bleed parallax divider */}
      <ParallaxBand img={imgStoreMain} className="py-20 sm:py-28" overlayOpacity={0.72}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <ScrollReveal>
            <p className="font-['Inter',sans-serif] font-semibold text-[11px] sm:text-[12px] tracking-[2.4px] uppercase text-[#d10b78]">Customer Moments</p>
            <h2 className="font-['Playfair_Display',serif] font-bold text-[28px] sm:text-[40px] lg:text-[52px] leading-tight text-white mt-3">The Shopping Experience</h2>
            <p className="font-['Inter',sans-serif] text-[14px] sm:text-[16px] text-[#c0c0d0] mt-4 max-w-md mx-auto">A relaxed, organised store where families shop at their own pace.</p>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <Section bg="bg-[#faf7f2]">
        <div className="text-center">
          <ScrollReveal>
            <p className="font-['Inter',sans-serif] font-semibold text-[11px] sm:text-[12px] tracking-[2.4px] uppercase text-[#d10b78]">Come Visit</p>
            <h2 className="font-['Playfair_Display',serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#1a1a2e] mt-3">See It In Person</h2>
            <p className="font-['Inter',sans-serif] text-[14px] sm:text-[16px] text-[#4a4a5c] mt-4 max-w-md mx-auto">Photos only tell part of the story. Visit our store in Sivagangai to browse, try and experience the full collection.</p>
          </ScrollReveal>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/visit-us" className="bg-[#d10b78] text-white rounded-full px-7 py-3.5 font-['Inter',sans-serif] font-semibold text-[14px] hover:bg-[#b50967] transition-colors">Plan Your Visit</Link>
            <Link to="/collections" className="border-2 border-[#1a1a2e] text-[#1a1a2e] rounded-full px-7 py-3.5 font-['Inter',sans-serif] font-semibold text-[14px] hover:bg-[#1a1a2e] hover:text-white transition-colors">Browse Collections</Link>
          </div>
        </div>
      </Section>

      <WACTABanner
        heading="Questions About Our Stock?"
        body="WhatsApp us before visiting and we'll confirm what's in stock today."
        img={imgGallery1}
      />
    </div>
  );
}
