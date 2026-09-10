import Image from "next/image";

export default function CtaSection() {
  return (
    <section id="contact" className="relative bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_180px] min-h-[550px]">
        {/* Left Image */}
        <div className="relative hidden lg:block">
          <Image
            src="/images/hand-sand.jpg"
            alt="Hand touching sand on beach"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-24">
          <h2 className="font-serif text-3xl md:text-[44px] font-light text-charcoal leading-[1.2] mb-8 max-w-lg">
            Find a therapist who is the right fit for{" "}
            <span className="font-script text-teal">you</span>.
          </h2>
          <p className="font-sans text-sm md:text-[15px] text-brown-light leading-[1.9] mb-6 max-w-xl">
            Coming to therapy is a courageous decision, and connecting with the
            right kind of therapist makes all the difference. We understand that
            your journey is personal, and we&apos;re here to support you with
            care and understanding every step of the way. Each member of our team
            brings dedicated expertise and a commitment to support you in your
            struggles. We want you to feel prioritized, understood, and
            empowered.
          </p>
          <p className="font-sans text-sm md:text-[15px] text-brown-light leading-[1.9] mb-10">
            Click the button below to schedule an appointment.
          </p>
          <a
            href="#"
            className="inline-block w-fit border border-charcoal text-charcoal font-sans text-xs tracking-[0.2em] uppercase px-8 py-3 rounded-full hover:bg-charcoal hover:text-white transition-colors"
          >
            BOOK NOW
          </a>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:block">
          <Image
            src="/images/hand-sand.jpg"
            alt="Close-up of person on beach"
            fill
            className="object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
}
