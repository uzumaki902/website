import Image from "next/image";

export default function HonoringSection() {
  return (
    <section className="py-[120px] lg:py-[160px] bg-[#F9F8F6]">
      <div className="px-6 md:px-10 lg:px-[80px] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Image - 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] relative w-full">
              <Image
                src="https://images.unsplash.com/photo-1541888045610-18e4726e632b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Architectural doorway leading toward light"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Text Content - 6 columns */}
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-sans text-[11px] text-[#8C857B] tracking-[0.25em] uppercase mb-6">
              The Work
            </h2>
            <h3 className="font-serif text-[42px] md:text-[52px] leading-[1.1] text-[#1E1D1C] mb-8">
              Paced, Structured Healing
            </h3>
            <div className="space-y-6 font-sans text-[15px] md:text-[17px] text-[#3A3632] leading-relaxed">
              <p>
                Many high achievers avoid therapy because they fear it will be a chaotic unpacking of the past that leaves them unable to function in the present.
              </p>
              <p>
                The work we do is different. It is highly structured and carefully paced. We begin with stabilization—building practical tools to regulate your nervous system so you can feel grounded right now.
              </p>
              <p>
                Only when you feel secure do we move into deeper, depth-oriented processing. You remain in control of the pace at all times.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
