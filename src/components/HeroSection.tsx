import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 md:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-96px)]">
        {/* Left – Family Image */}
        <div className="relative min-h-[50vh] md:min-h-0">
          <Image
            src="/images/hero-family.jpg"
            alt="Family walking on beach at sunset"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right – Copy + Beach Background */}
        <div className="relative flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-0 bg-off-white overflow-hidden">
          {/* Faint beach image behind text */}
          <Image
            src="/images/ocean-shore.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-15"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <p className="font-sans text-xs md:text-sm text-teal tracking-[0.25em] uppercase mb-10 md:mb-14">
              ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA
            </p>

            <h1 className="font-serif text-[40px] md:text-[52px] lg:text-[60px] font-light text-charcoal leading-[1.15] mb-8">
              Rebuild your foundation on solid ground and finally begin to{" "}
              <span className="font-script text-teal italic">thrive</span>.
            </h1>

            <p className="font-sans text-base md:text-lg text-brown-light leading-relaxed mb-10 max-w-lg">
              Specialized therapy for adults, couples, teens, and children to
              reflect, heal, and grow.
            </p>

            <a
              href="#contact"
              className="inline-block font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-charcoal border-b-2 border-charcoal pb-1 hover:text-teal hover:border-teal transition-colors"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
