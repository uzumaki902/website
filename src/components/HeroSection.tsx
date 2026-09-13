import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#f7f5f2]">
      {/* ---------- Header ---------- */}
      <header className="flex items-center justify-between px-10 py-6">
        <div>
          <h1 className="font-serif text-2xl tracking-wide text-neutral-900">
            MAYA REYNOLDS
          </h1>
          <p className="mt-1 text-[11px] tracking-[0.2em] text-neutral-500">
            LICENSED CLINICAL PSYCHOLOGIST
          </p>
        </div>

        <nav className="flex items-center gap-10">
          <ul className="flex items-center gap-8 text-[12px] tracking-[0.15em] text-neutral-800">
            <li className="cursor-pointer hover:text-neutral-500">ABOUT</li>
            <li className="cursor-pointer hover:text-neutral-500">SPECIALTIES</li>
            <li className="cursor-pointer hover:text-neutral-500">APPROACH</li>
            <li className="cursor-pointer hover:text-neutral-500">FAQS</li>
          </ul>
          <button className="border border-neutral-800 px-6 py-3 text-[12px] tracking-[0.15em] text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors">
            CONTACT
          </button>
        </nav>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center px-10 pb-10">
        {/* Left: text content */}
        <div className="max-w-xl">
          <div className="mb-6">
            <span className="block h-[2px] w-8 bg-orange-700 mb-3" />
            <p className="text-[12px] tracking-[0.15em] text-neutral-500 leading-relaxed">
              IT LOOKS DIFFERENT
              <br />
              ON THE INSIDE.
            </p>
          </div>

          <h2 className="font-serif text-6xl leading-[1.1] text-neutral-900">
            YOU LOOK LIKE
            <br />
            YOU&apos;RE DOING FINE.
            <br />
            <span className="text-orange-700">ARE YOU?</span>
          </h2>

          <p className="mt-8 text-[13px] tracking-[0.08em] text-neutral-500 leading-relaxed max-w-md">
            FOR HIGH-ACHIEVING ADULTS READY TO MOVE
            <br />
            BEYOND SIMPLY KEEPING UP.
          </p>

          <button className="mt-10 flex items-center gap-3 border border-neutral-800 px-7 py-4 text-[12px] tracking-[0.15em] text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors">
            SCHEDULE A CONSULTATION
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Right: split image */}
        <div className="relative mt-12 lg:mt-0 h-[500px] lg:h-[700px] w-full grid grid-cols-2">
          {/* Left photo: crowd */}
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/crowd-hero.jpg"
              alt="Person in a crowd"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-10 left-6 flex items-start gap-3">
              <span className="block h-14 w-[2px] bg-white/70" />
              <p className="text-[11px] tracking-[0.1em] text-white leading-relaxed max-w-[110px]">
                HIGH FUNCTIONING DOESN&apos;T ALWAYS MEAN DOING WELL.
              </p>
            </div>
          </div>

          {/* Right photo: Maya Reynolds */}
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/maya-reynolds.jpg"
              alt="Dr. Maya Reynolds"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-8 right-6 text-right">
              <p className="text-[11px] tracking-[0.1em] text-white font-medium">
                DR. MAYA REYNOLDS, PSYD
              </p>
              <p className="mt-1 text-[11px] tracking-[0.1em] text-white/80 leading-relaxed">
                LICENSED CLINICAL
                <br />
                PSYCHOLOGIST
              </p>
            </div>

            <div className="absolute bottom-10 right-6 flex items-start gap-3">
              <span className="block h-14 w-[2px] bg-black/70" />
              <p className="text-[11px] tracking-[0.1em] text-black leading-relaxed">
                CLARITY
                <br />
                PERSPECTIVE
                <br />
                LASTING CHANGE
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}