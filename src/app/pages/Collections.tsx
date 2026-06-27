import { imgColMens, imgColWomens, imgColKids, imgColSchool, imgColLunch, imgColTravel } from "../images";
import { Label, Section, PageHero, WACTABanner, ArrowRight, InternalLinks, ParallaxImage, ParallaxBand, ScrollReveal } from "../ui";

const CATEGORIES = [
  {
    id: "mens", title: "Men's Footwear", subtitle: "From formal to casual — the complete collection for Sivagangai men.",
    img: imgColMens, price: "₹299", speed: 0.14,
    features: ["Formal & office shoes","Casual daily wear","Sports & athletic shoes","Sandals & slippers","Ethnic & occasion wear"],
    popular: ["Oxford formal shoes","Leather sandals","Running shoes","Loafers"],
    desc: "Our men's footwear collection covers every occasion — from office presentations to weekend outings. All products are selected for durability, comfort and value.",
  },
  {
    id: "womens", title: "Women's Footwear", subtitle: "Elegant, comfortable and designed for everyday life.",
    img: imgColWomens, price: "₹249", speed: 0.17,
    features: ["Heels & block heels","Ethnic & kolhapuri","Flats & ballet shoes","Wedge sandals","Sports & walking shoes"],
    popular: ["Block heel sandals","Kolhapuri flats","Running shoes","Ethnic wedges"],
    desc: "A carefully curated collection for every occasion — from temple visits and weddings to daily office and college wear.",
  },
  {
    id: "kids", title: "Kids Footwear", subtitle: "Durable, comfortable and built for active young feet.",
    img: imgColKids, price: "₹199", speed: 0.12,
    features: ["School shoes","Sneakers & canvas","Party & occasion","Sandals & slippers","Sports shoes"],
    popular: ["Black school shoes","Canvas sneakers","Velcro sandals","Party pumps"],
    desc: "Children's footwear that lasts the school year and beyond. Proper arch support, durable materials and styles kids actually love.",
  },
  {
    id: "school-bags", title: "School Bags", subtitle: "Strong, spacious bags built to survive every school day.",
    img: imgColSchool, price: "₹349", speed: 0.15,
    features: ["Primary school bags","Middle school bags","High school bags","Laptop bags","Trolley school bags"],
    popular: ["14-inch laptop bags","Ergonomic backpacks","Lightweight primary bags","High school trolleys"],
    desc: "School bags parents trust and kids are proud to carry. Water-resistant fabrics, padded straps and sturdy zippers — built for a full school year.",
  },
  {
    id: "lunch-bags", title: "Lunch Bags", subtitle: "Insulated and easy to clean — for kids and adults.",
    img: imgColLunch, price: "₹149", speed: 0.18,
    features: ["Insulated lunch bags","Kids lunch boxes","Office lunch bags","Tote-style carriers","Waterproof lining"],
    popular: ["Kids cartoon bags","Slim office tote","Insulated family bags","BPA-free lined bags"],
    desc: "Practical lunch bags that keep food fresh and are easy to clean. Available in kids and adult sizes with a range of designs.",
  },
  {
    id: "travel-bags", title: "Travel Bags", subtitle: "Ready for pilgrimages, family holidays and weekend trips.",
    img: imgColTravel, price: "₹799", speed: 0.13,
    features: ["Trolley/wheel bags","Duffel bags","Weekend bags","Cabin baggage","Family travel sets"],
    popular: ["20-inch cabin trolley","Large duffel bag","Expandable trolley","Pilgrimage duffel"],
    desc: "Travel bags trusted by Sivagangai families for pilgrimages, train journeys and family trips. Durable zippers and water-resistant fabrics.",
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
        heading="Explore Our Collections"
        subheading="Six curated collections covering footwear and bags for every age, every occasion and every budget in Sivagangai."
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
