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
    <section id="specialties" className="bg-[#F7F5F0] py-[120px] px-[80px]">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="grid gap-16 items-start"
          style={{ gridTemplateColumns: "320px 1fr 1fr" }}
        >
          {/* Left – Heading */}
          <div className="pt-2">
            <h2 className="font-serif text-[42px] font-light text-[#2C3A36] leading-tight">
              Our areas of{" "}
              <span className="font-script text-[#62929A] italic text-[52px] inline-block ml-1">
                expertise
              </span>
            </h2>
          </div>

          {/* Middle – Left Column List */}
          <div className="flex flex-col">
            {expertiseLeft.map((item) => (
              <div
                key={item}
                className="py-5 border-b border-[#E0D9CC]"
              >
                <span className="font-sans text-[13px] tracking-[0.22em] uppercase text-[#7A6E63] font-medium">
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
                className="py-5 border-b border-[#E0D9CC]"
              >
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
