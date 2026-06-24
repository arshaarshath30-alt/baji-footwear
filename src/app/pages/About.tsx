import { useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useMotionValue } from "motion/react";
import { imgStoreMain, imgStoreTopRight, imgStoreBotRight, imgStoreBags, imgStoreShoeWall, imgStoreShopping, imgGallery1, imgPop1, imgPop2, imgPop3, imgPop4 } from "../images";
import { Label, Section, PageHero, WACTABanner, FeatureCard, InternalLinks, ParallaxImage, ParallaxBand, ScrollReveal, StaggerGrid, fadeUp } from "../ui";

const ease = [0.25, 0.1, 0.25, 1] as const;

const TIMELINE = [
  { year: "Founded", title: "Baji Footwear Opens", desc: "The store opens its doors in Sivagangai with a commitment to quality footwear for every family." },
  { year: "Growth",  title: "Expanding Collections", desc: "Bags and accessories are added — school bags, travel bags and lunch bags quickly become bestsellers." },
  { year: "Trust",   title: "Community Favourite", desc: "Baji Footwear becomes the go-to destination for Sivagangai families, earning a 4.8-star Google rating." },
  { year: "Today",   title: "500+ Products", desc: "One of Sivagangai's most trusted retail stores, with new arrivals every month." },
];

const CUSTOMERS = [
  { label: "Students",              desc: "School bags, sports shoes and everyday footwear for every age.", img: imgPop1, speed: 0.12 },
  { label: "Families",              desc: "Footwear and bags for every family member, from kids to grandparents.", img: imgPop2, speed: 0.16 },
  { label: "Working Professionals", desc: "Formal shoes, office bags and travel essentials for daily commuters.", img: imgPop3, speed: 0.14 },
  { label: "Travellers",            desc: "Trolley bags, duffel bags and weekend travel bags for pilgrimages.", img: imgPop4, speed: 0.18 },
];

