import { imgColMens, imgColWomens, imgColKids, imgColSchool, imgColLunch, imgColTravel } from "../images";
import { Label, Section, PageHero, WACTABanner, ArrowRight, InternalLinks, ParallaxImage, ParallaxBand, ScrollReveal } from "../ui";

const CATEGORIES = [
  {
    id: "mens", title: "Men's Formal & Casual Footwear", subtitle: "From formal office shoes to casual weekend sneakers — the complete collection for Sivagangai men.",
    img: imgColMens, price: "₹299", speed: 0.14,
    features: ["Formal & office leather shoes","Casual daily wear sneakers","Sports & athletic shoes for gym","Sandals & comfortable slippers","Ethnic & wedding occasion wear"],
    popular: ["Oxford formal shoes","Leather sandals","Running shoes","Men's Loafers"],
    desc: "Our men's footwear collection covers every occasion in Tamil Nadu's climate — from important office presentations to weekend outings in Karaikudi or Madurai. We stock durable, highly comfortable formal shoes, robust sports sneakers, and traditional ethnic wear. All products are selected for longevity, arch support, and exceptional value.",
  },
  {
    id: "womens", title: "Women's Elegant Sandals & Flats", subtitle: "Elegant, comfortable, and designed for the modern woman's everyday life.",
    img: imgColWomens, price: "₹249", speed: 0.17,
    features: ["Heels & block heels for events","Ethnic & kolhapuri sandals","Flats & comfortable ballet shoes","Wedge sandals for support","Sports & walking shoes"],
    popular: ["Block heel sandals","Kolhapuri flats","Running shoes","Ethnic wedges"],
    desc: "A carefully curated women's footwear collection for every occasion. Whether you need comfortable flats for daily college wear, supportive walking shoes, or elegant heels for temple visits and weddings in Sivagangai, we have hundreds of styles. Experience footwear that perfectly balances modern aesthetics with all-day comfort.",
  },
  {
    id: "kids", title: "Kids Footwear for School & Play", subtitle: "Durable, comfortable, and built to survive active young feet.",
    img: imgColKids, price: "₹199", speed: 0.12,
    features: ["Black school shoes","Sneakers & canvas shoes","Party & occasion wear","Velcro sandals & slippers","Sports shoes for kids"],
    popular: ["Black school shoes","Canvas sneakers","Velcro sandals","Party pumps"],
    desc: "Parents across Sivagangai trust our children's footwear to last the entire school year and beyond. Our kids shoes feature proper arch support, durable scuff-resistant materials, and styles that children actually love to wear. From standard uniform shoes to colorful weekend sandals, find the perfect fit for growing feet.",
  },
  {
    id: "school-bags", title: "Heavy-Duty School Bags", subtitle: "Strong, spacious backpacks built to survive every school day.",
    img: imgColSchool, price: "₹349", speed: 0.15,
    features: ["Primary school backpacks","Middle school multi-compartment bags","High school heavy-duty bags","Laptop bags with padding","Trolley school bags"],
    popular: ["14-inch laptop bags","Ergonomic backpacks","Lightweight primary bags","High school trolleys"],
    desc: "Prepare for the academic year with our heavy-duty school bags. Built to withstand daily use by students in Sivagangai, our backpacks feature reinforced stitching, water-resistant fabrics, and ergonomic padded straps for maximum back support. Trusted by parents for their exceptional durability and affordable pricing.",
  },
  {
    id: "lunch-bags", title: "Durable Lunch Bags", subtitle: "Insulated, waterproof, and easy to clean — for kids and office goers.",
    img: imgColLunch, price: "₹149", speed: 0.18,
    features: ["Insulated thermal lunch bags","Kids cartoon lunch boxes","Professional office lunch bags","Tote-style carriers","Waterproof easy-clean lining"],
    popular: ["Kids cartoon bags","Slim office tote","Insulated family bags","BPA-free lined bags"],
    desc: "Practical lunch bags designed to keep food fresh in the hot Tamil Nadu climate. These bags are incredibly easy to clean and feature waterproof linings. Available in fun sizes for kids and sleek, professional designs for adults heading to the office.",
  },
  {
    id: "travel-bags", title: "Travel Bags & Luggage", subtitle: "Ready for pilgrimages, family holidays, and weekend trips.",
    img: imgColTravel, price: "₹799", speed: 0.13,
    features: ["Hard & soft trolley wheel bags","Spacious duffel bags","Weekend overnight bags","Cabin baggage compliant","Family travel luggage sets"],
    popular: ["20-inch cabin trolley","Large duffel bag","Expandable trolley","Pilgrimage duffel"],
    desc: "Explore the largest selection of travel luggage in Sivagangai. Trusted by families for long pilgrimages, train journeys, and weekend trips to Madurai. Our travel bags feature heavy-duty zippers, water-resistant fabrics, and robust wheels to handle any terrain.",
  },
];

