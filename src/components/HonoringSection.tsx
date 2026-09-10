import Image from "next/image";

export default function HonoringSection() {
  return (
    <section className="bg-[#FAF8F5] border-t border-[#E8E0D2] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left – Flush to Left Screen Edge Image (0px left margin/padding) */}
        <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:h-[520px] overflow-hidden">
          <Image
            src="/images/honoring-family.png"
            alt="Family of four standing in shallow ocean water looking out at the sea"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right – Statement Heading with Right Padding */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 xl:px-24 py-12 md:py-16">
          <h2 className="font-serif text-[32px] md:text-[42px] lg:text-[48px] font-light text-[#3D3530] leading-[1.25] max-w-lg">
            Honoring where you’ve been{" "}
            <span className="font-script text-[#7A9E9F] italic text-4xl md:text-[52px] lg:text-[60px] inline-block mx-1">
              &amp;
            </span>{" "}
            helping shape where you’re headed.
          </h2>
        </div>
      </div>
    </section>
  );
}