function ParallaxCard({ img, label, desc, speed }: { img: string; label: string; desc: string; speed: number }) {
  return (
    <motion.div className="bg-[#f2ede4] rounded-2xl overflow-hidden" variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}>
      <ParallaxImage src={img} alt={label} className="h-44 sm:h-48" speed={speed} />
      <div className="p-5">
        <p className="font-['Playfair_Display',serif] font-bold text-[16px] sm:text-[18px] text-[#1a1a2e]">{label}</p>
        <p className="font-['Inter',sans-serif] text-[12px] sm:text-[13px] leading-[20px] text-[#4a4a5c] mt-2">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyImgY = useMotionValue(0);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh / 2 - rect.top - rect.height / 2) / (vh + rect.height);
      storyImgY.set(progress * rect.height * 0.14);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [storyImgY]);

  return (
    <div>
      <PageHero
        label="About Baji Footwear"
        heading={"Serving Families\nAcross Sivagangai"}
        subheading="More than a footwear and bag store — a trusted destination for quality, comfort, and everyday essentials for Sivagangai families."
        img={imgGallery1}
        cta={{ label: "WhatsApp Us" }}
        ctaSecondary={{ label: "Visit the Store", href: "/visit-us" }}
      />

      <InternalLinks links={[
        { label: "Collections", href: "/collections" },
        { label: "Price Guide", href: "/price-guide" },
        { label: "Gallery",     href: "/gallery" },
        { label: "Visit Us",    href: "/visit-us" },
      ]} />

      {/* OUR STORY */}
      <Section bg="bg-white">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="flex-1">
            <Label light>Our Story</Label>
            <ScrollReveal>
              <h2 className="font-['Playfair_Display',serif] font-bold text-[28px] sm:text-[38px] lg:text-[44px] leading-tight text-[#1a1a2e] mt-3">Built on Trust, Rooted in Sivagangai</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-6 space-y-5 font-['Inter',sans-serif] text-[14px] sm:text-[16px] leading-[27px] text-[#4a4a5c]">
                <p>Baji Footwear was started with a simple belief: every family in Sivagangai deserves access to quality footwear and bags at honest prices.</p>
                <p>We began with a focused selection of footwear and grew steadily as customers trusted us. Today, our store carries 500+ products across footwear, school bags, travel bags, lunch bags and hand bags.</p>
                <p>{"Our customers keep returning because they know exactly what to expect: knowledgeable staff, fair prices, genuine quality and a no-pressure shopping experience."}</p>
              </div>
            </ScrollReveal>
          </div>
          {/* Story images with parallax */}
          <div ref={heroRef} style={{ position: "relative" }} className="lg:w-[420px] xl:w-[460px] shrink-0 flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80">
              <motion.img
                alt="Store footwear section" src={imgStoreMain}
                className="w-full h-full object-cover"
                style={{ y: storyImgY, scale: 1.2 }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ParallaxImage src={imgStoreTopRight} alt="Bags section" className="rounded-2xl h-36 sm:h-40" speed={0.14} />
              <ParallaxImage src={imgStoreBotRight} alt="Shoe wall"    className="rounded-2xl h-36 sm:h-40" speed={0.18} />
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT MAKES US DIFFERENT */}
      <Section bg="bg-[#f2ede4]">
        <div className="text-center mb-10">
          <Label center light>What Makes Us Different</Label>
          <ScrollReveal><h2 className="font-['Playfair_Display',serif] font-bold text-[28px] sm:text-[38px] lg:text-[44px] leading-tight text-[#e40a7a] mt-3">The Baji Advantage</h2></ScrollReveal>
          <ScrollReveal delay={0.1}><p className="font-['Inter',sans-serif] text-[14px] sm:text-[16px] text-[#4a4a5c] mt-4 max-w-xl mx-auto">Every decision comes back to one question: what is genuinely best for our customer?</p></ScrollReveal>
        </div>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" delayStep={0.08}>
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="6" height="6" rx="1" stroke="#D10B78" strokeWidth="1.5"/><rect x="10" y="2" width="6" height="6" rx="1" stroke="#D10B78" strokeWidth="1.5"/><rect x="2" y="10" width="6" height="6" rx="1" stroke="#D10B78" strokeWidth="1.5"/><rect x="10" y="10" width="6" height="6" rx="1" stroke="#D10B78" strokeWidth="1.5"/></svg>} title="Wide Collection" desc="500+ products across footwear, school bags, travel bags, lunch bags and hand bags — all under one roof." />
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9H16M9 2V16" stroke="#D10B78" strokeWidth="1.5" strokeLinecap="round"/></svg>} title="Affordable Pricing" desc="Starting from ₹149. Transparent pricing — the price you see is the price you pay." />
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L10.93 7.06L16.28 7.32L12.15 10.8L13.53 16L9 13L4.47 16L5.85 10.8L1.72 7.32L7.07 7.06L9 2Z" stroke="#D10B78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>} title="New Arrivals Monthly" desc="We refresh our stock regularly. Visit us each season to discover what's new." />
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9C3 5.69 5.69 3 9 3C12.31 3 15 5.69 15 9C15 12.31 12.31 15 9 15C5.69 15 3 12.31 3 9Z" stroke="#D10B78" strokeWidth="1.5"/><path d="M6 9L8 11L12 7" stroke="#D10B78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>} title="Family-Friendly" desc="A relaxed, no-pressure environment. Browse at your own pace. Bring the whole family." />
        </StaggerGrid>
      </Section>

      {/* OUR CUSTOMERS */}
      <Section bg="bg-white">
        <Label light>Our Customers</Label>
        <ScrollReveal><h2 className="font-['Playfair_Display',serif] font-bold text-[28px] sm:text-[38px] lg:text-[44px] leading-tight text-[#1a1a2e] mt-3">Who We Serve</h2></ScrollReveal>
        <ScrollReveal delay={0.1}><p className="font-['Inter',sans-serif] text-[14px] sm:text-[16px] text-[#4a4a5c] mt-4 max-w-lg">Baji Footwear serves the everyday needs of Sivagangai's diverse community.</p></ScrollReveal>
        <StaggerGrid className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" delayStep={0.1}>
          {CUSTOMERS.map(c => <ParallaxCard key={c.label} {...c} />)}
        </StaggerGrid>
      </Section>

      {/* STORE TOUR — ParallaxBand divider + grid */}
      <ParallaxBand img={imgStoreMain} className="py-20 sm:py-24" overlayOpacity={0.72}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <ScrollReveal>
            <Label center light>Inside The Store</Label>
            <h2 className="font-['Playfair_Display',serif] font-bold text-[28px] sm:text-[40px] lg:text-[48px] leading-tight text-white mt-3">A Tour of Our Store</h2>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      <Section bg="bg-[#f2ede4]">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            [imgStoreMain,     "Footwear Section",    0.12],
            [imgStoreBags,     "Bags Section",        0.17],
            [imgStoreShoeWall, "Shoe Wall",           0.14],
            [imgStoreShopping, "Shopping Experience", 0.19],
            [imgStoreTopRight, "New Arrivals",        0.13],
            [imgStoreBotRight, "Store Interior",      0.16],
          ].map(([img, label, speed], i) => (
            <motion.div
              key={label as string}
              className="relative rounded-2xl overflow-hidden h-40 sm:h-52"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease, delay: i * 0.07 }}
              whileHover={{ scale: 1.02 }}
            >
              <ParallaxImage src={img as string} alt={label as string} className="w-full h-full" speed={speed as number} />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,46,0.65)] to-transparent pointer-events-none" />
              <p className="absolute bottom-3 left-3 font-['Inter',sans-serif] font-semibold text-[11px] sm:text-[12px] text-white">{label as string}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/gallery" className="bg-[#1a1a2e] text-white rounded-full px-7 py-3.5 font-['Inter',sans-serif] font-semibold text-[14px] hover:bg-[#2d2f8e] transition-colors">View Full Gallery</Link>
        </div>
      </Section>

      {/* TIMELINE */}
      <Section bg="bg-white">
        <Label light>Baji Through The Years</Label>
        <ScrollReveal><h2 className="font-['Playfair_Display',serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#1a1a2e] mt-3">Our Journey</h2></ScrollReveal>
        <div className="mt-10 relative">
          <div className="hidden sm:block absolute left-[88px] top-0 bottom-0 w-px bg-[#e5ddd0]"/>
          <div className="flex flex-col gap-8">
            {TIMELINE.map(({ year, title, desc }, i) => (
              <motion.div key={year} className="flex gap-6 sm:gap-8 items-start"
                initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, ease, delay: i * 0.1 }}>
                <div className="w-20 shrink-0 text-right">
                  <span className="font-['Playfair_Display',serif] font-black text-[13px] sm:text-[14px] text-[#d10b78] uppercase tracking-wide">{year}</span>
                </div>
                <div className="sm:pl-8 flex-1">
                  <p className="font-['Playfair_Display',serif] font-bold text-[16px] sm:text-[18px] text-[#1a1a2e]">{title}</p>
                  <p className="font-['Inter',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#4a4a5c] mt-1">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <WACTABanner heading="Visit Our Store in Sivagangai" body="Open 7 days a week. Bring the family and browse at your own pace." img={imgGallery1} />
    </div>
  );
}
