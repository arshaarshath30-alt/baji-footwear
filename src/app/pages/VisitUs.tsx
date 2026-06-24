
import { imgStoreMain, imgStoreBags, imgStoreShoeWall, imgGallery1 } from "../images";
import { Label, Section, WACTABanner, FaqItem, ContactRow, InternalLinks, ParallaxImage, ParallaxBand, ScrollReveal, StaggerGrid } from "../ui";
import { PinIcon, PhoneIcon, ClockIcon, WAIcon } from "../ui";

export default function VisitUs() {

  return (
    <div>
      {/* HERO */}
      <section className="bg-[#faf7f2] w-full py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            <div className="flex-1">
              <p className="font-['Inter',sans-serif] font-semibold text-[11px] sm:text-[12px] tracking-[2.4px] uppercase text-[#d10b78]">Visit Us</p>
              <h1 className="font-['Playfair_Display',serif] font-bold text-[36px] sm:text-[48px] lg:text-[60px] leading-tight text-[#1a1a2e] mt-3">Plan Your Visit</h1>
              <p className="font-['Inter',sans-serif] text-[14px] sm:text-[17px] leading-[1.6] text-[#4a4a5c] mt-5 max-w-lg">Visit Baji Footwear in Sivagangai — open 7 days a week with 500+ products across footwear and bags. No appointment needed.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:+919876543210" className="bg-[#d10b78] text-white rounded-full px-6 py-3 inline-flex items-center gap-2 font-['Inter',sans-serif] font-semibold text-[14px] hover:bg-[#b50967] transition-colors">
                  <PhoneIcon color="white" /> Call Us Now
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[460px] shrink-0 grid grid-cols-2 gap-3">
              <ParallaxImage src={imgStoreMain} alt="Store exterior" className="col-span-2 rounded-2xl h-48 sm:h-60" speed={0.12} />
              <ParallaxImage src={imgStoreBags} alt="Store bags" className="rounded-2xl h-36 sm:h-40" speed={0.16} />
              <ParallaxImage src={imgStoreShoeWall} alt="Shoe wall" className="rounded-2xl h-36 sm:h-40" speed={0.19} />
            </div>
          </div>
        </div>
      </section>

      <InternalLinks links={[
        { label: "Collections", href: "/collections" },
        { label: "Price Guide", href: "/price-guide" },
        { label: "Gallery",     href: "/gallery" },
        { label: "About Us",    href: "/about" },
      ]} />

      {/* STORE INFORMATION */}
      <Section bg="bg-white">
        <Label light>Store Information</Label>
        <h2 className="font-['Playfair_Display',serif] font-bold text-[26px] sm:text-[36px] lg:text-[44px] leading-tight text-[#1a1a2e] mt-3">Everything You Need to Know</h2>
        <div className="mt-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="flex-1 flex flex-col gap-6">
            <ContactRow
              icon={<PinIcon />}
              label="Address"
              value={<><p>Baji Footwear</p><p>Sivagangai, Tamil Nadu — 630 561</p><p>India</p></>}
            />
            <ContactRow
              icon={<PhoneIcon />}
              label="Phone"
              value={<a href="tel:+919876543210" className="hover:text-[#d10b78] transition-colors">+91 98765 43210</a>}
            />
            <ContactRow
              icon={<WAIcon color="#D10B78" />}
              label="WhatsApp"
              value={<a href="#" className="hover:text-[#d10b78] transition-colors">+91 98765 43210 — Click to chat</a>}
            />
            <ContactRow
              icon={<ClockIcon />}
              label="Store Hours"
              value={<><p>Monday – Saturday: 9:00 AM – 9:00 PM</p><p>Sunday: 10:00 AM – 8:00 PM</p><p className="text-[#d10b78] mt-1">Open on public holidays</p></>}
            />
            <div className="bg-[#f2ede4] rounded-[14px] p-4 mt-2">
              <p className="font-['Inter',sans-serif] text-[12px] sm:text-[13px] text-[#4a4a5c]">
                <span className="font-semibold text-[#1a1a2e]">Parking: </span>
                Street parking is available on the roads near the store. WhatsApp us for detailed directions and landmark information.
              </p>
            </div>
          </div>

          {/* Fake Map Embed */}
          <div className="w-full lg:flex-1 rounded-2xl h-64 sm:h-80 lg:h-[400px] overflow-hidden shrink-0 bg-[#e8e0d4]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15729.809187310064!2d78.4727189!3d9.8543152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ed43d3b664d9%3A0xc3b438b47120df0d!2sSivaganga%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Section>

      {/* HOW TO REACH US */}
      <Section bg="bg-[#f2ede4]">
        <Label light>How To Reach Us</Label>
        <h2 className="font-['Playfair_Display',serif] font-bold text-[24px] sm:text-[34px] lg:text-[40px] leading-tight text-[#1a1a2e] mt-3">Getting to Baji Footwear</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: "🗺️", title: "Landmarks", desc: "We are located in central Sivagangai near the main commercial area. Ask locals for Baji Footwear — we're well known in the area." },
            { icon: "🚗", title: "By Car", desc: "Street parking is available near the store. Approach from the main road and look for our signboard. WhatsApp us for turn-by-turn directions." },
            { icon: "🚌", title: "By Bus / Auto", desc: "Sivagangai is well connected by bus from surrounding towns. From the main bus stand, take an auto or walk to the central commercial area." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-4">{icon}</div>
              <p className="font-['Playfair_Display',serif] font-bold text-[16px] sm:text-[18px] text-[#1a1a2e]">{title}</p>
              <p className="font-['Inter',sans-serif] text-[13px] sm:text-[14px] leading-[22px] text-[#4a4a5c] mt-2">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-[#1a1a2e] rounded-2xl p-5 sm:p-6 text-center">
          <p className="font-['Playfair_Display',serif] font-semibold text-[16px] sm:text-[18px] text-white">Need help finding us?</p>
          <p className="font-['Inter',sans-serif] text-[13px] sm:text-[14px] text-[#8a8aa8] mt-2">Give us a call and we will guide you to our store.</p>
          <a href="tel:+919876543210" className="mt-4 inline-flex items-center gap-2 bg-[#d10b78] text-white rounded-full px-6 py-2.5 font-['Inter',sans-serif] font-medium text-[13px] hover:bg-[#b50967] transition-colors">
            <PhoneIcon color="white" /> Call for Directions
          </a>
        </div>
      </Section>

      {/* PARALLAX DIVIDER — Before FAQ */}
      <ParallaxBand img={imgStoreMain} className="py-12 sm:py-14" overlayOpacity={0.76}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <ScrollReveal>
            <p className="font-['Playfair_Display',serif] font-bold text-[22px] sm:text-[28px] text-white">Before You Visit</p>
          </ScrollReveal>
        </div>
      </ParallaxBand>

      {/* FAQ */}
      <Section bg="bg-white">
        <div className="text-center mb-10">
          <Label center light>Frequently Asked Questions</Label>
          <h2 className="font-['Playfair_Display',serif] font-bold text-[24px] sm:text-[32px] lg:text-[38px] leading-tight text-[#1a1a2e] mt-3">Before You Visit</h2>
        </div>
        <div className="max-w-[700px] mx-auto flex flex-col gap-2">
          <FaqItem question="What are your store timings?" answer="Monday to Saturday: 9:00 AM – 9:00 PM. Sunday: 10:00 AM – 8:00 PM. We are open all 7 days including most public holidays." />
          <FaqItem question="Do you accept UPI payments?" answer="Yes. We accept cash, UPI (PhonePe, GPay, Paytm), and all major digital payment methods. Card payments may also be available — WhatsApp us to confirm." />
          <FaqItem question="Is parking available near the store?" answer="Street parking is available on nearby roads. During busy weekends, parking may be limited. We recommend visiting on weekdays or early in the day if parking is a concern." />
          <FaqItem question="Can I check availability before visiting?" answer="Yes. WhatsApp us with your requirement, size and approximate budget. We'll confirm what's available before you make the trip." />
          <FaqItem question="Can I bring my children to try on shoes?" answer="Absolutely. Bring the whole family. Our store is open and comfortable for families with children. Our staff will ensure a proper fit." />
          <FaqItem question="How long does a typical visit take?" answer="Most customers complete their purchase in 20–40 minutes. During busy festival seasons and school reopening periods, the store may be busier — consider visiting early." />
        </div>
      </Section>



      <WACTABanner heading="Looking for Something Specific?" body="Message us before visiting — we'll confirm availability and save you a trip." />
    </div>
  );
}
