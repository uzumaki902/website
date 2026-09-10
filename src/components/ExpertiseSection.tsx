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
    <section id="specialties" className="bg-[#FAF8F5] py-20 md:py-28 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left – Single Line Heading (Serif + Script) */}
          <div className="lg:pt-2">
            <h2 className="font-serif text-3xl md:text-[38px] font-light text-[#3D3530] leading-tight">
              Our areas of{" "}
              <span className="font-script text-[#7A9E9F] italic text-4xl md:text-[50px] inline-block ml-1">
                expertise
              </span>
            </h2>
          </div>

          {/* Middle – Left Column List */}
          <div className="flex flex-col">
            {expertiseLeft.map((item) => (
              <div
                key={item}
                className="py-4 md:py-5 border-b border-[#EBE5DB] first:border-t-0"
              >
                <span className="font-sans text-xs md:text-[13px] tracking-[0.22em] uppercase text-[#7A6E63] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Right – Right Column List */}
          <div className="flex flex-col">
            {expertiseRight.map((item) => (
              <div
                key={item}
                className="py-4 md:py-5 border-b border-[#EBE5DB] first:border-t-0"
              >
                <span className="font-sans text-xs md:text-[13px] tracking-[0.22em] uppercase text-[#7A6E63] font-medium">
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
