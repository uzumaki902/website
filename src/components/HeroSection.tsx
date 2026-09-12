import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="pt-[120px] bg-[#EFECE6]">
      <div
        className="grid min-h-[720px] items-center bg-[#EFECE6]"
        style={{ gridTemplateColumns: "456px 1fr 160px" }}
      >
        {/* Left – Padded Family Image */}
        <div className="pl-0 pr-[60px] pb-[60px] pt-0 flex items-end justify-center h-full">
          <div className="relative w-full h-[580px] overflow-hidden">
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
        <div className="flex flex-col justify-center py-[80px] pr-[40px]">
          <p className="font-sans text-[13px] text-[#2C3A36] tracking-[0.18em] uppercase mb-10 font-medium">
            ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA
          </p>

          <h1 className="font-serif text-[52px] font-light text-[#2C3A36] leading-[1.2] mb-8">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <span className="font-script text-[#62929A] italic text-[64px] inline-block ml-1">
              thrive.
            </span>
          </h1>

          <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8] mb-10 max-w-md">
            Specialized therapy for adults, couples, teens, and children to
            reflect, heal, and grow.
          </p>

          <div>
            <a
              href="#contact"
              className="inline-block font-sans text-[12px] tracking-[0.18em] uppercase text-[#2C3A36] border-b border-[#2C3A36] pb-1 hover:text-[#62929A] hover:border-[#62929A] transition-colors"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>

        {/* Right – Peeking Ocean Image Slice (exact 160px) */}
        <div className="relative h-[580px] w-[160px] overflow-hidden self-end">
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
