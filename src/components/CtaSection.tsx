import Image from "next/image";

export default function CtaSection() {
  return (
    <section id="contact" className="relative bg-white py-16 md:py-24 overflow-hidden border-none">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_450px] xl:grid-cols-[260px_1fr_520px] items-center min-h-[580px]">
        {/* Left Inset Image */}
        <div className="hidden lg:block relative h-[380px] w-full pl-8 pr-4 my-auto">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/hand-sand.jpg"
              alt="Hand touching shells in beach sand"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-14 py-12">
          {/* Eyebrow */}
          <p className="font-sans text-xs text-[#7A6E63] tracking-[0.25em] uppercase mb-8 font-medium">
            SCHEDULE AN APPOINTMENT
          </p>

          {/* Title */}
          <h2 className="font-serif text-[32px] md:text-[42px] lg:text-[46px] font-light text-[#3D3530] leading-[1.25] mb-8 max-w-lg">
            Find a therapist who is the right fit for{" "}
            <span className="font-script text-[#7A9E9F] italic text-4xl md:text-[52px] lg:text-[58px] inline-block ml-1">
              you
            </span>
            .
          </h2>

          {/* Paragraph 1 */}
          <p className="font-sans text-xs md:text-sm text-[#7A6E63] leading-[1.8] mb-6 max-w-lg">
            Coming to therapy is a courageous decision, and connecting with the
            right kind of therapist makes all the difference. We understand that
            your journey is personal, and we&apos;re here to support you with
            care and understanding every step of the way. Each member of our team
            brings dedicated expertise and a commitment to support you in your
            struggles. We want you to feel prioritized, understood, and
            empowered.
          </p>

          {/* Paragraph 2 */}
          <p className="font-sans text-xs md:text-sm text-[#7A6E63] leading-[1.8] mb-10">
            Click the button below to schedule an appointment.
          </p>

          {/* Oval Button */}
          <div>
            <a
              href="#"
              className="inline-block border border-[#3D3530] text-[#3D3530] font-sans text-xs tracking-[0.2em] uppercase px-8 py-3 rounded-full hover:bg-[#3D3530] hover:text-white transition-colors"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        {/* Right Full Height Image */}
        <div className="hidden lg:block relative h-[520px] w-full overflow-hidden">
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
