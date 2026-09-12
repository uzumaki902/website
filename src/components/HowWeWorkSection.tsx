import Image from "next/image";
import Link from "next/link";

export default function HowWeWorkSection() {
  return (
    <section className="relative bg-sand-light">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] min-h-[600px]">
        {/* Left Text Content */}
        <div className="px-8 md:px-16 lg:px-20 py-16 md:py-24">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-teal mb-10">
            HOW WE WORK
          </p>
          <h2 className="font-serif text-3xl md:text-[44px] font-light text-charcoal leading-[1.15] mb-12 max-w-2xl">
            We&apos;re here to make a difference.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
            <div>
              <p className="font-sans text-xs md:text-[13px] tracking-[0.15em] uppercase text-charcoal font-bold leading-[1.8] mb-5">
                THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT ONCE,
                IT&apos;S OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
              </p>
              <p className="font-sans text-sm md:text-[15px] text-brown-light leading-[1.9]">
                Here, your needs are always top priority. Our team takes the time
                to deeply listen to our clients in order to truly understand their
                story and their struggles. We recognize that no two people are the
                same and that personalized therapy means an intentional, tailored
                approach. (You won&apos;t find anything &ldquo;one-size-fits-all&rdquo;
                here.) If you&apos;re ready to do the work, we&apos;re ready to
                help.
              </p>
            </div>
            <div>
              <p className="font-sans text-sm md:text-[15px] text-brown-light leading-[1.9]">
                Sometimes we may gently challenge you to look at things differently
                and other times we may explore your emotions, all while encouraging
                you to practice what you&apos;ve learned in your daily life. We
                take what we do seriously because we know how important it is for
                you to heal from what&apos;s hurting you, discover a fulfilling
                life, and build meaningful relationships. Our goal is to walk
                alongside you in this journey, offering support and guidance as you
                uncover your strengths and embrace what the future can hold for
                you.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <Link href="#" className="font-sans text-xs md:text-sm tracking-[0.15em] uppercase text-charcoal border-b border-charcoal pb-1 hover:text-teal hover:border-teal transition-colors">
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>

        {/* Right Tall Image */}
        <div className="relative min-h-[400px] lg:min-h-0">
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
