import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full min-h-[380px] md:min-h-[460px] lg:min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/children.jpg"
        alt="Children running on beach sand"
        fill
        className="object-cover object-center select-none"
        priority
      />

      {/* Dark Overlay for High Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Single Clean Text Container */}
      <div className="relative z-10 max-w-4xl px-8 md:px-16 lg:px-24 py-16">
        <blockquote className="font-serif text-[26px] md:text-[36px] lg:text-[42px] font-light text-white leading-[1.35] tracking-wide drop-shadow-none">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <span className="italic font-light">
            Nothing will be too heavy for us to carry together.
          </span>
        </blockquote>
      </div>
    </section>
  );
}
