import { imgColSchool, imgPricingSchool, imgPop1, imgStoreMain, imgStoreBags } from "../images";
import { Label, Section, PageHero, WACTABanner, FaqItem, FeatureCard, PriceRow, InternalLinks, ParallaxImage, ParallaxBand, ScrollReveal, StaggerGrid } from "../ui";

const FEATURES = [
  { title: "Primary School (Age 5–10)", desc: "Lightweight bags with padded back panels and adjustable straps. Sized for smaller textbooks and tiffin boxes. Starting from ₹349." },
  { title: "Middle School (Age 10–14)", desc: "Spacious main compartment with multiple pockets for books, stationery and water bottles. Ergonomic design prevents back strain." },
  { title: "High School & College", desc: "Large-capacity bags with dedicated laptop compartments, organiser pockets and durable zippers. Starting from ₹499." },
];

export default function SchoolBags() {
  return (
    <div>
      <PageHero
        label="School Bags in Sivagangai"
        heading="School Bags in Sivagangai"
        subheading="Sivagangai's most trusted school bag store. Lightweight, durable bags for primary, middle and high school students — starting from ₹349."
        bg="bg-[#FAFAF9]"
        img={imgColSchool}
        cta={{ label: "Ask on WhatsApp" }}
        ctaSecondary={{ label: "See Price Guide", href: "/price-guide" }}
      />

      <InternalLinks links={[
        { label: "Kids Collection",            href: "/kids-collection" },
        { label: "Travel Bags Sivagangai",     href: "/travel-bags-sivagangai" },
        { label: "Footwear Shop Sivagangai",   href: "/footwear-shop-sivagangai" },
        { label: "Full Collections",           href: "/collections" },
      ]} />

      {/* SCHOOL BAGS FOR EVERY AGE */}
      <Section bg="bg-white">
        <Label light>School Bags for Every Age</Label>
        <h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#1C1917] mt-3">The Right Bag for Every School Stage</h2>
        <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] leading-[27px] text-[#44403C] mt-5 max-w-2xl">At Baji Footwear, we stock school bags that are sized and built for each stage of education. Our staff will guide you to the right capacity, weight and design for your child's specific school and grade.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {FEATURES.map(({ title, desc }) => (
            <div key={title} className="bg-[#FAFAF9] rounded-2xl p-6">
              <div className="w-8 h-8 rounded-full bg-[#CA8A04] flex items-center justify-center mb-4">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 8L6.5 10.5L12 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p className="font-['Rubik',sans-serif] font-bold text-[16px] sm:text-[18px] text-[#1C1917]">{title}</p>
              <p className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#44403C] mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* LIGHTWEIGHT & DURABLE */}
      <Section bg="bg-[#FAFAF9]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          <ParallaxImage src={imgPricingSchool} alt="School bags" className="w-full lg:w-[440px] shrink-0 rounded-2xl h-64 sm:h-80" speed={0.15} />
          <div className="flex-1">
            <Label light>Built to Last</Label>
            <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#e40a7a] mt-3">Lightweight Designs. Durable Materials.</h2>
            <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] leading-[27px] text-[#44403C] mt-5">{"A school bag needs to survive rain, rough handling, heavy books and a full academic year. Baji Footwear's school bags are selected specifically for the demands of Sivagangai's school environment."}</p>
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Water-resistant outer fabric","Padded adjustable straps","Reinforced stitch points","Multiple organised pockets","Sturdy YKK-style zippers","Easy-clean inner lining"].map(f => (
                <div key={f} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#CA8A04] shrink-0"/>
                  <span className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] text-[#44403C]">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <ParallaxBand img={imgStoreBags} className="py-12 sm:py-14" overlayOpacity={0.75}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <ScrollReveal>
            <p className="font-['Rubik',sans-serif] font-bold text-[22px] sm:text-[28px] text-white">School Bag Price Range in Sivagangai</p>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      {/* PRICE RANGE */}
      <Section bg="bg-white">
        <Label light>Transparent Pricing</Label>
        <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#1C1917] mt-3">School Bag Price Range</h2>
        <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#44403C] mt-3 mb-8">Prices vary by size, design, brand and features. These are our current entry, mid and premium ranges.</p>
        <div className="flex flex-col gap-4">
          <PriceRow img={imgPricingSchool} label="Primary School Bags"       start="₹349" avg="₹499"  premium="₹749"  note="Lightweight, colourful designs for ages 5–10" />
          <PriceRow img={imgColSchool}     label="Middle School Bags"        start="₹499" avg="₹699"  premium="₹999"  note="Spacious with multiple compartments, ages 10–14" />
          <PriceRow img={imgStoreBags}     label="High School / Laptop Bags" start="₹599" avg="₹899"  premium="₹1299" note="Large capacity with dedicated laptop pocket" />
        </div>
        <p className="mt-5 font-['Nunito_Sans',sans-serif] text-[12px] sm:text-[13px] text-[#a8a29e] italic">Prices valid at time of printing. WhatsApp us to confirm current availability and pricing.</p>
      </Section>

      {/* WHY PARENTS CHOOSE BAJI */}
      <Section bg="bg-[#FAFAF9]">
        <div className="text-center mb-10">
          <Label center light>Why Parents Choose Baji</Label>
          <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#1C1917] mt-3">Trusted by Sivagangai Families</h2>
        </div>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L10.93 7.06L16.28 7.32L12.15 10.8L13.53 16L9 13L4.47 16L5.85 10.8L1.72 7.32L7.07 7.06L9 2Z" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round"/></svg>} title="All School Age Groups" desc="Primary, middle, high school and college bags — all in one store." />
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9H16M9 2V16" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round"/></svg>} title="Fair, Honest Prices" desc="Starting from ₹349 with no hidden costs. Ask our staff before you buy." />
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 9L7.5 11.5L13 6" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="9" r="7.25" stroke="#CA8A04" strokeWidth="1.5"/></svg>} title="Staff Guidance" desc="Our team helps you pick the right size and weight for your child's school." />
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.25" stroke="#CA8A04" strokeWidth="1.5"/><path d="M9 5.5V9L11.5 11" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round"/></svg>} title="Open 7 Days" desc="Shop at your convenience. Open every day including Sunday." />
        </StaggerGrid>
      </Section>

      {/* FAQ */}
      <Section bg="bg-[#FAFAF9]">
        <div className="text-center mb-10">
          <Label center light>Common Questions</Label>
          <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[32px] lg:text-[38px] leading-tight text-[#1C1917] mt-3">School Bag FAQs</h2>
        </div>
        <div className="max-w-[700px] mx-auto flex flex-col gap-2">
          <FaqItem question="What school bag sizes do you carry?" answer="We carry bags in all sizes — small primary bags (for age 5–8), medium bags (age 8–14) and large high school and laptop bags. Our staff will recommend the right size based on your child's grade." />
          <FaqItem question="Do you have school bags with laptop compartments?" answer="Yes. We carry bags with dedicated 13-inch and 15-inch laptop compartments, popular with high school and college students. Starting from ₹599." />
          <FaqItem question="Can I WhatsApp to check stock before visiting?" answer="Absolutely. Send us a message with your child's age, school type and your budget. We'll confirm what's available before you make the trip." />
          <FaqItem question="Are the bags water-resistant?" answer="Most of our school bags feature water-resistant outer fabric to protect books and electronics during unexpected rain." />
          <FaqItem question="Do you offer bulk orders for schools?" answer="Yes. Contact us on WhatsApp to discuss bulk pricing for schools, institutions and group orders." />
        </div>
      </Section>

      <WACTABanner heading="Looking for the Right School Bag?" body="WhatsApp us with your child's age and school type — we'll help you find the perfect bag." />
    </div>
  );
}