function CategorySection({ cat, index }: { cat: typeof CATEGORIES[0]; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <div id={cat.id} className="scroll-mt-20 py-12 sm:py-16 border-b border-[#f0e8de] last:border-0">
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-14 items-start`}>
        {/* Image with parallax */}
        <div className="w-full lg:w-[420px] xl:w-[480px] shrink-0">
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80">
            <ParallaxImage src={cat.img} alt={cat.title} className="w-full h-full" speed={cat.speed} />
            <span className="absolute top-4 left-4 bg-[#CA8A04] text-white font-['Nunito_Sans',sans-serif] font-bold text-[13px] px-3 py-1.5 rounded-full z-10">From {cat.price}</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {cat.popular.map(p => (
              <div key={p} className="bg-[#FAFAF9] rounded-xl px-3 py-2.5 text-center">
                <span className="font-['Nunito_Sans',sans-serif] text-[12px] sm:text-[13px] text-[#44403C]">{p}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Text */}
        <ScrollReveal className="flex-1">
          <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[11px] tracking-[2.4px] uppercase text-[#CA8A04]">Collection</p>
          <h2 className="font-['Rubik',sans-serif] font-bold text-[26px] sm:text-[34px] lg:text-[40px] leading-tight text-[#1C1917] mt-2">{cat.title}</h2>
          <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#44403C] mt-2">{cat.subtitle}</p>
          <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[15px] leading-[25px] text-[#44403C] mt-4">{cat.desc}</p>
          <div className="mt-6">
            <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-wide text-[#a8a29e] mb-3">{"What's Available"}</p>
            <div className="flex flex-col gap-2">
              {cat.features.map(f => (
                <div key={f} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#CA8A04] shrink-0"/>
                  <span className="font-['Nunito_Sans',sans-serif] text-[13px] sm:text-[14px] text-[#44403C]">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <a href="#" className="mt-7 inline-flex items-center gap-2 bg-[#CA8A04] text-white rounded-full px-6 py-3 font-['Nunito_Sans',sans-serif] font-semibold text-[13px] sm:text-[14px] hover:bg-[#b50967] transition-colors">
            Ask About Availability <ArrowRight color="white" />
          </a>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default function Collections() {
  return (
    <div>
      <PageHero
        label="Our Collections"
        heading="Premium Footwear & Bag Collections in Sivagangai"
        subheading="Explore Sivagangai's most diverse range of footwear and bags. From elegant women's sandals to heavy-duty school backpacks designed to last the entire academic year, Baji Footwear guarantees quality at honest prices."
        bg="bg-[#FAFAF9]"
        cta={{ label: "Ask About Availability" }}
        ctaSecondary={{ label: "See Price Guide", href: "/price-guide" }}
      />

      {/* Category jump nav */}
      <div className="bg-[#1C1917] py-4 sticky top-16 z-30 overflow-x-auto">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 flex gap-4 sm:gap-6">
          {CATEGORIES.map(c => (
            <a key={c.id} href={`#${c.id}`} className="font-['Nunito_Sans',sans-serif] text-[12px] sm:text-[13px] font-medium text-[#c0c0d0] hover:text-white transition-colors whitespace-nowrap">{c.title}</a>
          ))}
        </div>
      </div>

      <Section bg="bg-white">
        {CATEGORIES.map((cat, i) => (
          <CategorySection key={cat.id} cat={cat} index={i} />
        ))}
      </Section>

      {/* Parallax divider before internal links */}
      <ParallaxBand img={imgColMens} className="py-14 sm:py-16" overlayOpacity={0.78}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <ScrollReveal>
            <p className="font-['Rubik',sans-serif] font-bold text-[22px] sm:text-[28px] lg:text-[34px] text-white">Explore Related Pages</p>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      <InternalLinks links={[
        { label: "School Bags in Sivagangai", href: "/school-bags-sivagangai" },
        { label: "Travel Bags in Sivagangai", href: "/travel-bags-sivagangai" },
        { label: "Kids Collection",           href: "/kids-collection" },
        { label: "Footwear Shop Sivagangai",  href: "/footwear-shop-sivagangai" },
      ]} />

      <WACTABanner heading="Can't Find What You Need?" body="WhatsApp us with your requirements and we'll check our stock before you visit." img={imgColWomens} />
    </div>
  );
}
