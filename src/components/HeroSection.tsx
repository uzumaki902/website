import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="pt-[80px] md:pt-[100px] lg:pt-[120px] bg-[#EFECE6]">

      {/* ── MOBILE / TABLET (< lg): single column, text first then image ── */}
      <div className="lg:hidden flex flex-col px-6 md:px-10 py-12 md:py-16">
        <p className="font-sans text-[12px] md:text-[13px] text-[#2C3A36] tracking-[0.18em] uppercase mb-6 font-medium">
          ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA
        </p>
        <h1 className="font-serif text-[36px] md:text-[46px] font-light text-[#2C3A36] leading-[1.2] mb-6">
          Rebuild your foundation on solid ground and finally begin to{" "}
          <span className="font-script text-[#62929A] italic text-[44px] md:text-[56px] inline-block ml-1">
            thrive.
          </span>
        </h1>
        <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8] mb-8 max-w-lg">
          Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
        </p>
        <a
          href="#contact"
          className="inline-block font-sans text-[12px] tracking-[0.18em] uppercase text-[#2C3A36] border-b border-[#2C3A36] pb-1 hover:text-[#62929A] hover:border-[#62929A] transition-colors mb-10 w-fit"
        >
          BOOK AN APPOINTMENT
        </a>
        {/* Hero image below CTA on mobile */}
        <div className="relative w-full h-[320px] md:h-[440px] overflow-hidden">
          <Image
            src="/images/hero-family.jpg"
            alt="Family walking on beach at sunset"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* ── DESKTOP (lg+): 3-column grid ── */}
      <div
        className="hidden lg:grid min-h-[720px] items-stretch bg-[#EFECE6]"
        style={{ gridTemplateColumns: "400px 1fr 120px" }}
      >
        {/* Left – Family Image (padded, not full height) */}
        <div className="relative w-full py-[100px] pr-[40px]">
          <div className="relative w-full h-[520px] overflow-hidden">
            <Image
              src="/images/hero-family.jpg"
              alt="Family walking on beach at sunset"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Center – Text Content */}
        <div className="flex flex-col py-[100px] pl-[60px] pr-[40px]">
          <p className="font-sans text-[13px] text-[#2C3A36] tracking-[0.18em] uppercase mb-auto font-medium mt-2">
            ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA
          </p>
          <div className="mb-auto">
            <h1 className="font-serif text-[52px] font-light text-[#2C3A36] leading-[1.2] mb-8">
              Rebuild your foundation on solid ground and finally begin to{" "}
              <span className="font-script text-[#62929A] italic text-[64px] inline-block ml-1">
                thrive.
              </span>
            </h1>
            <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8] mb-10 max-w-md">
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
            <a
              href="#contact"
              className="inline-block font-sans text-[12px] tracking-[0.18em] uppercase text-[#2C3A36] border-b border-[#2C3A36] pb-1 hover:text-[#62929A] hover:border-[#62929A] transition-colors w-fit"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>

        {/* Right – Peeking Ocean Strip */}
        <div className="relative h-[480px] w-full self-center overflow-hidden">
          <Image
            src="/images/ocean-shore.jpg"
            alt="Ocean shore preview"
            fill
            className="object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}
