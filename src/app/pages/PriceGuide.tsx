import { Link } from "react-router";
import { imgPricingMens, imgPricingWomens, imgPricingKids, imgPricingSports, imgPricingSchool, imgPricingLunch, imgPricingTravel, imgPricingHand, imgGallery1, imgStoreBags } from "../images";
import { Label, Section, PageHero, WACTABanner, FaqItem, InternalLinks, ParallaxBand, ScrollReveal } from "../ui";

const FOOTWEAR = [
  { img: imgPricingMens,   label: "Men's Footwear",   start: "₹299",  avg: "₹599",  premium: "₹1299", note: "Formal, casual, sandals, sports" },
  { img: imgPricingWomens, label: "Women's Footwear", start: "₹249",  avg: "₹499",  premium: "₹999",  note: "Flats, heels, ethnic, sports" },
  { img: imgPricingKids,   label: "Kids Footwear",    start: "₹199",  avg: "₹349",  premium: "₹699",  note: "School shoes, sneakers, sandals" },
  { img: imgPricingSports, label: "Sports Shoes",     start: "₹499",  avg: "₹799",  premium: "₹1499", note: "Running, court, athletic" },
];

const BAGS = [
  { img: imgPricingSchool, label: "School Bags",   start: "₹349",  avg: "₹599",  premium: "₹1299", note: "All grades, primary to high school" },
  { img: imgPricingLunch,  label: "Lunch Bags",    start: "₹149",  avg: "₹249",  premium: "₹399",  note: "Kids and adult insulated bags" },
  { img: imgPricingTravel, label: "Travel Bags",   start: "₹799",  avg: "₹1599", premium: "₹3499", note: "Duffel, trolley, cabin baggage" },
  { img: imgPricingHand,   label: "Hand Bags",     start: "₹399",  avg: "₹699",  premium: "₹1299", note: "Daily carry, office, occasions" },
];

