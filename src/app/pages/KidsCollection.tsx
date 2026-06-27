import { imgColKids, imgColSchool, imgColLunch, imgPricingKids, imgPricingSchool, imgPricingLunch, imgPop1, imgPop2 } from "../images";
import { Label, Section, PageHero, WACTABanner, FaqItem, FeatureCard, PriceRow, InternalLinks, ParallaxImage, ParallaxBand, ScrollReveal, StaggerGrid } from "../ui";

export default function KidsCollection() {
  return (
    <div>
      <PageHero
        label="Kids Collection"
        heading="Kids Collection"
        subheading="Everything your child needs — school shoes, school bags, lunch bags and everyday footwear. All in one store in Sivagangai."
        bg="bg-[#FAFAF9]"
        img={imgColKids}
        cta={{ label: "WhatsApp Us" }}
        ctaSecondary={{ label: "Visit With Your Kids", href: "/visit-us" }}
      />

      <InternalLinks links={[
        { label: "School Bags Sivagangai", href: "/school-bags-sivagangai" },
        { label: "All Collections",        href: "/collections" },
        { label: "Price Guide",            href: "/price-guide" },
        { label: "Visit Us",               href: "/visit-us" },
      ]} />

      {/* KIDS FOOTWEAR */}
      <Section bg="bg-white">
        <Label light>Kids Footwear</Label>
        <h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#1C1917] mt-3">Shoes That Keep Up With Kids</h2>
        <div className="mt-8 flex flex-col lg:flex-row gap-10 items-start">
          <ParallaxImage src={imgColKids} alt="Kids footwear" className="w-full lg:w-[440px] shrink-0 rounded-2xl h-64 sm:h-72" speed={0.14} />
          <div className="flex-1">
            <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] leading-[27px] text-[#44403C]">{"Children's feet grow fast and need proper support. Our kids' footwear collection is selected for durability, correct fit and the styles kids actually want to wear."}</p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {[
                ["School shoes", "For government and private schools"],
                ["Canvas sneakers", "Casual and sporty everyday wear"],
                ["Sandals & slippers", "Open and closed-toe designs"],
                ["Sports shoes", "For PE and sports activities"],
                ["Party shoes", "For occasions and festivals"],
                ["Ethnic footwear", "For temple visits and celebrations"],
              ].map(([title, desc]) => (
                <div key={title} className="bg-[#FAFAF9] rounded-xl p-4">
                  <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[13px] sm:text-[14px] text-[#1C1917]">{title}</p>
                  <p className="font-['Nunito_Sans',sans-serif] text-[11px] sm:text-[12px] text-[#44403C] mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SCHOOL ESSENTIALS */}
      <Section bg="bg-[#FAFAF9]">
        <Label light>School Essentials</Label>
        <h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#e40a7a] mt-3">Ready for School Day One</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "School Bags", img: imgColSchool, price: "₹349", desc: "Spacious, lightweight bags with padded straps. Sized for every school grade from primary to high school.", speed: 0.14 },
            { title: "School Shoes", img: imgPricingKids, price: "₹199", desc: "Black formal shoes and canvas options. Durable enough for daily wear throughout the academic year.", speed: 0.17 },
            { title: "Lunch Bags", img: imgColLunch, price: "₹149", desc: "Insulated lunch bags sized for kids. Easy to clean, with separate compartment for water bottles.", speed: 0.12 },
          ].map(({ title, img, price, desc, speed }) => (
            <div key={title} className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl shadow-lg shadow-black/5 overflow-hidden shadow-lg shadow-black/5">
              <div className="relative">
                <ParallaxImage src={img} alt={title} className="relative h-48" speed={speed} />
                <span className="absolute top-3 right-3 bg-[#CA8A04] text-white font-['Nunito_Sans',sans-serif] font-bold text-[12px] px-2.5 py-1 rounded-full">From {price}</span>
              </div>
              <div className="p-5">
                <p className="font-['Rubik',sans-serif] font-bold text-[17px] sm:text-[19px] text-[#1C1917]">{title}</p>
                <p className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#44403C] mt-2">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ParallaxBand img={imgColKids} className="py-12 sm:py-14" overlayOpacity={0.72}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <ScrollReveal>
            <p className="font-['Rubik',sans-serif] font-bold text-[22px] sm:text-[28px] text-white">Designed for How Kids Move</p>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      {/* EVERYDAY COMFORTABLE WEAR */}
      <Section bg="bg-white">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          <div className="flex-1">
            <Label light>Comfortable Everyday Wear</Label>
            <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#1C1917] mt-3">Designed for How Kids Actually Move</h2>
            <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[16px] leading-[27px] text-[#44403C] mt-5">Children spend hours on their feet — at school, at play and at home. Our everyday collection focuses on cushioning, flexibility and durability so feet stay comfortable all day.</p>
            <div className="mt-7 flex flex-col gap-3">
              {[
                { t: "Correct arch support", d: "Growing feet need proper structural support to develop correctly." },
                { t: "Velcro & easy-fasten", d: "Easy fastening systems for younger children who are still learning to tie laces." },
                { t: "Breathable materials", d: "Mesh and canvas uppers keep feet cool in Tamil Nadu's warm climate." },
                { t: "Non-slip soles", d: "Important for active children on polished school floors and outdoor surfaces." },
              ].map(({ t, d }) => (
                <div key={t} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-[#CA8A04] shrink-0 mt-2"/>
                  <div>
                    <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[13px] sm:text-[14px] text-[#1C1917]">{t}: </span>
                    <span className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] text-[#44403C]">{d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[400px] shrink-0 grid grid-cols-2 gap-4">
            <ParallaxImage src={imgPop1} alt="Kids shoes" className="rounded-2xl h-44 sm:h-52" speed={0.13} />
            <ParallaxImage src={imgPop2} alt="Kids bags" className="rounded-2xl h-44 sm:h-52" speed={0.17} />
            <ParallaxImage src={imgPricingSchool} alt="School collection" className="col-span-2 rounded-2xl h-36 sm:h-44" speed={0.11} />
          </div>
        </div>
      </Section>

      {/* PRICE RANGES */}
      <Section bg="bg-[#FAFAF9]">
        <Label light>Starting Prices</Label>
        <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#1C1917] mt-3">Kids Collection Pricing</h2>
        <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#44403C] mt-3 mb-8">Honest, affordable pricing for every family budget.</p>
        <div className="flex flex-col gap-4">
          <PriceRow img={imgPricingKids}   label="Kids Footwear (all types)" start="₹199" avg="₹349"  premium="₹599"  note="School shoes, sneakers, sandals and sports" />
          <PriceRow img={imgPricingSchool} label="School Bags (all grades)"  start="₹349" avg="₹599"  premium="₹999"  note="Primary through high school sizes" />
          <PriceRow img={imgPricingLunch}  label="Kids Lunch Bags"           start="₹149" avg="₹249"  premium="₹399"  note="Insulated bags with water bottle pockets" />
        </div>
      </Section>

      {/* WHY FAMILIES LOVE THIS COLLECTION */}
      <Section bg="bg-[#FAFAF9]">
        <div className="text-center mb-10">
          <Label center light>Why Families Love This Collection</Label>
          <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[32px] lg:text-[38px] leading-tight text-[#1C1917] mt-3">Built for Sivagangai Families</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 9L7.5 11.5L13 6" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="9" r="7.25" stroke="#CA8A04" strokeWidth="1.5"/></svg>} title="All School Grades" desc="From nursery through college — the right size and style for every stage." />
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9H16M9 2V16" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round"/></svg>} title="Affordable Prices" desc="Kids collection starting from ₹149. Fair prices without compromising quality." />
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L10.93 7.06L16.28 7.32L12.15 10.8L13.53 16L9 13L4.47 16L5.85 10.8L1.72 7.32L7.07 7.06L9 2Z" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round"/></svg>} title="Durable Materials" desc="Products tested to survive the full school year and active play." />
          <FeatureCard icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.25" stroke="#CA8A04" strokeWidth="1.5"/><path d="M9 5.5V9L11.5 11" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round"/></svg>} title="Open Every Day" desc="Bring the kids in any day of the week. Let them choose what they love." />
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="bg-white">
        <div className="text-center mb-10">
          <Label center light>Common Questions</Label>
          <h2 className="font-['Rubik',sans-serif] font-bold text-[24px] sm:text-[32px] lg:text-[38px] leading-tight text-[#1C1917] mt-3">Kids Collection FAQs</h2>
        </div>
        <div className="max-w-[700px] mx-auto flex flex-col gap-2">
          <FaqItem question="What shoe sizes do you carry for children?" answer="We carry children's UK sizes 1 through 5 and adult sizes from UK 6 onwards. Our staff will help measure your child's foot to find the perfect fit." />
          <FaqItem question="Do you have school uniform shoes?" answer="Yes. We carry black formal shoes and white canvas shoes that meet most school uniform requirements in Sivagangai. WhatsApp us to confirm stock." />
          <FaqItem question="Can I bring my child to try on shoes?" answer="Absolutely. We encourage families to bring children in so our staff can check the fit properly. The store is family-friendly and open every day." />
          <FaqItem question="Do you sell complete school starter sets?" answer="You can buy school shoes, school bag and lunch bag all in one visit. Our staff can help you put together the right combination for your child's school." />
        </div>
      </Section>

      <WACTABanner heading="Visit With Your Kids" body="Our store is child-friendly. Let them pick what they love — our staff will make sure it fits." />
    </div>
  );
}
