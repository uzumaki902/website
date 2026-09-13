const specialties = [
  {
    title: "Trauma",
    description:
      "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay \"stuck,\" and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.",
    link: "#contact",
  },
  {
    title: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    link: "#contact",
  },
  {
    title: "Dissociation",
    description:
      "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we'll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
    link: "#contact",
  },
  {
    title: "Special Needs Parenting",
    description:
      "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
    link: "#contact",
  },
];

export default function SpecialtiesSection() {
  return (
    <section id="specialties-cards" className="bg-[#F7F5F0] py-14 md:py-20 lg:py-[120px] px-6 md:px-10 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto">

        {/* ── MOBILE / TABLET: heading then stacked cards ── */}
        <div className="lg:hidden">
          <h2 className="font-serif text-[32px] md:text-[38px] font-light text-[#2C3A36] leading-tight mb-10">
            Our{" "}
            <span className="font-script text-[#62929A] italic text-[40px] md:text-[48px] inline-block mx-1">
              specialties
            </span>{" "}
            include...
          </h2>
          <div className="flex flex-col gap-10">
            {specialties.map((item) => (
              <div key={item.title} className="flex flex-col pb-8 border-b border-[#E0D9CC] last:border-0">
                <h3 className="font-serif text-[26px] font-light text-[#2C3A36] mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8] mb-5">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="inline-block font-sans text-[12px] tracking-[0.18em] uppercase text-[#7A6E63] border-b border-[#7A6E63] pb-1 hover:text-[#62929A] hover:border-[#62929A] transition-colors w-fit"
                >
                  LEARN MORE
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: left heading + right 2x2 grid ── */}
        <div
          className="hidden lg:grid gap-16 items-start"
          style={{ gridTemplateColumns: "360px 1fr" }}
        >
          <div className="pt-2">
            <h2 className="font-serif text-[42px] font-light text-[#2C3A36] leading-tight">
              Our{" "}
              <span className="font-script text-[#62929A] italic text-[52px] inline-block mx-1">
                specialties
              </span>{" "}
              include...
            </h2>
          </div>
          <div
            className="grid gap-x-12 gap-y-12"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            {specialties.map((item) => (
              <div key={item.title} className="flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-[28px] font-light text-[#2C3A36] mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.8] mb-8">
                    {item.description}
                  </p>
                </div>
                <div>
                  <a
                    href={item.link}
                    className="inline-block font-sans text-[12px] tracking-[0.18em] uppercase text-[#7A6E63] border-b border-[#7A6E63] pb-1 hover:text-[#62929A] hover:border-[#62929A] transition-colors"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
