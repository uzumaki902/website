import Image from "next/image";

export default function CtaSection() {
  return (
    <section id="contact" className="relative bg-[#EDE8DE] overflow-hidden">

      {/* ── MOBILE / TABLET: single column, no side images ── */}
      <div className="lg:hidden px-6 md:px-10 py-14 md:py-20">
        {/* Hero image on mobile */}
        <div className="relative w-full h-[280px] md:h-[360px] overflow-hidden mb-10">
          <Image
            src="/images/hand-sand.jpg"
            alt="Parent and child on beach"
            fill
            className="object-cover object-center"
          />
        </div>
        <p className="font-sans text-[12px] text-[#2C3A36] tracking-[0.18em] uppercase mb-6 font-medium">
          SCHEDULE AN APPOINTMENT
        </p>
        <h2 className="font-serif text-[32px] md:text-[38px] font-light text-[#2C3A36] leading-[1.25] mb-6">
          Find a therapist who is the right fit for{" "}
          <span className="font-script text-[#62929A] italic text-[40px] md:text-[48px] inline-block ml-1">
            you
          </span>
          .
        </h2>
        <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8] mb-5">
          Coming to therapy is a courageous decision, and connecting with the right kind of therapist
          makes all the difference. We understand that your journey is personal, and we&apos;re here
          to support you with care and understanding every step of the way. Each member of our team
          brings dedicated expertise and a commitment to support you in your struggles. We want you
          to feel prioritized, understood, and empowered.
        </p>
        <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8] mb-8">
          Click the button below to schedule an appointment.
        </p>
        <a
          href="#"
          className="inline-block border border-[#2C3A36] text-[#2C3A36] font-sans text-[12px] tracking-[0.2em] uppercase px-8 py-[14px] rounded-[50px] hover:bg-[#2C3A36] hover:text-white transition-colors"
        >
          BOOK NOW
        </a>
      </div>

      {/* ── DESKTOP: 3-column grid with flanking images ── */}
      <div
        className="hidden lg:grid min-h-[640px] items-center"
        style={{ gridTemplateColumns: "220px 1fr 480px" }}
      >
        {/* Left – Small Inset Image */}
        <div className="pl-[40px] pr-0 py-[80px] h-full flex items-center">
          <div className="relative w-full h-[380px] overflow-hidden">
            <Image
              src="/images/hand-sand.jpg"
              alt="Hand touching shells in beach sand"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Center – Text Content */}
        <div className="flex flex-col justify-center px-[60px] py-[120px]">
          <p className="font-sans text-[13px] text-[#2C3A36] tracking-[0.18em] uppercase mb-8 font-medium">
            SCHEDULE AN APPOINTMENT
          </p>
          <h2 className="font-serif text-[42px] font-light text-[#2C3A36] leading-[1.25] mb-8 max-w-lg">
            Find a therapist who is the right fit for{" "}
            <span className="font-script text-[#62929A] italic text-[52px] inline-block ml-1">
              you
            </span>
            .
          </h2>
          <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8] mb-6 max-w-lg">
            Coming to therapy is a courageous decision, and connecting with the right kind of
            therapist makes all the difference. We understand that your journey is personal, and
            we&apos;re here to support you with care and understanding every step of the way. Each
            member of our team brings dedicated expertise and a commitment to support you in your
            struggles. We want you to feel prioritized, understood, and empowered.
          </p>
          <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8] mb-10">
            Click the button below to schedule an appointment.
          </p>
          <div>
            <a
              href="#"
              className="inline-block border border-[#2C3A36] text-[#2C3A36] font-sans text-[12px] tracking-[0.2em] uppercase px-9 py-[14px] rounded-[50px] hover:bg-[#2C3A36] hover:text-white transition-colors"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        {/* Right – Full Height Image, flush to right edge */}
        <div className="relative h-full min-h-[640px] overflow-hidden">
          <Image
            src="/images/hand-sand.jpg"
            alt="Parent and child on beach pointing at shells"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
