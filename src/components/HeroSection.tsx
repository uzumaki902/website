import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="pt-[80px] md:pt-[100px] lg:pt-[120px] bg-[#F9F8F6]">
      {/* Mobile/Tablet Layout (Below lg) */}
      <div className="lg:hidden">
        <div className="px-6 md:px-10 py-16 md:py-24">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#1E1D1C] mb-6">
            YOU LOOK LIKE<br />YOU&apos;RE DOING FINE.
          </h1>
          <p className="font-sans text-[12px] md:text-[14px] text-[#8C857B] tracking-[0.15em] uppercase max-w-sm">
            But living well is different from simply keeping up.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block border border-[#1E1D1C] text-[#1E1D1C] text-[12px] tracking-[0.15em] px-8 py-4 rounded-[2px] hover:bg-[#1E1D1C] hover:text-[#F9F8F6] transition-colors uppercase"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
        
        <div className="relative w-full h-[60vh] md:h-[70vh]">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Abstract light through a concrete corridor"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="h-8 bg-[#C25E30] w-full" />
      </div>

      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:grid grid-cols-12 min-h-[700px] xl:min-h-[800px]">
        {/* Left Image - 5 columns */}
        <div className="col-span-5 relative h-full bg-[#E5E2DC] p-12 pb-0">
           <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Abstract light through a concrete corridor"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Center Content - 6 columns */}
        <div className="col-span-6 flex flex-col justify-center px-16 xl:px-24 h-full relative z-10">
          <h1 className="font-serif text-[64px] xl:text-[80px] leading-[1.05] text-[#1E1D1C] mb-8">
            YOU LOOK LIKE<br />YOU&apos;RE DOING FINE.
          </h1>
          <p className="font-sans text-[13px] text-[#8C857B] tracking-[0.2em] uppercase max-w-md">
            But living well is different from simply keeping up.
          </p>
          <div className="mt-16">
            <a
              href="#contact"
              className="inline-block border border-[#1E1D1C] text-[#1E1D1C] text-[13px] tracking-[0.15em] px-10 py-4 rounded-[2px] hover:bg-[#1E1D1C] hover:text-[#F9F8F6] transition-colors uppercase"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>

        {/* Right Accent - 1 column */}
        <div className="col-span-1 bg-[#C25E30] h-full" />
      </div>
    </section>
  );
}
