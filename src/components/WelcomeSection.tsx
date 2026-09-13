import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section id="about" className="relative bg-[#EFECE6]">

      {/* ── MOBILE / TABLET: stacked single column ── */}
      <div className="lg:hidden px-6 md:px-10 pt-12 md:pt-16 pb-0">
        <h2 className="font-serif text-[32px] md:text-[38px] font-light text-[#2C3A36] leading-[1.2] mb-8">
          You&apos;re holding onto hope that life can be better than it is right now.
        </h2>
        <div className="flex flex-col gap-6 mb-10">
          <div>
            <p className="font-sans text-[12px] text-[#2C3A36] tracking-[0.15em] uppercase font-semibold mb-3 leading-relaxed">
              AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
            </p>
            <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8]">
              Whether you&apos;re an adult seeking personal growth, looking to work through your trauma,
              a couple working on your relationship, or a parent looking for support for your child,
              we provide a compassionate and safe space to help you navigate all of life&apos;s ups and downs.
            </p>
          </div>
        </div>
        {/* Image between paragraphs (as on original mobile) */}
        <div className="relative w-full h-[280px] md:h-[360px] overflow-hidden mb-10">
          <Image
            src="/images/ocean-shore.jpg"
            alt="Soft ocean waves washing onto sand"
            fill
            className="object-cover object-center"
          />
        </div>
        <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8] pb-12 md:pb-16">
          First and foremost, we believe what you&apos;re going through is real, valid, and worthy
          of support. Our team offers clients in the Newbury Park area and across CA an environment
          to discover a new life and a deeper sense of self in the midst of their struggles. As we
          tap into the power of connection and understanding, you can find your footing again and
          take a transformative path forward.
        </p>
      </div>

      {/* ── DESKTOP: 2-column grid ── */}
      <div
        className="hidden lg:grid min-h-[640px] items-stretch"
        style={{ gridTemplateColumns: "1fr 440px" }}
      >
        {/* Left – Text Copy */}
        <div className="flex flex-col justify-center px-[80px] py-[120px]">
          <h2 className="font-serif text-[42px] font-light text-[#2C3A36] leading-[1.2] max-w-2xl mb-16">
            You&apos;re holding onto hope that life can be better than it is right now.
          </h2>
          <div className="grid gap-[48px] max-w-3xl" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <p className="font-sans text-[13px] text-[#2C3A36] tracking-[0.15em] uppercase font-semibold mb-4 leading-relaxed">
                AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
              </p>
              <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8]">
                Whether you&apos;re an adult seeking personal growth, looking to work through your
                trauma, a couple working on your relationship, or a parent looking for support for
                your child, we provide a compassionate and safe space to help you navigate all of
                life&apos;s ups and downs.
              </p>
            </div>
            <div>
              <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8]">
                First and foremost, we believe what you&apos;re going through is real, valid, and
                worthy of support. Our team offers clients in the Newbury Park area and across CA an
                environment to discover a new life and a deeper sense of self in the midst of their
                struggles. As we tap into the power of connection and understanding, you can find
                your footing again and take a transformative path forward.
              </p>
            </div>
          </div>
        </div>

        {/* Right – Tall Image with top gap to separate from hero strip */}
        <div className="relative w-full pt-[60px]">
          <div className="relative w-full h-full min-h-[580px] overflow-hidden">
            <Image
              src="/images/ocean-shore.jpg"
              alt="Soft ocean waves washing onto sand"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
