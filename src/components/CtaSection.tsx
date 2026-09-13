import Image from "next/image";

export default function CtaSection() {
  return (
    <section id="contact" className="py-[120px] lg:py-[180px] bg-[#F9F8F6]">
      <div className="px-6 md:px-10 lg:px-[80px] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-12 items-center">
          
          {/* Left Small Image - 3 columns */}
          <div className="md:col-span-3 hidden md:block">
            <div className="aspect-[4/5] relative w-full opacity-90">
              <Image
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Close up of an open journal and pen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 0vw, 25vw"
              />
            </div>
          </div>

          {/* Center Content - 6 columns */}
          <div className="md:col-span-6 flex flex-col items-center text-center px-4">
            <h2 className="font-serif text-[48px] md:text-[64px] lg:text-[80px] leading-[1] text-[#1E1D1C] mb-8">
              THE DOOR<br />IS OPEN.
            </h2>
            <p className="font-sans text-[14px] md:text-[15px] text-[#3A3632] mb-12 max-w-md">
              You do not have to carry the weight alone. Reach out to schedule a confidential consultation.
            </p>
            <a
              href="mailto:contact@mayareynolds.com"
              className="inline-block bg-[#1E1D1C] text-[#F9F8F6] font-sans text-[13px] tracking-[0.15em] px-12 py-5 rounded-[2px] hover:bg-[#C25E30] transition-colors uppercase"
            >
              Request a Consultation
            </a>
          </div>

          {/* Right Tall Image - 3 columns */}
          <div className="md:col-span-3 hidden md:block">
            <div className="aspect-[3/4] relative w-full opacity-90">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Architectural details of a calm space"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 0vw, 25vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
