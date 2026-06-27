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
    <motion.div className="bg-[#FAFAF9] rounded-2xl overflow-hidden" variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}>
      <ParallaxImage src={img} alt={label} className="h-44 sm:h-48" speed={speed} />
      <div className="p-5">
        <p className="font-['Rubik',sans-serif] font-bold text-[16px] sm:text-[18px] text-[#1C1917]">{label}</p>
        <p className="font-['Nunito_Sans',sans-serif] text-[12px] sm:text-[13px] leading-[20px] text-[#44403C] mt-2">{desc}</p>
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
        heading={"Sivagangai's Trusted Shoe Store"}
        subheading="More than a footwear and bag store — a trusted local business built on genuine pricing, product quality standards, and decades of serving Sivagangai families."
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
              <h2 className="font-['Rubik',sans-serif] font-bold text-[28px] sm:text-[38px] lg:text-[44px] leading-tight text-[#1C1917] mt-3">Built on Trust, Rooted in Sivagangai</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-6 space-y-5 font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] leading-[27px] text-[#44403C]">
                <p>Baji Footwear was started with a simple belief: every family in Sivagangai deserves access to premium footwear and highly durable bags at honest prices.</p>
                <p>We began with a focused selection of footwear and grew steadily as customers across Karaikudi, Melur, and Madurai began trusting our brand. Today, our store carries 500+ products across footwear, school bags, travel bags, lunch bags and hand bags.</p>
                <p>{"Our customers keep returning because they know exactly what to expect: knowledgeable staff, fair prices, genuine quality standards designed for Tamil Nadu's climate, and a no-pressure shopping experience."}</p>
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
      <Section bg="bg-[#FAFAF9]">
        <div className="text-center mb-10">
          <Label center light>What Makes Us Different</Label>
          <ScrollReveal><h2 className="font-['Rubik',sans-serif] font-bold text-[28px] sm:text-[38px] lg:text-[44px] leading-tight text-[#e40a7a] mt-3">The Baji Advantage</h2></ScrollReveal>
          <ScrollReveal delay={0.1}><p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] text-[#44403C] mt-4 max-w-xl mx-auto">Every decision comes back to one question: what is genuinely best for our customer?</p></ScrollReveal>
        </div>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" delayStep={0.08}>
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="6" height="6" rx="1" stroke="#CA8A04" strokeWidth="1.5"/><rect x="10" y="2" width="6" height="6" rx="1" stroke="#CA8A04" strokeWidth="1.5"/><rect x="2" y="10" width="6" height="6" rx="1" stroke="#CA8A04" strokeWidth="1.5"/><rect x="10" y="10" width="6" height="6" rx="1" stroke="#CA8A04" strokeWidth="1.5"/></svg>} title="Direct Supplier Relationships" desc="We bypass middlemen to source 500+ premium products, passing the massive savings directly to you." />
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9H16M9 2V16" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round"/></svg>} title="Genuine Pricing" desc="Starting from ₹149. Transparent, fixed pricing with no hidden markups — the price you see is what you pay." />
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L10.93 7.06L16.28 7.32L12.15 10.8L13.53 16L9 13L4.47 16L5.85 10.8L1.72 7.32L7.07 7.06L9 2Z" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>} title="Product Quality Standards" desc="We meticulously inspect bag stitching and test shoe soles to ensure they withstand local weather conditions." />
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9C3 5.69 5.69 3 9 3C12.31 3 15 5.69 15 9C15 12.31 12.31 15 9 15C5.69 15 3 12.31 3 9Z" stroke="#CA8A04" strokeWidth="1.5"/><path d="M6 9L8 11L12 7" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>} title="Decades of Trust" desc="A relaxed, family-friendly environment backed by years of serving the Sivagangai community with integrity." />
        </StaggerGrid>
      </Section>

      {/* OUR CUSTOMERS */}
      <Section bg="bg-white">
        <Label light>Our Customers</Label>
        <ScrollReveal><h2 className="font-['Rubik',sans-serif] font-bold text-[28px] sm:text-[38px] lg:text-[44px] leading-tight text-[#1C1917] mt-3">Who We Serve</h2></ScrollReveal>
        <ScrollReveal delay={0.1}><p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] text-[#44403C] mt-4 max-w-lg">Baji Footwear serves the everyday needs of Sivagangai's diverse community.</p></ScrollReveal>
        <StaggerGrid className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" delayStep={0.1}>
          {CUSTOMERS.map(c => <ParallaxCard key={c.label} {...c} />)}
        </StaggerGrid>
      </Section>

      {/* STORE TOUR — ParallaxBand divider + grid */}
      <ParallaxBand img={imgStoreMain} className="py-20 sm:py-24" overlayOpacity={0.72}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <ScrollReveal>
            <Label center light>Inside The Store</Label>
            <h2 className="font-['Rubik',sans-serif] font-bold text-[28px] sm:text-[40px] lg:text-[48px] leading-tight text-white mt-3">A Tour of Our Store</h2>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      <Section bg="bg-[#FAFAF9]">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            [imgStoreMain,     "Premium footwear section at Baji Footwear Sivagangai",    0.12],
            [imgStoreBags,     "Durable school and travel bags collection",        0.17],
            [imgStoreShoeWall, "Extensive shoe wall showing men's and women's footwear",           0.14],
            [imgStoreShopping, "Family friendly footwear shopping experience in Sivagangai", 0.19],
            [imgStoreTopRight, "New arrivals of casual and formal shoes",        0.13],
            [imgStoreBotRight, "Baji Footwear store interior layout",      0.16],
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
              <p className="absolute bottom-3 left-3 font-['Nunito_Sans',sans-serif] font-semibold text-[11px] sm:text-[12px] text-white">{label as string}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/gallery" className="bg-[#1C1917] text-white rounded-full px-7 py-3.5 font-['Nunito_Sans',sans-serif] font-semibold text-[14px] hover:bg-[#2d2f8e] transition-colors">View Full Gallery</Link>
        </div>
      </Section>

      {/* TIMELINE */}
      <Section bg="bg-white">
        <Label light>Baji Through The Years</Label>
        <ScrollReveal><h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#1C1917] mt-3">Our Journey</h2></ScrollReveal>
        <div className="mt-10 relative">
          <div className="hidden sm:block absolute left-[88px] top-0 bottom-0 w-px bg-[#e5e5e0]"/>
          <div className="flex flex-col gap-8">
            {TIMELINE.map(({ year, title, desc }, i) => (
              <motion.div key={year} className="flex gap-6 sm:gap-8 items-start"
                initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, ease, delay: i * 0.1 }}>
                <div className="w-20 shrink-0 text-right">
                  <span className="font-['Rubik',sans-serif] font-black text-[13px] sm:text-[14px] text-[#CA8A04] uppercase tracking-wide">{year}</span>
                </div>
                <div className="sm:pl-8 flex-1">
                  <p className="font-['Rubik',sans-serif] font-bold text-[16px] sm:text-[18px] text-[#1C1917]">{title}</p>
                  <p className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#44403C] mt-1">{desc}</p>
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
