import Image from "next/image";
import Link from "next/link";

export default function HowWeWorkSection() {
  return (
    <section className="relative bg-[#DDD7C6]">

      {/* ── MOBILE / TABLET: text first, then image ── */}
      <div className="lg:hidden px-6 md:px-10 py-14 md:py-20">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#62929A] mb-6">
          HOW WE WORK
        </p>
        <h2 className="font-serif text-[32px] md:text-[38px] font-light text-[#2C3A36] leading-[1.15] mb-8">
          We&apos;re here to make a difference.
        </h2>
        <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#2C3A36] font-bold leading-[1.8] mb-4">
          THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT ONCE,
          IT&apos;S OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
        </p>
        <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.9] mb-6">
          Here, your needs are always top priority. Our team takes the time to deeply listen to our
          clients in order to truly understand their story and their struggles. We recognize that no
          two people are the same and that personalized therapy means an intentional, tailored
          approach. (You won&apos;t find anything &ldquo;one-size-fits-all&rdquo; here.) If
          you&apos;re ready to do the work, we&apos;re ready to help.
        </p>
        <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.9] mb-8">
          Sometimes we may gently challenge you to look at things differently and other times we may
          explore your emotions, all while encouraging you to practice what you&apos;ve learned in
          your daily life. We take what we do seriously because we know how important it is for you
          to heal from what&apos;s hurting you, discover a fulfilling life, and build meaningful
          relationships. Our goal is to walk alongside you in this journey, offering support and
          guidance as you uncover your strengths and embrace what the future can hold for you.
        </p>
        <Link
          href="#"
          className="font-sans text-[12px] tracking-[0.18em] uppercase text-[#2C3A36] border-b border-[#2C3A36] pb-1 hover:text-[#62929A] hover:border-[#62929A] transition-colors mb-10 inline-block"
        >
          LEARN MORE ABOUT US
        </Link>
        {/* Image below text on mobile */}
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden mt-8">
          <Image
            src="/images/woman-beach.jpg"
            alt="Woman twirling on beach at golden hour"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* ── DESKTOP: 2-column grid ── */}
      <div
        className="hidden lg:grid min-h-[660px]"
        style={{ gridTemplateColumns: "1fr 360px" }}
      >
        <div className="px-[80px] py-[120px]">
          <p className="font-sans text-[12px] tracking-[0.3em] uppercase text-[#62929A] mb-10">
            HOW WE WORK
          </p>
          <h2 className="font-serif text-[42px] font-light text-[#2C3A36] leading-[1.15] mb-12 max-w-2xl">
            We&apos;re here to make a difference.
          </h2>
          <div className="grid gap-[48px] max-w-4xl" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <p className="font-sans text-[13px] tracking-[0.15em] uppercase text-[#2C3A36] font-bold leading-[1.8] mb-5">
                THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT ONCE,
                IT&apos;S OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
              </p>
              <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.9]">
                Here, your needs are always top priority. Our team takes the time to deeply listen to
                our clients in order to truly understand their story and their struggles. We recognize
                that no two people are the same and that personalized therapy means an intentional,
                tailored approach. (You won&apos;t find anything &ldquo;one-size-fits-all&rdquo;
                here.) If you&apos;re ready to do the work, we&apos;re ready to help.
              </p>
            </div>
            <div>
              <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.9]">
                Sometimes we may gently challenge you to look at things differently and other times
                we may explore your emotions, all while encouraging you to practice what
                you&apos;ve learned in your daily life. We take what we do seriously because we know
                how important it is for you to heal from what&apos;s hurting you, discover a
                fulfilling life, and build meaningful relationships. Our goal is to walk alongside
                you in this journey, offering support and guidance as you uncover your strengths and
                embrace what the future can hold for you.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <Link
              href="#"
              className="font-sans text-[12px] tracking-[0.18em] uppercase text-[#2C3A36] border-b border-[#2C3A36] pb-1 hover:text-[#62929A] hover:border-[#62929A] transition-colors"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
        <div className="relative min-h-full">
          <Image
            src="/images/woman-beach.jpg"
            alt="Woman twirling on beach at golden hour"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