function PriceTable({ items }: { items: typeof FOOTWEAR }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map(({ img, label, start, avg, premium, note }) => (
        <div key={label} className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-0">
            <div className="w-full sm:w-24 h-32 sm:h-24 shrink-0 overflow-hidden">
              <img alt={label} className="w-full h-full object-cover" src={img} />
            </div>
            <div className="flex-1 min-w-0 px-5 py-4 sm:py-0">
              <p className="font-['Playfair_Display',serif] font-bold text-[16px] sm:text-[18px] text-[#1a1a2e]">{label}</p>
              <p className="font-['Inter',sans-serif] text-[11px] sm:text-[12px] text-[#8a8a9a] mt-0.5">{note}</p>
            </div>
            <div className="grid grid-cols-3 divide-x divide-[#f2ede4] shrink-0 sm:w-72 border-t sm:border-t-0 sm:border-l border-[#f2ede4]">
              {[["Starting", start, "text-[#2d2f8e]"], ["Average", avg, "text-[#1a1a2e]"], ["Premium", premium, "text-[#d10b78]"]].map(([lbl, val, color]) => (
                <div key={lbl as string} className="text-center py-3 sm:py-5 px-2 sm:px-4">
                  <p className={`font-['Playfair_Display',serif] font-black text-[16px] sm:text-[20px] ${color}`}>{val}</p>
                  <p className="font-['Inter',sans-serif] text-[9px] sm:text-[10px] text-[#8a8a9a] uppercase tracking-wide mt-0.5">{lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PriceGuide() {
  return (
    <div>
      <PageHero
        label="Price Guide"
        heading="Price Guide"
        subheading="Helping you understand our collection ranges before you visit. Transparent pricing — no hidden costs, no overpricing."
        bg="bg-[#faf7f2]"
        cta={{ label: "Ask on WhatsApp" }}
        ctaSecondary={{ label: "See Collections", href: "/collections" }}
      />

      <InternalLinks links={[
        { label: "School Bags Sivagangai", href: "/school-bags-sivagangai" },
        { label: "Travel Bags Sivagangai", href: "/travel-bags-sivagangai" },
        { label: "Footwear Shop",          href: "/footwear-shop-sivagangai" },
        { label: "Kids Collection",        href: "/kids-collection" },
      ]} />

      {/* NOTICE */}
      <div className="bg-[#1a1a2e] py-5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10">
          <p className="font-['Inter',sans-serif] text-[13px] sm:text-[14px] text-[#c0c0d0] text-center">Prices vary depending on design, size and brand. Visit the store or WhatsApp us to confirm current pricing for specific products.</p>
        </div>
      </div>

      {/* FOOTWEAR PRICE GUIDE */}
      <Section bg="bg-white">
        <Label light>Footwear Price Guide</Label>
        <h2 className="font-['Playfair_Display',serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#1a1a2e] mt-3">Footwear — Entry to Premium</h2>
        <p className="font-['Inter',sans-serif] text-[13px] sm:text-[14px] text-[#4a4a5c] mt-3 mb-8">All footwear is available in-store. The ranges below reflect our current inventory across entry-level, mid-range and premium options.</p>
        <PriceTable items={FOOTWEAR} />
      </Section>

      {/* PARALLAX DIVIDER — Bag Price Guide */}
      <ParallaxBand img={imgGallery1} className="py-16 sm:py-20" overlayOpacity={0.78}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <ScrollReveal>
            <p className="font-['Inter',sans-serif] font-semibold text-[11px] sm:text-[12px] tracking-[2.4px] uppercase text-[#d10b78]">Bag Price Guide</p>
            <h2 className="font-['Playfair_Display',serif] font-bold text-[28px] sm:text-[36px] lg:text-[44px] leading-tight text-white mt-3">Bags — Entry to Premium</h2>
            <p className="font-['Inter',sans-serif] text-[14px] text-[#c0c0d0] mt-3 max-w-md mx-auto">School bags, travel bags, lunch bags and hand bags. Prices depend on size, material and brand.</p>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      {/* BAG PRICE GUIDE */}
      <Section bg="bg-[#f2ede4]">
        <Label light>Bag Price Guide</Label>
        <h2 className="font-['Playfair_Display',serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#1a1a2e] mt-3">Bags — Entry to Premium</h2>
        <p className="font-['Inter',sans-serif] text-[13px] sm:text-[14px] text-[#4a4a5c] mt-3 mb-8">School bags, travel bags, lunch bags and hand bags. Prices depend on size, material and brand.</p>
        <PriceTable items={BAGS} />
      </Section>

      {/* PARALLAX DIVIDER — Value For Every Budget */}
      <ParallaxBand img={imgStoreBags} className="py-12 sm:py-14" overlayOpacity={0.74}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <ScrollReveal>
            <p className="font-['Playfair_Display',serif] font-bold text-[22px] sm:text-[28px] text-white">Value for Every Budget</p>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      {/* VALUE FOR EVERY BUDGET */}
      <Section bg="bg-white">
        <div className="text-center mb-10">
          <Label center light>Value For Every Budget</Label>
          <h2 className="font-['Playfair_Display',serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#e40a7a] mt-3">Fair Value. No Pressure.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { tier: "Budget-Friendly", range: "₹149 – ₹499", color: "text-[#2d2f8e]", bg: "bg-[#f0f0ff]", desc: "Quality everyday products that last. Perfect for school essentials and regular daily-wear footwear. Our staff will never push you to upgrade." },
            { tier: "Mid-Range", range: "₹500 – ₹999", color: "text-[#1a1a2e]", bg: "bg-[#f2ede4]", desc: "The sweet spot for most families — noticeably better materials, more features and longer durability without breaking the budget." },
            { tier: "Premium", range: "₹1000+", color: "text-[#d10b78]", bg: "bg-[rgba(209,11,120,0.05)]", desc: "Exceptional quality for those who want the best. Branded footwear, full-feature trolley bags and premium leather collections." },
          ].map(({ tier, range, color, bg, desc }) => (
            <div key={tier} className={`${bg} rounded-2xl p-7`}>
              <p className={`font-['Playfair_Display',serif] font-black text-[28px] sm:text-[32px] ${color}`}>{range}</p>
              <p className="font-['Playfair_Display',serif] font-bold text-[16px] sm:text-[18px] text-[#1a1a2e] mt-2">{tier}</p>
              <p className="font-['Inter',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#4a4a5c] mt-3">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-[#faf7f2] rounded-2xl p-6 text-center">
          <p className="font-['Playfair_Display',serif] font-semibold text-[16px] sm:text-[18px] text-[#1a1a2e]">{"Not sure what's right for your budget?"}</p>
          <p className="font-['Inter',sans-serif] text-[13px] sm:text-[14px] text-[#4a4a5c] mt-2 max-w-md mx-auto">Tell our staff your budget before you start browsing. They will show you the best options for your money — without any upselling pressure.</p>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="bg-[#f2ede4]">
        <div className="text-center mb-10">
          <Label center light>FAQ About Pricing</Label>
          <h2 className="font-['Playfair_Display',serif] font-bold text-[24px] sm:text-[32px] lg:text-[38px] leading-tight text-[#1a1a2e] mt-3">Pricing Questions Answered</h2>
        </div>
        <div className="max-w-[700px] mx-auto flex flex-col gap-2">
          <FaqItem question="Are prices fixed or is bargaining accepted?" answer="Our prices are already set at the fairest possible value. We do not inflate prices expecting bargaining — what you see is what you pay." />
          <FaqItem question="Do prices change during festival seasons?" answer="Our regular prices remain consistent year-round. We do not inflate prices during school reopening or festival seasons unlike some other stores." />
          <FaqItem question="Are there any additional charges at the counter?" answer="No. The price tagged on the product is the final price. There are no hidden charges, packaging fees or GST additions at the counter." />
          <FaqItem question="Can I get a price quote before visiting?" answer="Yes. WhatsApp us with the category, size and approximate features you need. We'll give you an accurate price range to help you plan before visiting." />
          <FaqItem question="Do you offer discounts for bulk purchases?" answer="Yes. Schools, institutions and group purchases may be eligible for special pricing. Contact us on WhatsApp to discuss your requirements." />
        </div>
      </Section>

      {/* CTA */}
      <Section bg="bg-white">
        <div className="text-center">
          <Label center light>Visit Store CTA</Label>
          <h2 className="font-['Playfair_Display',serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#1a1a2e] mt-3">See the Products in Person</h2>
          <p className="font-['Inter',sans-serif] text-[14px] sm:text-[16px] text-[#4a4a5c] mt-4 max-w-xl mx-auto">No website can replace touching the quality, checking the fit and comparing options side by side. Visit Baji Footwear in Sivagangai — open 7 days a week.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/visit-us" className="bg-[#d10b78] text-white rounded-full px-7 py-3.5 font-['Inter',sans-serif] font-semibold text-[14px] hover:bg-[#b50967] transition-colors">Plan Your Visit</Link>
            <Link to="/collections" className="border-2 border-[#1a1a2e] text-[#1a1a2e] rounded-full px-7 py-3.5 font-['Inter',sans-serif] font-semibold text-[14px] hover:bg-[#1a1a2e] hover:text-white transition-colors">Browse Collections</Link>
          </div>
        </div>
      </Section>

      <WACTABanner heading="Get a Price Quote on WhatsApp" body="Tell us what you're looking for and we'll send you accurate pricing before your visit." />
    </div>
  );
}
