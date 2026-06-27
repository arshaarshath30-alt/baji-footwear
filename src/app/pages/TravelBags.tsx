import { imgColTravel, imgPricingTravel, imgPop4, imgGallery1, imgGallery4 } from "../images";
import { Label, Section, PageHero, WACTABanner, FaqItem, FeatureCard, PriceRow, InternalLinks, ParallaxImage, ParallaxBand, ScrollReveal, StaggerGrid } from "../ui";

const TYPES = [
  { title: "Trolley / Wheel Bags", desc: "Hard and soft-shell wheeled bags for train travel, pilgrimages and flights. Available in cabin (20 inch) and check-in (24–28 inch) sizes.", price: "₹1299" },
  { title: "Duffel Bags", desc: "Spacious duffel bags for weekend trips and pilgrimages. Comfortable carry handles with padded shoulder straps. Popular for Vaishno Devi and Rameswaram trips.", price: "₹799" },
  { title: "Weekend Travel Bags", desc: "Compact overnight bags for short trips and family outings. Fits essentials for 1–2 nights with a front organiser pocket.", price: "₹599" },
  { title: "Family Travel Solutions", desc: "Multiple bag sets and matching family luggage to keep your group organised. Available in different sizes for adults and children.", price: "₹1999" },
];

export default function TravelBags() {
  return (
    <div>
      <PageHero
        label="Travel Bags in Sivagangai"
        heading="Travel Bags in Sivagangai"
        subheading="Sivagangai's go-to store for travel luggage. Trolley bags, duffel bags and family travel solutions — starting from ₹799."
        bg="bg-[#FAFAF9]"
        img={imgColTravel}
        cta={{ label: "Ask on WhatsApp" }}
        ctaSecondary={{ label: "See Price Guide", href: "/price-guide" }}
      />

      <InternalLinks links={[
        { label: "School Bags Sivagangai",   href: "/school-bags-sivagangai" },
        { label: "All Collections",          href: "/collections" },
        { label: "Kids Collection",          href: "/kids-collection" },
        { label: "Visit Us",                 href: "/visit-us" },
      ]} />

      {/* TRAVEL COLLECTIONS */}
      <Section bg="bg-white">
        <Label light>Travel Collections</Label>
        <h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#1C1917] mt-3">Every Type of Travel, Covered</h2>
        <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] leading-[27px] text-[#44403C] mt-5 max-w-2xl">Whether you're travelling for a weekend pilgrimage to Rameswaram, a family train journey or a flight, Baji Footwear has the right travel bag for you.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {TYPES.map(({ title, desc, price }) => (
            <div key={title} className="bg-[#FAFAF9] rounded-2xl p-6 flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <p className="font-['Rubik',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#1C1917]">{title}</p>
                <span className="bg-[#CA8A04] text-white font-['Nunito_Sans',sans-serif] font-bold text-[12px] px-3 py-1 rounded-full shrink-0">From {price}</span>
              </div>
              <p className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#44403C] mt-3 flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* POPULAR */}
      <Section bg="bg-[#FAFAF9]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          <div className="flex-1">
            <Label light>Most Popular</Label>
            <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#e40a7a] mt-3">Trusted Before Every Journey</h2>
            <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] leading-[27px] text-[#44403C] mt-5">{"Sivagangai families choose Baji Footwear's travel bags for pilgrimages, family train journeys and holidays. Our travel collection sees its highest demand before festival seasons and pilgrimage months."}</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Rameswaram pilgrimage trips","Family train holidays","Vaishno Devi journeys","Weekend city breaks","College study trips","Office work travel"].map(u => (
                <div key={u} className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3">
                  <div className="w-2 h-2 rounded-full bg-[#CA8A04] shrink-0"/>
                  <span className="font-['Nunito_Sans',sans-serif] text-[13px] text-[#44403C]">{u}</span>
                </div>
              ))}
            </div>
          </div>
          <ParallaxImage src={imgPop4} alt="Travel bags" className="w-full lg:w-[420px] shrink-0 rounded-2xl h-64 sm:h-80" speed={0.16} />
        </div>
      </Section>

      {/* PRICE RANGE */}
      <Section bg="bg-white">
        <Label light>Transparent Pricing</Label>
        <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#1C1917] mt-3">Travel Bag Price Range</h2>
        <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#44403C] mt-3 mb-8">Prices vary by size, brand and material. Visit us or WhatsApp to check current stock.</p>
        <div className="flex flex-col gap-4">
          <PriceRow img={imgPricingTravel} label="Duffel / Pilgrimage Bags" start="₹799"  avg="₹1199" premium="₹1799" note="Spacious, durable, popular for pilgrimages" />
          <PriceRow img={imgColTravel}     label="Trolley / Wheel Bags"    start="₹1299" avg="₹1899" premium="₹3499" note="Cabin and check-in sizes available" />
          <PriceRow img={imgGallery4}      label="Weekend / Overnight Bags" start="₹599" avg="₹899"  premium="₹1299" note="Compact bags for 1–2 night trips" />
        </div>
      </Section>

      <ParallaxBand img={imgColTravel} className="py-12 sm:py-14" overlayOpacity={0.72}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <ScrollReveal>
            <p className="font-['Rubik',sans-serif] font-bold text-[22px] sm:text-[28px] text-white">Travel Tips from Baji Footwear</p>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      {/* TRAVEL TIPS */}
      <Section bg="bg-[#FAFAF9]">
        <div className="text-center mb-10">
          <Label center light>Travel Tips</Label>
          <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[32px] lg:text-[38px] leading-tight text-[#1C1917] mt-3">Choosing the Right Travel Bag</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { t: "Pilgrimage Trips", tip: "Choose a spacious duffel bag with wide opening and padded handles. Water-resistant fabric is essential for outdoor shrines." },
            { t: "Train Journeys", tip: "A medium trolley bag (20–24 inch) slides easily under berths. Hard shell protects fragile items." },
            { t: "Air Travel", tip: "Check cabin baggage limits (usually 7–10kg). A 20-inch spinner trolley fits most airline overhead bins." },
            { t: "Family Travel", tip: "Match bag sizes — adults carry larger trolleys while kids carry smaller backpacks. Uniform colour coding helps identification." },
            { t: "Weekend Breaks", tip: "An overnight duffel or weekend bag is faster to pack and unpack than full luggage. Look for multiple pockets." },
            { t: "Office Travel", tip: "A laptop-compatible duffel with a trolley sleeve fits cabin storage and keeps work documents protected." },
          ].map(({ t, tip }) => (
            <div key={t} className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl shadow-lg shadow-black/5 p-5 shadow-lg shadow-black/5">
              <p className="font-['Rubik',sans-serif] font-bold text-[15px] sm:text-[16px] text-[#CA8A04]">{t}</p>
              <p className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#44403C] mt-2">{tip}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="bg-[#FAFAF9]">
        <div className="text-center mb-10">
          <Label center light>Common Questions</Label>
          <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[32px] lg:text-[38px] leading-tight text-[#1C1917] mt-3">Travel Bag FAQs</h2>
        </div>
        <div className="max-w-[700px] mx-auto flex flex-col gap-2">
          <FaqItem question="Do you carry cabin baggage size trolleys?" answer="Yes. We carry 20-inch spinner trolleys suitable for most airline cabin baggage requirements. WhatsApp us to confirm current stock and pricing." />
          <FaqItem question="What is the best bag for a pilgrimage trip?" answer="We recommend a spacious duffel bag with wide handles and water-resistant fabric. Our staff will guide you based on the number of days and the type of pilgrimage." />
          <FaqItem question="Are your travel bags durable for long train journeys?" answer="Yes. All our travel bags are selected for durability. We test zippers, handles and stitching before stocking them." />
          <FaqItem question="Do you have bags suitable for children to carry?" answer="Yes. We carry smaller travel bags and backpacks sized for children. Great for school trips and family holidays." />
          <FaqItem question="Can I see the bags before buying?" answer="Our store in Sivagangai is open 7 days a week for you to browse, touch and compare. WhatsApp us to confirm which types are in stock." />
        </div>
      </Section>

      <WACTABanner heading="Planning a Trip Soon?" body="WhatsApp us with your travel dates and group size — we'll help you find the perfect bags." />
    </div>
  );
}
