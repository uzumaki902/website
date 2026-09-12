import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full min-h-[360px] md:min-h-[440px] lg:min-h-[520px] flex items-center overflow-hidden">
      <Image
        src="/images/children.jpg"
        alt="Children running on beach sand"
        fill
        className="object-cover object-center select-none"
        priority
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 px-6 md:px-10 lg:px-[80px] py-12 md:py-16 lg:py-[80px] max-w-4xl">
        <blockquote className="font-serif text-[26px] md:text-[34px] lg:text-[42px] font-light text-white leading-[1.35] tracking-wide">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <span className="italic font-light">
            Nothing will be too heavy for us to carry together.
          </span>
        </blockquote>
      </div>
    </section>
  );
}
