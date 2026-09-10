import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section id="about" className="relative bg-[#F9F6F0] py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] min-h-[550px] items-stretch">
        {/* Left – Text Copy */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-8 lg:py-12">
          {/* Main Serif Heading */}
          <h2 className="font-serif text-[32px] md:text-[44px] lg:text-[50px] font-light text-[#3D3530] leading-[1.2] max-w-2xl mb-12 md:mb-16">
            You’re holding onto hope that life can be better than it is right
            now.
          </h2>

          {/* Two Paragraph Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl">
            {/* Column 1 */}
            <div>
              <p className="font-sans text-xs md:text-sm text-[#7A6E63] tracking-[0.15em] uppercase font-semibold mb-4 leading-relaxed">
                AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A
                REALITY.
              </p>
              <p className="font-sans text-sm md:text-[15px] text-[#7A6E63] leading-[1.8]">
                Whether you&apos;re an adult seeking personal growth, looking to
                work through your trauma, a couple working on your
                relationship, or a parent looking for support for your child,
                we provide a compassionate and safe space to help you navigate
                all of life&apos;s ups and downs.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <p className="font-sans text-sm md:text-[15px] text-[#7A6E63] leading-[1.8]">
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

        {/* Right – Tall Beach Ocean Shore Image */}
        <div className="relative min-h-[400px] lg:min-h-full w-full">
          <Image
            src="/images/ocean-shore.jpg"
            alt="Soft ocean waves washing onto sand"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
