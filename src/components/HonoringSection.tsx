import Image from "next/image";

export default function HonoringSection() {
  return (
    <section className="bg-[#F7F5F0] overflow-hidden p-0 m-0">
      <div
        className="grid min-h-[620px]"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {/* Left – Full-bleed Image, flush to left edge */}
        <div className="relative w-full min-h-[620px] overflow-hidden">
          <Image
            src="/images/honoring-family.png"
            alt="Family of four standing in shallow ocean water looking out at the sea"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right – Statement Heading */}
        <div className="flex flex-col justify-center px-[80px] py-[120px] bg-[#F7F5F0]">
          <h2 className="font-serif text-[42px] font-light text-[#2C3A36] leading-[1.25] max-w-lg">
            Honoring where you&apos;ve been{" "}
            <span className="font-script text-[#62929A] italic text-[52px] inline-block mx-1">
              &amp;
            </span>{" "}
            helping shape where you&apos;re headed.
          </h2>
        </div>
      </div>
    </section>
  );
}
