import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section id="about" className="relative bg-[#EFECE6]">
      <div
        className="grid min-h-[640px] items-stretch"
        style={{ gridTemplateColumns: "1fr 440px" }}
      >
        {/* Left – Text Copy */}
        <div className="flex flex-col justify-center px-[80px] py-[120px]">
          {/* Main Serif Heading */}
          <h2 className="font-serif text-[42px] font-light text-[#2C3A36] leading-[1.2] max-w-2xl mb-16">
            You&apos;re holding onto hope that life can be better than it is
            right now.
          </h2>

          {/* Two Paragraph Columns */}
          <div
            className="grid gap-[48px] max-w-3xl"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            {/* Column 1 */}
            <div>
              <p className="font-sans text-[13px] text-[#2C3A36] tracking-[0.15em] uppercase font-semibold mb-4 leading-relaxed">
                AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A
                REALITY.
              </p>
              <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8]">
                Whether you&apos;re an adult seeking personal growth, looking to
                work through your trauma, a couple working on your relationship,
                or a parent looking for support for your child, we provide a
                compassionate and safe space to help you navigate all of
                life&apos;s ups and downs.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8]">
                First and foremost, we believe what you&apos;re going through is
                real, valid, and worthy of support. Our team offers clients in
                the Newbury Park area and across CA an environment to discover a
                new life and a deeper sense of self in the midst of their
                struggles. As we tap into the power of connection and
                understanding, you can find your footing again and take a
                transformative path forward.
              </p>
            </div>
          </div>
        </div>

        {/* Right – Tall Image with top gap to separate from hero strip above */}
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
