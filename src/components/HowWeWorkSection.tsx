import Image from "next/image";

export default function HowWeWorkSection() {
  return (
    <section className="py-[120px] lg:py-[160px] bg-[#1E1D1C]">
      <div className="px-6 md:px-10 lg:px-[80px] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait - 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] relative w-full">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Portrait of Dr. Maya Reynolds"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 border border-[#F9F8F6] translate-x-4 -translate-y-4 md:translate-x-6 md:-translate-y-6 pointer-events-none"></div>
            </div>
          </div>

          {/* Text Content - 6 columns */}
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-sans text-[11px] text-[#8C857B] tracking-[0.25em] uppercase mb-6">
              Clinical Authority
            </h2>
            <h3 className="font-serif text-[42px] md:text-[52px] leading-[1.1] text-[#F9F8F6] mb-8">
              Dr. Maya Reynolds, PsyD
            </h3>
            <div className="space-y-6 font-sans text-[15px] md:text-[17px] text-[#E5E2DC] leading-relaxed">
              <p>
                As a Licensed Clinical Psychologist based in Santa Monica, I work exclusively with high-achieving adults navigating the space between external success and internal exhaustion.
              </p>
              <p>
                Therapy with me is not passive listening. It is an intelligent, structured process designed to respect your time and capacity. We utilize evidence-based modalities—including EMDR, cognitive-behavioral, and somatic approaches—to untangle what is no longer serving you.
              </p>
              <p>
                My goal is to help you build the internal regulation required not just to perform, but to actually thrive.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
