import { imgColMens, imgColWomens, imgColKids, imgPricingMens, imgPricingWomens, imgPricingKids, imgPricingSports, imgPop1, imgPop2, imgPop3, imgStoreMain, imgStoreShoeWall } from "../images";
import { Label, Section, PageHero, WACTABanner, FaqItem, FeatureCard, PriceRow, InternalLinks, ParallaxImage, ParallaxBand, ScrollReveal, StaggerGrid } from "../ui";

const COLLECTIONS = [
  { title: "Men's Footwear", img: imgColMens, price: "₹299", items: ["Oxford formal shoes","Leather sandals","Canvas sneakers","Sports & athletic shoes","Casual loafers"] },
  { title: "Women's Footwear", img: imgColWomens, price: "₹249", items: ["Block heel sandals","Kolhapuri flats","Ethnic wedges","Sports shoes","Casual slippers"] },
  { title: "Kids Footwear", img: imgColKids, price: "₹199", items: ["School shoes","Canvas sneakers","Velcro sandals","Party shoes","Sports shoes"] },
];

export default function FootwearShop() {
  return (
    <div>
      <PageHero
        label="Footwear Shop in Sivagangai"
        heading="Footwear Shop in Sivagangai"
        subheading="Sivagangai's most trusted shoe shop. Men's, women's and kids footwear — over 500 styles in stock across formal, casual, sports and ethnic categories."
        bg="bg-[#FAFAF9]"
        img={imgStoreShoeWall}
        cta={{ label: "WhatsApp Us" }}
        ctaSecondary={{ label: "See Collections", href: "/collections" }}
      />

      <InternalLinks links={[
        { label: "School Bags Sivagangai",  href: "/school-bags-sivagangai" },
        { label: "Travel Bags Sivagangai",  href: "/travel-bags-sivagangai" },
        { label: "Kids Collection",         href: "/kids-collection" },
        { label: "Price Guide",             href: "/price-guide" },
      ]} />

      {/* FOOTWEAR COLLECTIONS */}
      <Section bg="bg-white">
        <Label light>Footwear Collections</Label>
        <h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#1C1917] mt-3">Something for Everyone</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {COLLECTIONS.map(({ title, img, price, items }) => (
            <div key={title} className="bg-[#FAFAF9] rounded-2xl overflow-hidden">
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <img alt={title} className="w-full h-full object-cover" src={img} />
                <span className="absolute top-3 right-3 bg-[#CA8A04] text-white font-['Nunito_Sans',sans-serif] font-bold text-[12px] px-2.5 py-1 rounded-full">From {price}</span>
              </div>
              <div className="p-5">
                <p className="font-['Rubik',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#1C1917]">{title}</p>
                <div className="mt-3 flex flex-col gap-1.5">
                  {items.map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#CA8A04] shrink-0"/>
                      <span className="font-['Nunito_Sans',sans-serif] text-[12px] sm:text-[13px] text-[#44403C]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* DAILY WEAR & COMFORT */}
      <Section bg="bg-[#FAFAF9]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          <div className="flex-1">
            <Label light>Daily Wear Collection</Label>
            <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#e40a7a] mt-3">Comfortable for Every Day in Sivagangai</h2>
            <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] leading-[27px] text-[#44403C] mt-5">{"Our daily wear collection is designed for Sivagangai's lifestyle — comfortable enough for long walking days, durable enough for our climate, and available in styles for every occasion from work to temple visits."}</p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {["Office & formal wear","Temple & festival visits","College & school wear","Market & errands","Evening walks","Weddings & occasions"].map(u => (
                <div key={u} className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#CA8A04] shrink-0"/>
                  <span className="font-['Nunito_Sans',sans-serif] text-[12px] sm:text-[13px] text-[#44403C]">{u}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[420px] shrink-0 flex flex-col gap-4">
            <ParallaxImage src={imgStoreMain} alt="Men's footwear" className="rounded-2xl h-52 sm:h-60" speed={0.14} />
            <div className="grid grid-cols-2 gap-4">
              <ParallaxImage src={imgColWomens} alt="Women's footwear" className="rounded-2xl h-36" speed={0.17} />
              <ParallaxImage src={imgPricingSports} alt="Sports shoes" className="rounded-2xl h-36" speed={0.12} />
            </div>
          </div>
        </div>
      </Section>

      <ParallaxBand img={imgColMens} className="py-12 sm:py-14" overlayOpacity={0.70}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <ScrollReveal>
            <p className="font-['Rubik',sans-serif] font-bold text-[22px] sm:text-[28px] text-white">New Arrivals Every Month</p>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      {/* NEW ARRIVALS */}
      <Section bg="bg-white">
        <Label light>New Arrivals</Label>
        <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#1C1917] mt-3">Fresh Stock Every Month</h2>
        <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] leading-[27px] text-[#44403C] mt-5 max-w-2xl">{"We bring in new footwear every month to keep up with seasonal demand and changing styles. Festival season collections, school reopening stock and new sports shoe arrivals are updated regularly."}</p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ParallaxImage src={imgPricingMens} alt="New arrival footwear" className="rounded-2xl h-40 sm:h-48" speed={0.12} />
          <ParallaxImage src={imgPricingWomens} alt="New arrival footwear" className="rounded-2xl h-40 sm:h-48" speed={0.16} />
          <ParallaxImage src={imgPricingKids} alt="New arrival footwear" className="rounded-2xl h-40 sm:h-48" speed={0.13} />
          <ParallaxImage src={imgPricingSports} alt="New arrival footwear" className="rounded-2xl h-40 sm:h-48" speed={0.18} />
        </div>
      </Section>

      {/* PRICE GUIDE */}
      <Section bg="bg-[#FAFAF9]">
        <Label light>Starting Price Guide</Label>
        <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#1C1917] mt-3">Footwear Price Range</h2>
        <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#44403C] mt-3 mb-8">Prices depend on design, material and brand. These are our current guide ranges.</p>
        <div className="flex flex-col gap-4">
          <PriceRow img={imgPricingMens}   label="Men's Footwear"   start="₹299" avg="₹599"  premium="₹1299" note="Formal, casual, sports and sandals" />
          <PriceRow img={imgPricingWomens} label="Women's Footwear" start="₹249" avg="₹499"  premium="₹999"  note="Flats, heels, ethnic and sports" />
          <PriceRow img={imgPricingKids}   label="Kids Footwear"    start="₹199" avg="₹399"  premium="₹699"  note="School shoes, sneakers and sandals" />
          <PriceRow img={imgPricingSports} label="Sports Shoes"     start="₹499" avg="₹799"  premium="₹1499" note="Running, court sports and athletics" />
        </div>
      </Section>

      {/* CUSTOMER FAVOURITES */}
      <Section bg="bg-white">
        <div className="text-center mb-10">
          <Label center light>Customer Favourites</Label>
          <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[32px] lg:text-[38px] leading-tight text-[#1C1917] mt-3">Most Popular Footwear</h2>
        </div>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { img: imgPop3, label: "Men's Formal Shoes", note: "Office & wedding season favourite" },
            { img: imgPop2, label: "Kids School Shoes", note: "Most bought at school reopening" },
            { img: imgColWomens, label: "Women's Sandals", note: "Everyday comfort and style" },
          ].map(({ img, label, note }) => (
            <div key={label} className="relative rounded-2xl overflow-hidden h-52 sm:h-64">
              <img alt={label} className="w-full h-full object-cover" src={img}/>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,46,0.8)] to-transparent"/>
              <div className="absolute bottom-4 left-4">
                <p className="font-['Rubik',sans-serif] font-bold text-[15px] sm:text-[16px] text-white">{label}</p>
                <p className="font-['Nunito_Sans',sans-serif] text-[11px] sm:text-[12px] text-[#c0c0d0] mt-0.5">{note}</p>
              </div>
            </div>
          ))}
        </StaggerGrid>
      </Section>

      {/* FAQ */}
      <Section bg="bg-[#FAFAF9]">
        <div className="text-center mb-10">
          <Label center light>Common Questions</Label>
          <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[32px] lg:text-[38px] leading-tight text-[#1C1917] mt-3">Footwear FAQs</h2>
        </div>
        <div className="max-w-[700px] mx-auto flex flex-col gap-2">
          <FaqItem question="What size ranges do you carry for footwear?" answer="We carry sizes from children's UK 1 through adult UK 12. Our staff can help you find the right size if you're unsure — just bring the old shoe or let them measure in-store." />
          <FaqItem question="Do you carry footwear for wide feet?" answer="Yes. Several of our collections include wide-fit options. Let our staff know your requirement and they will show you suitable styles." />
          <FaqItem question="Can I check footwear availability before visiting?" answer="Yes. WhatsApp us with the type of footwear, size and gender and we'll confirm what's available before you make the trip." />
          <FaqItem question="Do you carry formal shoes for weddings?" answer="Yes. We carry a range of formal men's shoes and women's heels and wedges suitable for weddings and occasions. Starting from ₹499." />
          <FaqItem question="Are your sports shoes genuine branded footwear?" answer="Our sports shoes are quality products selected for durability and performance at fair prices. WhatsApp us for specific brand availability." />
        </div>
      </Section>

      <WACTABanner heading="Visit Sivagangai's Footwear Store" body="Open 7 days a week. Browse 500+ footwear styles at honest prices." />
    </div>
  );
}
