import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 md:pt-24 bg-off-white">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_100px] min-h-[calc(100vh-96px)] items-center">
        {/* Left – Padded Inset Family Image */}
        <div className="p-6 md:p-10 lg:pl-16 lg:py-12 lg:pr-8 flex items-center justify-center h-full">
          <div className="relative w-full h-[450px] md:h-[550px] lg:h-[620px] overflow-hidden">
            <Image
              src="/images/hero-family.jpg"
              alt="Family walking on beach at sunset"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Right – Clean Text & Copy (Solid Off-White Background) */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 md:py-16 bg-off-white">
          <p className="font-sans text-xs md:text-sm text-brown-light tracking-[0.25em] uppercase mb-8 md:mb-12 font-medium">
            ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA
          </p>

          <h1 className="font-serif text-[38px] md:text-[50px] lg:text-[58px] font-light text-charcoal leading-[1.18] mb-8">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <span className="font-script text-teal italic text-[46px] md:text-[62px] lg:text-[70px] inline-block ml-1">
              thrive.
            </span>
          </h1>

          <p className="font-sans text-base md:text-lg text-brown-light leading-relaxed mb-10 max-w-md">
            Specialized therapy for adults, couples, teens, and children to
            reflect, heal, and grow.
          </p>

          <div>
            <a
              href="#contact"
              className="inline-block font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-charcoal border-b border-charcoal pb-1 hover:text-teal hover:border-teal transition-colors"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>

        {/* Far Right Edge – Peeking Ocean Image Slice */}
        <div className="hidden lg:block relative h-[580px] w-full overflow-hidden my-auto">
          <Image
            src="/images/ocean-shore.jpg"
            alt="Ocean shore preview"
            fill
            className="object-cover object-left opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
