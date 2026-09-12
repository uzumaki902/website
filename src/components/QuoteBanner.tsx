import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full min-h-[520px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/children.jpg"
        alt="Children running on beach sand"
        fill
        className="object-cover object-center select-none"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Quote Text */}
      <div className="relative z-10 max-w-4xl px-[80px] py-[80px]">
        <blockquote className="font-serif text-[42px] font-light text-white leading-[1.35] tracking-wide">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <span className="italic font-light">
            Nothing will be too heavy for us to carry together.
          </span>
        </blockquote>
      </div>
    </section>
  );
}
