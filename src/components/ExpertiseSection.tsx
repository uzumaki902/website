const expertiseLeft = [
  "DISSOCIATION",
  "TRAUMA",
  "FAMILY CONFLICT",
  "SPECIAL NEEDS PARENTING",
  "DEPRESSION",
  "MARRIAGE",
];

const expertiseRight = [
  "ANXIETY",
  "RELATIONSHIPS",
  "CHILDREN",
  "TEENS",
  "INTIMACY & CONNECTION",
  "...AND MORE.",
];

export default function ExpertiseSection() {
  return (
    <section id="specialties" className="bg-[#F7F5F0] py-14 md:py-20 lg:py-[120px] px-6 md:px-10 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto">

        {/* ── MOBILE / TABLET: stacked single column ── */}
        <div className="lg:hidden">
          <h2 className="font-serif text-[32px] md:text-[38px] font-light text-[#2C3A36] leading-tight mb-10">
            Our areas of{" "}
            <span className="font-script text-[#62929A] italic text-[40px] md:text-[48px] inline-block ml-1">
              expertise
            </span>
          </h2>
          <div className="flex flex-col">
            {[...expertiseLeft, ...expertiseRight].map((item) => (
              <div key={item} className="py-4 border-b border-[#E0D9CC]">
                <span className="font-sans text-[13px] tracking-[0.22em] uppercase text-[#7A6E63] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: 3-column grid ── */}
        <div
          className="hidden lg:grid gap-16 items-start"
          style={{ gridTemplateColumns: "320px 1fr 1fr" }}
        >
          <div className="pt-2">
            <h2 className="font-serif text-[42px] font-light text-[#2C3A36] leading-tight">
              Our areas of{" "}
              <span className="font-script text-[#62929A] italic text-[52px] inline-block ml-1">
                expertise
              </span>
            </h2>
          </div>
          <div className="flex flex-col">
            {expertiseLeft.map((item) => (
              <div key={item} className="py-5 border-b border-[#E0D9CC]">
                <span className="font-sans text-[13px] tracking-[0.22em] uppercase text-[#7A6E63] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {expertiseRight.map((item) => (
              <div key={item} className="py-5 border-b border-[#E0D9CC]">
                <span className="font-sans text-[13px] tracking-[0.22em] uppercase text-[#7A6E63] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
